import { Link } from "react-router-dom";
import logo from "../../assets/home/logoHome.png";
import ScrollNow from "../ScrollNow";

const LandingPage = () => {
  return (
    <div className="bg-[#F9DB79] w-full h-[650px] relative">
      <div className="max-w-[1280px] mx-auto w-full h-full  flex flex-col items-center justify-center">
        <img src={logo} alt="logo" className="object w-[450px]" />
        <button
          className="border-2 border-[#2F2E2E] p-2 font-semibold font-contentFont px-5 text-sm sm:w-[200px] mt-4
        hover:scale-105 ease-in-out duration-200 uppercase"
        >
          <Link to={"/menu"}>Menu</Link>
        </button>

        {/* Scroll Option */}
        {/* <div className="mt-5 flex flex-col items-center justify-center w-full relative ">
          <ScrollNow />
        </div>
        <p className="absolute bottom-0">scroll me</p> */}
      </div>
    </div>
  );
};

export default LandingPage;
