import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import PlayerCard from '../Card/PlayerCard'
import { playersSquad } from '@/data/playersData'
import Link from 'next/link'

const PlayersCarroucel = () => {
  const itemsPerSlide = 3

  return (
    <div>
      <div className="flex justify-center items-center space-x-32 my-8">
        <h1 className="text-xl font-bold">Player roster</h1>
        <button className="bg-yellow-600 rounded p-1">
          <Link href="/players">See full player roster</Link>
        </button>
      </div>
      <Carousel
        showArrows={true}
        showThumbs={false}
        emulateTouch
        infiniteLoop
        showStatus={false}
      >
        {Array.from({
          length: Math.ceil(playersSquad.length / itemsPerSlide),
        }).map((_, index) => (
          <div key={index} className="flex items-center justify-center">
            {playersSquad
              .slice(index * itemsPerSlide, (index + 1) * itemsPerSlide)
              .map((player, i) => (
                <PlayerCard key={i} {...player} />
              ))}
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default PlayersCarroucel
