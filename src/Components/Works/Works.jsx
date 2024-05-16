import React from "react";
import ecommerce_bg from "../../assets/ecommerce_bg.png";
import foodvally from "../../assets/ecommerce.png";
import "./work.css";

const Works = () => {
  return (
    <div id="works">
      <h2 className="worktitle">My Portfolio</h2>
      <span className="workdes">
        I have completed some fully functional e-commerce websites using
        React.js, Node.js, MongoDB, JWT, Mongoose
      </span>
      <div className="workimages">
        <a href="https://ramjan-ecommerc.netlify.app/" target="_blank">
          <img src={ecommerce_bg} alt="workimg" className="w_img" />
        </a>
        <a href="https://mdramjanict.netlify.app/" target="_blank">
          <img src={foodvally} alt="workimg" className="w_img" />
        </a>
        <a href="https://ramjan-ecommerc.netlify.app/" target="_blank">
          <img src={ecommerce_bg} alt="workimg" className="w_img" />
        </a>
        <a href="https://mdramjanict.netlify.app/" target="_blank">
          <img src={foodvally} alt="workimg" className="w_img" />
        </a>
        <a href="https://ramjan-ecommerc.netlify.app//" target="_blank">
          <img src={ecommerce_bg} alt="workimg" className="w_img" />
        </a>
        <a href="https://mdramjanict.netlify.app/" target="_blank">
          <img src={foodvally} alt="workimg" className="w_img" />
        </a>
      </div>
      <button className="workbtn">See More</button>
    </div>
  );
};

export default Works;
