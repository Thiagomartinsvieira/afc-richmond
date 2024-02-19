import Image from 'next/image'
import React from 'react'

interface Sponsor {
  name: string
  img: string
  category: string
  link: string
}

const SponsorFooter = () => {
  const sponsors: Sponsor[] = [
    {
      name: 'Bantr',
      img: '/images/sponsors/bantr.png',
      category: 'Master',
      link: 'https://www.bantr.org/',
    },
    {
      name: 'Apple Tv+',
      img: '/images/sponsors/appleTv.jpg',
      category: 'Sponsor',
      link: 'https://www.apple.com/br/apple-tv-plus/',
    },
    {
      name: 'Nike',
      img: '/images/sponsors/nike.png',
      category: 'Sponsor',
      link: 'https://www.nike.com.br/',
    },
    {
      name: 'Gatorade',
      img: '/images/sponsors/gatorade.png',
      category: 'Sponsor',
      link: 'https://www.gatorade.com.br/',
    },
    {
      name: 'TNT',
      img: '/images/sponsors/tnt.webp',
      category: 'Sponsor',
      link: 'https://www.tntenergydrink.com.br/',
    },
    {
      name: 'EA',
      img: '/images/sponsors/eafc.png',
      category: 'Sponsor',
      link: 'https://www.ea.com/pt-br/games/ea-sports-fc/fc-24',
    },
    {
      name: 'Nando`s',
      img: '/images/sponsors/Nandos.png',
      category: 'Partner',
      link: 'https://www.nandosperiperi.com/',
    },
  ]

  const groupSponsorsByCategory: { [key: string]: Sponsor[] } = sponsors.reduce(
    (acc: { [key: string]: Sponsor[] }, sponsor) => {
      if (!acc[sponsor.category]) {
        acc[sponsor.category] = []
      }
      acc[sponsor.category].push(sponsor)
      return acc
    },
    {},
  )

  return (
    <div className="flex flex-col bg-gray-800 p-4 text-center">
      <h2 className="text-xl font-bold mb-4">Sponsors</h2>

      {Object.entries(groupSponsorsByCategory).map(
        ([category, categorySponsors], i) => (
          <div key={i} className="mb-4">
            <h3 className="text-lg font-semibold">{category}</h3>
            <div className="flex flex-wrap justify-center">
              {categorySponsors.map((sponsor: Sponsor, j: number) => (
                <div key={j} className="mx-2 my-2 flex flex-col items-center">
                  <a
                    href={sponsor.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      width={100}
                      height={80}
                      src={sponsor.img}
                      alt={sponsor.name}
                      className="h-16 cursor-pointer"
                    />
                  </a>
                  <p className="text-sm font-bold mt-2">{sponsor.name}</p>
                </div>
              ))}
            </div>
          </div>
        ),
      )}
    </div>
  )
}

export default SponsorFooter
