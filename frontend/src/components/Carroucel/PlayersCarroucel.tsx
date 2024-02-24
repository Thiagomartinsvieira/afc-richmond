import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import PlayerCard from '../Card/PlayerCard'
import { playersSquad } from '@/data/playersData'
import Link from 'next/link'
import { useWindowSize } from 'react-use'
import { useRouter } from 'next/router'

const PlayersCarrousel = () => {
  const router = useRouter()

  const { width } = useWindowSize()
  let itemsPerSlide: number

  if (width < 640) {
    itemsPerSlide = 1
  } else if (width < 1024) {
    itemsPerSlide = 2
  } else {
    itemsPerSlide = 3
  }

  const handlePlayerClick = (
    player:
      | {
          name: string
          position: string
          imageUrl: string
          playerNumber: number
          birthDate: string
          PlaceOfBirth: string
          Captain?: undefined
        }
      | {
          name: string
          position: string
          imageUrl: string
          playerNumber: number
          birthDate: string
          PlaceOfBirth?: undefined
          Captain?: undefined
        }
      | {
          name: string
          position: string
          imageUrl: string
          playerNumber: number
          Captain: boolean
          birthDate: string
          PlaceOfBirth: string
        },
  ) => {
    router.push(`/players/${player.playerNumber}`)
  }

  return (
    <div>
      <div
        className="flex flex-col lg:flex-row justify-center items-center 
      my-8 lg:space-x-20"
      >
        <h1 className="text-xl font-bold">Player roster</h1>
        <button className="bg-yellow-600 rounded p-1 mt-2 lg:mb-2">
          <Link href="/players">See full player roster</Link>
        </button>
      </div>
      <Carousel
        showArrows={false}
        showThumbs={false}
        showIndicators={false}
        emulateTouch
        autoPlay
        infiniteLoop
        showStatus={false}
        transitionTime={1000}
        className="cursor-pointer"
      >
        {Array.from({
          length: Math.ceil(playersSquad.length / itemsPerSlide),
        }).map((_, index) => (
          <div key={index} className="flex items-center justify-center">
            {playersSquad
              .slice(index * itemsPerSlide, (index + 1) * itemsPerSlide)
              .map((player, i) => (
                <PlayerCard
                  key={i}
                  {...player}
                  onclick={() => handlePlayerClick(player)}
                />
              ))}
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default PlayersCarrousel
