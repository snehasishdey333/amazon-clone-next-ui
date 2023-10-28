import Image from 'next/image'
import React from 'react'

const ProductCard = ({props}) => {
  return (
    <div className="w-full md:w-[290px] md:h-[600px] flex flex-col items-start bg-white p-6 space-y-2">
     <Image className="w-full " src={props.image} alt="" height={500} width={500}/>
     <div><h1 className='font-semibold mt-4'>{props.title}</h1></div>
     <p>{props.rating}⭐</p>
     <div className='w-full'><p className='text-xs font-light'>$<span className='font-bold text-3xl'>{props.price}</span></p></div>
     <div className='w-full'><button className='bg-[#ffd814] hover:bg-[#f0b800] rounded-lg text-xs px-2 py-2'>Add to Cart</button></div>
    </div>
  )
}

export default ProductCard