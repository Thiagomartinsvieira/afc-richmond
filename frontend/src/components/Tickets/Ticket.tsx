import Image from 'next/image'
import React from 'react'
import { useWindowSize } from 'react-use'

interface TicketsProps {
  id: number
  teamImageUrl: string
  stadium: string
  matchTime: string
  footballLeague: string
  atHome: boolean
  opponent: string
}

const Ticket = (props: TicketsProps) => {
  const { width } = useWindowSize()

  return (
    <div>
      <span className="flex justify-center text-green-500 font-bold">
        Congratulations on securing your ticket
      </span>
      <div
        className="flex items-center justify-center my-10 bg-cyan-700
        p-3 mx-auto rounded-xl lg:w-6/12 xl:w-4/12"
      >
        {props.atHome ? (
          <>
            <Image
              src="/images/logos/Afc-richmond.webp"
              width={width > 640 ? 120 : 70}
              height={120}
              className="mr-4"
              alt="Afc richmond logo"
            />
            VS
            <Image
              src={props.teamImageUrl}
              width={width > 640 ? 120 : 70}
              height={120}
              className="ml-4"
              alt={`oponent ${props.opponent} logo`}
            />
          </>
        ) : (
          <>
            <Image
              src={props.teamImageUrl}
              width={width > 640 ? 120 : 70}
              height={120}
              className="mr-4"
              alt={`oponent ${props.opponent} logo`}
            />
            VS
            <Image
              src="/images/logos/Afc-richmond.webp"
              width={width > 640 ? 120 : 70}
              height={120}
              className="ml-4"
              alt="Afc richmond logo"
            />
          </>
        )}
        <div className="font-bold ml-3 text-center">
          {props.footballLeague === 'Premier League' ? (
            <>
              <Image
                src="/images/games/Premier_League_Logo.webp"
                width={120}
                height={120}
                alt={props.footballLeague}
                className="flex mx-auto mb-4 bg-white rounded-2xl p-1"
              />
            </>
          ) : (
            <>
              <Image
                src="/images/games/FA_Cup_2020.png"
                width={width > 640 ? 120 : 100}
                height={120}
                alt={props.footballLeague}
                className="flex mx-auto mb-4 bg-white rounded-2xl"
              />
            </>
          )}
          <p>Match Time: {props.matchTime.toString()}</p>
          <p>{props.atHome ? 'Home Match' : 'Away Match'}</p>
          <p>{props.stadium}</p>
        </div>
      </div>
    </div>
  )
}

export default Ticket
