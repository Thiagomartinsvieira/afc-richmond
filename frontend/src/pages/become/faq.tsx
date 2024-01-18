import Footer from '@/components/Footer'
import Nav from '@/components/Nav'
import FanMemberNav from '@/components/Nav/FanMemberNav'
import Title from '@/components/Title'
import Link from 'next/link'
import { useState } from 'react'

const Faq = () => {
  const [spanValue, setSpanValue] = useState('MEMBERSHIP CARD')
  const [expanded, setExpanded] = useState(false)

  const handleButtonClick = (newValue) => {
    setSpanValue(newValue)
  }

  const handleToggle = (index) => {
    setExpanded(!expanded)
  }

  return (
    <div>
      <Nav />
      <FanMemberNav />
      <Title
        title="GENERAL QUESTIONS!"
        subtitle="🤔 Frequently Asked Questions - AFC Richmond Fan Membership"
      />
      <div className="flex justify-center space-x-14">
        <div className="flex flex-col space-y-3 mb-10">
          <button
            className="bg-stone-900 max-w-xs rounded p-2"
            onClick={() => handleButtonClick('MEMBERSHIP CARD')}
          >
            MEMBERSHIP CARD
          </button>
          <button
            className="bg-stone-900 max-w-xs rounded p-2"
            onClick={() => handleButtonClick('PAYMENT')}
          >
            PAYMENT
          </button>
          <button
            className="bg-stone-900 max-w-xs rounded p-2"
            onClick={() => handleButtonClick('BENEFITS')}
          >
            BENEFITS
          </button>
          <button
            className="bg-stone-900 max-w-xs rounded p-2"
            onClickCapture={() => handleButtonClick('TICKETS')}
          >
            TICKETS
          </button>
          <button
            className="bg-stone-900 max-w-xs rounded p-2"
            onClick={() => handleButtonClick('DEPENDENTS')}
          >
            DEPENDENTS
          </button>
        </div>

        <div className="flex flex-col space-y-3 mb-10">
          <span className="text-lg font-extrabold mb-4">{spanValue}</span>

          {spanValue === 'MEMBERSHIP CARD' && (
            <div className="flex flex-col space-y-3">
              <button
                className="bg-stone-900 max-w-xs rounded p-2"
                onClick={handleToggle}
              >
                Where do I get my membership card?
              </button>
              {expanded && (
                <div>
                  <p className="bg-stone-700 max-w-xs rounded p-2 font-light">
                    Your membership card will be sent to the address registered
                    in your profile
                  </p>
                </div>
              )}
              <button className="bg-stone-900 max-w-xs rounded p-2">
                Do I need to pay any fee to receive my membership card?
              </button>
              {expanded && (
                <p className="bg-stone-700 max-w-xs rounded p-2 font-light">
                  No
                </p>
              )}
              <button className="bg-stone-900 max-w-xs rounded p-2">
                What is the delivery time for my Membership Card?
              </button>
              <button className="bg-stone-900 max-w-xs rounded p-2">
                How can I request a replacement for my membership card?
              </button>
            </div>
          )}

          {spanValue === 'TICKETS' && (
            <div className="flex flex-col space-y-3 ">
              <button className="bg-stone-900 max-w-xs rounded p-2">
                Can I change my stadium access method after ticket purchase?
              </button>
              <button className="bg-stone-900 max-w-xs rounded p-2">
                Where do I buy tickets as a Member?
              </button>
              <button className="bg-stone-900 max-w-xs rounded p-2">
                Are ticket purchase discounts applicable to all games?
              </button>
              <button className="bg-stone-900 max-w-xs rounded p-2">
                What are the payment methods for online ticket purchases?
              </button>
            </div>
          )}

          {spanValue === 'BENEFITS' && (
            <div className="flex flex-col space-y-3 ">
              <button className="bg-stone-900 max-w-xs rounded p-2">
                What benefits do I have as a Member?
              </button>
              <button className="bg-stone-900 max-w-xs rounded p-2">
                I just joined. How do I enjoy the benefits?
              </button>
              <button className="bg-stone-900 max-w-xs rounded p-2">
                As a Member, is my ticket guaranteed for all games?
              </button>
              <button className="bg-stone-900 max-w-xs rounded p-2">
                Do dependents have the same benefits as the primary member?
              </button>
            </div>
          )}

          {spanValue === 'PAYMENT' && (
            <div className="flex flex-col space-y-3 ">
              <button className="bg-stone-900 max-w-xs rounded p-2">
                Can I pay my annual fee in installments?
              </button>
              <button className="bg-stone-900 max-w-xs rounded p-2">
                Can I pay my membership fee monthly?
              </button>
              <button className="bg-stone-900 max-w-xs rounded p-2">
                What payment methods are available for members?
              </button>
              <button className="bg-stone-900 max-w-xs rounded p-2">
                I was charged twice on my bill. What do I do?
              </button>
            </div>
          )}

          {spanValue === 'DEPENDENTS' && (
            <div className="flex flex-col space-y-3 ">
              <button className="bg-stone-900 max-w-xs rounded p-2">
                Can I add a dependent at any time to my plan?
              </button>
              <button className="bg-stone-900 max-w-xs rounded p-2">
                Do I need to provide my dependents details?
              </button>
              <button className="bg-stone-900 max-w-xs rounded p-2">
                Can anyone be my dependent?
              </button>
              <button className="bg-stone-900 max-w-xs rounded p-2">
                Do dependents need the primary member to access the Stadium?
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col space-y-5 justify-center items-center mx-10 mt-5 mb-20">
        <div className="bg-neutral-300 text-black space-y-1 p-3 rounded">
          <span className="m-10 font-bold">Still have questions?</span>
          <p className="mx-10">
            Didnt find the answer you were looking for? No problem.{' '}
            <Link
              href="/contact"
              target="_blank"
              className="text-blue-500 hover:text-blue-400"
            >
              Contact us
            </Link>{' '}
            and well get back to you as soon as possible.
          </p>
        </div>
        <div className="bg-amber-100 text-black space-y-1 p-3 rounded">
          <span className="mx-10 font-bold">Club-related inquiries?</span>
          <p className="mx-10">
            Didnt find the answer you were looking for? No problem.{' '}
            <Link
              href="/contact"
              target="_blank"
              className="text-blue-500 hover:text-blue-400"
            >
              Contact us
            </Link>{' '}
            and well get back to you as soon as possible.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Faq
