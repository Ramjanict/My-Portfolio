import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { IoIosMenu, IoMdClose } from "react-icons/io";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [stricky, setStricky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setStricky(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <div className={`${stricky ? "stricky" : ""} w-full fixed z-10`}>
      <div className="container mx-auto ">
        <div className="w-full ">
          {/**mobile menu */}
          <div
            onClick={() => {
              setShowMenu(true);
            }}
            className="w-full bg-white sm:hidden flex justify-between px-10 py-4 "
          >
            <span className="text-2xl text-white p-2 bg-blue-600 rounded-full">
              <IoIosMenu />
            </span>
          </div>
          {showMenu ? (
            <div className="">
              <div className="w-[70%] custom-shadow  bg-white ml-auto px-10 py-4 flex justify-between p-2 h-screen absolute top-0 right-0 left-0 bottom ">
                <div className="flex flex-col space-y-8 mt-16 uppercase font-medium ">
                  <Link
                    onClick={() => {
                      setShowMenu(false);
                    }}
                    spy={true}
                    smooth={true}
                    duration={500}
                    to="home"
                    className="hover:text-[#6D3BAC] text-[#6b8688] transition-all cursor-pointer"
                  >
                    Home
                  </Link>

                  <Link
                    onClick={() => {
                      setShowMenu(false);
                    }}
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-30}
                    to="about"
                    className="hover:text-[#6D3BAC] text-[#6b8688] transition-all cursor-pointer"
                  >
                    about
                  </Link>

                  <Link
                    onClick={() => {
                      setShowMenu(false);
                    }}
                    spy={true}
                    smooth={true}
                    duration={500}
                    to="work"
                    className="hover:text-[#6D3BAC] text-[#6b8688] transition-all cursor-pointer"
                  >
                    work
                  </Link>

                  <Link
                    onClick={() => {
                      setShowMenu(false);
                    }}
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-25}
                    to="skills"
                    className="hover:text-[#6D3BAC] text-[#6b8688] transition-all cursor-pointer"
                  >
                    skills
                  </Link>
                  <Link
                    onClick={() => {
                      setShowMenu(false);
                    }}
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-40}
                    to="resume"
                    className="hover:text-[#6D3BAC] text-[#6b8688] transition-all cursor-pointer"
                  >
                    resume
                  </Link>
                  <Link
                    onClick={() => {
                      setShowMenu(false);
                    }}
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-40}
                    to="contact"
                    className="hover:text-[#6D3BAC] text-slate-500 transition-all cursor-pointer"
                  >
                    contact
                  </Link>
                </div>
                <span
                  onClick={() => {
                    setShowMenu(false);
                  }}
                  className="text-4xl text-[#313BAC] hover:text-red-500 cursor-pointer"
                >
                  <IoMdClose />
                </span>
              </div>
            </div>
          ) : (
            <></>
          )}

          <div className="hidden sm:block h-16 ">
            <ul className="flex max-w-md mx-auto  h-full uppercase justify-between items-center font-semibold  ">
              <Link
                activeClass="active"
                className="cursor-pointer"
                spy={true}
                smooth={true}
                duration={500}
                to="home"
              >
                home
              </Link>
              <Link
                activeClass="active"
                className="cursor-pointer"
                spy={true}
                smooth={true}
                duration={500}
                offset={100}
                to="about"
              >
                about
              </Link>
              <Link
                activeClass="active"
                className="cursor-pointer"
                smooth={true}
                spy={true}
                duration={500}
                offset={100}
                to="work"
              >
                work
              </Link>
              <Link
                activeClass="active"
                className="cursor-pointer"
                smooth={true}
                spy={true}
                duration={500}
                offset={100}
                to="skills"
              >
                skills
              </Link>
              <Link
                activeClass="active"
                className="cursor-pointer"
                smooth={true}
                spy={true}
                duration={500}
                offset={100}
                to="resume"
              >
                resume
              </Link>
              <Link
                activeClass="active"
                className="cursor-pointer"
                smooth={true}
                spy={true}
                duration={500}
                offset={100}
                to="contact"
              >
                contact
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
