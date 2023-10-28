import AddressCard from '@/components/Address/AddressCard'
import React from 'react'
import {BiPlus} from 'react-icons/bi'

const AddressesPage = () => {
  return (
    <div className='mx-auto max-w-5xl flex flex-col px-3 my-8 space-y-3 min-h-[60vh] '>
        <p className='text-blue-500 text-sm'>Your Account›Your Addresses</p>
        <h1 className='text-3xl'>Your Addresses</h1>
        <div className='w-full flex items-center justify-center'>
        <div className='grid md:grid-cols-3 grid-cols-1 gap-6 py-8 '>
          <button className='w-[320px] h-[250px] border-2 border-dotted border-gray-400 rounded-lg flex justify-center items-center'>
            <div className='flex flex-col items-center justify-center space-y-3'>
             <p className='text-5xl font-bold text-gray-400'><BiPlus/></p>
             <p className='text-2xl font-bold text-gray-600'>Add address</p>
            </div>
          </button>
          <AddressCard/>
        <AddressCard/>
        <AddressCard/>
        </div>
        </div>
        
    </div>
  )
}

export default AddressesPage