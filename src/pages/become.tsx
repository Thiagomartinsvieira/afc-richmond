import MemberFanCard from '@/components/Card/MemberFanCard'
import Footer from '@/components/Footer'
import ImageSlider from '@/components/ImageSlider'
import Nav from '@/components/Nav'
import FanMemberNav from '@/components/Nav/FanMemberNav'
import SignUp from '@/components/Form'
import Title from '@/components/Title'
import React from 'react'
import Benefits from '@/components/Benefits/Benefits'

const become = () => {
  const images = [
    'https://sep-bucket-prod.s3.amazonaws.com/wp-content/uploads/2023/03/Banner-Avanti.jpg',
    'https://sep-bucket-prod.s3.amazonaws.com/wp-content/uploads/2023/08/Avanti-App.jpg',
    'https://sep-bucket-prod.s3.amazonaws.com/wp-content/uploads/2023/05/Banner-Avanti-INFO-2000x600-Info-Venda-com-Facial_Reconhecimento_Facial-Portoes_FacialGremi.jpg',
    // './images/banner/baner1.png',
    'https://www.marketing-beat.co.uk/wp-content/uploads/2023/03/Nandos-X-A.F.C.-Richmond.jpg',
    'https://static1.srcdn.com/wordpress/wp-content/uploads/2023/04/ted-lasso-season-3-episode-7-dani-sam-jamie.jpg',
    'https://images5.alphacoders.com/123/1235591.jpg',
    'https://i.redd.it/puawvbm8pze71.jpg',
    'https://www.prodirectsport.com/-/media/prodirect/project/en/soccer/pdp-content/off-pitch/nike-ted-lasso/bb---pdp---ted-lasso-players-d-150323.png',
    'https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/7f25d1166089161.641231c837bdf.jpg',
    'https://www.prodirectsport.com/-/media/prodirect/project/en/soccer/pdp-content/off-pitch/nike-ted-lasso/bb-d-storytab-nike-tedlasso-2.jpg',
  ]

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

        <hr />

        <h2>ALL PLANS INCLUDE BENEFITS 🌟</h2>

        <h2>Reasons to become a Richmonites</h2>

        <div className="flex flex-wrap justify-center m-5">
          <MemberFanCard
            plan="Bronze"
            discount={50}
            value={25}
            quest={1}
            starsRating={2}
          />
          <MemberFanCard
            plan="Silver"
            discount={75}
            value={40}
            quest={2}
            starsRating={3}
          />
          <MemberFanCard
            plan="Gold"
            discount={100}
            value={100}
            quest={3}
            starsRating={4}
          />
        </div>

        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaYFCsKOFMewjJ5u1xC7r69ZrmsnCVwFwdhw&usqp=CAU"
          alt=""
        />
        <SignUp />
      </div>
      <Footer />
    </div>
  )
}

export default become
