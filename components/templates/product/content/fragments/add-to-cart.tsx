import { ShoppingBag } from 'lucide-react'
import React from 'react'

const AddToCart = () => {
  return (
    <button className='h-10 rounded-sm bg-[#f44336] px-4 duration-150 transition-all text-white hover:bg-primary-light flex-center gap-2'>
        <ShoppingBag className='size-5'/>
        <span>
            افزودن به سبد خرید
        </span>
    </button>
  )
}

export default AddToCart