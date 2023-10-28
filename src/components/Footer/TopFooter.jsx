import React from 'react'

const TopFooter = () => {
  return (
    <div className='bg-[#232f3e] w-full px-3 md:px-[300px] flex md:flex-row flex-col space-y-4 md:space-y-0 justify-between items-start py-8'>
      <div className='flex flex-col items-start space-y-2 text-white text-xs md:text-sm '>
         <p className='font-bold'>Get to know us</p>
         <p>About us</p>
         <p>Careers</p>
         <p>Amazon Science</p>
      </div>
      <div className='flex flex-col items-start space-y-2 text-white text-xs md:text-sm '>
         <p className='font-bold'>Connect with us</p>
         <p>Facebook</p>
         <p>Twitter</p>
         <p>Instagram</p>
      </div>
      <div className='flex flex-col items-start space-y-2 text-white text-xs md:text-sm '>
         <p className='font-bold'>Get to know us</p>
         <p>Sell on Amazon</p>
         <p>Become an affiliate</p>
         <p>Advertise your products</p>
         <p>Amazon pay</p>
      </div>
      <div className='flex flex-col items-start space-y-2 text-white text-xs md:text-sm '>
         <p className='font-bold'>Let us help you</p>
         <p>Returns Center</p>
         <p>Your Account</p>
      </div>
    </div>
  )
}

export default TopFooter