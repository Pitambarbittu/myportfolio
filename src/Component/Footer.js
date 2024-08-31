import React from "react";
import "./footer.css";
import git from "../Image/github.png";
import linkedin from "../Image/linkedin.png";
import fb from "../Image/Facebook.png";
import insta from "../Image/instagram.png";

const Footer = () => {
  return (
    <div>
      <div className="footer__icons">
        <a href="https://github.com/Pitambarbittu" target="blank">
          <img src={git} alt="GitHub" />
        </a>
        <a
          href="https://www.linkedin.com/in/pitambar-bhadra-1b6450206/"
          target="blank"
        >
          <img src={linkedin} alt="LinkedIn" />
        </a>
        <a href="https://www.instagram.com/bit2_bhadra/" target="blank">
          <img src={insta} alt="Instagram" />
        </a>
        <a href="https://www.facebook.com/bittu.bhadra123" target="blank">
          <img src={fb} alt="Facebook" />
        </a>
      </div>
      <h3 className="footer" style={{ color: "white" }}>
        Design and code by PITAMBAR BHADRA
      </h3>
    </div>
  );
};

export default Footer;
