import { NumberFormatter } from '@mantine/core'
import React from 'react'

const Price = () => {
  return (
    <div className='flex justify-end items-end py-5'>
        <NumberFormatter className='text-lg font-black text-green-600' suffix=' تومان ' value={140_000_000}thousandSeparator />
    </div>
  )
}

export default Price