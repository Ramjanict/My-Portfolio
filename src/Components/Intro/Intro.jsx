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
          I'm <span className="introname">Ramjan</span> <br /> Website Designer
        </span>
        <p className="intropara">
          I am skilled and passionate web designer with experience in creating
          <br />
          visually appealing and user-friendly websites.
        </p>

        <Link>
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
