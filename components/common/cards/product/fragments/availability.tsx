import { PackageCheck } from 'lucide-react'
import React from 'react'

const Availability = () => {
  return (
    <div className='flex-ic gap-2'>
        <span>
            <PackageCheck className='size-4.5 text-[#87d3e1]'/>
        </span>
        <span className='text-[#62666d] text-sm font-YekanBakh-Light'>
            موجود در انبار
        </span>
    </div>
  )
}

export default Availability