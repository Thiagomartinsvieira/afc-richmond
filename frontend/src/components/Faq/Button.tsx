interface ButtonProps {
  onClick: () => void
  label: string
}

const Button = (props: ButtonProps) => (
  <button
    className="bg-stone-900 max-w-xs 
  rounded p-2"
    onClick={props.onClick}
  >
    {props.label}
  </button>
)

export default Button
