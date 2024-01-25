import React from "react";
import Facebook from "../images_site/facebook.png";
import Github from "../images_site/github.svg";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div>
        <a
          href="https://www.facebook.com/"
          className="facebook listicon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Facebook} alt="Facebook" />
        </a>
        <p className="footer_p">FAQ</p>
        <p className="footer_p">Contact</p>
        <p className="footer_p">Propiétaire du site</p>

        <a
          href="https://github.com/"
          className="github listicon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Github} alt="Github" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;