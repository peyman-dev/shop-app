import ProductCard from '@/components/common/cards/product'
import SectionLabel from '@/components/ui/section-label'
import React from 'react'

const LatestProducts = () => {
  return (
    <section className='container max-w-[1200px] my-20'>
        <SectionLabel text='تازه ترین محصولات دریملی‌شاپ'/>
        <div className="grid grid-cols-5 gap-5">
            {Array.from({length: 8}).map((_, i) => <ProductCard key={i}/>)}
        </div>
    </section>
  )
}

export default LatestProducts