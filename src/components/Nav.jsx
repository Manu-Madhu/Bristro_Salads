import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../assets/home/logoHome.png";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const Nav = () => {
  const [state, setState] = useState(false);
  const location = useLocation();
  return (
    <div className="bg-[#F9DB79]">
      <div className="bg-neutral-800">
        <div className=" max-w-[1280px] mx-auto text-white flex flex-col sm:flex-row py-4 justify-center items-center sm:gap-5 font-primaryFont ">
          <p className="text-xs sm:text-sm  tracking-widest">
            The Salad Bistro Trivandrum, PIN 695004 | Daily 7:30AM-11:00PM
          </p>
          <div className="flex items-center justify-center mt-4 sm:mt-0 gap-3">
            <a
              href="https://www.facebook.com/THESALADBISTRO/"
              target="blank"
              className="w-6 h-6 rounded-full bg-white flex items-center justify-center"
            >
              <FontAwesomeIcon icon={faFacebookF} className="text-black " />
            </a>
            <a
              href="https://www.instagram.com/the_salad_bistro/"
              target="blank"
              className="w-6 h-6 rounded-full bg-white flex items-center justify-center"
            >
              <FontAwesomeIcon icon={faInstagram} className="text-black" />
            </a>
          </div>
        </div>
      </div>

      {/* desktop view */}
      <div className="max-w-[1280px] mx-auto hidden sm:flex">
        <div className="p-9 py-4 mx-auto w-full">
          <div className="sm:flex justify-between items-center text-[#2F2E2E] font-semibold">
            <ul className="md:flex md:items-center gap-5 font-extralight font-primaryFont text-[18px] tracking-wider">
              <li
                className={`md:my-0 hover:text-[#706D6D] ${
                  location?.pathname === "/menu" && "text-[#706D6D]"
                }`}
              >
                <Link to={"/menu"}>MENU</Link>
              </li>
              {/* <li
                className={`md:my-0 hover:text-[#706D6D] ${
                  location?.pathname === "/about-us" && "text-[#706D6D]"
                }`}
              >
                <Link to={"/about-us"}>ABOUT</Link>
              </li> */}
              <li
                className={`md:my-0 hover:text-[#706D6D] ${
                  location?.pathname === "/subscription" && "text-[#706D6D]"
                }`}
              >
                <Link to={"/subscription"}>SUBSCRIPTION</Link>
              </li>
              <li
                className={`md:my-0 hover:text-[#706D6D] ${
                  location?.pathname === "/contact-us" && "text-[#706D6D]"
                }`}
              >
                <Link to={"/contact-us"}>CONTACT US</Link>
              </li>
            </ul>
            <Link to={"/"} className="sm:align-left">
              <img src={logo} alt="" className="sm:w-16 sm:h-16 object-cover" />
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile view */}
      <div className="w-screen mx-auto sm:hidden">
        <div className="flex justify-between items-center text-black font-semibold p-2">
          <Link to={"/"} className="sm:align-left">
            <img src={logo} alt="" className="w-16 object-cover" />
          </Link>
          <div className="" onClick={(e) => setState(!state)}>
            <IoMenu size={34} />
          </div>
        </div>
      </div>

      {state && (
        <div className="fixed top-0 bg-white z-50 w-screen h-screen overflow-hidden flex flex-col gap-5 items-center justify-center">
          <div>
            <Link
              to={"/"}
              className="sm:align-left"
              onClick={(e) => setState(!state)}
            >
              <img src={logo} alt="" className="w-[300px] object-cover" />
            </Link>
            <IoClose
              size={40}
              className="absolute top-10 right-5 text-gray-500"
              onClick={(e) => setState(!state)}
            />
          </div>
          <ul className="flex flex-col items-center gap-5 font-semibold">
            <li
              onClick={(e) => setState(!state)}
              className={`md:my-0 hover:text-[#706D6D] ${
                location?.pathname === "/menu" && "text-[#706D6D]"
              }`}
            >
              <Link to={"/menu"}>MENU</Link>
            </li>
            <li
              onClick={(e) => setState(!state)}
              className={`md:my-0 hover:text-[#706D6D] ${
                location?.pathname === "/subscription" && "text-[#706D6D]"
              }`}
            >
              <Link to={"/subscription"}>SUBSCRIPTION</Link>
            </li>
            <li
              onClick={(e) => setState(!state)}
              className={`md:my-0 hover:text-[#706D6D] ${
                location?.pathname === "/contact-us" && "text-[#706D6D]"
              }`}
            >
              <Link to={"/contact-us"}>CONTACT US</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Nav;
