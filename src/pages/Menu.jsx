import FlavorItems from "../components/menu/FlavorItems"
import FlavorManner from "../components/menu/FlavorManner"


const Menu = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <FlavorManner/>
      <FlavorItems/>
    </div>
  )
}

export default Menu