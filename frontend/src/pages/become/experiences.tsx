import NextGamesCard from '@/components/Card/NextGamesCard'
import BecomeExperienceCarrousel from '@/components/Carroucel/BecomeExperienceCarrousel'
import BecomeExperienceCarouselResponsive from '@/components/Carroucel/BecomeExperienceCarrouselResponsive'
import BecomeExperienceCarouselResponsiveSm from '@/components/Carroucel/BecomeExperienceCarrouselResponsiveSM'
import BecomeExperienceVideos from '@/components/Carroucel/BecomeExperienceVideos'
import Footer from '@/components/Footer'
import Nav from '@/components/Nav'
import FanMemberNav from '@/components/Nav/FanMemberNav'
import Title from '@/components/Title'
import NextImage from 'next/image'
import { useWindowSize } from 'react-use'

const Experiences = () => {
  const { width } = useWindowSize()

  return (
    <div>
      <Nav />
      <FanMemberNav />
      <Title
        title="Become a Fan Member"
        subtitle="Unlock Exclusive Experiences with AFC Richmond"
      />
      <NextImage
        src="/images/banner/banner3.png"
        className="w-full"
        alt="AFC Richmond banner"
        width={1920}
        height={500}
      />
      <div className="text-center mb-20">
        <h1 className="text-3xl mt-10">DISCOVER EXCLUSIVE EXPERIENCES</h1>
        <span className="text-lg">FOR AFC RICHMOND FANS</span>
      </div>

      <div
        className={`flex flex-col lg:flex-row items-center justify-center
       my-20 xl:mx-20 lg:space-x-5 ${width < 1024 ? 'space-y-5' : ''}`}
      >
        <BecomeExperienceVideos
          url="/videos/Nike x Ted Lasso _ Believe _ Nike.mp4"
          title="Actions"
        />
        <BecomeExperienceVideos
          url="/videos/Nike x Ted Lasso _ Believe _ Nike.mp4"
          title="Challenges"
        />
        <BecomeExperienceVideos
          url="/videos/Nike x Ted Lasso _ Believe _ Nike.mp4"
          title="Behind the Scenes"
        />
      </div>

      <NextImage
        src="/images/banner/banner2.png"
        alt=""
        width={1920}
        height={500}
        className="w-full mb-10"
      />

      {width > 1280 ? (
        <BecomeExperienceCarrousel />
      ) : width > 768 ? (
        <BecomeExperienceCarouselResponsive />
      ) : (
        <BecomeExperienceCarouselResponsiveSm />
      )}

      <div className="text-center">
        <h1 className="text-3xl">TICKET PRESALES</h1>
        <span className="text-lg">
          AFC Richmond fans enjoy exclusive ticket presales!
        </span>
      </div>

      <NextGamesCard />

      <div className="text-center text-lg space-y-3 my-7">
        <p>
          Stay tuned for ticket presale announcements in your registered email.
        </p>
        <p>Purchase your tickets with AFC Richmond Pay and support the team!</p>
      </div>
      <NextImage
        className="mx-auto my-auto mb-14"
        src="/images/logos/Greyhounds_dog.png"
        alt="AFC Richmond Greyhounds logo"
        width={200}
        height={52}
      />
      <Footer />
    </div>
  )
}

export default Experiences
