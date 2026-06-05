import './Navbar.css'

export function Navbar() {
  return (
    <header className="navbar">
      <a className="navbar-brand" href="#home">
        Steven Salib
      </a>
      <nav aria-label="Primary">
        <ul className="navbarcontent">
          <li className="navbaritem">
            <a href="#about">About</a>
          </li>
          <li className="navbaritem">
            <a href="#experience">Experience</a>
          </li>
          <li className="navbaritem">
            <a href="#projects">Projects</a>
          </li>
          <li className="navbaritem">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
