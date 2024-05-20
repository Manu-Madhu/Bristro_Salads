import logo from "../../assets/home/logoHome.png";

const LandingPage = () => {
  return (
    <div className="bg-[#F9DB79] w-full h-[600px] ">
      <div className="max-w-[1280px] mx-auto w-full h-full  flex flex-col items-center justify-center">
        <img src={logo} alt="logo" className="object w-[450px]" />
        <button className="border-2 border-[#2F2E2E] p-3 text-sm sm:w-[200px] mt-4">OUR MENU</button>
      </div>
    </div>
  );
};

export default LandingPage;
