import React from "react";
import cover from "../../assets/menu/0D8A9899.jpg";

const AboutContent = () => {
  return (
    <div className=" min-h-screen flex flex-col items-center mb-48">
      {/*  ----1st section----- */}
      <div className="mt-14 text-center ">
        <p className="text-3xl leading-tight">
          OUR <br />
          PLACE
        </p>
      </div>
      <div>
        <h4 className="mt-5 text-center text-2xl">
          We just love healthy <br /> salads!
        </h4>
      </div>
      <div className="mt-9 text-center max-w-3xl leading-6 sm:leading-8 sm:tracking-wide mx-16 text-[14px] sm:text-[16px]">
        <p>
          I'm a paragraph. Click here to add your own text and edit me. It's
          easy. Just click "Edit Text" or double click me to add your own
          content and make changes to the font. Feel free to drag and drop me
          anywhere you like on your page. I'm a great place for you to tell a
          story and let your users know a little more about you.
        </p>
        <p className="mt-6">
          This is a great space to write long text about your company and your
          services. You can use this space to go into a little more detail about
          your company. Talk about your team and what services you provide. Tell
          your visitors the story of how you came up with the idea for your
          business and what makes you different from your competitors. Make your
          company stand out and show your visitors who you are.
        </p>
      </div>

      {/* -----Image section----- */}
      <div className="h-full w-full mt-16 ">
        <img src={cover} alt="" className="max-w-8xl"/>
      </div>

      {/* -------2nd section---- */}
      <div className="mt-14 text-center ">
        <p className="text-3xl leading-tight">
          OUR LITTLE <br /> KITCHEN!
        </p>
      </div>
      <div className="mt-5">
        <h4 className="mt-5 text-center text-2xl">
          It's whats on the inside that <br /> counts!
        </h4>
      </div>
      <div className="mt-9 text-center max-w-3xl leading-6 sm:leading-8 sm:tracking-wide mx-16 text-[14px] sm:text-[16px]">
        <p>
          I'm a paragraph. Click here to add your own text and edit me. It's
          easy. Just click "Edit Text" or double click me to add your own
          content and make changes to the font. Feel free to drag and drop me
          anywhere you like on your page. I'm a great place for you to tell a
          story and let your users know a little more about you.
        </p>
        <p className="mt-6">
          This is a great space to write long text about your company and your
          services. You can use this space to go into a little more detail about
          your company. Talk about your team and what services you provide. Tell
          your visitors the story of how you came up with the idea for your
          business and what makes you different from your competitors. Make your
          company stand out and show your visitors who you are.
        </p>
      </div>
    </div>
  );
};

export default AboutContent;
