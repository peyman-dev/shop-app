import Link from 'next/link'
import React from 'react'

const Category = ({label}: {label: string}) => {
  return (
    <div className="flex-ic gap-1 text-xs">
    <span>دسته‌بندی</span>
    <Link className="text-blue-600" href={"/categories/CATEGORY"}>
      <strong>{label}</strong>
    </Link>
  </div>
  )
}

export default Category