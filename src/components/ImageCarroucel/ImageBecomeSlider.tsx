import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import images from '../../data/becomeCarouselData'

const ImageSlider = ({ isSpecialCase }) => {
  return (
    <Carousel showArrows emulateTouch infiniteLoop showThumbs={false}>
      {images.map((imageUrl, index) => (
        <div key={index} className="w-full h-auto">
          <img
            src={imageUrl}
            alt={`Image ${index + 1}`}
            className={`object-cover w-full h-full transition-transform 
            transform translate-x-0 ${
              isSpecialCase ? 'max-h-96' : 'max-h-500'
            }`}
          />
        </div>
      ))}
    </Carousel>
  )
}

export default ImageSlider
