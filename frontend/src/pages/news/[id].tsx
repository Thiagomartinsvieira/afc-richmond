import React from 'react'
import { useRouter } from 'next/router'
import { newsData } from '@/data/newsData'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import { arrowUpLeft } from '@/components/icons/icons'

const NewsDetails = () => {
  const router = useRouter()
  const { id } = router.query

  const newsItem = newsData.find((news) => {
    if (typeof id === 'string') {
      return news.id === parseInt(id, 10)
    }

    return false
  })

  if (!newsData) {
    return (
      <div>
        <Nav />
        <div className="my-10">
          <span>News not found</span>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div>
      <Nav />
      <div className="flex flex-col items-center my-10">
        <Image
          src={`/${newsItem?.imageUrl}`}
          alt={`Image of ${newsItem?.article}`}
          width={800}
          height={800}
          objectFit="cover"
          className="rounded w-full xl:max-w-screen-xl border-y-2 border-yellow-700"
        />
        <div className="mt-4 text-center space-y-5">
          <h3 className="font-black">{newsItem?.title}</h3>
          <p className="text mx-5 lg:mx-10">{newsItem?.article}</p>
        </div>
      </div>
      <div className="mb-10">
        <Link
          href="/news"
          className="flex items-center justify-center
        space-x-3 hover:underline hover:scale-110 transition-transform 
        ease-in-out duration-300"
        >
          <span className="ml-5">Back to News</span>
          <span>{arrowUpLeft}</span>
        </Link>
      </div>
      <Footer />
    </div>
  )
}

export default NewsDetails
