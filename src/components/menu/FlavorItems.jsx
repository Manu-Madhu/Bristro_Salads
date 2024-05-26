import { menuOptions } from "../../utils/Data.js"

const FlavorItems = () => {
  return (
    <div className=' min-h-screen flex flex-col items-center'>
      <div className='mt-14 text-center '>
        <p className='text-lg leading-tight'>ICE CREAM <br />FLAVORS</p>
      </div>
      
      <div className='mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-center max-w-4xl mb-10'>
        {menuOptions.map((item) => (
        <a key={item.id} href="#" className='flex flex-col items-center  text-center'>
            <img src={item.img} alt="" className='w-[250px] h-[250px] rounded-full object-cover '/>
            <p className='text-lg mt-3'>{item.name}</p>
            <p className='w-3/4 text-sm mt-2'>{item.description}</p>
            <p className='mt-3'>{item.price}</p>
        </a>
       
      ))}

      </div>
    </div>
  )
}

export default FlavorItems
