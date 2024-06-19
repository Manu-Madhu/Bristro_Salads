import { Link } from "react-router-dom";

const HorizontalPart = ({ img, data, video }) => {
  return (
    <div className="w-full" style={{ backgroundColor: data?.color }}>
      <div
        className="h-[80vh] md:h-[90vh] w-full relative"
        style={{
          background: !video ? `url(${img})` : 'none',
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
            {data?.link && (
              <button className="p-2 bg-white sm:w-[150px] w-[200px] font-semibold text-black md:mt-5">
                <Link to={data?.link}>{data?.button}</Link>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalPart;
