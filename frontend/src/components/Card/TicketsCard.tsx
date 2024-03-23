import { useAuth } from '@/context/Auth'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

interface TicketsCard {
  id: number
  teamImageUrl: string
  matchTime: string
  footballLeague: string
  stadium: string
  atHome: boolean
  opponent: string
}

const TicketsCard = (props: TicketsCard) => {
  const [userName, setUserName] = useState('')

  const { currentUser } = useAuth()

  useEffect(() => {
    if (currentUser) {
      setUserName(currentUser.name)
    }
  }, [currentUser])

  console.log(userName)

  return (
    <div className="flex flex-col border mx-auto border-gray-500">
      <span
        className="  text-center mt-3 text-blue-500 font-bold 
      text-lg"
      >
        {props.footballLeague}
      </span>
      <div className="flex items-center justify-center">
        {props.atHome ? (
          <>
            <Image
              src="/images/logos/Afc-richmond.webp"
              width={70}
              height={100}
              alt="Afc richmon logo"
            />
            <span className="mx-2">vs</span>
            <Image
              src={props.teamImageUrl}
              width={70}
              height={100}
              alt={props.opponent}
            />
          </>
        ) : (
          <>
            <Image
              src={props.teamImageUrl}
              width={70}
              height={100}
              alt={props.opponent}
            />
            <span className="mx-2">vs</span>
            <Image
              src="/images/logos/Afc-richmond.webp"
              width={70}
              height={100}
              alt="Afc richmon logo"
            />
          </>
        )}
      </div>
      <div className="flex flex-col justify-center items-center">
        <span className="font-semibold text-amber-600">
          {props.atHome ? (
            <>Richmond vs {props.opponent}</>
          ) : (
            <>{props.opponent} VS Richmond</>
          )}
        </span>

        <p className="">{props.matchTime}h</p>
        <p className="">{props.stadium}</p>
        <Link
          href={
            userName ? `/member/tickets/${props.id}` : `/tickets/${props.id}`
          }
          className="bg-red-900 px-8 py-1 rounded mb-3 
        hover:bg-red-800"
        >
          Buy
        </Link>
      </div>
    </div>
  )
}

export default TicketsCard
