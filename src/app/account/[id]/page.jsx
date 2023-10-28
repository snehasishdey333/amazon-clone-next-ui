import React from 'react'

const ProfilePage = () => {
  return (
    <div className='mx-auto max-w-5xl flex flex-col px-3 my-8 space-y-3 min-h-[60vh]'>
      <p className='text-blue-500 text-sm'>Your Account › Login & Security</p>
      <h1 className='text-3xl'>Login & Security</h1>
      <div className='border border-gray-300 rounded-2xl p-4 space-y-3'>
        <div className='w-full flex flex-col items-start'>
            <h1 className='font-bold text-sm'>Name:</h1>
            <input className='outline-none' placeholder='' value={"Snehasish Dey"} type="text"/>
        </div>
        <div className='w-full flex flex-col items-start'>
            <h1 className='font-bold text-sm'>Email:</h1>
            <input className='outline-none' placeholder='' value={"snehasish@gmail.com"} type="email"/>
        </div>
        <div className='w-full flex flex-col items-start'>
            <h1 className='font-bold text-sm'>Phone:</h1>
            <input className='outline-none' placeholder='' value={3656237465} type="number"/>
        </div>
        <div className='w-full flex flex-col items-start'>
            <h1 className='font-bold text-sm'>Password:</h1>
            <input className='outline-none' placeholder='' value={"Snehasish Dey"} type="password"/>
        </div>
      </div>
      <button className='text-sm bg-[#ffd814] hover:bg-[#f0b800] p-2 rounded-lg w-fit'>Done</button>
    </div>
  )
}

export default ProfilePage