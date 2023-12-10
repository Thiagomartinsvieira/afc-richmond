import React, { useEffect, useState } from 'react'
import { arrowLeft, arrowRight } from '../icons/icons'

const ImageSlider = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0)

  const nextImage = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  useEffect(() => {
    const intervalID = setInterval(() => {
      nextImage()
    }, 5000)

    return () => clearInterval(intervalID)
  }, [currentImage])

  return (
    <div className="relative w-full max-w-screen-2xl mx-auto overflow-hidden">
      <button
        className="absolute top-1/2 transform -translate-y-1/2 left-10
         text-white text-3xl z-10"
        onClick={prevImage}
      >
        {arrowLeft}
      </button>
      <img
        src={images[currentImage]}
        alt={`Slide ${currentImage + 1}`}
        className="w-full h-auto transition-transform transform translate-x-0"
      />
      <button
        className="absolute top-1/2 transform -translate-y-1/2 right-10
         text-white text-3xl z-10"
        onClick={nextImage}
      >
        {arrowRight}
      </button>
    </div>
  )
}

export default ImageSlider
