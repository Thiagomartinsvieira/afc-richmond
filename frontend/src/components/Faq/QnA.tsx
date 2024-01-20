const QnA = ({ question, answer, isSelected, onClick }) => (
  <div className="flex flex-col space-y-3">
    <button className="bg-stone-900 max-w-xs rounded p-2" onClick={onClick}>
      {question}
    </button>
    {isSelected && (
      <p className="bg-stone-700 max-w-xs rounded p-2 font-light">{answer}</p>
    )}
  </div>
)

export default QnA
