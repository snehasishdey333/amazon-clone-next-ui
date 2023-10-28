import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SignIn = () => {
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center'>
      {/* <Image className="" src="/logo.png" alt="" height={100} width={100}/> */}
      <div className='flex flex-col items-start space-y-3 border border-gray-300 px-16 py-8 rounded-lg'>
      <h1 className='text-3xl'>Sign In</h1>
      <div className='flex flex-col items-start space-y-1'>
      <p className='font-bold text-sm'>Email</p>
      <input placeholder='' type="email" className='border border-black rounded-md outline-0 p-1'/>
      </div>
      <div className='flex flex-col items-start space-y-1'>
      <p className='font-bold text-sm'>Password</p>
      <input placeholder='' type="password" className='border border-black rounded-md outline-0 p-1'/>
      </div>
      <button className='text-sm  bg-[#ffd814] hover:bg-[#f7ca00] w-full p-1 rounded-lg'>Sign In</button>
      </div>
      <div className='flex flex-col items-center justify-center mt-8 space-y-2'>
      <p className='text-sm text-gray-400'>New to Amazon?</p>
      <Link href="/register" className='w-full shadow-md shadow-gray-200 px-4 py-2 hover:bg-gray-300 text-sm rounded-lg'>Create your Amazon account</Link>
      </div>
      
    </div>
  )
}

export default SignIn