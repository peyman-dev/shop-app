import React from 'react'
import SectionLabel from './fragments/section-label'
import ProductsSlider from './fragments/products-slider'

const IncredibleSection = () => {
  return (
    <section className='h-[294px] flex *:h-[90%] items-center gap-5 rounded-lg my-20 container w-full overflow-hidden whitespace-nowrap bg-blue-500'>
      <SectionLabel />
      <ProductsSlider />
    </section>
  )
}

export default IncredibleSection