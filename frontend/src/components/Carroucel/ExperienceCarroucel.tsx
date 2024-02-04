import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import Image from 'next/image'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

interface Experience {
  imageUrl: string
}

interface ExperienceCarouselProps {
  images: Experience[]
}

const ExperienceCarousel: React.FC<ExperienceCarouselProps> = ({ images }) => {
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
              <div
                key={i}
                className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
              >
                <Image
                  src={image.imageUrl}
                  alt={`Experience Image ${index * 5 + i}`}
                  width={400}
                  height={400}
                  objectFit="contain"
                  className="object-contain"
                  style={{ maxWidth: maxImageWidth }}
                />
              </div>
            ))}
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default ExperienceCarousel
