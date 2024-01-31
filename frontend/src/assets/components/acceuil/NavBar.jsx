import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images_site/logo.png";

import "./Navbar.css";

function NavBar() {
  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };
  return (
    <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"} `}>
      <div className="navbar_logo">
        <img className="nav-logo" src={logo} alt="logo" />
      </div>
      <ul className="navbar_links">
        <Link className="navbar_item" to="/">
          <p className="navbar_link">Acceuil </p>
        </Link>
        <Link className="navbar_item" to="/developpement">
          <p className="navbar_link">Développement </p>
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
          <p className="navbar_link">Jeux extérieur </p>
        </Link>
        <Link className="navbar_item" to="/login">
          <p className="navbar_link">Login </p>
        </Link>
        <Link className="navbar_item" to="/inscription">
          <p className="navbar_link">Inscription </p>
        </Link>
        <Link className="navbar_item" to="/contact">
          <p className="navbar_link">Contact </p>
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
