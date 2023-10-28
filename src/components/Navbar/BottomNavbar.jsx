import { categories } from '@/data/data'
import React from 'react'
import Category from './Category'

const BottomNavbar = () => {
  return (
    <>
    <div className='md:hidden w-full bg-[#232f3e] py-2 flex items-center justify-start text-sm px-3'>
       {categories.slice(0,6).map((c,index)=>(
        <Category c={c} index={index}/>
       ))}
    </div> 

      <div className='hidden w-full bg-[#232f3e] py-2 md:flex items-center justify-start text-sm px-3'>
       {categories.map((c,index)=>(
        <Category c={c} index={index}/>
       ))}
    </div>
    </>
    
  )
}

export default BottomNavbar