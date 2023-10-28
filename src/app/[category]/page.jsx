import ProductCard from '@/components/Product/ProductCard'
import { products } from '@/data/data'
import React from 'react'

const CategoryPage = () => {
  return (
    <div className='min-h-screen w-full flex flex-col md:flex-row'>
       <div className='w-full md:w-[20%] h-full flex flex-col items-start p-2'>
           <h1>1440 Results</h1>
       </div> 
       <div className='w-full md:w-[80%] h-full'>
       <div className='grid grid-cols-1 md:grid-cols-4 gap-4 place-items-center p-8 mt-2'>
        {products.map((p,index)=>(
            <ProductCard key={index} props={p}/>
        ))}
    </div>
       </div>
    </div>
  )
}

export default CategoryPage