import Footer from '@/components/Footer'
import SignUp from '@/components/Form/SignUp'
import Nav from '@/components/Nav'
import FanMemberNav from '@/components/Nav/FanMemberNav'
import Title from '@/components/Title'
import React from 'react'

const register = () => {
  return (
    <div>
      <Nav />
      <FanMemberNav />
      <Title
        title="Become a fan member"
        subtitle="Join the AFC Richmond family and be part of our team on and off the field. Become a fan member and help build the glorious future of our club!"
      />
      <div>
        <SignUp />
      </div>
      <Footer />
    </div>
  )
}

export default register
