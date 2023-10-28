import Image from 'next/image'
import React from 'react'

const AddressCard = () => {
    
  return (
    <div className='w-[320px] h-[250px] border-2 border-gray-300 rounded-lg flex flex-col items-start justify-between p-3'>
    <div className='w-full flex items-center space-x-2'>
    <p className='text-sm text-gray-400'>Default:</p> 
     <Image src="/logo.png" alt="logo" height={30} width={30}/>
    </div>
    <div className='flex flex-col items-start text-sm'>
    <h1 className='font-bold'>Snehasish Dey</h1>
        <p>Saradapally,Birpara,dist:Alipurduar</p>
        <p>Birpara</p>
        <p>Near Dooards nursing home</p>
        <p>PIN:735204</p>
        <p>+91 2637163176</p>
    </div>
    <div className='flex flex-row items-center space-x-3 text-sm'>
      <p className='hover:text-[#c7511f] text-sm text-blue-500 cursor-pointer'>Remove</p>
      <p className='hover:text-[#c7511f] text-sm text-blue-500 cursor-pointer'>Set as default</p>
    </div>
        
    </div>
  )
}

export default AddressCard