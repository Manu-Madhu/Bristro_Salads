import AboutContent from "../components/AboutUs/AboutContent.jsx";
import FlavorManner from "../components/menu/FlavorManner.jsx";

const AboutUs = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <FlavorManner
        titleOne={"ABOUT"}
        titleTwo={"BRISTO"}
        backgroundCol={"#C3A9D4"}
      />
      <AboutContent />
    </div>
  );
};

export default AboutUs;
