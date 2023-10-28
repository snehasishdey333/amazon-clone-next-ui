import Products from '@/components/Product/Products'
import React from 'react'
import {TiTick} from 'react-icons/ti'

const Congratulations = () => {
  return (
    <div className="w-full p-3">
    <div className='border-2 border-green-500 w-full p-3 rounded-md space-y-2'>
      <div className='flex flex-row items-center space-x-3'>
        <p className='font-bold text-green-600 text-xl'><TiTick/></p>
        <p className='font-bold text-green-600 text-xl'>Thank you, your order has been placed.</p>
      </div>
      <p>An email confirmation has been sent to you.</p>
      <p>Order number: 248623742137</p>
      <p className='font-bold text-sm'>Guranteed delivery: <span className='text-green-500'>26th December, 2023</span> </p>
      <p className='text-blue-500 text-sm'>Review or edit your order  </p>
    </div>
    <Products/>
    </div>
  )
}

export default Congratulations