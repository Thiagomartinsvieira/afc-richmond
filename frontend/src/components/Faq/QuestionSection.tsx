import React from 'react'
import QnA from './QnA'

const QuestionSection = ({ questions, selectedQuestion, onQuestionClick }) => (
  <div className="flex flex-col space-y-3 mb-10">
    {questions.map((question) => (
      <QnA
        key={question}
        question={question}
        answer={/* */}
        isSelected={question === selectedQuestion}
        onClick={() => onQuestionClick(question)}
      />
    ))}
  </div>
)

export default QuestionSection
