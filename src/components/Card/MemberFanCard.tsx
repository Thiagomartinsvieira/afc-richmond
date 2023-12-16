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
  }

  const textPlanColors = {
    Bronze: 'text-white',
    Silver: 'text-gray-900',
    Gold: 'text-yellow-900',
  }

  const bgPlanColors = {
    Bronze: 'bg-orange-700',
    Silver: 'bg-gray-300',
    Gold: 'bg-yellow-300',
  }

  const orderedPlans = ['Bronze', 'Silver', 'Gold']

  const planIndex = orderedPlans.indexOf(props.plan)

  const bgColorClass = planColors[props.plan] || 'bg-gray-300'
  const textColorClass = textPlanColors[props.plan] || 'text-white'
  const bgPlanColorClass = bgPlanColors[props.plan] || 'bg-gray-400'

  return (
    <div
      className={`flex flex-col items-center ${bgColorClass} p-6 rounded-md mx-3
       mb-4 w-64 border border-blue-600 border-2`}
    >
      <div
        className={`flex items-center justify-center ${bgPlanColorClass} mb-5
         py-5 px-8 rounded-md`}
      >
        <h3 className={`${textColorClass} text-xl font-bold`}>{props.plan}</h3>
      </div>
      <div className="mb-5">
        <span className="font-semibold text-black flex items-center">
          {tiketIcon}{' '}
          <span className="ml-2">{props.discount}% discount on tickets</span>
        </span>
      </div>
      <div className="mb-5">
        <span className="font-semibold text-black flex items-center">
          {userPluss}{' '}
          <span className="ml-2">
            Up to {props.quest} guests with 50% discount
          </span>
        </span>
      </div>
      <div className="mb-5">
        <span className="font-semibold text-black flex items-center">
          {dollar}{' '}
          <span className="ml-2">
            Discounts and Advantages On the AFCR Network
          </span>
        </span>
      </div>
      <div className="mb-5">
        <span className="font-semibold text-black flex items-center">
          {star}{' '}
          <span className="ml-2">
            {props.starsRating} fixed stars in the rating Priority
          </span>
        </span>
      </div>
      <button
        className="text-center text-white bg-black font-semibold
       p-2 rounded-md transition duration-300 hover:bg-gray-800 border"
      >
        Join Now
      </button>
    </div>
  )
}

export default MemberFanCard
