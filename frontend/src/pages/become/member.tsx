import Footer from '@/components/Footer'
import Nav from '@/components/Nav'
import FanMemberNav from '@/components/Nav/FanMemberNav'
import Title from '@/components/Title'
import { BecomeImages } from '@/data/becomeImages'
import ExperienceCarrousel from '@/components/Carroucel/ExperienceCarroucel'
import ImageBecomeSlider from '@/components/Carroucel/ImageBecomeSlider'

const member = () => {
  const afcMember = 'Thiago Martins Vieira'
  const afcMember2 = afcMember.split(' ')
  const afcMember1 = afcMember2[0]

  return (
    <div>
      <Nav />
      <FanMemberNav />
      <Title
        title={`Welcome back ${afcMember1}, AFC Richmond Fan Member!`}
        subtitle="Continue enjoying the perks of being part of our team on and off the field. Thank you for your ongoing support!"
      />
      <div className="flex flex-col items-center justify-center p-3">
        <ImageBecomeSlider />
        <Title
          title="Explore Exclusive Benefits"
          subtitle="As an existing fan member, you have access to special perks and experiences."
        />

        <ExperienceCarrousel images={BecomeImages} />
      </div>
      <Footer />
    </div>
  )
}

export default member
