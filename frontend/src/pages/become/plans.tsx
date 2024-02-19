import Benefits from '@/components/Benefits/Benefits'
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

      <div className="flex justify-center flex-wrap">
        <MemberFanCard
          plan="Bronze"
          discount={25}
          value={15}
          quest={1}
          starsRating={2}
        />
        <MemberFanCard
          plan="Silver"
          discount={50}
          value={30}
          quest={2}
          starsRating={3}
        />
        <MemberFanCard
          plan="Gold"
          discount={75}
          value={60}
          quest={3}
          starsRating={4}
        />
        <MemberFanCard
          plan="Platinum"
          discount={100}
          value={80}
          quest={4}
          starsRating={4.5}
        />
        <MemberFanCard
          plan="Diamond"
          discount={100}
          value={100}
          quest={5}
          starsRating={5}
        />
      </div>

      <Footer />
    </div>
  )
}

export default plans
