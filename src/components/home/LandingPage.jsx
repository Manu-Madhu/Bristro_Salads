import { Link } from "react-router-dom";
import logo from "../../assets/home/logoHome.png";
import { useState } from "react";
import swiggy from "../../assets/home/SwiggyLogo.png";
import zomato from "../../assets/home/ZomatoLogo.png";
import { IoIosCloseCircleOutline } from "react-icons/io";

const LandingPage = () => {
  const [modal, setModal] = useState(false);

  // "https://www.swiggy.com/direct/brand/468701?source=swiggy-direct&subSource=instagram"
  return (
    <div className="bg-[#F9DB79] w-full h-[600px] ">
      <div className="max-w-[1280px] mx-auto w-full h-full  flex flex-col items-center justify-center">
        <img src={logo} alt="logo" className="object w-[450px]" />
        <button
          onClick={() => setModal(!modal)}
          className="border-2 border-[#2F2E2E] p-2 font-semibold font-contentFont px-5 text-sm sm:w-[200px] mt-4
        hover:scale-105 ease-in-out duration-200 "
        >
          <Link>Order Now</Link>
        </button>
      </div>
      {modal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="fixed inset-0 bg-gray-900/60 backdrop-blur-sm p-5 flex items-center justify-center">
            <div className="bg-white p-5 flex flex-col items-center justify-center  w-4/5 h-1/4 md:w-[280px] md:h-[150px] rounded-lg relative">
              <IoIosCloseCircleOutline
                className="absolute top-2 right-2 cursor-pointer hover:text-red-600"
                size={25}
                onClick={() => setModal(!modal)}
              />
              <div className="cursor-pointer group w-full flex items-center justify-center h-full ">
                <a
                  href="https://www.swiggy.com/direct/brand/468701?source=swiggy-direct&subSource=instagram"
                  target="_blank"
                  className="flex  items-center justify-start gap-5 w-full"
                >
                  <img
                    src={swiggy}
                    alt="swiggy"
                    className="object-cover w-[60px]"
                  />
                  <h1 className="font-bold font-primaryFont tracking-wider text-lg group-hover:text-orange-500">
                    Swiggy
                  </h1>
                </a>
              </div>
              <hr className=" w-full" />
              <div className="cursor-pointer group w-full flex items-center justify-center h-full ">
                <a
                  href="https://link.zomato.com/xqzv/rshare?id=5803219330563769 "
                  target="_blank"
                  className="flex  items-center justify-start gap-5 w-full"
                >
                  <img
                    src={zomato}
                    alt="swiggy"
                    className="object-cover w-[60px]"
                  />
                  <h1 className="font-bold font-primaryFont tracking-wider text-lg group-hover:text-red-700">
                    Zomato
                  </h1>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
