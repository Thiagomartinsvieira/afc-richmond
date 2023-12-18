interface BenefitsCardProps {
  title: string
  about: string
}

const BenefitsCard = (props: BenefitsCardProps) => {
  return (
    <div className="flex flex-wrap justify-center items-center m-4">
      <div className="p-6 w-56 h-56 bg-gray-500 rounded m-4 text-center">
        <span className="font-extrabold">{props.title}</span>
        <p className="text-xs my-4">{props.about}</p>
      </div>
    </div>
  )
}

export default BenefitsCard
