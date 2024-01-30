import React, { useState } from "react";
import { FiMessageSquare } from "react-icons/fi";
import { Link } from "react-scroll";
import menu from "../../assets/menu.png";
import "./navbar.css";
const Navbar = () => {
  const [showMenu, setshowMenu] = useState(false);
  return (
    <nav className="navbar">
      <a href="#">
        <img className="logo" src="favicon.png" alt="logo" />
      </a>

      <div className="deskmenu">
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="deskitem"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="deskitem"
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="works"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="deskitem"
        >
          Portfolio
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-60}
          duration={500}
          className="deskitem"
        >
          Contact
        </Link>
      </div>

      <button
        onClick={() => {
          document
            .getElementById("contact")
            .scrollIntoView({ behavior: "smooth" });
        }}
        className="deskbtn"
      >
        <FiMessageSquare size={25} /> <span className="gap">Contact Me</span>
      </button>

      <img
        onClick={() => setshowMenu(!showMenu)}
        className="mobileMenu"
        src={menu}
        alt="mobileMenu"
      />

      <div className="navmenu" style={{ display: showMenu ? "flex" : "none" }}>
        <Link
          onClick={() => setshowMenu(false)}
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="item"
        >
          Home
        </Link>
        <Link
          onClick={() => setshowMenu(false)}
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="item"
        >
          About
        </Link>
        <Link
          onClick={() => setshowMenu(false)}
          activeClass="active"
          to="works"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="item"
        >
          Portfolio
        </Link>
        <Link
          onClick={() => setshowMenu(false)}
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-60}
          duration={500}
          className="item"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
