import { useEffect } from "react";

const ContactUs = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
   },[])
  return (
    <div className="min-h-[75vh] mb-20 md:mb-40">
      <div className="bg-[#F9DB79] h-[30px] hidden md:flex"></div>
      <div className="max-w-[1280px] mx-auto p-5 md:p-9">
        {/* ------------Heading part ------------ */}
        <div
          className="w-full flex flex-col items-start md:items-center justify-center font-primaryFont  font-semibold
         text-[#2F2E2E] "
        >
          <h1 className="uppercase tracking-wider md:tracking-[18px] text-[30px] md:text-[55px]">
            Leave a Message
          </h1>
          <p className=" font-thin tracking-wide md:tracking-wider leading-5 md:text-[18px] mt-2 md:mt-0">
            To help us find the best for you, send the preferred message to us,
            for the best customer support.
          </p>
        </div>

        {/* ------------COntact Form ------------ */}
        <form
          action=""
          className="max-w- flex flex-col items-center justify-center mt-10 md:mt-20"
        >
          {/* ----- Form data */}
          <div className="w-full flex flex-col md:flex-row items-center justify-center gap-4">
            <div className="w-full flex flex-col font-primaryFont font-thin">
              <label htmlFor="" className="mb-2">
                Name
              </label>
              <input
                type="text"
                required
                className="border border-black p-2 focus:outline-none"
                placeholder="Name"
              />
            </div>
            <div className="w-full flex flex-col font-primaryFont font-thin">
              <label htmlFor="" className="mb-2">
                Email
              </label>
              <input
                type="email"
                required
                className="border border-black p-2 focus:outline-none"
                placeholder="Email"
              />
            </div>
            <div className="w-full flex flex-col font-primaryFont font-thin">
              <label htmlFor="" className="mb-2">
                Number
              </label>
              <input
                type="number"
                required
                className="border border-black p-2 focus:outline-none"
                placeholder="Number"
              />
            </div>
          </div>

          <hr className="text-[#DFDFDF] w-full  my-10 mx-10  border-solid border-[1px]" />

          <div className="w-full">
            <div className="w-full flex flex-col font-primaryFont font-thin">
              <label htmlFor="" className="mb-2">
                Comment here
              </label>
              <textarea
                type="text"
                required
                className="border border-black p-2 h-[20vh]"
                placeholder="Leave a Message ........."
              />
            </div>
          </div>


          <div className="w-full mt-10 flex items-center justify-center">
            <button className="bg-black text-white p-3 px-5 font-primaryFont tracking-wider text-xl">Send Now</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
