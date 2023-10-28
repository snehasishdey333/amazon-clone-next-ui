import Image from 'next/image'
import React from 'react'

const OrderItem = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
    <div className='h-[1px] bg-gray-300 w-full'/>
<div className='md:h-[200px] w-full flex flex-row bg-white p-4'>
      <Image className="h-[180px] w-[180px] p-2" src="https://m.media-amazon.com/images/I/412O3J+Av7L._AC_AA360_.jpg" alt="" height={100} width={100}/>
      <div>
        <h1 className='w-[80%]'>Maybelline New York Lipstick, Matte Finish, Bold Colour, Enriched With Jojoba Oil, Color Sensational Ultimattes, 599 More Mauve, 1.7 g</h1>
        <p>$200</p>
        <p>In Stock</p>
        <p>Color: Red</p>
        <div className='flex flex-row space-x-3 items-center'>
        <div className='flex space-x-2 flex-row items-center justify-center'>
          <p className='text-sm'>Quantity</p>
          <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
         </div>
         <button>Cancel Order</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default OrderItem