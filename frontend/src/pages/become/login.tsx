import Footer from '@/components/Footer'
import SignIn from '@/components/Form/SignIn'
import Nav from '@/components/Nav'
import FanMemberNav from '@/components/Nav/FanMemberNav'
import Title from '@/components/Title'
import React from 'react'

const login = () => {
  return (
    <div>
      <Nav />
      <FanMemberNav />
      <Title
        title="Welcome back"
        subtitle="Welcome back to the AFC Richmond family! Your unwavering support continues to shape the glorious future of our club, both on and off the field. Together, let's build a legacy to remember!"
      />
      <div>
        <SignIn />
      </div>
      <Footer />
    </div>
  )
}

export default login
