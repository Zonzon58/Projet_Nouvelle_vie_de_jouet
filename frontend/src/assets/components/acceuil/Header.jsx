import React from "react";
import Background from "../images_site/Background.png";

import "./Header.css";

function Header() {
  return (
    <div className="background">
      <img className="header_img" src={Background} alt="" />
    </div>
  );
}

export default Header;
