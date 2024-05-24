const SecondPart = ({ img, imagePosition, content }) => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center relative w-full sm:h-[650px] overflow-hidden mb-10 sm:mb-0">
      <div
        className={`sm:w-1/2 h-full
        ${ imagePosition === "left" ? "left-0 " : "right-0" } absolute `}
      >
        <img src={img} alt="coverImg" className="object-cover h-full hidden sm:block" />
      </div>
      <div className="w-full h-full max-w-[1280px] mx-auto z-10 flex flex-col sm:flex-row items-center justify-center">
        {/* Desktop view */}
        <div className={`sm:w-1/2 ${ imagePosition === "left" ? "sm:order1 " : "sm:order-2" } hidden sm:block`}>
          <img src={img} alt="" className="sm:hidden"/>
        </div>

        <div className="sm:w-1/2 sm:p-20 flex flex-col items-center justify-center bg-white p-3">
          
          {/* desktop view */}
          <div className={`${ imagePosition === "left" ? "text-start" : "text-end"} hidden sm:block`}>
            <h1 className="font- text-3xl font-primaryFont tracking-wider">{content?.title}</h1>
            <h5 className="font-semibold text-[#2F2E2E] font-subFont mt-2 tracking-widest">{content?.subHeading}</h5>
            <p className="my-5 text-[14px] text-[#2F2E2E] leading-normal font-contentFont">{content?.description}</p>
            <button className="p-2 sm:w-[150px] font-contentFont  border-2 w-[200px] font-semibold border-primaryColor mt-10">
              MENU
            </button>
          </div>

          {/* mobile view */}
          <div className={`sm:hidden`}>
            <h1 className="font-bold text-3xl">{content?.title}</h1>
            <h5 className="font-semibold">{content?.subHeading}</h5>
            <p className="my-5 font-semibold">{content?.description}</p>
            <button className="p-2 sm:w-[150px] border-2 w-[200px] font-semibold border-primaryColor mt-10">
              MENU
            </button>
          </div>
        </div>
        
        {/* Mobile view */}
        <div className={`sm:w-1/2 ${ imagePosition === "left" ? "sm:order1 " : "sm:order-2" }  sm:hidden`}>
          <img src={img} alt="" className="sm:hidden"/>
        </div>
      </div>
    </div>
  );
};

export default SecondPart;
