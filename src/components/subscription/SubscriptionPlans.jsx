import whatApp from "../../assets/WhLogo.png";

const SubscriptionPlans = ({
  imagePosition,
  img,
  content,
  rate,
  mobImg,
  color,
  height,
}) => {
  return (
    <div
      className={`flex flex-col sm:flex-row items-center justify-center relative w-full  ${
        height ? "md:h-[800px] " : ""
      }  overflow-hidden  sm:mb-0`}
      style={{
        background: `url(${img})`,
        backgroundSize: "cover",
        width: "full",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div
        data-aos="fade-right"
        data-aos-duration="1000"
        className={`sm:w-1/2 h-full
        ${imagePosition === "left" ? "left-0 " : "right-0"} absolute`}
      ></div>

      <div className="w-full h-full max-w-[1280px] mx-auto z-10 flex flex-col sm:flex-row items-center justify-center">
        <div className="w-full sm:p-20 flex flex-col items-center justify-center p-3">
          {/* desktop view */}
          <div
            className={`${
              imagePosition === "left"
                ? "text-start sm:ms-[50%] md:ms-[40%] lg:ms-[25%]"
                : "text-end sm:me-[10%] md:me-[30%] lg:me-[15%]"
            } hidden sm:block`}
          >
            <h1
              data-aos="fade-right"
              className="text-7xl font-primaryFont font-extrabold tracking-wider uppercase"
            >
              {content?.title}
            </h1>
            <h5
              data-aos="fade-left"
              className="text-6xl font-semibold text-[#2F2E2E] font-primaryFont mt-2"
            >
              {content?.subTitle}
            </h5>
            <h5
              data-aos="fade-right"
              className="text-5xl font-semibold text-[#2F2E2E] font-primaryFont mt-14 uppercase"
            >
              {content?.subHeading}
            </h5>
            <p
              data-aos="fade-left"
              className="my-5 text-[14px] text-[#2F2E2E] leading-normal font-contentFont"
            >
              {content?.description}
            </p>

            <div className="pb-5">
              {content?.list && (
                <ul>
                  {content?.list?.map((data, index) => (
                    <li
                      key={index}
                      data-aos="fade-right"
                      data-aos-duration={index * 200 + 100}
                      className="uppercase text-xl"
                    >
                      <span className="font-bold">{data?.title}</span>:{" "}
                      <span>{data?.content}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div
              className={`${
                imagePosition === "left"
                  ? "sm:flex items-center justify-start"
                  : "sm:flex items-center justify-end"
              } hidden gap-10`}
            >
              <h1 className="font-bold text-5xl">
                Rs.
                <span>{rate}</span>
                <span className="text-2xl capitalize"> ONLY</span>
              </h1>
              <a target="blank" href="https://wa.me/917892252032?text=hi...">
                <button
                  data-aos="fade-up"
                  className="p-2 flex items-center justify-center gap-5 uppercase text-nowrap font-contentFont border-2 w-[200px] font-semibold border-primaryColor hover:scale-105 ease-in-out duration-300"
                >
                  <img src={whatApp} alt="whatsApp" className="w-10" /> Order
                  Now
                </button>
              </a>
            </div>
          </div>

          {/* mobile view */}
          <div className="sm:hidden mt-10">
            <h1
              data-aos="fade-right"
              className="font-extrabold text-5xl uppercase"
            >
              {content?.title}
            </h1>
            <h5 data-aos="fade-left " className="font-bold text-2xl mt-2 uppercase">
              {content?.subTitle}
            </h5>
            <h5
              data-aos="fade-right"
              className="font-bold text-xl mt-4 uppercase"
            >
              {content?.subHeading}
            </h5>
          </div>
        </div>

        {/* Mobile view */}
        <div
          className={`w-full min-h-[200px] p-3 py-5 relative z-20 ${
            imagePosition === "left" ? "sm:order-1" : "sm:order-2"
          } sm:hidden`}
          style={{
            background: `url(${mobImg})`,
            backgroundSize: "cover",
            width: "full",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="absolute w-full h-full bg-black/50 top-0 left-0 z-10"></div>
          <div className="relative z-20 flex flex-col">
            {content?.description && (
              <p className="my-5 font-semibold text-white">
                {content?.description}
              </p>
            )}
            {content?.list && (
              <ul className="py-5">
                {content?.list?.map((data, i) => (
                  <li
                    data-aos="fade-right"
                    data-aos-duration={i * 200 + 100}
                    key={i}
                    className="uppercase text-xl text-white"
                  >
                    <span className="font-semibold">{data?.title}</span>:{" "}
                    <span className="font-thin">{data?.content}</span>
                  </li>
                ))}
              </ul>
            )}
            <div className={`text-white gap-10`}>
              <h1 data-aos="fade-right" className="font-bold text-5xl mb-4">
                Rs.
                <span>{rate}</span>
                <span className="text-2xl capitalize"> ONLY</span>
              </h1>
              <a
                target="blank"
                href="https://wa.me/917892252032?text=hi..."
                className="pb-5"
              >
                <button
                  data-aos="fade-up"
                  className="p-2 flex items-center justify-center gap-5 uppercase text-nowrap font-contentFont border-2 w-[200px] font-semibold border-white  hover:scale-105 ease-in-out duration-300"
                >
                  <img src={whatApp} alt="whatsApp" className="w-10" /> Order
                  Now
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPlans;
