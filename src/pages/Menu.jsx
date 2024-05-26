import FlavorItems from "../components/menu/FlavorItems"
import FlavorManner from "../components/menu/FlavorManner"
import { menuOptions } from "../utils/Data"


const Menu = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full mb-40">
      <FlavorManner titleOne={"OUR"} titleTwo={"MENU"} backgroundCol={'#afe2d1'}/>
      <FlavorItems title={"Salads"} menuOptions={menuOptions}/>
      <FlavorItems title={"Smoothie "} menuOptions={menuOptions}/>
    </div>
  )
}

export default Menu