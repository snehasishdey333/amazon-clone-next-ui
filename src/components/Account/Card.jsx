import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Card = ({label,image,desc,href}) => {
  return (
    <div className='h-[100px] w-[300px] p-3 rounded-xl border border-gray-300 flex flex-row items-center space-x-2 cursor-pointer'>
        <Link href={href} className='w-[25%]'>
            <Image className="w-full" src={image} alt="" height={100} width={100}/>
        </Link>
        <div className='w-[75%] flex flex-col items-start p-2'>
            <Link href={href} className='text-base'>{label}</Link>
            <Link href={href} className='text-[#abaaaa] text-sm'>{desc}</Link>
        </div>
    </div>
  )
}

export default Card