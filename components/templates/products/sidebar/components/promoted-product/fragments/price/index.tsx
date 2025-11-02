import Toman from '@/components/icons/toman'
import React from 'react'

const Price = () => {
  return (
    <div className='w-full flex justify-end items-end flex-col  **:font-YekanBakh-Bold! text-neutral-700 gap-1'>
      <div className="flex-ic gap-1">

        <span>
            28,000,000
        </span>
        <Toman />
      </div>
      <p className='text-sm text-neutral-500 '>
        <del>
          29,200,000
        </del>
      </p>
    </div>
  )
}

export default Price