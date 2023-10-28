import ProductCard from '@/components/Product/ProductCard'
import { products } from '@/data/data'
import Image from 'next/image'
import React from 'react'
import {AiTwotoneLock} from 'react-icons/ai'

const ProductPage = () => {
  

  return (
    <div className='w-full flex flex-col mt-16 space-y-16 md:space-y-0'>
<div className='p-4 w-full flex flex-col md:flex-row items-center md:items-start gap-8 min-h-screen'>
    <div className='w-full md:w-[40%] flex items-center justify-center'>
    <Image className="" src="https://m.media-amazon.com/images/I/51f4HVnR4eL._SX679_.jpg" alt="" height={500} width={500}/>
    </div>
       
       <div className='flex flex-col space-y-2 items-start w-full md:w-[40%]'>
          <h1 className='font-normal text-2xl'>Maybelline New York Matte Lipstick, Intense Colour, Moisturised Lips, Color Sensational Creamy Matte, 695 Divine Wine, 3.9g</h1>
          <p>5⭐</p>
          <div/>
          <div className='w-full'><p className='text-xs font-light'>$<span className='font-semibold text-3xl'>200</span></p></div>
          <p>FREE delivery</p>
          <p className='text-sm'>Lorem Ipsum has been crambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          <div className='w-full p-2 flex flex-row items-center space-x-4'>
           <div className='flex flex-col items-center space-y-3 h-20 w-20'>
            <Image src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/trust_icon_free_shipping_81px._CB630870460_.png" alt="" className='h-8 w-8' height={50} width={50}/>
            <p className='text-sm text-[#007185] text-center'>Free Delivery</p>
           </div>
           <div className='flex flex-col items-center space-y-3 h-20 w-20'>
            <Image src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-top-brand._CB617044271_.png" alt="" className='h-8 w-8' height={50} width={50}/>
            <p className='text-sm text-[#007185] text-center'>Top Brand</p>
           </div>
           <div className='flex flex-col items-center space-y-3 h-20 w-20'>
            <Image src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png" alt="" className='h-8 w-8' height={50} width={50}/>
            <p className='text-sm text-[#007185] text-center'>Easy Returns</p>
           </div>
           <div className='flex flex-col items-center space-y-3 h-20 w-20'>
            <Image src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-amazon-delivered._CB485933725_.png" alt="" className='h-8 w-8' height={50} width={50}/>
            <p className='text-sm text-[#007185] text-center'>Amazon Delivered</p>
           </div>
           <div className='flex flex-col items-center space-y-3 h-20 w-20'>
            <Image src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/Secure-payment._CB650126890_.png" alt="" className='h-8 w-8' height={50} width={50}/>
            <p className='text-sm text-[#007185] text-center'>Secure transaction</p>
           </div>
          </div>
       </div>

       <div className='w-full md:w-[20%] flex flex-col items-start border rounded-lg border-gray-300 p-4 space-y-3'>
       <div className='w-full'><p className='text-xs font-light'>$<span className='font-semibold text-3xl'>200</span></p></div>
         <p>FREE delivery</p>
         <p className='text-[#007600] text-lg font-semibold'>In Stock</p>
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
         <button className='text-sm bg-[#ffd814] hover:bg-[#ffa41c] w-full rounded-xl py-2'>Add to Cart</button>
         <div className='flex items-center space-x-2'>
          <p className='text-gray-400'><AiTwotoneLock/></p>
          <p className='text-sm text-[#007185]'>Secure Transaction</p>
         </div>
       </div>
    </div>
    <div className='flex flex-col items-start px-3'>
      <h1>Products related to this item</h1>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-4 place-items-center p-8 mt-2'>
        {products.slice(0,4).map((p,index)=>(
            <ProductCard key={index} props={p}/>
        ))}
    </div>
    </div>
    </div>
    
  )
}

export default ProductPage