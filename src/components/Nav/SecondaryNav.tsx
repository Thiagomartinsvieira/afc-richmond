import React from 'react'

const SecondaryNav = () => {
  const upcomingGames = [
    {
      id: 1,
      title: 'Arsenal',
      //   date: '04-12-23',
      teamLogo:
        'https://lncimg.lance.com.br/uploads/2023/05/Escudo-ARSENAL.png',
      isHome: true,
    },
    {
      id: 2,
      title: 'Aston vila',
      //   date: '14-12-23',
      teamLogo:
        'https://cdn.icon-icons.com/icons2/103/PNG/256/aston_villa_17994.png',
      isHome: false,
    },
    {
      id: 3,
      title: 'Manchester city',
      //   date: '20-12-23',
      teamLogo:
        'https://lncimg.lance.com.br/uploads/2023/05/Escudo-MANCHESTER-CITY.png',
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
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Premier_League_Logo.svg/1200px-Premier_League_Logo.svg.png"
            alt="Premier legue logo"
            width="70px"
          />
        </div>
        <ul className="flex space-x-4 justify-center items-center mt-1">
          {upcomingGames.map((game) => (
            <li key={game.id} className="mb-2 flex items-center">
              <img
                src="https://seeklogo.com/images/A/afc-richmond-logo-7DEAA2DBC3-seeklogo.com.png"
                alt=""
                className="w-8 h-8 mr-2"
              />
              <p className="text-black pr-2 pl-2">x</p>
              <img
                src={game.teamLogo}
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
