"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import {TfiLocationPin} from 'react-icons/tfi'
import {BsCart} from 'react-icons/bs'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import SearchInput from './SearchInput'
import NavAddress from './NavAddress'
import Link from 'next/link'
import Menu from '../Menu/Menu'

const TopNavbar = () => {

  const user=true
  const [menu,setMenu]=useState(false)
  const toggleMenu=()=>{
    setMenu(prev=>!prev)
  }

  return (
    <div className='w-full px-3 py-2 flex justify-between items-center bg-[#131921]'>

       <Link href="/" className='w-[50px] md:w-[100px]'>
        <Image className="" src="/AMAZON.png" alt="logo" height={50} width={100}/>
       </Link>

       <NavAddress/>

       <SearchInput/>

       <div className='md:w-[50px]'>
        <p className='md:text-lg font-semibold capitalize text-white'>EN</p>
       </div>

       <div onClick={toggleMenu} className='hidden relative md:flex flex-col items-start w-[150px] text-white text-sm cursor-pointer'>
         {user?<p>Hello, Snehasish</p>:<p>Hello, Sign in</p>}
         <p className='font-semibold'>Accounts & Lists</p>
         {menu && <Menu/>}
       </div>

       <Link href="/orders" className='hidden md:block w-[100px]'>
        <p className='text-white text-sm'>Returns <span className='font-semibold'>& Orders</span></p>
       </Link>

       <div className='flex items-center space-x-1 w-[80px] cursor-pointer'>
         <div className='relative flex flex-col items-center space-y-0'>
            <p className='text-[#f08804] font-bold absolute left-1 bottom-3'>6</p>
            <p className='text-white font-bold text-lg'><BsCart/></p>
         </div>
         <p className='text-sm md:text-base font-semibold text-white'>Cart</p>
       </div>
    </div>
  )
}

export default TopNavbar