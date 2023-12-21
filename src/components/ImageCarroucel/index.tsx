import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { MdArrowBack, MdArrowForward } from 'react-icons/md'

const ImageCarousel = ({
  images,
  currentImageIndex,
  handlePrevImage,
  handleNextImage,
}) => {
  return (
    <div className="flex mt-5 relative overflow-hidden">
      <MdArrowBack
        onClick={handlePrevImage}
        className="absolute top-1/2 transform -translate-y-1/2 left-2 z-10 
        cursor-pointer text-4xl text-white"
      />
      <Carousel
        showThumbs={false}
        selectedItem={currentImageIndex}
        onChange={() => {}}
        emulateTouch
        infiniteLoop2
      >
        {images.map((image, i) => (
          <div key={i}>
            <img
              src={image.imageUrl}
              alt={`Become Image ${i}`}
              width={300}
              className={`mx-1`}
            />
          </div>
        ))}
      </Carousel>
      <MdArrowForward
        onClick={handleNextImage}
        className="absolute top-1/2 transform -translate-y-1/2 right-2 z-10 cursor-pointer
        text-4xl text-white"
      />
    </div>
  )
}

export default ImageCarousel
