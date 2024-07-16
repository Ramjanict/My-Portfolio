import React, { useState } from "react";
import { Link } from "react-scroll";
import Cart from "./Cart";
import allData from "../Db/db.js";
import { FaLinkedin, FaGithub, FaFacebookF } from "react-icons/fa";

const Work = () => {
  const [data, setData] = useState(allData);
  const filterResult = (catItems) => {
    const result = allData.filter((currData) => {
      return currData.category === catItems;
    });
    setData(result);
  };

  return (
    <div id="work" className="bg-[#EDF2F8] flex px-6 py-8 md:py-16">
      <div className="hidden lg:flex flex-col justify-end gap-2 py-10 text-2xl">
        <a
          href="https://www.linkedin.com/in/mdramjanict/"
          target="_blank"
          className="border border-slate-300 p-2 hover:bg-[#1D4ED8] hover:text-white rounded-full transition-all cursor-pointer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Ramjanict"
          target="_blank"
          className="border border-slate-300 p-2 hover:bg-[#1D4ED8] hover:text-white rounded-full transition-all cursor-pointer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.facebook.com/mdramjanali.ict/"
          target="_blank"
          className="border border-slate-300 p-2 hover:bg-[#1D4ED8] hover:text-white rounded-full transition-all cursor-pointer"
        >
          <FaFacebookF />
        </a>
      </div>

      <div className=" container mx-auto px-4">
        <div className="flex flex-col justify-center items-center gap-6 w-full">
          <h2 className="capitalize text-lg md:text-5xl font-extrabold tracking-wider text-center leading-relaxed">
            my recent <span className="text-[#313BAC]">creative</span> projects
          </h2>

          <div className="flex justify-center items-center w-full flex-wrap gap-4 md:mt-5">
            <button
              onClick={() => {
                setData(allData);
              }}
              className="px-6 py-2 rounded-md bg-white font-semibold hover:text-white hover:bg-[#313BAC] transition-all text-sm "
            >
              All
            </button>
            <button
              onClick={() => {
                filterResult("Ecommerce");
              }}
              className="px-6 py-2 rounded-md bg-white font-semibold hover:text-white hover:bg-[#313BAC] transition-all text-sm "
            >
              Ecommerce
            </button>
            <button
              onClick={() => {
                filterResult("MERN");
              }}
              className="px-6 py-2 rounded-md bg-white font-semibold hover:text-white hover:bg-[#313BAC] transition-all text-sm "
            >
              MERN
            </button>
            <button
              onClick={() => {
                filterResult("ReactJS");
              }}
              className="px-6 py-2 rounded-md bg-white font-semibold hover:text-white hover:bg-[#313BAC] transition-all text-sm "
            >
              ReactJS
            </button>
            <button
              onClick={() => {
                filterResult("Tailwind");
              }}
              className="px-6 py-2 rounded-md bg-white font-semibold hover:text-white hover:bg-[#313BAC] transition-all text-sm "
            >
              Tailwind
            </button>
            <button
              onClick={() => {
                filterResult("Bootstrap");
              }}
              className="px-6 py-2 rounded-md bg-white font-semibold hover:text-white hover:bg-[#313BAC] transition-all text-sm "
            >
              Bootstrap
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 justify-items-center gap-6 md:gap-10 my-16  ">
          {data.map((item, index) => {
            return (
              <Cart
                key={index}
                image={item.image}
                heading={item.heading}
                des={item.des}
                category={item.category}
                imgurl={item.imgurl}
                giturl={item.giturl}
              />
            );
          })}
        </div>
      </div>
      <div className="flex flex-col justify-center gap-3">
        <Link
          activeClass="bgactive"
          spy={true}
          smooth={true}
          duration={500}
          to="home"
          className="w-3 h-3 bg-slate-400 rounded-full hover:bg-red-600 transition-all cursor-pointer"
        ></Link>
        <Link
          activeClass="bgactive"
          spy={true}
          smooth={true}
          duration={500}
          offset={-30}
          to="about"
          className="w-3 h-3 bg-slate-400 rounded-full hover:bg-red-600 transition-all cursor-pointer"
        ></Link>
        <Link
          activeClass="bgactive"
          spy={true}
          smooth={true}
          duration={500}
          to="work"
          className="w-3 h-3 bg-slate-400 rounded-full hover:bg-red-600 transition-all cursor-pointer"
        ></Link>
        <Link
          activeClass="bgactive"
          spy={true}
          smooth={true}
          duration={500}
          offset={-25}
          to="skills"
          className="w-3 h-3 bg-slate-400 rounded-full hover:bg-red-600 transition-all cursor-pointer"
        ></Link>
        <Link
          activeClass="bgactive"
          spy={true}
          smooth={true}
          duration={500}
          offset={-40}
          to="resume"
          className="w-3 h-3 bg-slate-400 rounded-full hover:bg-red-600 transition-all cursor-pointer"
        ></Link>
        <Link
          activeClass="bgactive"
          spy={true}
          smooth={true}
          duration={500}
          offset={-40}
          to="contact"
          className="w-3 h-3 bg-slate-400 rounded-full hover:bg-red-600 transition-all cursor-pointer"
        ></Link>
      </div>
    </div>
  );
};

export default Work;
