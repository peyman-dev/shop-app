import React from 'react'
import Header from './fragments/header'
import Main from './fragments/main'
import Prices from './fragments/prices'
import Link from 'next/link'

const ProductCard = () => {
  return (
    <article className='w-full h-[477px] space-y-4 cursor-pointer duration-150 relative  shadow-black'>
        <Link href={'/products/test'}  className='absolute size-full top-0 right-0'/>
        <Header />
        <Main />
        <Prices />
    </article>
  )
}

export default ProductCard