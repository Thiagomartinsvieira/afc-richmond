interface TitleProps {
  title: string
}

const Title = (props: TitleProps) => {
  return <div className="text-center font-extrabold m-10">{props.title}</div>
}

export default Title
