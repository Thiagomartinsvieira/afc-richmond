import Footer from '@/components/Footer'
import Nav from '@/components/Nav'
import Title from '@/components/Title'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const GameId = () => {
  const router = useRouter()
  const param = router.query.id

  return (
    <div>
      <Nav />
      <Title
        title="Ticket Purchase"
        subtitle="Are you a Richmond Fan Member?"
      />
      <div className="flex space-x-32 items-center justify-center mb-10">
        <div className="flex flex-col space-y-2 justify-center items-center">
          <span>Yes, I am a Richmond Fan Member</span>
          <Link
            href="/"
            className="bg-yellow-700 border rounded w-1/2 
          p-2 text-center"
          >
            click here
          </Link>
        </div>
        <div className="flex flex-col space-y-2 justify-center items-center">
          <span>No, I am not a Richmond Fan Member</span>
          <Link
            href="/"
            className="bg-yellow-700 border rounded w-1/2 
          p-2 text-center"
          >
            click here
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default GameId
