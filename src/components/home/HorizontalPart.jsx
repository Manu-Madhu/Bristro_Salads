import { Link } from "react-router-dom";
import banner from "../../assets/home/Banner1.jpg";

const HorizontalPart = ({img,data}) => {
  return (
    <div className="w-full "  style={{ backgroundColor: data?.color }}>
      <div
        className="h-[80vh] md:h-[90vh] w-full"
        style={{
          background: `url(${img})`,
          backgroundSize: `cover`,
          width: "full",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="max-w-[1280px] mx-auto w-full h-full">
          <div className="w-full h-full uppercase flex flex-col items-center justify-center text-white gap-7 md:gap-8">
            <div className=" text-4xl md:text-5xl font-scrollFont tracking-widest">{data?.top}</div>
            <div className="font-bold text-6xl sm:text-[100px] lg:text-[160px] font-contentBoldFont">{data?.title}</div>
            <button className={`p-2 ${data?.link && "bg-white "} sm:w-[150px] w-[200px] font-semibold  text-black md:mt-10`}>
             <Link to={data?.link} >{data?.button}</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalPart;
