interface StadiumCardProps {
  name: string
  imageUrl: string
}

const StadiumCard = (props: StadiumCardProps) => {
  return (
    <div className="flex rounded-lg overflow-hidden shadow-md m-2">
      <img
        className="rounded-b-lg object-cover w-full h-48 w-80"
        src={props.imageUrl}
        alt={props.name}
      />
    </div>
  )
}

export default StadiumCard
