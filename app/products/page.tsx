import Content from '@/components/templates/products/content'
import Sidebar from '@/components/templates/products/sidebar'
import React from 'react'

const page = () => {
  return (
    <main className="container flex mt-14 gap-10">
      <Sidebar />
      <Content />
    </main>
  )
}

export default page