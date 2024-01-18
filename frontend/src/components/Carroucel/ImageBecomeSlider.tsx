import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import images from '../../data/becomeCarouselData'

const ImageSlider = () => {
  return (
    <Carousel
      showArrows={true}
      emulateTouch
      infiniteLoop
      autoPlay
      interval={4000}
      showThumbs={false}
    >
      {images.map((imageUrl, index) => (
        <div key={index}>
          <img
            src={imageUrl}
            alt={`Image ${index + 1}`}
            className="w-full h-auto max-h-96 transition-transform transform translate-x-0"
            style={{ maxHeight: '500px' }}
          />
        </div>
      ))}
    </Carousel>
  )
}

export default ImageSlider
