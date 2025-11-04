import React from 'react'

const OffPercent = ({percent}: {percent: number}) => {
  return (
    <div className='bg-[#d32f2f] text-white rounded-full py-0.5 px-2 text-xs pt-1'>
        {percent}%
    </div>
  )
}

export default OffPercent