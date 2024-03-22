import { dollar, star, ticket, userPluss } from '../icons/icons'
import { useEffect, useState } from 'react'
import { useAuth } from '@/context/Auth'
import { useMembership } from '@/context/MembershipContext'

interface MemberFanCardProps {
  plan: 'Bronze' | 'Silver' | 'Gold' | 'Platinum' | 'Diamond'
  value?: number
  joinNowText?: boolean
}

const MemberFanCard = ({ plan, value, joinNowText }: MemberFanCardProps) => {
  const { currentUser } = useAuth()
  const { addAssociate, editAssociate, currentPlan } = useMembership()
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    if (currentUser) {
      setIsAuthenticated(true)
    }
  }, [currentUser])

  const planDetails = {
    Bronze: {
      discount: 20,
      value: 5,
      quest: 1,
      starsRating: 1,
      color: 'bg-amber-600',
    },
    Silver: {
      discount: 30,
      value: 10,
      quest: 2,
      starsRating: 2,
      color: 'bg-gray-400',
    },
    Gold: {
      discount: 50,
      value: 15,
      quest: 3,
      starsRating: 3,
      color: 'bg-yellow-400',
    },
    Platinum: {
      discount: 75,
      value: 20,
      quest: 4,
      starsRating: 4,
      color: 'bg-gray-300',
    },
    Diamond: {
      discount: 100,
      value: 25,
      quest: 5,
      starsRating: 5,
      color: 'bg-blue-300',
    },
  }

  const { discount, quest, starsRating, color } = planDetails[plan] || {
    discount: 0,
    quest: 0,
    starsRating: 0,
    color: 'bg-gray-200',
  }

  return (
    <div
      className={`flex flex-col items-center ${color} p-6 rounded-md mx-3 
      mb-4 w-64 border border-blue-600`}
    >
      <div
        className={`flex items-center justify-center ${color} mb-3 py-3 px-6
         rounded-md`}
      >
        <h3 className={`text-white text-lg font-bold`}>{plan}</h3>
      </div>
      <div className="mb-3">
        <span className="font-semibold text-black flex items-center">
          {ticket} <span className="ml-2">{discount}% discount on tickets</span>
        </span>
      </div>
      <div className="mb-3">
        <span className="font-semibold text-black flex items-center">
          {userPluss}{' '}
          <span className="ml-2">Up to {quest} guests with 50% discount</span>
        </span>
      </div>
      <div className="mb-3">
        <span className="font-semibold text-black flex items-center">
          {dollar}{' '}
          <span className="ml-2">
            Discounts and Advantages On the AFCR Network
          </span>
        </span>
      </div>
      <div className="mb-3">
        <span className="font-semibold text-black flex items-center">
          {star}{' '}
          <span className="ml-2">
            {starsRating} fixed stars in the rating Priority
          </span>
        </span>
      </div>
      {value && (
        <span className="flex bg-green-800 text-white px-4 py-2 rounded-md font-semibold mb-3 justify-center items-center">
          <div className="text-xs">$</div>
          {value} <div className="text-xs ml-1">month</div>
        </span>
      )}
      {joinNowText && (
        <>
          {currentPlan === '' ? (
            <button
              onClick={() => addAssociate(plan.toLowerCase())}
              className="text-center text-white bg-black font-semibold p-2 rounded-md transition duration-300 hover:bg-gray-800 cursor-pointer border"
            >
              Join Now
            </button>
          ) : (
            <button
              onClick={() => editAssociate(plan.toLowerCase())}
              className="text-center text-white bg-black font-semibold p-2 rounded-md transition duration-300 hover:bg-gray-800 cursor-pointer border"
            >
              Update Now
            </button>
          )}
        </>
      )}
    </div>
  )
}

export default MemberFanCard
