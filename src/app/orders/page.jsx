import OrderItem from '@/components/Order/OrderItem'
import React from 'react'

const OrdersPage = () => {
  return (
    <div className='py-8 px-10 min-h-[80vh] w-full max-w-7xl mx-auto'>
    <h1 className='text-3xl bg-white w-full p-4'>Orders</h1>
        <OrderItem/>
        <OrderItem/>
        <OrderItem/>
        <OrderItem/>
      </div>
  )
}

export default OrdersPage