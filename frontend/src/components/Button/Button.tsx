const Button = ({ onClick, label }) => (
  <button
    className="bg-stone-900 max-w-xs 
  rounded p-2"
    onClick={onClick}
  >
    {label}
  </button>
)

export default Button
