import Footer from '@/components/Footer'
import Nav from '@/components/Nav'
import NewsList from '@/components/NewsList'
import { searchIcon } from '@/components/icons/icons'
import React from 'react'

const News = () => {
  return (
    <div>
      <Nav />
      <div className="flex flex-col mb-10">
        <img
          src="images/banner/baner1.png"
          alt="ted lasso banner with Coach Beard, Roy kent and Rebeca"
          className="mb-10 w-full h-auto max-h-96"
        />
        <h2 className="font-bold text-3xl text-center mb-4">News</h2>
        <div className="flex flex-row items-center justify-center">
          <input
            type="search"
            placeholder="Search"
            className="bg-white w-11/12 border border-yellow-400 rounded-l-lg p-2 sm:w-10/12
            lg:w-10/12 xl:w-7/12"
          />
          <div
            className="bg-yellow-400 rounded-r-lg cursor-pointer p-2
           px-4 border border-yellow-400"
          >
            {searchIcon}
          </div>
        </div>
        <NewsList />
      </div>
      <Footer />
    </div>
  )
}

export default News
