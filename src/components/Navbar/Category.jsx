

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const Category = ({c,index}) => {
  
  return (
    <Link href={"/?category="+c.label.toString().toLowerCase()}  key={index} className='text-white px-2'>{c.label}</Link>
  )
}

export default Category