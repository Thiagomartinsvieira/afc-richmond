import MemberFanCard from '@/components/Card/MemberFanCard'
import Footer from '@/components/Footer'
import Nav from '@/components/Nav'
import FanMemberNav from '@/components/Nav/FanMemberNav'
import Title from '@/components/Title'
import Benefits from '@/components/Benefits/Benefits'
import { BecomeImages } from '@/data/becomeImages'
import ExperienceCarrousel from '@/components/Carroucel/ExperienceCarroucel'
import ImageBecomeSlider from '@/components/Carroucel/ImageBecomeSlider'

const become = () => {
  return (
    <div>
      <Nav />
      <FanMemberNav />
      <Title
        title="Become a fan member"
        subtitle="Join the AFC Richmond family and be part of our team on and off the field. Become a fan member and help build the glorious future of our club!"
      />
      <div className="flex flex-col items-center justify-center p-3">
        <ImageBecomeSlider />
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
      <Footer />
    </div>
  )
}

export default become
