import React from 'react'
import { BsSearch } from 'react-icons/bs'

const SearchInput = () => {
  return (
    <div className='flex items-center rounded-lg h-[35px] md:h-[40px] w-[250px] md:w-[800px]'>
        <input placeholder='Search Amazon' type="text" className='outline-none h-full p-2 rounded-l-lg placeholder:text-sm w-[750px]'/>
        <button className='bg-[#febd69] hover:bg-[#f3a847] h-full p-2 rounded-r-lg w-[50px]'><div className='w-full h-full flex items-center justify-center'><BsSearch/></div></button>
    </div>
  )
}

export default SearchInput