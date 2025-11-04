import ProductCard from '@/components/common/cards/product'
import { arrayMap } from '@/core/features/array-map'
import React from 'react'

const Content = () => {
  return (
    <section className='grid grow w-full grid-cols-4 divide-x divide-y'>
      {
        arrayMap(50, <ProductCard />)
      }
    </section>
  )
}

export default Content