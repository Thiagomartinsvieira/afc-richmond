import Link from 'next/link'
import React from 'react'

const NextGamesCard = () => {
  const games = [
    {
      id: 1,
      name: 'Richmond vs Tottenham',
      imageUrl: 'https://pbs.twimg.com/media/FvKXPJpXwAMxytG.jpg:large',
      description: 'Test Description',
    },
    {
      id: 2,
      name: 'Richmond vs Arsenal',
      imageUrl: 'https://pbs.twimg.com/media/FulFHtPWIBQS0no.jpg:large',
      description: 'Test Description',
    },
    {
      id: 3,
      name: 'Westham United',
      imageUrl: 'https://pbs.twimg.com/media/Fxal778WIAImEsK.jpg:large',
      description: 'Test Description',
    },
    {
      id: 4,
      name: 'Richmond vs Brighton',
      imageUrl: 'https://pbs.twimg.com/media/Fvt-gkFacAAlAPd.jpg:large',
      description: 'Test Description',
    },
  ]

  return (
    <div className="container mx-auto flex justify-center">
      <div className="flex my-5">
        {games.map((game) => (
          <div key={game.id} className="rounded-md overflow-hidden mx-2">
            <Link href="/tickets">
              <img
                src={game.imageUrl}
                alt={`Banner ${game.name}`}
                className="w-full h-64 object-cover rounded-t w-56 opacity-50
                  hover:opacity-100 cursor-pointer"
              />
            </Link>
            <div className="p-4">
              {/* <h2 className="text-lg font-semibold 
              truncate">{game.name}</h2> */}
              {/* <p className="text-gray-500 text-center">{game.description}</p> */}
              <a
                href="/tickets"
                className="bg-blue-500 text-white px-4 
              py-2 mt-2 rounded-full"
              >
                Comprar Ingresso
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default NextGamesCard
