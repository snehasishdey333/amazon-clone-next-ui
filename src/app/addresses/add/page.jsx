import React from 'react'

const AddAddressPage = () => {
  return (
    <div className='max-w-5xl mx-auto flex flex-col items-start justify-center space-y-3 my-8 p-3'>
    <p className='text-blue-500 text-sm'>Your Account › Your Addresses › New Address</p>
    <h1 className='text-3xl'>Add a new address</h1>
    <input className='w-full p-2 outline-none border border-black rounded-lg' placeholder='Enter your Country' type="text" />
    <input className='w-full p-2 outline-none border border-black rounded-lg' placeholder='Enter your name' type="text" />
      <input className='w-full p-2 outline-none border border-black rounded-lg' placeholder='Enter your Phone Number' type="number" />
      <input className='w-full p-2 outline-none border border-black rounded-lg' placeholder='Enter your Address' type="text" />
      <input className='w-full p-2 outline-none border border-black rounded-lg' placeholder='Enter Landmark' type="text" />
      <input className='w-full p-2 outline-none border border-black rounded-lg' placeholder='Enter your City' type="text" />
      <input className='w-full p-2 outline-none border border-black rounded-lg' placeholder='Enter your State' type="text" />
      <input className='w-full p-2 outline-none border border-black rounded-lg' placeholder='Enter Pincode' type="number" />
      <div className=''>
      <button className='bg-[#ffd814] rounded-lg hover:bg-[#f7ca00] text-sm py-2 w-fit p-2'>Add Address</button>
      </div>
      
      </div>
  )
}

export default AddAddressPage