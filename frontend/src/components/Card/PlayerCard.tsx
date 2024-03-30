import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface PlayerCardProps {
  name: string
  position: string
  imageUrl: string
  playerNumber?: number
  Captain?: boolean
  onclick?: () => void
}

const PlayerCard = (props: PlayerCardProps) => {
  const isStaff = props.position.toLowerCase().includes('staff')

  return (
    <div
      className={`relative p-4 rounded-lg shadow-md overflow-hidden
       text-center border border-yellow-600 bg-gray-800 m-5
      hover:scale-105 cursor-pointe`}
      onClick={props.onclick}
    >
      {props.playerNumber !== undefined && props.playerNumber < 100 && (
        <div
          className={`absolute top-5 right-5 font-black
        z-10 text-2xl`}
        >
          {props.playerNumber}
        </div>
      )}

      <Link href={`/players/${props.playerNumber}`}>
        <Image
          src={props.imageUrl}
          width={350}
          height={430}
          alt={`Portrait of ${props.name}`}
          className="w-56 h-80 object-cover mb-4 
          rounded-m cursor-pointer"
        />
      </Link>

      <h2 className="text-xl font-semibold">
        {props.name} {props.Captain && '⭐'}
      </h2>
      <p className="text-gray-500">{props.position}</p>
    </div>
  )
}

export default PlayerCard
