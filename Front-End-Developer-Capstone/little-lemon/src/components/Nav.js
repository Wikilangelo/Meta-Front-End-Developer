import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">Chi siamo</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>
          <Link to="/booking">Prenotazioni</Link>
        </li>
        <li>
          <Link to="/order">Ordina online</Link>
        </li>
        <li>
          <Link to="/contact">Contatti</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
