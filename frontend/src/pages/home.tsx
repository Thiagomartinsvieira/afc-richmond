import Benefits from '@/components/Benefits/Benefits'
import NewsCard from '@/components/Card/NewsCard'
import SocialMediaCard from '@/components/Card/SocialMediaCard'
import Footer from '@/components/Footer'
import Nav from '@/components/Nav'
import VerticalVideoNav from '@/components/Nav/VerticalVideoNav'
import React, { useState } from 'react'
import PlayersCarroucel from '@/components/Carroucel/PlayersCarroucel'
import { useWindowSize } from 'react-use'
import Link from 'next/link'
import RichmondStore from '@/components/Carroucel/RichmondStore'

const Home = () => {
  const { width } = useWindowSize()

  return (
    <div className="relative">
      <Nav />
      <div className="flex items-center justify-center">
        <div
          className="relative h-[50vh] md:h-full md:left-auto 
        md:right-auto md:block"
        >
          {width > 1024 && <VerticalVideoNav />}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="videos/Nike x Ted Lasso _ Believe _ Nike.mp4" />
          </video>
        </div>
      </div>

      <div className="flex flex-col">
        <h2 className="text-center mt-10">Main News</h2>
        <hr className="mt-5 border border-t-yellow-400" />
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 
         lg:grid-cols-3 gap-4 items-center"
        >
          <Link className="flex" href="/news/15">
            <NewsCard
              id={10}
              imageUrl="images/news/1_478x832.webp"
              article="The time has come for the debut of Richmond's new acquisition, with all the consequences entails. Hannah attends an unusual session, while Ted is perplexed by his personal situation."
            />
          </Link>
          <Link className="flex" href="/news/14">
            <NewsCard
              id={11}
              imageUrl="images/news/2_478x832.webp"
              article="Everyone is feeling the pressure as Richmond prepare to play West Han. Ted reunites with an old friend."
            />
          </Link>
          <Link className="flex" href="/news/13">
            <NewsCard
              id={12}
              imageUrl="images/news/3_478x832.webp"
              article="In a difficult phase, AFC Richmond has to face the league's titan and conflicts and complications on and off the court accumulate."
            />
          </Link>
          <Link className="flex" href="/news/12">
            <NewsCard
              id={13}
              imageUrl="images/news/4_478x832.webp"
              article="The Greyhounds try a new strategy that has everyone thinking outside the box. Sam prepares to host a VIP guest at Ola's."
            />
          </Link>
          <Link className="flex" href="/news/11">
            <NewsCard
              id={14}
              imageUrl="images/news/5_478x832.webp"
              article="Colin and Isaac's friendship is tested. Roy is asked to do a press conference."
            />
          </Link>
          <Link className="flex" href="/news/10">
            <NewsCard
              id={15}
              imageUrl="images/news/6_478x832.webp"
              article="An unexpected guest makes Ted nervous. When Richmond travels to Manchester for a big match, Roy and Keeley are worried about Jamie."
            />
          </Link>
        </div>
      </div>

      <div className="text-center my-10">
        <Link href="/news">
          <span
            className="bg-yellow-600 rounded p-2 font-medium text-base
           cursor-pointer hover:bg-yellow-500"
          >
            More news
          </span>
        </Link>
        <div className="my-10">
          <SocialMediaCard />
        </div>
        <PlayersCarroucel />
      </div>
      <Benefits />
      <RichmondStore />
      <Footer />
    </div>
  )
}

export default Home
