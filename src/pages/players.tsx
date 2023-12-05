import React, { useState } from 'react'
import Nav from '../components/Nav'
import PlayerCard from '../components/PlayerCard'
import Title from '../components/Title'
import { playersSquad } from '@/data/playersData'
import Footer from '@/components/Footer'

const Players = () => {
  const [showIdols, setShowIdols] = useState(false)
  const dataShow = showIdols ? idolsData : playersSquad

  const positions = Array.from(
    new Set(playersSquad.map((player) => player.position)),
  )

  const handleToogleData = () => {
    setShowIdols(!showIdols)
  }

  return (
    <div>
      <Nav />
      <Title title="Players squad" />
      <h1 className="text-center font-bold">Main Male | Team {" "}
        <button onClick={handleToogleData}
          className='tex'
        >
        </button>
      </h1>

      {positions.map((position, index) => (
        <div key={index}>
          <h2 className="text-2xl font-semibold mt-4">{position}</h2>
          <hr className="mb-2" />
          <div className="flex flex-wrap justify-center items-center">
            {playersSquad
              .filter((player) => player.position === position)
              .map((player, i) => (
                <PlayerCard key={i} {...player} />
              ))}
          </div>
        </div>
      ))}
      <Footer />
    </div>
  )
}

export default Players
