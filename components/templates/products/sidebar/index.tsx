import React from 'react'
import PromotedProduct from './components/promoted-product/'
import Filters from './components/filters'

const Sidebar = () => {
  return (
    <aside className='w-[270px]! min-w-[270px] *:border *:p-4 space-y-5 *:border-neutral-200 *:rounded-lg'>
        <PromotedProduct />
        <Filters />
    </aside>
  )
}

export default Sidebar