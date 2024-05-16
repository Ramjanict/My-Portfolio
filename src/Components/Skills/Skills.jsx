import React from "react";
import Appdesign from "../../assets/app-design.png";
import Uidesign from "../../assets/ui-design.png";
import webdesign from "../../assets/website-design.png";
import "./skill.css";

const Skills = () => {
  return (
    <div id="skills">
      <h2 className="skillTittle">What I do</h2>
      <span className="skillDes">
        I'm Ramjan, a Full Stack Web Application Developer with experience in
        React, Node.js, Express.js, and MongoDB. Passionate about creating
        scalable and performant web applications. Collaborated with
        cross-functional teams to deliver high-quality products on tight
        deadlines
      </span>
      <div className="myskill">
        <div className="grid-item">
          <p>Front-End Technologies</p>
          <img
            src="https://img.shields.io/static/v1?message=HTML&logo=HTML&label=&color=DD4B25&logoColor=white&labelColor=&style=for-the-badge"
            height="35"
            alt="facebook logo"
          />
          <img
            src="https://img.shields.io/static/v1?message=CSS&logo=CSS&label=&color=4284f5&logoColor=white&labelColor=&style=for-the-badge"
            height="35"
            alt="facebook logo"
          />
          <img
            src="https://img.shields.io/static/v1?message=javascript&logo=javascript&label=&color=E8D44D&logoColor=white&labelColor=&style=for-the-badge"
            height="35"
            alt="facebook logo"
          />
          <img
            src="https://img.shields.io/static/v1?message=React&logo=react&label=&color=4284f5&logoColor=white&labelColor=&style=for-the-badge"
            height="35"
            alt="React logo"
          />
          <img
            src="https://img.shields.io/static/v1?message=redux&logo=redux&label=&color=7248B6&logoColor=white&labelColor=&style=for-the-badge"
            height="35"
            alt="facebook logo"
          />
          <img
            src="https://img.shields.io/static/v1?message=tailwind css&logo=tailwind css&label=&color=36B7F0&logoColor=white&labelColor=&style=for-the-badge"
            height="35"
            alt="facebook logo"
          />
          <img
            src="https://img.shields.io/static/v1?message=bootstrap&logo=bootstrap&label=&color=8512F7&logoColor=white&labelColor=&style=for-the-badge"
            height="35"
            alt="facebook logo"
          />
          <img
            src="https://img.shields.io/static/v1?message=jquery&logo=jquery&label=&color=0865A7&logoColor=white&labelColor=&style=for-the-badge"
            height="35"
            alt="facebook logo"
          />
        </div>
        <div className="grid-item">
          <p>Back-End Technologies</p>
          <img
            src="https://img.shields.io/static/v1?message=nodejs&logo=node.js&label=&color=6CB54D&logoColor=white&labelColor=&style=for-the-badge"
            height="35"
            alt="facebook logo"
          />
          <img
            src="https://img.shields.io/static/v1?message=express.js&logo=expressjs&label=&color=F7F7F7&logoColor=white&labelColor=&style=for-the-badge"
            height="35"
            alt="facebook logo"
          />
        </div>
        <div className="grid-item">
          <p>Databases</p>
          <img
            src="https://img.shields.io/static/v1?message=MongoDB&logo=mongodb&label=&color=0FA54D&logoColor=white&labelColor=&style=for-the-badge"
            height="35"
            alt="MongoDB logo"
          />
        </div>
        <div className="grid-item">
          <p>Tools & Platforms</p>
          <img
            src="https://img.shields.io/static/v1?message=git&logo=git&label=&color=F44C26&logoColor=white&labelColor=&style=for-the-badge"
            height="35"
            alt="MongoDB logo"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
