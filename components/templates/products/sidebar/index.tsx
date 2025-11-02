import React from 'react'
import PromotedProduct from './components/promoted-product/'

const Sidebar = () => {
  return (
    <aside className='w-[270px]! *:border *:p-4 *:border-neutral-200 *:rounded-lg'>
        <PromotedProduct />
    </aside>
  )
}

export default Sidebar