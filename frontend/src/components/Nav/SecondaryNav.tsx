import { useAuth } from '@/context/Auth'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const SecondaryNav = () => {
  const { currentUser } = useAuth()
  const [name, setName] = useState('')

  useEffect(() => {
    if (currentUser) {
      setName(currentUser.name)
    }
  }, [currentUser])

  const upcomingGames = [
    {
      id: 1,
      title: '/images/logos/Arsenal',
      teamLogo: '/images/logos/ARSENAL.png',
      atHome: true,
    },
    {
      id: 2,
      title: 'Aston vila',
      teamLogo: '/images/logos/aston_villa_17994.png',
      isHome: false,
    },
    {
      id: 3,
      title: 'Manchester united',
      teamLogo: '/images/logos/Manchester-United-icon.png',
      isHome: true,
    },
  ]

  return (
    <div>
      <nav className="flex flex-row justify-around items-center bg-white p-1">
        <div className="flex text-center space-x-7 items-center">
          <h2 className="text-lg font-normal text-center text-black">
            Upcoming Games
          </h2>
          <div className="hidden lg:flex items-center space-x-7">
            <Link target="_blank" href="https://www.premierleague.com">
              <Image
                src="/images/games/Premier_League_Logo.webp"
                alt="Premier legue logo"
                width={70}
                height={40}
              />
            </Link>
            <Link
              target="_blank"
              href="https://www.thefa.com/competitions/thefacup"
            >
              <Image
                src="/images/games/FA_Cup_2020.png"
                alt="The Emirates FA CUP logo"
                width={90}
                height={40}
              />
            </Link>
          </div>
        </div>
        <ul className="hidden md:flex space-x-4 justify-center items-center mt-1">
          {upcomingGames.map((game) => (
            <li key={game.id} className="mb-2 flex items-center">
              {game.atHome ? (
                <>
                  <Link
                    className="flex items-center"
                    href={
                      name
                        ? `/member/tickets/${game.id}`
                        : `/tickets/${game.id}`
                    }
                  >
                    <Image
                      width={40}
                      height={50}
                      src="/images/logos/Afc-richmond.webp"
                      alt="Afc richmond logo"
                    />
                    <p className="text-black mx-1">vs</p>
                    <Image
                      src={game.teamLogo}
                      width={40}
                      height={50}
                      alt={`Logo ${game.title}`}
                    />
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    className="flex items-center"
                    href={
                      name
                        ? `/member/tickets/${game.id}`
                        : `/tickets/${game.id}`
                    }
                  >
                    <Image
                      src={game.teamLogo}
                      width={40}
                      height={50}
                      alt={`Logo ${game.title}`}
                    />
                    <p className="text-black mx-1">vs</p>
                    <Image
                      width={40}
                      height={50}
                      src="/images/logos/Afc-richmond.webp"
                      alt="Afc richmond logo"
                    />
                  </Link>
                </>
              )}
              <a href="#" className="text-blue-500 hover:underline"></a>
            </li>
          ))}
        </ul>
        <Link href="/tickets">
          <p className="text-black bg-yellow-300 p-1 cursor-pointer rounded-lg">
            Tickets
          </p>
        </Link>
      </nav>
    </div>
  )
}

export default SecondaryNav
