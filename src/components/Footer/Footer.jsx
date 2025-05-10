import React from "react";
import { FaFacebookF, FaSpotify, FaInstagram, FaYoutube } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <div className="follow-container">
      <h2 className="follow-title">Follow Korkonto</h2>
      <div className="social-icons">
        <a
          href="https://facebook.com/korkonto"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://instagram.com/korkonto_official"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.youtube.com/@Korkonto"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube />
        </a>
        <a
          href="https://open.spotify.com/artist/44vgpgcciIvo7SSfzt8MPs"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSpotify />
        </a>
      </div>
    </div>
  );
}

export default Footer;
