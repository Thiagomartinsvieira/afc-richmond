import MemberFanCard from '@/components/Card/MemberFanCard'
import Footer from '@/components/Footer'
import Nav from '@/components/Nav'
import FanMemberNav from '@/components/Nav/FanMemberNav'
import Title from '@/components/Title'
import React from 'react'

const plans = () => {
  return (
    <div>
      <Nav />
      <FanMemberNav />

      <Title
        title="Membership Plans"
        subtitle="Choose your membership plan and be a part of the AFC Richmond fan family. Enjoy exclusive benefits, discounts, and exciting quests as you support our club on and off the field."
      />

      <div className="flex justify-center flex-wrap mb-20">
        <MemberFanCard plan="Bronze" value={15} joinNowText />
        <MemberFanCard plan="Silver" value={30} joinNowText />
        <MemberFanCard plan="Gold" value={60} joinNowText />
        <MemberFanCard plan="Platinum" value={80} joinNowText />
        <MemberFanCard plan="Diamond" value={100} joinNowText />
      </div>

      <Footer />
    </div>
  )
}

export default plans
