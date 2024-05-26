const FlavorItems = ({ title, menuOptions }) => {
  return (
    <div className=" min-h-screen flex flex-col items-center font-primaryFont pt-5  md:pt-20">
      <div className="pt-10 text-center">
        <p className="text-4xl tracking-wider uppercase">{title}</p>
      </div>

      <div className="max-w-[1280px] mx-auto mt-9 md:mt-14 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {menuOptions.map((item) => (
          <div
            key={item.id}
            className="md:w-[250px] h-full text-center flex flex-col items-center justify-center md:pb-16"
          >
            <img
              src={item.img}
              alt=""
              className=" object-contain w-full h-full rounded-full"
            />
            <p className="text-lg mt-3 uppercase tracking-wider">{item.name}</p>
            <p className="w-3/4 text- mt-2 tracking-wide leading-none">
              {item.description}
            </p>
            <p className="mt-3">Rs. {item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlavorItems;
