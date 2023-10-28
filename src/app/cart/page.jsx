import CartItem from '@/components/Cart/CartItem'
import React from 'react'

const CartPage = () => {
  return (
    <div className='py-8 px-10 min-h-[80vh] w-full bg-[#eaeded]'>
    
    <div className='w-full flex md:flex-row flex-col-reverse md:space-x-6'>
    <div className=' w-full md:w-[80%] flex flex-col items-start'>
    <h1 className='text-3xl bg-white w-full p-4'>Shopping Cart</h1>
        <CartItem/>
        <CartItem/>
        <CartItem/>
        <CartItem/>
      </div>
      <div className='flex flex-col  justify-center items-center space-y-4 p-4 md:w-[20%] h-[200px] bg-white mb-8  md:mb-0'>
        <p>Subtotal (6 items):  <span className='font-semibold'>$1200</span> </p>
        <button className='bg-[#ffd814] rounded-lg hover:bg-[#f7ca00] text-sm py-1 w-full'>Proceed to Buy</button>
      </div>
    </div>
      
    </div>
  )
}

export default CartPage