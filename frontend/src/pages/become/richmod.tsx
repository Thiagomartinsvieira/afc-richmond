import RichmondPlusCarroucel from '@/components/Carroucel/RichmondPlusCarroucel'
import Footer from '@/components/Footer'
import Nav from '@/components/Nav'
import FanMemberNav from '@/components/Nav/FanMemberNav'
import Title from '@/components/Title'
import React from 'react'

const richmod = () => {
  return (
    <div>
      <Nav />
      <FanMemberNav />
      <Title
        title="Richmond+"
        subtitle="Follow AFC Richmond in social medias"
      />
      <RichmondPlusCarroucel />

      <Footer />
    </div>
  )
}

export default richmod
