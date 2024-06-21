import LandingPage from "../components/home/LandingPage";
import SecondPart from "../components/home/CommonPart";
// import product1 from "../assets/products/pro1.jpg";
import product2 from "../assets/products/pro2.jpg";
import product3 from "../assets/products/pro3.jpg";
import product4 from "../assets/products/pro4.jpg";
import HorizontalPart from "../components/home/HorizontalPart";
import banner from "../assets/home/Banner1.jpg";
import banner2 from "../assets/home/Banner2.png";
import video from '../assets/home/video.mp4'
// import banner3 from "../assets/home/Banner3.jpg";
// import img1 from "../assets/menu/0D8A9866.jpg";
// import Slider from "react-slick";
import { CarousalData } from "../utils/Data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FinalPart from "../components/home/FinalPart";

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
          title: "Who we are",
          button: 'false',
          subHeading: "Trivandrum’s top fresh and flavorful salad spot!",
          description: `Welcome to the salad bistro where healthy eating is made simple.
          Founded by Vrinda Vinod and her sister Varsha Vinod, our kitchen is a labor of love born from a desire to make nutritious eating easy and enjoyable.
          
          With our carefully crafted menu of fresh, wholesome dishes, we're here to take the guesswork out of healthy eating. From vibrant salads to hearty mains 
          and guilt-free desserts, each item is designed to nourish your body and tantalize your taste buds. Join us as we redefine what it means to eat well, one delicious meal at a time!`,
        }}
        
      />

      <HorizontalPart
        img={banner}
        video={video}
        data={{
          // top: "ENJOY",
          title: "Treat Yourself!",
          button: "ORDER NOW",
          link: "/menu",
        }}
      />

      {/* 3rd Part */}
      <SecondPart
        img={product2}
        imagePosition={"right"}
        content={{
          title: "What makes Salad Bistro special",
          subHeading: "Fresh n Tasty!",
          button:'true',
          link:"/menu",
          buttonName: "OUR PLATES",
          description:
            `I m a paragraph. Click here to add your own text and edit me. It s easy. Just click “Edit Text” or double click me to add your own 
            content and make changes to the font.`,
        }}
      />
      
      <HorizontalPart
        img={banner}
        data={{
          top: "GET YOURS",
          title: "we deliver",
          button: "SUBSCRIBE NOW",
          link: "/subscription",
          color: "#FFBFB3",
        }}
      />

      {/* 4th part */}
      <SecondPart
        img={product3}
        imagePosition={"left"}
        content={{
          title: "BEST HEALTHY FOOD CENTER",
          button:'true',
          subHeading: "Celebrating Our Achievement",
          link:"/contact-us",
          buttonName: "CONTACT US",
          description:
           `Salad Bistro was honored to receive the prestigious Metro Food Award for "Best Healthy Food Center"! This 
           award recognized our dedication to providing delicious and nutritious meals that promote wellness. We are grateful 
           to our loyal customers and hardworking team whose support was essential in achieving this recognition.`,
        }}
      />


      <FinalPart
        img={
          "https://juzastorage.s3.ap-southeast-2.amazonaws.com/test/Banner3.jpg"
        }
        data={{}}
      />

      <div className="flex flex-col items-center justify-center w-full overflow-hidden">
        <div className="py-10 max-w-[1280px] mx-auto ">
          <h1 className="font-primaryFont text-[#2F2E2E] text-4xl tracking-wide">
            #DOUBLE TAP
          </h1>
        </div>
        <div className="w-full flex items-start overflow-x-scroll ">
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
        </div>
      </div>
    </div>
  );
};

export default Home;
