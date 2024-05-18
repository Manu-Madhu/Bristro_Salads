
import {faFacebookF, faTwitter, faInstagram,} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../assets/logo1 2.png";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <div className="bg-neutral-800">
        <div className=" text-white max-w-7xl flex flex-col sm:flex-row py-4 mx-auto justify-center items-center">
          <div>
            <div className="text-center">
              <p className="text-sm leading-4  tracking-wider">
                500 Terry Francine Street San Francisco, CA 94158 | Daily <br />
                8AM-10PM{" "}
              </p>
            </div>
          </div>
          <div className="flex mt-4 sm:mt-0">
            <a
              href="#"
              className="w-6 h-6 rounded-full bg-white mx-1 inline-block pt-1 mx-1 flex items-center justify-center ml-14"
            >
              <FontAwesomeIcon icon={faFacebookF} className="text-black " />
            </a>
            <a
              href="#"
              className="w-6 h-6 rounded-full bg-white mx-1 inline-block pt-1 mx-1 flex items-center justify-center"
            >
              <FontAwesomeIcon icon={faTwitter} className="text-black" />
            </a>
            <a
              href="#"
              className="w-6 h-6 rounded-full bg-white mx-1 inline-block pt-1 mx-1 flex items-center justify-center"
            >
              <FontAwesomeIcon icon={faInstagram} className="text-black" />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto ">
        <div className="p-9 bg-white py-4 mx-auto ">
          <div className="sm:flex justify-between items-center text-black font-semibold">
            <ul className="md:flex md:items-center">
              <li className="mx-6 my-6 md:my-0">
                <a href="/menu">MENU</a>
              </li>
              <li className="mx-7 my-6 md:my-0">
                <a href="/about-us">ABOUT</a>
              </li>
              <li className="mx-7 my-6 md:my-0">
                <a href="/subscription">SUBSCRIPTION</a>
              </li>
              <li className="mx-7 my-6 md:my-0">
                <a href="/contact-us">CONTACT US</a>
              </li>
            </ul>
            <Link to={"/"} className="sm:align-left">
              <img src={logo} alt="" className="w-18 h-16" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
