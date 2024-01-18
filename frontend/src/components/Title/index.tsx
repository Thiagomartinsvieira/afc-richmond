interface TitleProps {
  title: string
  subtitle?: string
  ClassName?: string
}

const Title = (props: TitleProps) => {
  return (
    <div className="text-center font-extrabold m-10">
      {props.title}
      <div className="text-center mt-8">{props.subtitle}</div>
    </div>
  )
}

export default Title
