import React from "react";
import { IoBagSharp } from "react-icons/io5";
import { Link } from "react-scroll";
import logo from "../../assets/image.png";
import "./intro.css";
const Intro = () => {
  return (
    <div id="intro">
      <div className="introcontent">
        <span className="hello">Hello</span>
        <span className="introtext">
          I'm <span className="introname">Ramjan</span> <br /> Full Stack
          Developer
        </span>
        <p className="intropara">
          I'm with experience in React, Node.js, Express.js, and MongoDB.
          <br />
          Passionate about creating scalable and performant web applications
        </p>

        <Link to="contact" spy={true} smooth={true} offset={-60} duration={500}>
          <button className="btn">
            <IoBagSharp size={25} />
            <span className="gap">Hire Me</span>
          </button>
        </Link>
      </div>
      <img className="introimg" src={logo} alt="intro" />
    </div>
  );
};

export default Intro;
