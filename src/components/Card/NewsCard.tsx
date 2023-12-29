interface NewsCardProps {
  article: string
  imageUrl: string
}

const NewsCard = (props: NewsCardProps) => {
  return (
    <div className="flex mt-10">
      <div className="m-2">
        <img
          src={props.imageUrl}
          alt={`image of ${props.imageUrl}`}
          className="opacity-60 hover:opacity-100
          object-cover rounded cursor-pointer"
        />
        <p className="text-xs my-4 text-center">{props.article}</p>
      </div>
    </div>
  )
}

export default NewsCard
