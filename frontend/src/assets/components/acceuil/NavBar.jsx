import { useState } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

function NavBar() {
  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };
  return (
    <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"} `}>
      <div className="navbar_logo">Logo</div>
      <ul className="navbar_links">
        <Link className="navbar_item" to="/dévelopement">
          <p className="navbar_link">Dévelopement </p>
        </Link>
        <Link className="navbar_item" to="/jeux_de_société">
          <p className="navbar_link">Jeux de société </p>
        </Link>
        <Link className="navbar_item" to="/multimédia">
          <p className="navbar_link">Multimédia </p>
        </Link>
        <Link className="navbar_item" to="/bibliothèque/">
          <p className="navbar_link">Bibliothèque </p>
        </Link>
        <Link className="navbar_item" to="/jeux_extérieur">
          <p className="navbar_link">Jeux et jouets d'extérieur </p>
        </Link>
        <Link className="navbar_item" to="/conexion">
          <p className="navbar_link">Se connecter </p>
        </Link>
        <Link className="navbar_item" to="/inscription">
          <p className="navbar_link">Inscription </p>
        </Link>
      </ul>
      <ul>
        <button
          type="button"
          aria-label="menu"
          className="navbar_burger"
          onClick={handleShowLinks}
        >
          <span className="burger-bar" />
        </button>
      </ul>
    </nav>
  );
}

export default NavBar;
