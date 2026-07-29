const features = [
  {
    icon: '⚡',
    title: 'Lightning fast',
    body: 'Built on Vite for instant reloads and blazing production builds.',
  },
  {
    icon: '🎨',
    title: 'Beautiful by default',
    body: 'Modern, responsive design that looks great on every device.',
  },
  {
    icon: '🔒',
    title: 'Secure & reliable',
    body: 'Best practices baked in so you can focus on your product.',
  },
]

export function Features() {
  return (
    <section className="features" id="features">
      <div className="container">
        <h2 className="section__title">Everything you need to launch</h2>
        <div className="features__grid">
          {features.map((f) => (
            <article className="feature-card" key={f.title}>
              <div className="feature-card__icon" aria-hidden="true">
                {f.icon}
              </div>
              <h3 className="feature-card__title">{f.title}</h3>
              <p className="feature-card__body">{f.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
