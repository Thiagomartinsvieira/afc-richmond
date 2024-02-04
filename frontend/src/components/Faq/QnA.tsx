interface QnaProps {
  question: string
  answer: string
  isSelected: boolean
  onClick: () => void
}

const QnA = (props: QnaProps) => (
  <div className="flex flex-col space-y-3">
    <button
      className="bg-stone-900 max-w-xs rounded p-2"
      onClick={props.onClick}
    >
      {props.question}
    </button>
    {props.isSelected && (
      <p
        className="bg-stone-700 max-w-xs rounded p-2 
      font-light"
      >
        {props.answer}
      </p>
    )}
  </div>
)

export default QnA
