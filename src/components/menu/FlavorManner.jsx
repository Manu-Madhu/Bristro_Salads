const FlavorManner = ({ titleOne, titleTwo, backgroundCol }) => {
  return (
    <div className="w-full relative">
      <div
        style={{
          backgroundColor: `${backgroundCol}`,}}
        className={`flex items-center justify-center `}
      >
        <div className="container  h-[60vh] md:h-[65vh]  text-center flex flex-col items-center justify-center text-white">
          <p className="absolute top-28 md:top-20 text-2xl md:text-3xl font-semibold">
            {titleOne}
          </p>
          <spam className="text-[70px] md:text-[180px] tracking-wider font-primaryFont">
            {titleTwo}
          </spam>
        </div>
      </div>
    </div>
  );
};

export default FlavorManner;
