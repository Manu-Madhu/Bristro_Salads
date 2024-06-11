import FlavorItems from "../components/menu/FlavorItems";
import FlavorManner from "../components/menu/FlavorManner";
import { menuOptions } from "../utils/Data";

const Menu = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full mb-40">
      <FlavorManner
        titleOne={"OUR"}
        titleTwo={"MENU"}
        backgroundCol={"#afe2d1"}
      />
      {menuOptions.map((items) => (
        < FlavorItems key={items?.id} data={items} />
      ))}
    </div>
  );
};

export default Menu;
