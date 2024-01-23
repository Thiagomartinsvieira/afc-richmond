import React from 'react'
import { FaTag, FaTags } from 'react-icons/fa'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { tagIcon } from '../icons/icons'

const BecomeExperienceCarousel = () => {
  return (
    <div>
      <Carousel
        showStatus={false}
        showIndicators={false}
        autoPlay
        emulateTouch
        showArrows={false}
        infiniteLoop
        showThumbs
        thumbWidth={100}
        interval={4000}
      >
        <div className="flex items-center justify-center space-x-12">
          <p
            className="flex items-center p-6 border border-yellow-600
           rounded-2xl"
          >
            {tagIcon} Discounted travel
          </p>
          <p
            className="flex items-center p-6 border border-yellow-600
           rounded-2xl"
          >
            {tagIcon} Discounted travel
          </p>
          <p
            className="flex items-center p-6 border border-yellow-600
           rounded-2xl"
          >
            {tagIcon} Discounted travel
          </p>
          <p
            className="flex items-center p-6 border border-yellow-600
           rounded-2xl"
          >
            {tagIcon} Discounted travel
          </p>
        </div>
        <div className="flex items-center justify-center space-x-12">
          <p
            className="flex items-center p-6 border border-yellow-600
           rounded-2xl"
          >
            {tagIcon} Discounted travel
          </p>
          <p
            className="flex items-center p-6 border border-yellow-600
           rounded-2xl"
          >
            {tagIcon} Discounted travel
          </p>
          <p
            className="flex items-center p-6 border border-yellow-600
           rounded-2xl"
          >
            {tagIcon} Discounted travel
          </p>
          <p
            className="flex items-center p-6 border border-yellow-600
           rounded-2xl"
          >
            {tagIcon} Discounted travel
          </p>
        </div>
      </Carousel>
    </div>
  )
}

export default BecomeExperienceCarousel
