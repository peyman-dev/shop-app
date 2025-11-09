import React from 'react'
import { tv } from 'tailwind-variants'
import MiniProduct from './fragments/mini-product'
import AddToBasket from './fragments/add-to-basket'
import NoticeDescription from './fragments/notice-description'
import Price from './fragments/price'
import Variants from './fragments/variants/indext'

const Sidebar = () => {
    const sidebarUI = tv({
        base: "col-span-2 p-5 rounded-lg max-h-max sticky space-y-3 top-5 border border-neutral-200"
    })
  return (
    <aside className={sidebarUI()}>
        <MiniProduct />
        <Variants />
        <NoticeDescription />
        <Price />
        <AddToBasket />
    </aside>
  )
}

export default Sidebar