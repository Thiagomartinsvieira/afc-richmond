import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { MdArrowBack, MdArrowForward } from 'react-icons/md'
import Image from 'next/image'

interface ImageItem {
  imageUrl: string
}

interface ImageCarousel {
  images: ImageItem[]
  currentImageIndex: number
  handlePrevImage: () => void
  handleNextImage: () => void
}

const ImageCarousel = (props: ImageCarousel) => {
  return (
    <div className="flex mt-5 relative overflow-hidden">
      <MdArrowBack
        onClick={props.handlePrevImage}
        className="absolute top-1/2 transform -translate-y-1/2 left-2 z-10 
        cursor-pointer text-4xl text-white"
      />
      <Carousel
        showThumbs={false}
        selectedItem={props.currentImageIndex}
        onChange={() => {}}
        emulateTouch
        infiniteLoop
      >
        {props.images.map((image, i) => (
          <div key={i}>
            <Image
              src={image.imageUrl}
              alt={`Become Image ${i}`}
              width={300}
              height={200}
              className={`mx-1`}
            />
          </div>
        ))}
      </Carousel>
      <MdArrowForward
        onClick={props.handleNextImage}
        className="absolute top-1/2 transform -translate-y-1/2 right-2 z-10 cursor-pointer
        text-4xl text-white"
      />
    </div>
  )
}

export default ImageCarousel
