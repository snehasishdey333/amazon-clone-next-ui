import Link from 'next/link'
import React from 'react'

const Menu = () => {
  return (
    <div className='z-10 top-12 right-4 absolute bg-white space-y-1 rounded-md w-[250px] shadow-lg shadow-gray-300 flex flex-col px-6 py-4 items-start text-black'>
        <h1 className='font-bold text-lg'>Your Account</h1>
        <Link className="text-sm hover:text-[#e47911]" href="/account">Account</Link>
        <Link className="text-sm hover:text-[#e47911]" href="/cart">Cart</Link>
        <Link className="text-sm hover:text-[#e47911]" href="/orders">Your Orders</Link>
        <Link className="text-sm hover:text-[#e47911]" href="/">Sign Out</Link>
    </div>
  )
}

export default Menu