// Renders motion-coffee-explainer.html to a frame-accurate 1080x1920 60fps MP4.
// Usage: npm i playwright && node scripts/export-motion-mp4.js [out.mp4]   (needs ffmpeg on PATH)
const { chromium } = require('playwright');
const { spawn } = require('child_process');
const FPS = 60, DURATION = 9000, W = 1080, H = 1920;
const path = require('path');
const out = process.argv[2] || path.join(__dirname, '..', 'motion-coffee-explainer.mp4');
const src = 'file://' + path.join(__dirname, '..', 'motion-coffee-explainer.html');
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: W, height: H }, deviceScaleFactor: 1 });
  await p.clock.install({ time: 0 });
  await p.clock.pauseAt(1000);
  // Pause every WAAPI animation at creation and drive it from the fake clock instead.
  await p.addInitScript(() => {
    const anims = [];
    const orig = Element.prototype.animate;
    Element.prototype.animate = function (...a) {
      const an = orig.apply(this, a);
      an.pause(); an.__t0 = performance.now(); an.__dead = false;
      const c = an.cancel.bind(an); an.cancel = () => { an.__dead = true; c(); };
      anims.push(an); return an;
    };
    window.__sync = () => {
      const now = performance.now();
      for (const an of anims) if (!an.__dead) an.currentTime = now - an.__t0;
    };
  });
  await p.goto(src);
  await p.evaluate(() => document.fonts.ready);
  await p.addStyleTag({ content: '.replay{display:none!important}.stage{box-shadow:none!important}' });
  await p.evaluate(() => document.documentElement.style.setProperty('--scale', '1'));
  // Restart the sequence on the frozen clock so frame 0 == t 0
  await p.evaluate(() => document.getElementById('replay').click());

  const ff = spawn('ffmpeg', ['-y', '-loglevel', 'error', '-f', 'image2pipe', '-framerate', String(FPS), '-c:v', 'png', '-i', '-',
    '-c:v', 'libx264', '-pix_fmt', 'yuv420p', '-preset', 'slow', '-crf', '16', '-movflags', '+faststart', '-r', String(FPS), out], { stdio: ['pipe', 'inherit', 'inherit'] });
  const frames = Math.round(DURATION / 1000 * FPS);
  for (let i = 0; i < frames; i++) {
    if (i > 0) await p.clock.runFor(1000 / FPS);
    await p.evaluate(() => window.__sync());
    const buf = await p.screenshot({ type: 'png', animations: 'allow' });
    if (!ff.stdin.write(buf)) await new Promise(r => ff.stdin.once('drain', r));
    if (i % 60 === 0) console.log('frame', i, '/', frames);
  }
  ff.stdin.end();
  await new Promise(r => ff.on('close', r));
  await b.close();
})();
