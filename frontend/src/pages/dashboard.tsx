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
import Benefits from '@/components/Benefits/Benefits'
import MemberFanCard from '@/components/Card/MemberFanCard'
import ExperienceCarousel from '@/components/Carroucel/ExperienceCarroucel'
import Image from 'next/image'
import Link from 'next/link'
import { BecomeImages } from '@/data/becomeImages'

interface UserType {
  name: string
}

interface DashboardProps {
  user: UserType | null
}

const Dashboard = (props: DashboardProps) => {
  const router = useRouter()

  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [userPlan, setUserPlan] = useState('')
  const [userRole, setUserRole] = useState('')
  const [userBornDate, setUserBornDate] = useState('')
  const { logout, currentUser } = useAuth()

  useEffect(() => {
    if (currentUser) {
      setUserName(currentUser.name)
      setUserEmail(currentUser.email)
      setUserPlan(currentUser.membership)
      setUserRole(currentUser.roles.join(', '))
      if (currentUser.born_date) {
        const formatBorn = formatBornDateForInput(currentUser.born_date)
        setUserBornDate(formatBorn)
      }
    }
  }, [currentUser])

  const firstName = userName.split(' ')[0]

  const formatBornDateForInput = (isoDate: string) => {
    const date = new Date(isoDate)
    const year = date.getFullYear()
    const month = `0${date.getMonth() + 1}`.slice(-2)
    const day = `0${date.getDate()}`.slice(-2)
    return `${year}-${month}-${day}`
  }

  return (
    <div>
      <Nav />
      <MemberNav />
      <Title
        title="Member Dashboard"
        subtitle={`Welcome ${firstName} to your dashboard, AFC Richmond member!`}
      />
      <ImageBecomeSlider />

      <Benefits />

      <Title title="Your plan" subtitle="Know your plan and its advantages" />

      <div className="flex justify-center">
        <div className="flex flex-col items-center justify-center">
          {userPlan === 'diamond' ? (
            <MemberFanCard plan="Diamond" />
          ) : userPlan === 'platinum' ? (
            <MemberFanCard plan="Platinum" />
          ) : userPlan === 'gold' ? (
            <MemberFanCard plan="Gold" />
          ) : userPlan === 'silver' ? (
            <MemberFanCard plan="Silver" />
          ) : userPlan === 'bronze' ? (
            <MemberFanCard plan="Bronze" />
          ) : (
            <div className="flex flex-col items-center">
              <span className="text-xl mb-10">
                You do not have any active plan 🙁
              </span>
              <Image
                src="/images/games/roy.gif"
                width={500}
                height={500}
                alt="Roy kent inside the ice bath"
                className="opacity-80 rounded-lg border border-blue-500
                  shadow-xl"
              />
            </div>
          )}
          {userPlan === '' ? (
            <div className="flex flex-col items-center justify-center my-10">
              <span className="text-lg mb-10">What are you waiting for?</span>
              <div className="flex space-x-5">
                <Link href="/member/plan#23">
                  <button
                    className="bg-blue-500 p-2 rounded-lg text-yellow-100
                    opacity-90 hover:opacity-100"
                  >
                    Discover the benefits
                  </button>
                </Link>
                <Link href="/member/plan#23">
                  <button
                    className="bg-blue-500 p-2 rounded-lg text-yellow-100
                  opacity-90 hover:opacity-100"
                  >
                    Choose another plan
                  </button>
                </Link>
              </div>
            </div>
          ) : (
            <div className="flex space-x-5 items-center my-10 justify-center">
              <Link href="/member/plan#23">
                <button
                  className="bg-blue-500 p-2 rounded-lg text-yellow-100
                  opacity-90 hover:opacity-100"
                >
                  Discover the benefits
                </button>
              </Link>
              <Link href="/member/plan#23">
                <button
                  className="bg-blue-500 p-2 rounded-lg text-yellow-100
                  opacity-90 hover:opacity-100"
                >
                  Choose another plan
                </button>
              </Link>
            </div>
          )}
        </div>

        {userPlan !== '' && (
          <div className="flex flex-col">
            <h3 className="text-center text-xl font-bold mb-5">
              User informations
            </h3>
            <p className="text-xl mb-7 text-white">
              Name: <span className="text-gray-500">{userName}</span>{' '}
            </p>
            <p className="text-xl mb-7 text-white">
              Email: <span className="text-gray-500">{userEmail}</span>{' '}
            </p>
            <p className="text-xl mb-7 text-white">
              BornDate: <span className="text-gray-500">{userBornDate}</span>{' '}
            </p>
            <p className="text-xl mb-7 text-white">
              Role: <span className="text-gray-500">{userRole}</span>{' '}
            </p>
            <p className="text-xl mb-7">
              Your active plan:{' '}
              <span className="text-2xl font-bold">{userPlan}</span>
            </p>
          </div>
        )}
      </div>

      <div className="mb-10">
        <ExperienceCarousel images={BecomeImages} />
      </div>
      <Footer />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return await authenticated(ctx)
}

export default Dashboard
