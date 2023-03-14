import React from "react";
import "../../styles/styles.css";
import logo from "../../assets/logo.png";

function Header() {
  return (
    <header>
      <div className="logoContainer">
        <img className="logo" alt="My Logo" src={logo}></img>
      </div>
      <ul className="links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/projects">Projects</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
