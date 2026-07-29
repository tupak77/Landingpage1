import './style.css';
import { buildSignupResult } from './promo.js';

function animateStat(el, target, duration = 1200) {
  const start = performance.now();
  function frame(now) {
    const progress = Math.min((now - start) / duration, 1);
    el.textContent = Math.round(progress * target).toLocaleString('es-ES');
    if (progress < 1) requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

function initStats() {
  const stats = [
    ['stat-captures', 240],
    ['stat-ports', 12],
    ['stat-hours', 24],
  ];
  for (const [id, target] of stats) {
    const el = document.getElementById(id);
    if (el) animateStat(el, target);
  }
}

function initPromoForm() {
  const form = document.getElementById('promo-form');
  const input = document.getElementById('email');
  const message = document.getElementById('form-message');
  if (!form || !input || !message) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const result = buildSignupResult(input.value);
    message.textContent = result.message;
    message.classList.toggle('is-success', result.ok);
    message.classList.toggle('is-error', !result.ok);
    if (result.ok) form.reset();
  });
}

function initYear() {
  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
}

initStats();
initPromoForm();
initYear();
