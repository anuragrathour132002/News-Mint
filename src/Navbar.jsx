import "./Navbar.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {

  const [navbarStyle, setNavbarStyle] = useState({ maxHeight: "0px" });

  const toggleMenu = () => {
    if (navbarStyle.maxHeight === "0px") {

      setNavbarStyle({
        transition: "0.5s",
        maxHeight: "300px"
      })

    } else {
      setNavbarStyle({
        transition: "0.5s",
        maxHeight: "0px"
      })
    }
  };


  return (
    <div className="navbar">
      <Link id="homelink" to="/">
        News Mint
      </Link>

      <ul
        id="navbarlist1"
        className="navbarlist1"
      >
        <li className="navbarli">
          <Link to="/" className="navbarlink">
            Home
          </Link>
        </li>
        <li className="navbarli">
          <Link to="/whatsnew" className="navbarlink">
            What's New
          </Link>
        </li>
        <li className="navbarli">
          <Link to="/about" className="navbarlink">
            About
          </Link>
        </li>
        <li className="navbarli">
          <Link to="/" className="navbarlink loginButton">
            Join Us
          </Link>
        </li>
      </ul>
      <button className="hamburger">
        <img
          className="hamburgerimg"
          src="https://cdn3.iconfinder.com/data/icons/2px-stroke-simple-line/24/misc-kabob-512.png"
          alt=""
          onClick={toggleMenu}
        />
      </button>
      <ul
        id="navbarlist2"
        className="navbarlist2"
        style={navbarStyle}
      >
        <li className="navbarli">
          <Link to="/" className="navbarlink">
            Home
          </Link>
        </li>
        <li className="navbarli">
          <Link to="/whatsnew" className="navbarlink">
            What's New
          </Link>
        </li>
        <li className="navbarli">
          <Link to="/about" className="navbarlink">
            About
          </Link>
        </li>
        <li className="navbarli">
          <Link to="/" className="navbarlink loginButton">
            Join Us
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
