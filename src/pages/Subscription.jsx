import FlavorManner from "../components/menu/FlavorManner";
import SubscriptionPlans from "../components/subscription/SubscriptionPlans";
import side1 from "../assets/subscription/bg2.png";
import side2 from "../assets/subscription/2.png";
import side3 from "../assets/subscription/bg1.png";

import product2 from "../assets/products/pro2.jpg";
import product3 from "../assets/products/pro3.jpg";
import product4 from "../assets/products/pro4.jpg";
import { useEffect } from "react";

const Subscription = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="flex flex-col items-center justify-center w-full ">
      <FlavorManner
        titleOne={"New"}
        titleTwo={"Subscription"}
        backgroundCol={"#FFB996"}
      />

      <div className="w-full ">
        <SubscriptionPlans
          img={side1}
          mobImg={product2}
          imagePosition={"left"}
          color={"#FFB996"}
          content={{
            title: "Doubled Indulgence",
            subTitle: "Relish your favorites for 30 days straight",
            subHeading: "Two rounds of delight",
            description: `Revisit the flavors that made your first 15 days deliciously memorable`,
          }}
          rate={"7500"}
          height={"800"}
        />
        <SubscriptionPlans
          img={side3}
          mobImg={product3}
          imagePosition={""}
          color={"white"}
          content={{
            title: "Savor for the week:",
            subTitle: "A salad for everyday",
            subHeading: "7 day plan",
            description: ``,
            list: [
              {
                title: "day1",
                content: `Panner inferno salad bowl`
              },
              {
                title: "day2",
                content: `Sesame chicken salad`
              },
              {
                title: "day3",
                content: `Mexican paneer salad`
              },
              {
                title: "day4",
                content: `Southwest chicken salad`
              },
              {
                title: "day5",
                content: `Honey Chicken salad`
              },
              {
                title: "day6",
                content: `Chicken paneer salad`
              },
              {
                title: "day7",
                content: `BBQ chicken salad`
              },
            ]
          }}
          rate={"1820"}
          height={"800"}
        />

        <SubscriptionPlans
          img={side1}
          mobImg={product4}
          imagePosition={"left"}
          color={"#C6EBC5"}
          content={{
            title: "A culinary calendar",
            subTitle: "15 days of satisfying eats",
            subHeading: "15 day plan",
            description: ``,
            list: [
              {
                title: "day1",
                content: `Panner inferno salad bowl`
              },
              {
                title: "day2",
                content: `Sesame chicken salad`
              },
              {
                title: "day3",
                content: `Mexican paneer salad`
              },
              {
                title: "day4",
                content: `Southwest chicken salad`
              },
              {
                title: "day5",
                content: `Honey Chicken salad`
              },
              {
                title: "day6",
                content: `Chicken paneer salad`
              },
              {
                title: "day7",
                content: `BBQ chicken salad`
              },
              {
                title: "day8",
                content: `Pita bowl with hummus`
              },
              {
                title: "day9",
                content: `classic ceaser salad`
              },
              {
                title: "day10",
                content: `shakshuka with garlic bread`
              },
              {
                title: "day11",
                content: `Chicken and quinoa curry with rice`
              },
              {
                title: "day12",
                content: `Honey Chicken salad`
              },
              {
                title: "day13",
                content: `Red wine vinaigrette salad`
              },
              {
                title: "day14",
                content: `Rice n rice combo with a choice of juice`
              },
              {
                title: "day15",
                content: `buffalo chicken salad`
              },
            ]
          }}
          rate={"3825"}

        />
      </div>
    </div>
  );
};

export default Subscription;
