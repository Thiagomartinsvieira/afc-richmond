import React from 'react'

interface PlayerCardProps {
  name: string
  position: string
  imageUrl: string
  playerNumber: number
  Captain: boolean
}

const PlayerCard = (props: PlayerCardProps) => {
  return (
    <div className="relative bg-white p-4 rounded-lg shadow-md overflow-hidden">
      <div
        className="absolute top-5 right-5 bg-black text-blu-600 
        font-black p-4 rounded-full"
      >
        {props.playerNumber}
      </div>
      <img
        src={props.imageUrl}
        alt={props.name}
        className="w-full h-80 object-cover mb-4 rounded-m"
      />
      <h2 className="text-xl font-semibold">
        {props.name} {props.Captain && '⭐'}
      </h2>
      <p className="text-gray-500">{props.position}</p>
    </div>
  )
}

export default PlayerCard
