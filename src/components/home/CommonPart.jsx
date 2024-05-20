const SecondPart = ({ img, imagePosition, content }) => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center relative w-full h-[650px] overflow-hidden">
      <div
        className={`sm:w-1/2 h-full
        ${ imagePosition === "left" ? "left-0 " : "right-0" } absolute bg-red-500`}
      >
        <img src={img} alt="coverImg" className="object-cover h-full" />
      </div>
      <div className="max-w-[1280px] mx-auto z-10 flex items-center justify-center">
        <div className={`w-1/2  ${ imagePosition === "left" ? "order1 " : "order-2" }`}></div>
        <div className="w-1/2 p-20 flex flex-col items-center justify-center ">
          <div className={`${ imagePosition === "left" ? "text-start" : "text-end"}`}>
            <h1 className="font-bold text-3xl">{content?.title}</h1>
            <h5 className="font-semibold text-">{content?.subHeading}</h5>
            <p className="my-5 font-semibold">{content?.description}</p>
            <button className="p-2.5 sm:w-[150px] border-2 font-semibold border-primaryColor mt-10">
              MENU
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondPart;
