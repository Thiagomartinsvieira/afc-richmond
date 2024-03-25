import Footer from '@/components/Footer'
import Nav from '@/components/Nav'
import Title from '@/components/Title'
import Image from 'next/image'
import ticketsGame from '@/data/ticketsGameData'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import Ticket from '@/components/Tickets/Ticket'
import { useWindowSize } from 'react-use'

interface ColorPriceClasses {
  red: string
  blue: string
  violet: string
  green: string
}

const colorClasses: ColorPriceClasses = {
  red: 'text-red-500',
  blue: 'text-blue-500',
  violet: 'text-violet-500',
  green: 'text-green-500',
}

const priceClasses: ColorPriceClasses = {
  red: '30',
  blue: '45',
  violet: '60',
  green: '30',
}

type GrandstandColor = keyof typeof colorClasses

const Buy = () => {
  const router = useRouter()
  const { buy } = router.query

  const game = ticketsGame.find(
    (ticket) => ticket.id === parseInt(buy as string),
  )

  const [amount, setAmount] = useState<number>(1)
  const [grandstandState, setGrandstandState] = useState<
    GrandstandColor | '' | null
  >(null)
  const [showTicket, setShowTicket] = useState<boolean>(false)

  const handleBuyTicket = () => {
    setTimeout(() => {
      setShowTicket(true)
    }, 500)
  }

  const { width } = useWindowSize()

  return (
    <div>
      <Nav />
      <Title title="Choose Your Seat" subtitle="Select a Section" />

      <div
        className={`flex flex-col-reverse md:flex-row justify-center 
      ${width < 640 ? '' : 'space-x-32'}`}
      >
        <div className="flex justify-center mb-20">
          <div className="flex flex-col justify-center items-center">
            <button
              disabled={showTicket}
              className={` bg-red-600 p-6 hover:bg-red-400 cursor-pointer
               w-52 ${width > 640 ? '' : 'mt-10'}`}
              onClick={() => setGrandstandState('red')}
            ></button>
            <div className="flex">
              <button
                disabled={showTicket}
                className="bg-blue-600 p-6 hover:bg-blue-400 
                cursor-pointer"
                onClick={() => setGrandstandState('blue')}
              ></button>
              <Image
                src="/images/stadium/field.jpg"
                width={200}
                height={200}
                alt="Soccer field"
              />
              <button
                disabled={showTicket}
                className="bg-violet-600 p-6 hover:bg-violet-400 
                cursor-pointer"
                onClick={() => setGrandstandState('violet')}
              ></button>
            </div>
            <button
              disabled={showTicket}
              className="bg-green-600 p-6 hover:bg-green-400 
              cursor-pointer w-52"
              onClick={() => setGrandstandState('green')}
            ></button>
          </div>
        </div>

        <div>
          <div
            className="flex flex-col bg-orange-500 justify-center
          items-center w-80 mx-auto rounded-t-md"
          >
            <span className="mt-5 font-extrabold">
              {game?.footballLeague === 'Premier League' ? (
                <Image
                  src="/images/games/Premier_League_Logo.webp"
                  width={100}
                  height={100}
                  alt={game.footballLeague}
                />
              ) : (
                <Image
                  src="/images/games/FA_Cup_2020.png"
                  width={150}
                  height={100}
                  alt={game?.footballLeague || ''}
                />
              )}
            </span>

            <div className="flex items-center my-5 space-x-2">
              {game?.atHome ? (
                <>
                  <Image
                    src="/images/logos/Afc-richmond.webp"
                    width={70}
                    height={100}
                    alt="Richmond logo"
                  />
                  vs
                  <Image
                    src={game?.teamImageUrl || ''}
                    width={70}
                    height={100}
                    alt={game?.opponent || ''}
                  />
                </>
              ) : (
                <>
                  <Image
                    src={game?.teamImageUrl || ''}
                    width={70}
                    height={100}
                    alt={game?.opponent || ''}
                  />
                  vs
                  <Image
                    src="/images/logos/Afc-richmond.webp"
                    width={70}
                    height={100}
                    alt="Richmond logo"
                  />
                </>
              )}
            </div>
            <div>18/02/2024 - {game?.matchTime} </div>
            <div className="mb-5">{game?.stadium}</div>
          </div>
          <div
            className="flex mx-auto bg-neutral-800 w-80 py-5 
          rounded-b-md"
          >
            <div className="flex flex-col ml-4 space-y-3">
              <span>upper stand Red</span>
              <span>lower stand Green</span>
              <span>side stand Blue</span>
              <span>side stand Violet</span>
            </div>
            <div
              className="flex ml-auto mr-4 flex-col space-y-3
            text-orange-500"
            >
              <span>$ {priceClasses.red}</span>
              <span>$ {priceClasses.green}</span>
              <span>$ {priceClasses.blue}</span>
              <span>$ {priceClasses.violet}</span>
            </div>
          </div>
        </div>
      </div>
      {grandstandState !== null && grandstandState !== '' && (
        <>
          <p className="flex justify-center space-x-2">
            <span>You selected</span>
            <b className={colorClasses[grandstandState]}>
              {grandstandState} ${' '}
              {parseInt(priceClasses[grandstandState]) * amount}
            </b>
          </p>
          <div className="flex flex-col justify-center items-center">
            <label htmlFor="amount" className="block mb-1">
              Amount:
            </label>
            <input
              id="amount"
              className="w-16 border rounded-sm text-center transition-all 
              duration-300 
        ease-in-out focus:border-blue-500 focus:outline-none focus:ring-2 
        focus:ring-blue-200"
              type="number"
              min={1}
              max={10}
              value={amount}
              disabled={showTicket}
              onChange={(e) => setAmount(parseInt(e.target.value))}
            />
          </div>
          <div className="flex justify-center items-center space-x-2 mt-7">
            <span className="font-semibold">Form of payment:</span>
            <select
              className="p-2 border rounded-md focus:outline-none 
        focus:border-blue-500"
              name="payment"
              id="payment"
              disabled={showTicket}
            >
              <option value="visa">Visa</option>
              <option value="paypal">PayPal</option>
              <option value="mastercard">MasterCard</option>
              <option value="applepay">Apple Pay</option>
              <option value="googlepay">Google Pay</option>
              <option value="alipay">Alipay</option>
            </select>
          </div>
        </>
      )}
      <button
        className={`flex my-7 mx-auto bg-orange-500 py-1 px-3 
  rounded font-bold w-32 items-center justify-center 
  ${grandstandState ? '' : 'bg-gray-300 cursor-not-allowed'}`}
        disabled={!grandstandState}
        onClick={handleBuyTicket}
      >
        Buy ticket
      </button>
      {showTicket === true && (
        <>
          {game && (
            <Ticket
              teamImageUrl={game.teamImageUrl || ''}
              atHome={game.atHome || false}
              footballLeague={game.footballLeague || ''}
              opponent={game.opponent || ''}
              matchTime={game.matchTime}
              stadium={game.stadium || ''}
              id={game.id}
            />
          )}
        </>
      )}
      <Footer />
    </div>
  )
}

export default Buy
