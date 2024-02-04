import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Image from 'next/image'
import images from '../../data/becomeCarouselData'

const ImageSlider = () => {
  return (
    <Carousel
      showArrows={false}
      showStatus={false}
      emulateTouch
      infiniteLoop
      autoPlay
      interval={4000}
      showThumbs={false}
    >
      {images.map((imageUrl, index) => (
        <div key={index}>
          <Image
            src={imageUrl}
            alt={`Image ${index + 1}`}
            width={500}
            height={300}
            layout="responsive"
            className="w-full h-auto max-h-96 transition-transform transform translate-x-0"
          />
        </div>
      ))}
    </Carousel>
  )
}

export default ImageSlider
