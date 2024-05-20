import LandingPage from "../components/home/LandingPage";
import SecondPart from "../components/home/CommonPart";
import product1 from "../assets/products/pro1.jpg";
import product2 from "../assets/products/pro2.jpg";
import product3 from "../assets/products/pro3.jpg";

const Home = () => {
  return (
    <div>
      <LandingPage />
      <SecondPart
        img={product1}
        imagePosition={"left"}
        content={{
          title: "OUR FLAVORS",
          subHeading: "Fresh n Tasty!",
          description:
            "I m a paragraph. Click here to add your own text and edit me. It s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.",
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
    </div>
  );
};

export default Home;
