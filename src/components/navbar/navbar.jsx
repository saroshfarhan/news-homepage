import React from "react";
import logo from "../../assets/logo.svg";
import "./navbar.scss";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <a href="#">
          <img src={logo} alt="news logo" />
        </a>
      </div>
      <ul className="navlinks">
        <li>
          <a href="#">Home</a>{" "}
        </li>
        <li>
          <a href="#">New</a>
        </li>
        <li>
          <a href="#">Popular</a>
        </li>
        <li>
          <a href="#">Trending</a>
        </li>
        <li>
          <a href="#">Categories</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
