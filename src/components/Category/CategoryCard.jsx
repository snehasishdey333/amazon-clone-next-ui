import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CategoryCard = ({props}) => {
  return (
    <div className='md:w-[350px] md:h-[400px] flex flex-col bg-white space-y-2 items-center p-2'>
    <div className='w-full'>
    <h1 className='text-lg font-bold'>{props.title}</h1>
    </div>
     
     <Image src={props.img} alt="" height={300} width={300} className="h-[300px] w-[300px] object-cover"/>

     <div className='w-full'>
     <Link href={props.title} className='text-[#007185] hover:text-[#c7511f] text-xs'>Shop now</Link>
     </div>
    </div>
  )
}

export default CategoryCard