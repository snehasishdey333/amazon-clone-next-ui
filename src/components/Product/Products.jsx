import { products } from '@/data/data'
import React from 'react'
import ProductCard from './ProductCard'

const Products = () => {
  return (
    <>
    <h1 className='px-8 text-2xl font-bold mt-12'>Featured Products</h1>
    <div className='grid grid-cols-1 md:grid-cols-5 gap-4 place-items-center p-8 mt-2'>
        {products.map((p,index)=>(
            <ProductCard key={index} props={p}/>
        ))}
    </div>
    </>
    
  )
}

export default Products