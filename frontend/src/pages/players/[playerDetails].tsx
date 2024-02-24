import PlayersCarrousel from '@/components/Carroucel/PlayersCarroucel'
import Footer from '@/components/Footer'
import Nav from '@/components/Nav'
import { arrowUpLeft } from '@/components/icons/icons'
import { playersSquad } from '@/data/playersData'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { useWindowSize } from 'react-use'

const PlayerDetails = () => {
  const { width } = useWindowSize()

  const router = useRouter()
  const { playerDetails } = router.query

  if (typeof playerDetails !== 'string') {
    return <div>Invalid or missing player details</div>
  }

  const playerNumber = parseInt(playerDetails, 10)

  const player = playersSquad.find(
    (player) => player.playerNumber === playerNumber,
  )

  if (!player) {
    return <div>Player not found</div>
  }

  let age = 'Unknown'

  if (player.birthDate) {
    const birthDate = new Date(player.birthDate)
    const currentDate = new Date()

    const difference = currentDate.getTime() - birthDate.getTime()
    age = Math.floor(difference / (1000 * 60 * 60 * 24 * 365.25)).toString()
  }

  return (
    <div>
      <Nav />
      <div
        className="flex flex-col justify-center items-center space-y-4
       my-10"
      >
        <div className="flex flex-col justify-end w-full">
          {width >= 1024 && (
            <hr
              className={`border border-blue-600 border-t-2 ml-auto mr-10 
            ${player.playerNumber.toString().length >= 2 ? 'w-24' : 'w-12'}`}
            />
          )}
          <span
            className="font-extrabold text-7xl ml-auto mr-10
           text-yellow-500"
          >
            {width > 1024 && playerNumber}
          </span>
          {width >= 1024 && (
            <hr
              className={`border border-blue-600 border-t-2 ml-auto mr-10 
           ${player.playerNumber.toString().length >= 2 ? 'w-24' : 'w-12'}`}
            />
          )}
        </div>

        <div className="flex flex-col lg:flex-row space-y-4">
          <div className="flex justify-center">
            <Image
              src={player.imageUrl}
              width={300}
              height={300}
              alt={player.name}
              className="rounded-md border-2"
            />
          </div>

          <div className="flex flex-col ml-10 space-y-5">
            <div className="flex text-3xl mx-auto lg:mx-0">
              <h2 className="font-extrabold">{player.name}</h2>
            </div>
            <p className="font-bold">
              Position:{' '}
              <span className="font-extrabold text-xl">{player.position}</span>
            </p>
            {width <= 1024 && (
              <p>
                Player Number:{' '}
                <span className="font-extrabold text-xl">{playerNumber}</span>
              </p>
            )}
            <p>
              Age: <span className="font-extrabold text-xl">{age}</span>
            </p>
            <div className="flex flex-col">
              <p>
                Place Of Birth:{' '}
                <span className="font-extrabold text-xl">
                  {player.PlaceOfBirth}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <PlayersCarrousel />
      <div className="mb-10 mt-5">
        <Link
          className="flex items-center justify-center space-x-3 hover:underline
          hover:scale-110 transition-transform ease-out duration-300"
          href="/players"
        >
          <span className="ml-5">Back to player</span>
          <span>{arrowUpLeft}</span>
        </Link>
      </div>
      <Footer />
    </div>
  )
}

export default PlayerDetails
