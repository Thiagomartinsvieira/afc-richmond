import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const ExperienceCarousel = ({ images }) => {
  const totalSlides = Math.ceil(images.length / 5)

  const maxImageWidth = '20rem'

  return (
    <div className="mx-auto">
      <h2 className="text-center text-2xl font-bold mb-4">Experiences</h2>
      <Carousel
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        showIndicators={false}
        emulateTouch
        infiniteLoop
        dynamicHeight={false}
      >
        {Array.from({ length: totalSlides }).map((_, index) => (
          <div
            key={index}
            className="flex items-center justify-center space-x-4"
          >
            {images.slice(index * 5, (index + 1) * 5).map((image, i) => (
              <img
                key={i}
                src={image.imageUrl}
                alt={`Experience Image ${index * 5 + i}`}
                className="object-contain h-64 w-full max-w-xs
                  sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
                style={{ maxWidth: maxImageWidth }}
              />
            ))}
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default ExperienceCarousel
