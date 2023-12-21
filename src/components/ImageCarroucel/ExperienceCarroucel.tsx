import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const ExperienceCarousel = ({ images }) => {
  // Calcula o número total de slides com base na quantidade de imagens
  const totalSlides = Math.ceil(images.length / 5)

  // Define o tamanho máximo para cada imagem em um slide
  const maxImageWidth = '20rem' // Adjust the value as needed

  return (
    <div className="mx-auto">
      <h2 className="text-center text-2xl font-bold mb-4">Experiences</h2>
      <Carousel
        showThumbs={false}
        showStatus={false}
        emulateTouch
        infiniteLoop
        dynamicHeight={false}
      >
        {/* Cria um conjunto de slides para cada grupo de 5 imagens */}
        {Array.from({ length: totalSlides }).map((_, index) => (
          <div key={index} className="flex items-center justify-center">
            {/* Exibe as 5 imagens para o slide atual */}
            {images.slice(index * 5, (index + 1) * 5).map((image, i) => (
              <img
                key={i}
                src={image.imageUrl}
                alt={`Experience Image ${index * 5 + i}`}
                className="object-contain h-64 w-full max-w-xs
                 md:max-w-sm lg:max-w-md xl:max-w-lg"
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
