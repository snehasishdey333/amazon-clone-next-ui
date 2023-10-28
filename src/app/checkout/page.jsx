import AddressSelect from '@/components/Address/AddressSelect'
import React from 'react'

const Checkout = () => {
  return (
    <div className='w-full p-4 px-10 my-8 min-h-[60vh] max-w-7xl mx-auto'>
        <h1 className='text-[#c45500] text-xl font-bold'>1. Select a delivery address</h1>
        <div className=' flex flex-col space-y-8 md:space-y-0 md:flex-row mt-2  items-start space-x-6'>
    
    <div className='md:w-[75%] p-4 rounded-lg  flex flex-col items-start space-y-4'>
      {/* <input className='w-full p-2 outline-none' placeholder='Enter your name' type="text" />
      <input className='w-full p-2 outline-none' placeholder='Enter your Phone Number' type="number" />
      <input className='w-full p-2 outline-none' placeholder='Enter your Address' type="text" />
      <input className='w-full p-2 outline-none' placeholder='Enter Landmark' type="text" />
      <input className='w-full p-2 outline-none' placeholder='Enter your City' type="text" />
      <input className='w-full p-2 outline-none' placeholder='Enter your State' type="text" />
      <input className='w-full p-2 outline-none' placeholder='Enter Pincode' type="number" />
      <button className='bg-[#ffd814] rounded-lg hover:bg-[#f7ca00] text-sm py-2 w-full'>Add Address</button> */}
      <div className='w-full border border-gray-300 p-4 space-y-2 flex flex-col items-start rounded-lg'>
      <p className='font-bold'>Your addresses</p>
      <div>
      <AddressSelect/>
      <AddressSelect/>
      <AddressSelect/>
      <AddressSelect/>
      <AddressSelect/>
      <AddressSelect/>
      <AddressSelect/>
      </div>
      </div>
      <div className='w-full h-[1px] bg-gray-300'/>
    <p className='font-bold text-xl'>2. Payment methods</p>
    <div className='w-full h-[1px] bg-gray-300'/>
    <p className='font-bold text-xl'>3. Items delivery</p>
    </div>
    
    <div className='md:w-[25%] p-4 space-y-2 rounded-lg flex flex-col items-start border h-[300px] border-gray-300'>
    <button className='bg-[#ffd814] rounded-lg hover:bg-[#f7ca00] text-sm py-2 w-full'>Use this Address</button>
    <p className='text-sm text-center '>Choose an address to continue checking out. You will still have a chance to review and edit your order before it is final.
</p>
<div className='h-[1px] bg-gray-300 w-full'/>
    <p className='text-lg font-semibold'>Order Summary</p>
    <div className='w-full flex justify-between items-center text-sm'>
        <p>Items:</p>
        <p>6</p>
    </div>
    <div className='w-full flex justify-between items-center text-sm'>
        <p>Delivery:</p>
        <p>0</p>
    </div>
    <div className='h-[1px] bg-gray-300 w-full'/>
    <div className='w-full text-[#b12704] flex justify-between items-center text-lg font-bold'>
        <p>Order Total:</p>
        <p>$1200</p>
    </div>
    <div className='h-[1px] bg-gray-300 w-full'/>
    </div>

    </div>
    </div>
    
  )
}

export default Checkout