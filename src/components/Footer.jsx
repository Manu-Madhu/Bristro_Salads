import React from 'react'
import logo2 from '../assets/Logo 1.png'


const Footer = () => {
  return (
    <div className='bg-black'>
      <footer>
        <div className='p-20 text-white'>
          <div className='max-w-7xl mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 ml-24 mr-24  tracking-wider'>
              <div className='mb-5'>
                  <h4 className='text-base pb-3'>ADDRESS</h4>
                  <p className='leading-tight'>Salad bistro,<br />
                Trivandrum,<br />
                PIN 695121</p>
              </div>
              <div className='mb-5'>
                  <h4 className='text-base pb-3'>CONTACT</h4>
                  <p>thesaladbistro@gmail.com
                  <br />
                  Tel: 7892252032</p>
              </div>
              <div className='mb-5'>
                  <h4 className='text-base pb-3'>HOURS</h4>
                  <p>OPEN DAILY
                  <br />
                  10AM-10PM</p>
              </div>
              <div className='mb-5'>
                <h2 className='text-base pb-3'>MAILING LIST</h2>
                <form className='flex flex-col space-y-3'>
                  <input type="text" placeholder='Enter your email here*' className='w-full p-1.5 pl-5 bg-transparent p-2 border'/>
                  <button className='text-center p-1.5 border'>SUBSCRIBE</button>
                </form>
              </div>
            </div>
            <div className='ml-20 flex'>
              <img src={logo2} alt="" className='w-28 h-28'/>
              </div>
            <div>
              <p className='ml-24   tracking-wider'>©2024 by Salad Bistro. Powered and secured by Manu M</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer