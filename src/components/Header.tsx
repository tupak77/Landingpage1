export function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <a className="brand" href="#top">
          <span className="brand__mark" aria-hidden="true">◆</span>
          Nimbus
        </a>
        <nav className="nav" aria-label="Primary">
          <a href="#features">Features</a>
          <a href="#signup">Get started</a>
        </nav>
      </div>
    </header>
  )
}
