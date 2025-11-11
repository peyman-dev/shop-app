import { ArrowLeftCircle } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const SeeAll = () => {
  return (
    <Link href="/products?event=incridible-offer" className=' w-full h-full flex-col-center gap-3 bg-white rounded-e-2xl'>
        <ArrowLeftCircle className='size-14 text-blue-400'/>
        <span className="text-sm! text-slate-700">
            مشاهده همه
        </span>
    </Link>
  )
}

export default SeeAll