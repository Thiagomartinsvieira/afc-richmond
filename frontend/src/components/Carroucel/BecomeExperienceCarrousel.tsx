import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import {
  planeIcon,
  tagIcon,
  trophyIcon,
  globeIcon,
  medalIcon,
  ticketIcon,
  shirtIcon,
  starIcon,
} from '../icons/icons'

const BecomeExperienceCarousel = () => {
  return (
    <div>
      <Carousel
        showStatus={false}
        showIndicators={false}
        emulateTouch
        autoPlay
        showArrows={false}
        infiniteLoop
        showThumbs
        thumbWidth={100}
        interval={4000}
      >
        <div className="flex items-center justify-center space-x-12 mx-10">
          <p className="flex items-center p-6 border border-yellow-600 rounded-2xl">
            {tagIcon} Discounted travel
          </p>
          <p className="flex items-center p-6 border border-yellow-600 rounded-2xl">
            {planeIcon} Discounts on airline tickets
          </p>
          <p className="flex items-center p-6 border border-yellow-600 rounded-2xl">
            {trophyIcon} Free in the trophy room
          </p>
          <p className="flex items-center p-6 border border-yellow-600 rounded-2xl">
            {starIcon} Exclusive star treatment
          </p>
        </div>
        <div className="flex items-center justify-center space-x-12 mx-10">
          <p className="flex items-center p-6 border border-yellow-600 rounded-2xl">
            {globeIcon} International fan meetups
          </p>
          <p className="flex items-center p-6 border border-yellow-600 rounded-2xl">
            {medalIcon} VIP access to events
          </p>
          <p className="flex items-center p-6 border border-yellow-600 rounded-2xl">
            {shirtIcon} Special merchandise
          </p>
          <p className="flex items-center p-6 border border-yellow-600 rounded-2xl">
            {ticketIcon} Early access to match tickets
          </p>
        </div>
      </Carousel>
    </div>
  )
}

export default BecomeExperienceCarousel
