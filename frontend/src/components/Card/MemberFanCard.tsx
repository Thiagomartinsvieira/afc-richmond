import Link from 'next/link'
import { dollar, star, tiketIcon, userPluss } from '../icons/icons'

interface MemberFanCardProps {
  plan: string
  discount: number
  value: number
  quest: number
  starsRating: number
}

const MemberFanCard = (props: MemberFanCardProps) => {
  const planColors = {
    Bronze: 'bg-yellow-800',
    Silver: 'bg-gray-400',
    Gold: 'bg-yellow-400',
    Platinum: 'bg-blue-500',
    Diamond: 'bg-purple-700',
  }

  const textPlanColors = {
    Bronze: 'text-white',
    Silver: 'text-gray-900',
    Gold: 'text-yellow-900',
    Platinum: 'text-white',
    Diamond: 'text-white',
  }

  const bgPlanColors = {
    Bronze: 'bg-orange-700',
    Silver: 'bg-gray-300',
    Gold: 'bg-yellow-300',
    Platinum: 'bg-blue-600',
    Diamond: 'bg-purple-800',
  }

  const orderedPlans = ['Bronze', 'Silver', 'Gold']

  const bgColorClass = planColors[props.plan] || 'bg-gray-300'
  const textColorClass = textPlanColors[props.plan] || 'text-white'
  const bgPlanColorClass = bgPlanColors[props.plan] || 'bg-gray-400'

  return (
    <div
      className={`flex flex-col items-center ${bgColorClass} p-6 rounded-md mx-3 mb-4 w-64 border border-blue-600 border-2`}
    >
      <div
        className={`flex items-center justify-center ${bgPlanColorClass} mb-3 py-3 px-6 rounded-md`}
      >
        <h3 className={`${textColorClass} text-lg font-bold`}>{props.plan}</h3>
      </div>
      <div className="mb-3">
        <span className="font-semibold text-black flex items-center">
          {tiketIcon}{' '}
          <span className="ml-2">{props.discount}% discount on tickets</span>
        </span>
      </div>
      <div className="mb-3">
        <span className="font-semibold text-black flex items-center">
          {userPluss}{' '}
          <span className="ml-2">
            Up to {props.quest} guests with 50% discount
          </span>
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
            {props.starsRating} fixed stars in the rating Priority
          </span>
        </span>
      </div>
      <span
        className="flex bg-green-800 text-white px-4 py-2 rounded-md
       font-semibold mb-3 justify-center items-center"
      >
        <div className="text-xs">$</div>
        {props.value} <div className="text-xs ml-1">month</div>
      </span>
      <Link
        href="/become/register"
        className="text-center text-white bg-black font-semibold
       p-2 rounded-md transition duration-300 hover:bg-gray-800
       cursor-pointer border"
      >
        Join Now
      </Link>
    </div>
  )
}

export default MemberFanCard
