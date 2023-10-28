import Card from '@/components/Account/Card'
import Products from '@/components/Product/Products'
import { accountCards } from '@/data/data'
import React from 'react'

const AccountPage = () => {
  return (
    <div className='py-8 px-10 min-h-[80vh] w-full'>
    <div className='w-full flex items-center justify-center my-4'>
    <div className='grid md:grid-cols-3 grid-cols-1 max-w-7xl mx-auto gap-4'>
        {accountCards.map((c,index)=>(
            <Card key={index} {...c}/>
        ))}
    </div>
    </div>
    
        <Products/>
    </div>
  )
}

export default AccountPage