import React, { useState } from 'react'
import Nav from '../components/Nav'
import PlayerCard from '@/components/Card/PlayerCard'
import Title from '../components/Title'
import { playersSquad } from '@/data/playersData'
import { idolsData } from '@/data/idolsData'
import { staffData } from '@/data/staffData'
import Footer from '@/components/Footer'

const Players = () => {
  const [showIdols, setShowIdols] = useState(false)
  const [showStaff, setShowStaff] = useState(false)

  const dataToShow = showStaff
    ? staffData
    : showIdols
      ? idolsData
      : playersSquad

  const positions = Array.from(
    new Set(dataToShow.map((player) => player.position)),
  )

  const handleToogleData = (dataType) => {
    if (dataType === 'idols') {
      setShowIdols(!showIdols)
      setShowStaff(false)
    } else if (dataType === 'staff') {
      setShowStaff(!showStaff)
      setShowIdols(false)
    } else {
      setShowIdols(false)
      setShowStaff(false)
    }
  }

  return (
    <div>
      <Nav />
      <Title title="Players squad" />
      <h1
        className="text-center font-bold cursor-pointer"
        onClick={handleToogleData}
      >
        {showIdols ? 'Back to Players Squad' : 'View team Idols'}
      </h1>
      <div className="flex justify-center mt-4 space-x-4">
        <button onClick={() => handleToogleData('players')} className="btn">
          Players Squad
        </button>
        <button onClick={() => handleToogleData('idols')} className="btn">
          Team Idols
        </button>
        <button onClick={() => handleToogleData('staff')} className="btn">
          Staff
        </button>
      </div>

      {positions.map((position, index) => (
        <div key={index}>
          <h2 className="text-2xl font-semibold mt-4">{position}</h2>
          <hr className="mb-2" />
          <div className="flex flex-wrap justify-center items-center">
            {dataToShow
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
