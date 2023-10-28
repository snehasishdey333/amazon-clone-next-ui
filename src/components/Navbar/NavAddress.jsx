import React from 'react'
import { TfiLocationPin } from 'react-icons/tfi'

const NavAddress = () => {
  return (
    <div className='hidden md:flex items-center space-x-1 text-white w-[150px]'>
         <p className='text-white'><TfiLocationPin/></p>
         <div className='text-xs'>
            <p>Deliver to John</p>
            <p className='font-bold'>Birpara,735204</p>
         </div>
       </div>
  )
}

export default NavAddress