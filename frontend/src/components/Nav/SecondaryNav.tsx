import Image from 'next/image'
import React from 'react'

const SecondaryNav = () => {
  const upcomingGames = [
    {
      id: 1,
      title: '/images/logos/Arsenal',
      //   date: '04-12-23',
      teamLogo: '/images/logos/ARSENAL.png',
      isHome: true,
    },
    {
      id: 2,
      title: 'Aston vila',
      //   date: '14-12-23',
      teamLogo: '/images/logos/aston_villa_17994.png',
      isHome: false,
    },
    {
      id: 3,
      title: 'Manchester city',
      //   date: '20-12-23',
      teamLogo: '/images/logos/MANCHESTER-CITY.png',
      isHome: true,
    },
  ]

  return (
    <div>
      <nav className="flex flex-row justify-around items-center bg-white p-1">
        <div className="flex text-center">
          <h2 className="text-lg font-normal mr-10 text-center text-black">
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
              <Image
                width={50}
                height={50}
                src="/images/logos/Richmond_logo.png"
                alt=""
                className="mr-2"
              />
              <p className="text-black pr-2 pl-2">x</p>
              <Image
                src={game.teamLogo}
                width={50}
                height={50}
                alt={`Logo ${game.title}`}
                className="w-8 h-8 mr-2"
              />
              <a href="#" className="text-blue-500 hover:underline"></a>
            </li>
          ))}
        </ul>
        <p className="text-black bg-yellow-300 p-1 cursor-pointer rounded-lg">
          Tickets
        </p>
      </nav>
    </div>
  )
}

export default SecondaryNav
