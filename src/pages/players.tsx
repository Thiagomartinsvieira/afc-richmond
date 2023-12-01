import Nav from '../components/Nav'
import PlayerCard from '../components/PlayerCard'
import Title from '../components/Title'
import React from 'react'
import { playersSquad } from '@/data/playersData'

const Players = () => {
  return (
    <div>
      <Nav />
      <Title title="Players squad" />
      <h1 className="text-center">MASCULINO | FEMININO</h1>
      <h2>Goalkeepers</h2>
      <hr className="mb-2" />
      <div className="flex flex-wrap justify-center items-center">
        {playersSquad.map((player, i) => (
          <PlayerCard key={i} {...player} />
        ))}
      </div>
    </div>
  )
}

export default Players
