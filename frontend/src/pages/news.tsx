import Footer from '@/components/Footer'
import Nav from '@/components/Nav'
import NewsList from '@/components/NewsList'
import { searchIcon } from '@/components/icons/icons'
import Image from 'next/image'
import React, { useState } from 'react'

const News = () => {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearchChange = (e: any) => {
    setSearchQuery(e.target.value)
  }

  return (
    <div>
      <Nav />
      <div className="flex flex-col mb-10">
        <Image
          className="mx-auto mb-10"
          src="/images/banner/baner1.png"
          width={3000}
          height={600}
          alt="ted lasso banner with Coach Beard, Roy kent and Rebeca"
        />
        <h2 className="font-bold text-3xl text-center mb-4">News</h2>
        <div className="flex flex-row items-center justify-center">
          <input
            type="search"
            placeholder="Enter your search"
            className="bg-white w-11/12 border border-yellow-400 rounded-l-lg p-2 sm:w-10/12 lg:w-10/12 xl:w-7/12 text-black"
            onChange={handleSearchChange}
            value={searchQuery}
          />
          <div
            className="bg-yellow-400 rounded-r-lg cursor-pointer p-2
           px-4 border border-yellow-400"
          >
            {searchIcon}
          </div>
        </div>
        <NewsList searchQuery={searchQuery} />
      </div>
      <Footer />
    </div>
  )
}

export default News
