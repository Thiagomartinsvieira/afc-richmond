import Image from 'next/image'
<<<<<<< HEAD
import Link from 'next/link'
=======
>>>>>>> development_backend
import React from 'react'

interface TicketsCard {
  id: number
  teamImageUrl: string
<<<<<<< HEAD
  matchTime: string
=======
  matchTime: number
>>>>>>> development_backend
  footballLeague: string
  stadium: string
  atHome: boolean
  opponent: string
}

const TicketsCard = (props: TicketsCard) => {
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
<<<<<<< HEAD
        <p className="">{props.stadium}</p>
        <Link
          href={`/tickets/${props.id}`}
=======
        <p className=" ">{props.stadium}</p>
        <button
>>>>>>> development_backend
          className="bg-red-900 px-8 py-1 rounded mb-3 
        hover:bg-red-800"
        >
          Buy
<<<<<<< HEAD
        </Link>
=======
        </button>
>>>>>>> development_backend
      </div>
    </div>
  )
}

export default TicketsCard
