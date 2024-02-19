import Footer from '@/components/Footer'
import Nav from '@/components/Nav'
import Title from '@/components/Title'
import ticketsGame from '@/data/ticketsGameData'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { MdOutlineStadium } from 'react-icons/md'
import { useWindowSize } from 'react-use'

const GameId = () => {
  const router = useRouter()
  const { gameId } = router.query
  const gameIdValue = Array.isArray(gameId) ? gameId[0] : gameId

  const game = gameIdValue
    ? ticketsGame.find((ticket) => ticket.id === parseInt(gameIdValue))
    : null

  const { width } = useWindowSize()

  return (
    <div>
      <Nav />
      <Title
        title="Ticket Purchase"
        subtitle="Are you a Richmond Fan Member?"
      />

      <span
        className="flex justify-center text-center text-blue-500
       font-bold text-lg"
      >
        {game?.footballLeague === 'Premier League' ? (
          <Image
            src="/images/games/Premier_League_Logo2.webp"
            width={250}
            height={200}
            alt="Premier Legue logo"
          />
        ) : (
          <Image
            src="/images/games/FA_Cup_2020.png"
            width={250}
            height={200}
            alt="FA Cup logo"
          />
        )}
      </span>

      {game && game.atHome ? (
        <div
          className="flex mx-auto items-center justify-center 
        md:space-x-20 mb-4"
        >
          <Image
            src="/images/logos/Afc-richmond.webp"
            width={150}
            height={200}
            alt="Afc logo"
          />
          <span>VS</span>
          <Image
            src={game.teamImageUrl}
            width={150}
            height={200}
            alt="afc logo"
          />
        </div>
      ) : game ? (
        <div
          className="flex mx-auto items-center justify-center 
        md:space-x-20 mb-4"
        >
          <Image
            src={game.teamImageUrl}
            width={150}
            height={200}
            alt="Afc logo"
          />
          <span>VS</span>
          <Image
            src="/images/logos/Afc-richmond.webp"
            width={150}
            height={200}
            alt="afc logo"
          />
        </div>
      ) : null}
      <div className="flex justify-center space-x-2 items-center">
        <p className="text-center font-semibold">{game?.stadium}</p>
        <MdOutlineStadium size={20} />
      </div>
      <p className="text-center font-medium">{game?.matchTime}H</p>

      <div
        className={`flex flex-col md:flex-row md:space-x-20 items-center 
      justify-center my-20 ${width < 640 ? 'space-y-10' : ''}`}
      >
        <div className="flex flex-col space-y-2 justify-center items-center">
          <span>Yes, I am a Richmond Fan Member</span>
          <Link
            href="/become/login"
            className="bg-yellow-700 border rounded w-1/2 
          p-2 text-center"
          >
            click here
          </Link>
        </div>
        <div className="flex flex-col space-y-2 justify-center items-center">
          <span>No, I am not a Richmond Fan Member</span>
          <Link
            href={gameId ? `/tickets/${gameId}/${gameId}` : '#'}
            className="bg-yellow-700 border rounded w-1/2 
          p-2 text-center"
          >
            click here
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default GameId
