"use client"
import { arrayMap } from '@/core/features/array-map'
import { useModal } from '@/core/hooks/use-modal'
import React from 'react'

const Gallery = () => {
    const {openModal,closeModal} = useModal()
    const handleOpen = () => {
        openModal(<div>Hello Wrold</div>)
    }
  return (
    <div className='grid grid-cols-6 gap-3'>
        {arrayMap(6, <div onClick={handleOpen} className='size-[82px] rounded-lg border border-neutral-200 cursor-pointer'>

        </div>)}
    </div>
  )
}

export default Gallery