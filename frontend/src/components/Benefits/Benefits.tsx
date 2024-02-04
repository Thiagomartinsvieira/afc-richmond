import React from 'react'
import { arrowRight } from '../icons/icons'
import BenefitsCard from '../Card/BenefitsCard'
import { benefitsData } from '@/data/benefitsData'
import Link from 'next/link'
import Image from 'next/image'

interface BenefitsCardProps {
  title: string
  about: string
}

const Benefits = () => {
  const chunkArray = (array: any[], chunkSize: number) => {
    const result = []
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize))
    }
    return result
  }

  const benefitsChunks = chunkArray(benefitsData, 3)

  return (
    <div className="flex justify-start my-8 flex-wrap mx-5">
      <Image
        src="/images/logos/Greyhounds_dog.png"
        alt=""
        width={100}
        height={65}
      />
      <div className="flex flex-col mx-2">
        <h2 className="font-bold text-yellow-500 text-xl">Benefits</h2>
        <h3 className="font-semibold">
          At AFC Richmond, every fan is the star of the show.
        </h3>
      </div>
      <div className="ml-2 text-center">
        <hr
          className="w-auto mx-auto border-gray-500 h-1 bg-gradient-to-r 
        from-blue-500 to-green-500 my-4"
        />
        <p>
          Only Richmonites Greyhounds fan members enjoy priority and exclusive
          discounts when purchasing tickets, exclusive benefits across our
          partner network, the opportunity to participate in incredible
          experiences, access to exclusive content and much more. Become a fan
          member and experience the best of the Richmonites Greyhounds universe!
        </p>

        {benefitsChunks.map((chunk, chunkIndex) => (
          <div
            key={chunkIndex}
            className="flex justify-evenly items-center w-full"
          >
            {chunk.map((benefit, index) => (
              <BenefitsCard
                key={index}
                title={benefit.title}
                about={benefit.about}
              />
            ))}
          </div>
        ))}

        <div className="flex flex-col text-center justify-center items-center">
          <span className="mb-2">
            And there! You cant miss out on all these benefits, right?{' '}
          </span>
          <p className="mb-2">
            Become an AFC Richmond fan, a true{' '}
            <span className="text-yellow-600">elite experience</span>!{' '}
          </p>
          <button
            className="flex text-center justify-center border border-yellow-500
          p-4 text-yellow-500 transition duration-200 hover:bg-white
          hover:text-black rounded mt-4"
          >
            <span className="mr-2">
              <Link href="become/login">Sign up for a plan</Link>
            </span>{' '}
            {arrowRight}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Benefits
