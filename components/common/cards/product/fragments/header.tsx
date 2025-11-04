import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <header className='size-60 w-full! flex-center **:object-cover!'>
        <Image 
        width={240}
        height={240}
        src="/assets/static/product-1.png"
        alt='Product'
        />
    </header>
  )
}

export default Header