import Benefits from '@/components/Benefits/Benefits'
import NewsCard from '@/components/Card/NewsCard'
import SocialMediaCard from '@/components/Card/SocialMediaCard'
import Footer from '@/components/Footer'
import PlayersCarroucel from '@/components/ImageCarroucel/PlayersCarroucel'
import Nav from '@/components/Nav'
import VerticalVideoNav from '@/components/Nav/VerticalVideoNav'
import React from 'react'

const home = () => {
  return (
    <div className="relative">
      <Nav />
      <div className="flex">
        <div className="relative w-full">
          <VerticalVideoNav />
          <video autoPlay loop muted playsInline className="w-full h-full">
            <source src="videos/Nike x Ted Lasso _ Believe _ Nike.mp4" />
          </video>
        </div>
      </div>

      <div className="flex flex-col">
        <h2 className="text-center mt-10">Main News</h2>
        <hr className="mt-5 border border-t-yellow-400" />
        <div className="flex flex-row">
          <NewsCard
            imageUrl="images/news/1_478x832.webp"
            article="The time has come for the debut of Richmond's new acquisition, with all the consequences entails. Hannah attends an unusual session, while Ted is perplexed by his personal situation."
          />
          <NewsCard
            imageUrl="images/news/2_478x832.webp"
            article="Everyone is feeling the pressure as Richmond prepare to play West Han. Ted reunites with an old friend."
          />
          <NewsCard
            imageUrl="images/news/3_478x832.webp"
            article="In a difficult phase, AFC Richmond has to face the league's titan and conflicts and complications on and off the court accumulate."
          />
        </div>
        <div className="flex flex-row">
          <NewsCard
            imageUrl="images/news/4_478x832.webp"
            article="The Greyhounds try a new strategy that has everyone thinking outside the box. Sam prepares to host a VIP guest at Ola's."
          />
          <NewsCard
            imageUrl="images/news/5_478x832.webp"
            article="Colin and Isaac's friendship is tested. Roy is asked to do a press conference."
          />
          <NewsCard
            imageUrl="images/news/6_478x832.webp"
            article="An unexpected guest makes Ted nervous. When Richmond travels to Manchester for a big match, Roy and Keeley are worried about Jamie."
          />
        </div>
      </div>
      <div className="text-center my-10">
        <span
          className="bg-yellow-600 rounded p-2 font-medium text-base
         cursor-pointer hover:bg-yellow-500"
        >
          More news
        </span>
        <div className="my-10">
          <SocialMediaCard />
        </div>
        <PlayersCarroucel />
      </div>
      <Benefits />
      <Footer />
    </div>
  )
}

export default home
