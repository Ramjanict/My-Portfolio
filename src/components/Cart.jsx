import React from "react";
import { FaGithub } from "react-icons/fa";
import { VscPreview } from "react-icons/vsc";

const Cart = ({ image, heading, des, category, imgurl, giturl }) => {
  return (
    <div>
      <div className="w-[250px] p-4  hover:shadow-lg  bg-white rounded-md flex flex-col justify-center items-center gap-y-4">
        <div className="h-48 w-full flex items-center justify-center relative group ">
          <img className=" h-full transition-all " src={image} alt="" />

          <div className="w-full h-full cursor-pointer  absolute  invisible group-hover:visible shadow-lg  bg-black bg-opacity-50 flex  justify-evenly items-center text-white rounded-md  ">
            <a
              className=" bg-black bg-opacity-50 p-2 rounded-full hover:scale-95 transition-all "
              href={imgurl}
              target="_blank"
            >
              <FaGithub size={20} />
            </a>
            <a
              className=" bg-black bg-opacity-50 p-2 rounded-full hover:scale-95 transition-all"
              href={giturl}
              target="_blank"
            >
              <VscPreview size={20} />
            </a>
          </div>
        </div>
        <h2 className="text-xl font-semibold">{heading}</h2>
        <p className="text-sm">{des}</p>
        <p className="text-sm px-6 py-2 bg-[#33E5EB] text-black rounded-tr-3xl rounded-bl-3xl">
          {category}
        </p>
      </div>
    </div>
  );
};

export default Cart;
