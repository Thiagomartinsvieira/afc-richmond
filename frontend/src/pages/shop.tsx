import Nav from '@/components/Nav'
import Title from '@/components/Title'
import { constructionIcon } from '@/components/icons/icons'
import React from 'react'

const Shop = () => {
  return (
    <div>
      <Nav />
      <Title
        title="Official AFC Richmond Store"
        subtitle="Gear up with the Latest Merchandise!"
      />
      <div className="flex justify-center items-center">
        <p className="text-gray-500 flex">
          <span className="mr-5">{constructionIcon}</span>
          This page is under construction. Please check back soon!
        </p>
      </div>
    </div>
  )
}

export default Shop
