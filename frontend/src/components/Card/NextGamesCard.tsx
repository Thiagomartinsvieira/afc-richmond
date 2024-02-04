import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NextGamesCard = () => {
  const games = [
    {
      id: 1,
      name: 'Richmond vs Tottenham',
      imageUrl: '/images/games/game_1.jpg',
      description: 'Test Description',
    },
    {
      id: 2,
      name: 'Richmond vs Arsenal',
      imageUrl: '/images/games/game_2.jpg',
      description: 'Test Description',
    },
    {
      id: 3,
      name: 'Westham United',
      imageUrl: '/images/games/game_3.jpg',
      description: 'Test Description',
    },
    {
      id: 4,
      name: 'Richmond vs Brighton',
      imageUrl: '/images/games/game_4.jpg',
      description: 'Test Description',
    },
  ]

  return (
    <div className="container mx-auto flex justify-center">
      <div className="flex my-5">
        {games.map((game) => (
          <div key={game.id} className="rounded-md overflow-hidden mx-2">
            <Link href="/tickets">
              <Image
                width={150}
                height={64}
                src={game.imageUrl}
                alt={`Banner ${game.name}`}
                className="w-full object-cover rounded-t opacity-50
                  hover:opacity-100 cursor-pointer"
              />
            </Link>
            <div className="p-4">
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
