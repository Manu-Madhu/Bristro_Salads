import LandingPage from "../components/home/LandingPage";
import SecondPart from "../components/home/CommonPart";
import product1 from "../assets/products/pro1.jpg";
import product2 from "../assets/products/pro2.jpg";
import product3 from "../assets/products/pro3.jpg";
import product4 from "../assets/products/pro4.jpg";
import HorizontalPart from "../components/home/HorizontalPart";
// import banner from "../assets/home/Banner1.jpg";
import banner2 from "../assets/home/Banner2.png";
// import banner3 from "../assets/home/Banner3.jpg";
// import img1 from "../assets/menu/0D8A9866.jpg";
// import Slider from "react-slick";
import { CarousalData } from "../utils/Data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 6,
  //   slidesToScroll: 1,
  // };

  return (
    <div>
      <LandingPage />
      <SecondPart
        img={product4}
        imagePosition={"left"}
        content={{
          title: "OUR FLAVORS",
          subHeading: "Fresh n Tasty!",
          description:
            "I m a paragraph. Click here to add your own text and edit me. It s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.",
        }}
      />

      <HorizontalPart
        img={"https://juzastorage.s3.ap-southeast-2.amazonaws.com/test/Banner1.jpg"}
        data={{
          top: "ENJOY",
          title: "DAIRY FREE",
          button: "MENU",
          link: "/menu",
        }}
      />
      {/* 3rd Part */}
      <SecondPart
        img={product2}
        imagePosition={"right"}
        content={{
          title: "OUR FLAVORS",
          subHeading: "Fresh n Tasty!",
          description:
            "I m a paragraph. Click here to add your own text and edit me. It s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.",
        }}
      />
      <HorizontalPart
        img={banner2}
        data={{
          top: "GET YOURS",
          title: "we deliver",
          button: "ORDER ONLINE",
          link: "/menu",
          color:"#FFBFB3"
        }}
      />
      {/* 4th part */}
      <SecondPart
        img={product3}
        imagePosition={"left"}
        content={{
          title: "OUR FLAVORS",
          subHeading: "Fresh n Tasty!",
          description:
            "I m a paragraph. Click here to add your own text and edit me. It s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.",
        }}
      />
      <HorizontalPart img={"https://juzastorage.s3.ap-southeast-2.amazonaws.com/test/Banner3.jpg"} data={{}} />

      <div className="flex flex-col items-center justify-center w-full overflow-hidden">
        <div className="py-10 max-w-[1280px] mx-auto ">
          <h1 className="font-primaryFont text-[#2F2E2E] text-4xl tracking-wide">
            #DOUBLE TAP
          </h1>
        </div>
        <div className="w-full flex items-start overflow-x-scroll ">
          {/* <img src={img1} alt="pics" className="w-[100px] h-[100px] object-cover" />
            <img src={img1} alt="pics" className="w-[100px] h-[100px] object-cover" />
            <img src={img1} alt="pics" className="w-[100px] h-[100px] object-cover" />
            <img src={img1} alt="pics" className="w-[100px] h-[100px] object-cover" /> */}
          {/* <Slider {...settings}> */}
          {CarousalData.map((items) => (
            <div key={items?.id} className="min-w-[350px]  h-[250px]">
              <img
                key={items?.id}
                src={items?.img}
                alt="pics"
                className=" w-full h-full object-cover"
              />
            </div>
          ))}
          {/* </Slider> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
