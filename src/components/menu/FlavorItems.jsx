import React from 'react'
import item1 from '../../assets/menu/salad1.jpg'

const FlavorItems = () => {
  return (
    <div className='container min-h-screen flex flex-col items-center'>
      <div className='mt-14 text-center '>
        <p className='text-lg leading-tight'>ICE CREAM <br />FLAVORS</p>
      </div>
      <div className='mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-center max-w-4xl mb-10'>
        <a href="" className='flex flex-col items-center  text-center'>
            <img src={item1} alt="" className='w-28 h-28 rounded-full  '/>
            <p className='text-lg mt-3'>Chicken Salad</p>
            <p className='w-3/4 text-sm mt-2'>Give a description about the item in your menu.A brief description</p>
            <p className='mt-3'>9.00</p>
        </a>
        <a href="" className='flex flex-col items-center  text-center '>
        <img src={item1} alt="" className='w-28 h-28 rounded-full  '/>
            <p className='text-lg mt-3'>Chicken Salad</p>
            <p className='w-3/4 text-sm mt-2'>Give a description about the item in your menu.A brief description</p>
            <p className='mt-3'>9.00</p>
        </a>
        <a href="" className='flex flex-col items-center  text-center '>
        <img src={item1} alt="" className='w-28 h-28 rounded-full  '/>
            <p className='text-lg mt-3'>Chicken Salad</p>
            <p className='w-3/4 text-sm mt-2'>Give a description about the item in your menu.A brief description</p>
            <p className='mt-3'>9.00</p>
        </a>
        <a href="" className='flex flex-col items-center  text-center  mt-5'>
        <img src={item1} alt="" className='w-28 h-28 rounded-full  '/>
            <p className='text-lg mt-3'>Chicken Salad</p>
            <p className='w-3/4 text-sm mt-2'>Give a description about the item in your menu.A brief description</p>
            <p className='mt-3'>9.00</p>
        </a>
        <a href="" className='flex flex-col items-center  text-center  mt-5'>
        <img src={item1} alt="" className='w-28 h-28 rounded-full  '/>
            <p className='text-lg mt-3'>Chicken Salad</p>
            <p className='w-3/4 text-sm mt-2'>Give a description about the item in your menu.A brief description</p>
            <p className='mt-3'>9.00</p>
        </a>
        <a href="" className='flex flex-col items-center  text-center mt-5'>
        <img src={item1} alt="" className='w-28 h-28 rounded-full  '/>
            <p className='text-lg mt-3'>Chicken Salad</p>
            <p className='w-3/4 text-sm mt-2'>Give a description about the item in your menu.A brief description</p>
            <p className='mt-3'>9.00</p>
        </a>
        
      </div>
    </div>
  )
}

export default FlavorItems
