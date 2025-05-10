import React from "react";
import "./Header.css";
import { Link } from "react-router";

function Header() {
  return (
    <header className="header">
      <Link to="/korkonto">
        <h1>Korkonto</h1>
      </Link>
      <nav className="navbar">
        <Link to="/korkonto/about-us">About Us</Link>
        <Link to="/korkonto/concerts">Concerts</Link>
        <Link to="/korkonto/discography">Discography</Link>
        <Link to="/korkonto/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;
