import MemberFanCard from '@/components/Card/MemberFanCard'
import Footer from '@/components/Footer'
import Nav from '@/components/Nav'
import FanMemberNav from '@/components/Nav/FanMemberNav'
import Title from '@/components/Title'
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

        <ExperienceCarrousel images={BecomeImages} />
      </div>
      <Footer />
    </div>
  )
}

export default become
