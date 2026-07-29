export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero__inner">
        <p className="hero__eyebrow">Now in public beta</p>
        <h1 className="hero__title">
          Ship your ideas <span className="hero__accent">faster</span>
        </h1>
        <p className="hero__subtitle">
          Nimbus gives your team a beautiful, modern platform to launch landing
          pages, capture leads, and grow — without the busywork.
        </p>
        <div className="hero__actions">
          <a className="btn btn--primary" href="#signup">
            Get started free
          </a>
          <a className="btn btn--ghost" href="#features">
            See features
          </a>
        </div>
      </div>
    </section>
  )
}
