import { Megaphone } from 'lucide-react'
import React from 'react'

const LabelTag = () => {
  return (
    <div className='flex-ic gap-1 absolute left-4 text-xs text-neutral-500 top-4'>
        <span>
            سفارشی
        </span>
        <span>
            <Megaphone className='size-4 text-[#ff009c]!'/>
        </span>
    </div>
  )
}

export default LabelTag