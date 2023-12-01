import React from 'react'

interface PlayerCardProps {
  name: string
  position: string
  imageUrl: string
  playerNumber: number
}

const PlayerCard: React.FC<PlayerCardProps> = (props) => {
  return (
    <div className="relative bg-white p-4 rounded-lg shadow-md overflow-hidden">
      <div className="absolute top-10 right-10 text-blu-600 font-black p-4 rounded-full">
        {props.playerNumber}
      </div>

      <img
        src={props.imageUrl}
        alt={props.name}
        className="w-82 h-273 object-cover mb-4 rounded-md"
      />
      <h2 className="text-xl font-semibold">{props.name}</h2>
      <p className="text-gray-500">{props.position}</p>
    </div>
  )
}

export default PlayerCard
