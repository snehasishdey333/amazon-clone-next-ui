import React from 'react'
import CategoryCard from './CategoryCard'
import { cards } from '@/data/data'

const Categories = () => {
  return (
    
    <div className='grid grid-cols-2 md:grid-cols-4 gap-4 place-items-center md:p-6 p-3 mt-16 md:mt-0'>
       {cards.map((c,index)=>(
        <CategoryCard props={c} key={index}/>
       ))}
    </div>
  )
}

export default Categories