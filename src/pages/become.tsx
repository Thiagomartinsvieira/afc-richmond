import MemberFanCard from '@/components/Card/MemberFanCard'
import Footer from '@/components/Footer'
import ImageSlider from '@/components/ImageSlider'
import Nav from '@/components/Nav'
import FanMemberNav from '@/components/Nav/FanMemberNav'
import Title from '@/components/Title'
import React, { useState } from 'react'
import Benefits from '@/components/Benefits/Benefits'
import { BecomeImages } from '@/data/becomeImages'
import ExperienceCarrousel from '@/components/ImageCarroucel/ExperienceCarroucel'
import BecomeFooter from '@/components/Footer/BecomeFooter'

const become = () => {
  const images = [
    'https://www.prodirectsport.com/-/media/prodirect/project/en/soccer/pdp-content/off-pitch/nike-ted-lasso/bb---pdp---ted-lasso-players-d-150323.png',
    'https://www.prodirectsport.com/-/media/prodirect/project/en/soccer/pdp-content/off-pitch/nike-ted-lasso/bb-d-storytab-nike-tedlasso-2.jpg',
    'https://i.redd.it/puawvbm8pze71.jpg',
    'https://www.marketing-beat.co.uk/wp-content/uploads/2023/03/Nandos-X-A.F.C.-Richmond.jpg',
    'https://images5.alphacoders.com/123/1235591.jpg',
    'https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/7f25d1166089161.641231c837bdf.jpg',
  ]

  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const handlePrevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length,
    )
  }

  return (
    <div>
      <Nav />
      <FanMemberNav />
      <Title
        title="Become a fan member"
        subtitle="Join the AFC Richmond family and be part of our team on and off the field. Become a fan member and help build the glorious future of our club!"
      />
      <div className="flex flex-col items-center justify-center p-3">
        <ImageSlider images={images} />
        <Title
          title="Know the plans"
          subtitle="We have one that is ideal for you"
        />

        <Benefits />

        <h2 className="mb-10">ALL PLANS INCLUDE BENEFITS 🌟</h2>

        <h2>Reasons to become a Richmonites</h2>

        <div className="flex flex-wrap justify-center m-5">
          <MemberFanCard
            plan="Bronze"
            discount={50}
            value={15}
            quest={1}
            starsRating={2}
          />
          <MemberFanCard
            plan="Silver"
            discount={75}
            value={30}
            quest={2}
            starsRating={3}
          />
          <MemberFanCard
            plan="Gold"
            discount={100}
            value={60}
            quest={3}
            starsRating={4}
          />
        </div>

        <ExperienceCarrousel images={BecomeImages} />
      </div>
      <BecomeFooter />
      <Footer />
    </div>
  )
}

export default become
