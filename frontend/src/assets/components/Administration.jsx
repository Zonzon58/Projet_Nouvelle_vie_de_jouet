import React from "react";
import { Outlet, Link } from "react-router-dom";

import "./Administration.css";

function Administration() {
  return (
    <div className="Menudeux">
      <nav>
        <Link className="Menu" to="/">
          {" "}
          Retour acceuil
        </Link>
        <Link className="Menu" to="/CréationCompteClient">
          {" "}
          Creation Compte Client
        </Link>
        <Link className="Menu" to="/Gestion">
          {" "}
          Gestion administrative
        </Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default Administration;
