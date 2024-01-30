import React from "react";
import ecommerce from "../../assets/Ecommerce.png";
import foodvally from "../../assets/foodvally.png";
import "./work.css";

const Works = () => {
  return (
    <div id="works">
      <h2 className="worktitle">My Portfolio</h2>
      <span className="workdes">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error
        assumenda quo consequatur voluptates, id possimus vel? Porro amet, eum
        culpa labore error, fuga odit distinctio ea, itaque voluptatibus quod a.
      </span>
      <div className="workimages">
        <a href="https://mdramjanict.netlify.app/" target="_blank">
          <img src={ecommerce} alt="workimg" className="w_img" />
        </a>
        <a href="https://ramjan.netlify.app/" target="_blank">
          <img src={foodvally} alt="workimg" className="w_img" />
        </a>
        <a href="https://mdramjanict.netlify.app/" target="_blank">
          <img src={ecommerce} alt="workimg" className="w_img" />
        </a>
        <a href="https://ramjan.netlify.app/" target="_blank">
          <img src={foodvally} alt="workimg" className="w_img" />
        </a>
        <a href="https://mdramjanict.netlify.app/" target="_blank">
          <img src={ecommerce} alt="workimg" className="w_img" />
        </a>
        <a href="https://ramjan.netlify.app/" target="_blank">
          <img src={foodvally} alt="workimg" className="w_img" />
        </a>
      </div>
      <button className="workbtn">See More</button>
    </div>
  );
};

export default Works;
