import { GetServerSideProps } from 'next'
import { authenticated } from '../utils/auth'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Title from '@/components/Title'
import { useAuth } from '@/context/Auth'
import ImageBecomeSlider from '@/components/Carroucel/ImageBecomeSlider'
import MemberNav from '@/components/Nav/MemberNav'
import ExperienceCarrousel from '@/components/Carroucel/ExperienceCarroucel'
import { BecomeImages } from '@/data/becomeImages'
import Image from 'next/image'

interface UserType {
  name: string
}

interface DashboardProps {
  user: UserType | null
}

const Dashboard = (props: DashboardProps) => {
  const router = useRouter()

  const [userName, setUserName] = useState('')
  const { logout, currentUser } = useAuth()

  useEffect(() => {
    if (currentUser) {
      setUserName(currentUser.name)
    }
  }, [currentUser])

  return (
    <div>
      <Nav />
      <MemberNav />
      <Title
        title="Member Dashboard"
        subtitle="Welcome to your dashboard, AFC Richmond member!"
      />
      <ImageBecomeSlider />
      <p>{userName}</p>
      <button onClick={logout}>logout</button>

      <div className="mb-10">
        {/* <ExperienceCarrousel images={BecomeImages} /> */}
      </div>
      <Footer />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return await authenticated(ctx)
}

export default Dashboard
