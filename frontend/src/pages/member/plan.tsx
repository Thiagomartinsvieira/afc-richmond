import Footer from '@/components/Footer'
import Nav from '@/components/Nav'
import MemberNav from '@/components/Nav/MemberNav'
import { useAuth } from '@/context/Auth'
import { useEffect, useState } from 'react'
import { GetServerSideProps } from 'next'
import { authenticated } from '@/utils/auth'
import MemberFanCard from '@/components/Card/MemberFanCard'
import Title from '@/components/Title'
import Link from 'next/link'
import Image from 'next/image'
import { useMembership } from '@/context/MembershipContext'

interface UserType {
  name: string
  plan: string
}

interface ProfileProps {
  user: UserType | null
}

const Plan = (props: ProfileProps) => {
  const [userPlan, setUserPlan] = useState('')
  const { currentUser } = useAuth()
  const { addAssociate, currentPlan, deleteAssociate } = useMembership()

  useEffect(() => {
    if (currentUser) {
      setUserPlan(currentUser.membership)
    }
  }, [currentUser])

  return (
    <div>
      <Nav />
      <MemberNav />

      <div className="flex flex-col justify-center items-center">
        <Title title="Your plan" subtitle="Know your plan and its advantages" />

        {currentPlan !== '' && (
          <p className="text-xl mb-7">
            Your active plan:{' '}
            <span className="text-2xl font-bold">{currentPlan}</span>
          </p>
        )}

        {currentPlan === 'diamond' ? (
          <MemberFanCard plan="Diamond" />
        ) : currentPlan === 'platinum' ? (
          <MemberFanCard plan="Platinum" />
        ) : currentPlan === 'gold' ? (
          <MemberFanCard plan="Gold" />
        ) : currentPlan === 'silver' ? (
          <MemberFanCard plan="Silver" />
        ) : currentPlan === 'bronze' ? (
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

        {currentPlan && (
          <button
            onClick={deleteAssociate}
            className="bg-red-600 rounded-lg p-1 text-sm"
          >
            Remove plan
          </button>
        )}

        {userPlan === '' ? (
          <div className="flex flex-col items-center justify-center my-10">
            <span className="text-lg mb-10">What are you waiting for?</span>

            <div className="flex space-x-5">
              <Link href="#23">
                <button
                  className="bg-blue-500 p-2 rounded-lg text-yellow-100 
                  opacity-90 hover:opacity-100"
                >
                  Discover the benefits
                </button>
              </Link>

              <Link href="#23">
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
          <div className="flex space-x-5 items-center my-10">
            <Link href="#23">
              <button
                className="bg-blue-500 p-2 rounded-lg text-yellow-100 
                opacity-90 hover:opacity-100"
              >
                Discover the benefits
              </button>
            </Link>

            <Link href="#23">
              <button
                className="bg-blue-500 p-2 rounded-lg text-yellow-100 
                opacity-90 hover:opacity-100"
              >
                Choose another plan
              </button>
            </Link>
          </div>
        )}
        <section id="23">
          <Title
            title="Planos disponives"
            subtitle="Escolha o Beneficio que mais combina com voce e deixe o Richmond mais
            perto de voce"
          />
          <div
            className="flex flex-wrap items-center justify-center mx-20 
          mb-10"
          >
            <MemberFanCard plan="Bronze" value={15} joinNowText />
            <MemberFanCard plan="Silver" value={30} joinNowText />
            <MemberFanCard plan="Gold" value={60} joinNowText />
            <MemberFanCard plan="Platinum" value={80} joinNowText />
            <MemberFanCard plan="Diamond" value={100} joinNowText />
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return await authenticated(ctx)
}

export default Plan
