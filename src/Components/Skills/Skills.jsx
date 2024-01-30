import React from "react";
import Appdesign from "../../assets/app-design.png";
import Uidesign from "../../assets/ui-design.png";
import webdesign from "../../assets/website-design.png";
import "./skill.css";

const Skills = () => {
  return (
    <div id="skills">
      <span className="skillTittle">What I do</span>
      <span className="skillDes">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. A sit
        perferendis rem id? Autem iure corrupti perferendis voluptate fugiat
        culpa necessitatibus. Omnis rerum aperiam quaerat laborum eveniet, quis
        est deleniti!
      </span>
      <div className="skillBars">
        <div className="bar">
          <img src={Uidesign} alt="uidesign" className="barimg" />
          <div className="barText">
            <h2>UI / UX Design</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Assumenda maxime
            </p>
          </div>
        </div>
        <div className="bar">
          <img src={Appdesign} alt="uidesign" className="barimg" />
          <div className="barText">
            <h2>App Design</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Assumenda maxime
            </p>
          </div>
        </div>
        <div className="bar">
          <img src={webdesign} alt="uidesign" className="barimg" />
          <div className="barText">
            <h2>website Design</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Assumenda maxime
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
