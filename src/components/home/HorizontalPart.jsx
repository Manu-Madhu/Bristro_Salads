import { Link } from "react-router-dom";
import { useState } from "react";
import swiggy from "../../assets/home/SwiggyLogo.png";
import zomato from "../../assets/home/ZomatoLogo.png";
import { IoIosCloseCircleOutline } from "react-icons/io";

const HorizontalPart = ({ img, data, video }) => {
  const [modal, setModal] = useState(false);
  return (
    <div className="w-full" style={{ backgroundColor: data?.color }}>
      <div
        className="h-[80vh] md:h-[90vh] w-full relative"
        style={{
          background: !video ? `url(${img})` : "none",
          backgroundSize: "cover",
          width: "full",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {video && (
          <video
            autoPlay
            loop
            muted
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        <div className="max-w-[1280px] mx-auto w-full h-full relative z-10">
          <div
            data-aos="zoom-in-down"
            data-aos-duration="700"
            className="w-full h-full uppercase text-center flex flex-col items-center justify-center text-white gap-7 md:gap-8"
          >
            <div className="text-4xl shadow-xl md:text-5xl font-scrollFont tracking-widest">
              {data?.top}
            </div>
            <div className="font-bold text-6xl sm:text-[100px] lg:text-[160px] font-contentBoldFont">
              {data?.title}
            </div>
            {data?.link &&
              (data?.button === "ORDER NOW" ? (
                <button  onClick={() => setModal(!modal)} className="p-3 text-nowrap bg-white sm:w-[150px] w-[200px] font-semibold text-black md:mt-5">
                  <Link >{data?.button}</Link>
                </button>
              ) : (
                <button className="p-3 bg-white sm:w-[150px] w-[200px] font-semibold text-black md:mt-5">
                  <Link to={data?.link}>{data?.button}</Link>
                </button>
              ))}
          </div>
        </div>
      </div>

      {/* Modal part */}
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
                  href="https://link.zomato.com/xqzv/rshare?id=5803219330563769"
                  target="_blank"
                  className="flex  items-center justify-start gap-5 w-full"
                >
                  <img
                    src={zomato}
                    alt="zomato"
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

export default HorizontalPart;
