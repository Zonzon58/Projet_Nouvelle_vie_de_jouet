import React from "react";
import Facebook from "../images_site/facebook.png";
import Github from "../images_site/github.png";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer_div">
        <a
          href="https://www.facebook.com/"
          className="facebook_listicon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Facebook} alt="Facebook" />
        </a>
        <a href="FAQ" className="footer_p">
          FAQ
        </a>
        <a href="Contact" className="footer_p">
          Contact
        </a>
        <a href="Proprietaire du site" className="footer_p">
          Propiétaire du site
        </a>

        <a
          href="https://github.com/"
          className="github_listicon"
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
