import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SecondaryNav = () => {
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
      <nav
        className="flex flex-row justify-around items-center 
      bg-white p-1"
      >
        <div className="flex text-center">
          <h2
            className="text-lg font-normal mr-10 text-center 
          text-black"
          >
            Upcoming Games
          </h2>
          <Image
            src="/images/games/Premier_League_Logo.webp"
            alt="Premier legue logo"
            width={70}
            height={40}
          />
        </div>
        <ul className="flex space-x-4 justify-center items-center mt-1">
          {upcomingGames.map((game) => (
            <li key={game.id} className="mb-2 flex items-center">
              {game.atHome ? (
                <>
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
                </>
              ) : (
                <>
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
                </>
              )}
              <a href="#" className="text-blue-500 hover:underline"></a>
            </li>
          ))}
        </ul>
        <Link href="/tickets">
          <p
            className="text-black bg-yellow-300 p-1 cursor-pointer 
          rounded-lg"
          >
            Tickets
          </p>
        </Link>
      </nav>
    </div>
  )
}

export default SecondaryNav
