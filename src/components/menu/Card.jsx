import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Card = ({ data }) => {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <div
      key={data?.id}
      data-aos="fade-up"
      className="md:w-[250px] md:h-[540px] l p-2 text-center flex flex-col items-center  md:pb-16 overflow-hidden"
    >
      <div className="md:w-[200px] md:h-[200px] rounded-full">
        <img
          src={data?.img}
          alt=""
          className="object-cover h-[150px] md:w-[200px]  md:h-[200px] rounded-full"
        />
      </div>
      <div className="h-full w-full flex flex-col items-center">
        <p className="text-lg my-3 uppercase leading-6 tracking-wider">
          {data?.name}
        </p>
        <p
          className="md:w-3/4 text-sm md:text-[16px] mt-2 text-center 
        tracking-wide leading-none md:leading-5"
        >
          {data?.description}
        </p>
        <p className="mt-3">Rs. {data?.price}</p>
      </div>
    </div>
  );
};

export default Card;
