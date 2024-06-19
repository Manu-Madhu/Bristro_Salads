import devLogo from "../assets/developerLogo.png";

const Footer = () => {
  return (
    <div className="bg-black">
      <footer className="max-w-[1280px] mx-auto w-full">
        <div className="text-white p-5 py-10 sm:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 tracking-wider">
            <div className="mb-5">
              <h4 className="text-base pb-3 font-bold text-[15px]">ADDRESS</h4>
              <p className="leading-tight">
                Salad bistro,
                <br />
                Trivandrum,
                <br />
                PIN 695004
              </p>
            </div>
            <div className="mb-5">
              <h4 className="text-base pb-3 font-bold text-[15px]">CONTACT</h4>
              <p>
                thesaladbistro@gmail.com
                <br />
                Tel: 7892252032
              </p>
            </div>
            <div className="mb-5">
              <h4 className="text-base pb-3 font-bold text-[15px]">HOURS</h4>
              <p>
                OPEN DAILY
                <br />
                7:30 AM-11:00 PM 
              </p>
            </div>
            <div className="mb-5">
              <h2 className="text-base pb-3 font-bold text-[15px]">
                MAILING LIST
              </h2>
              <form className="flex flex-col space-y-3">
                <input
                  type="text"
                  placeholder="Enter your email here*"
                  className="w-full p-1.5 pl-5 bg-transparent p-2 border"
                />
                <button className="text-center p-1.5 border">SUBSCRIBE</button>
              </form>
            </div>
          </div>
          {/* <div className="flex">
            <img src={logo2} alt="" className="w-28 h-28" />
          </div> */}
          <div className="mt-5">
            <p className="tracking-wider text-xs sm:text-sm flex relative">
              ©2024 by Salad Bistro. <br className="sm:hidden" /> Developed by
              Gom Digital Consultancy. <img src={devLogo} alt="logo"  className="w-3 h-3 absolute bottom-0 right-[25%] md:left-[35%]"/>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
