import React from 'react'
import QnA from './QnA'

interface QuestionSectionProps {
  questions: string[]
  selectedQuestion: string | null
  onQuestionClick: (question: string) => void
  answers: string[]
}

const QuestionSection = (props: QuestionSectionProps) => (
  <div className="flex flex-col space-y-3 mb-10">
    {props.questions.map((question, index) => (
      <QnA
        key={question}
        question={question}
        answer={props.answers[index]}
        isSelected={question === props.selectedQuestion}
        onClick={() => props.onQuestionClick(question)}
      />
    ))}
  </div>
)

export default QuestionSection
