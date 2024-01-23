import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

function NavBar() {
  return (
    <div>
      <div className="navbar_div">
        <Link to="/dévelopement">
          <p className="nav_unit">Dévelopement </p>
        </Link>
        <Link to="/jeux_de_société">
          <p className="nav_unit">Jeux de société </p>
        </Link>
        <Link to="/multimédia">
          <p className="nav_unit">Multimédia </p>
        </Link>
        <Link to="/bibliothèque/">
          <p className="nav_unit">Bibliothèque </p>
        </Link>
        <Link to="/jeux_extérieur">
          <p className="nav_unit">Jeux et jouets d'extérieur </p>
        </Link>
        <Link to="/conexion">
          <p className="nav_p">Se connecter </p>
        </Link>
        <Link to="/inscription">
          <p className="nav_p">Inscription </p>
        </Link>
        {/* <ul className="nav_ul">
          <button className="nav_burger"></button>
          <span className="=burger_bar"></span>
        </ul> */}
      </div>
    </div>
  );
}

export default NavBar;
