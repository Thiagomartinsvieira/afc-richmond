import { useState } from 'react'
import Link from 'next/link'
import Nav from '@/components/Nav'
import FanMemberNav from '@/components/Nav/FanMemberNav'
import Title from '@/components/Title'
import Footer from '@/components/Footer'
import QuestionSection from '@/components/Faq/QuestionSection'

const Faq = () => {
  const [spanValue, setSpanValue] = useState('MEMBERSHIP CARD')
  const [selectedQuestion, setSelectedQuestion] = useState<string | null>(null)

  const handleButtonClick = (newValue: string) => {
    setSpanValue(newValue)
    setSelectedQuestion(null)
  }

  const handleQuestionClick = (question: string) => {
    setSelectedQuestion(question === selectedQuestion ? null : question)
  }

  const membershipCardQuestions = [
    'Where do I get my membership card?',
    'Do I need to pay any fee to receive my membership card?',
    'What is the delivery time for my Membership Card?',
    'How can I request a replacement for my membership card?',
  ]

  const membershipCardAnswers = [
    "You can get your membership card at the club's membership desk.",
    'Yes, there might be a fee associated with receiving your membership card. Please check the membership terms.',
    'The delivery time for your Membership Card depends on your location. Contact our support for more information.',
    'To request a replacement for your membership card, please contact our support team.',
  ]

  const ticketQuestions = [
    'Can I change my stadium access method after ticket purchase?',
    'Where do I buy tickets as a Member?',
    'Are ticket purchase discounts applicable to all games?',
    'What are the payment methods for online ticket purchases?',
  ]

  const ticketAnswers = [
    'No, you cannot change your stadium access method after ticket purchase.',
    'You can buy tickets as a member by entering your registration in the "Tickets" tab or using the provided link.',
    'No, ticket purchase discounts are applicable only to games where Richmond is the home team.',
    'The payment methods for online ticket purchases include credit card, debit, and Pix.',
  ]

  const benefitsQuestions = [
    'What benefits do I have as a Greyhound Fan Member?',
    'How do I enjoy the benefits after joining the plan?',
    'Is my ticket guaranteed for all games as a member?',
    'Do dependents have the same benefits as the primary member?',
  ]

  const benefitsAnswers = [
    'As a Greyhound Fan Member, you enjoy benefits such as a network, a discount on admission, and a fixed star rating for purchase priority.',
    'After joining the plan, you can enjoy the benefits by logging into our website with your CPF.',
    'No, your ticket is not guaranteed for all games. You must purchase tickets through the Greyhounds website, with discounts based on your plan.',
    'Dependents purchase tickets with the same discount and priority as the holder. Other benefits are exclusive to the plan holder.',
  ]

  const paymentQuestions = [
    'Can I pay my annual fee in installments?',
    'Can I pay my membership fee monthly?',
    'What payment methods are available for members?',
    'I was charged twice on my bill. What do I do?',
  ]

  const paymentAnswers = [
    'Yes, you can pay your annual fee in installments by credit card, up to 12 installments per year or up to 6 installments per semester.',
    'We work with cash payment and credit card in installments. If you want to pay monthly, use a credit card for monthly deductions from your invoice.',
    'Payment methods available for members include credit card (6 or 12 installments) or semi-annual/annual payment slip.',
    'If you were charged twice on your bill, please send your details so we can analyze. Contact our support channels: http://localhost:3000/contact',
  ]

  const dependetsQuestions = [
    'Can I add a dependent to my plan at any time?',
    'Do I need to provide details for my dependents?',
    'Can anyone be my dependent?',
    'Do dependents need the primary member to access the Stadium?',
  ]

  const dependetsAnswers = [
    'Yes, you can add a dependent to your plan at any time.',
    'Yes, you need to provide details such as name, CPF, and email for your dependents.',
    'No, dependents must be minors. After reaching the age of majority, dependents must register as members of a plan.',
    'No, dependents do not need the primary member to access the Stadium.',
  ]

  return (
    <div>
      <Nav />
      <FanMemberNav />
      <Title
        title="GENERAL QUESTIONS!"
        subtitle="🤔 Frequently Asked Questions - AFC Richmond Fan Membership"
      />
      <div className="flex justify-center space-x-14">
        <div className="flex flex-col space-y-3 mb-10">
          <button
            className="bg-stone-900 max-w-xs rounded p-2"
            onClick={() => handleButtonClick('MEMBERSHIP CARD')}
          >
            MEMBERSHIP CARD
          </button>
          <button
            className="bg-stone-900 max-w-xs rounded p-2"
            onClick={() => handleButtonClick('PAYMENT')}
          >
            PAYMENT
          </button>
          <button
            className="bg-stone-900 max-w-xs rounded p-2"
            onClick={() => handleButtonClick('BENEFITS')}
          >
            BENEFITS
          </button>
          <button
            className="bg-stone-900 max-w-xs rounded p-2"
            onClick={() => handleButtonClick('TICKETS')}
          >
            TICKETS
          </button>
          <button
            className="bg-stone-900 max-w-xs rounded p-2"
            onClick={() => handleButtonClick('DEPENDENTS')}
          >
            DEPENDENTS
          </button>
        </div>

        <div className="flex flex-col space-y-3 mb-10">
          <span className="text-lg font-extrabold mb-4">{spanValue}</span>

          {spanValue === 'MEMBERSHIP CARD' && (
            <QuestionSection
              questions={membershipCardQuestions}
              selectedQuestion={selectedQuestion}
              onQuestionClick={handleQuestionClick}
              answers={membershipCardAnswers}
            />
          )}

          {spanValue === 'TICKETS' && (
            <QuestionSection
              questions={ticketQuestions}
              selectedQuestion={selectedQuestion}
              answers={ticketAnswers}
              onQuestionClick={handleQuestionClick}
            />
          )}

          {spanValue === 'BENEFITS' && (
            <QuestionSection
              questions={benefitsQuestions}
              selectedQuestion={selectedQuestion}
              answers={benefitsAnswers}
              onQuestionClick={handleQuestionClick}
            />
          )}

          {spanValue === 'PAYMENT' && (
            <QuestionSection
              questions={paymentQuestions}
              answers={paymentAnswers}
              selectedQuestion={selectedQuestion}
              onQuestionClick={handleQuestionClick}
            />
          )}

          {spanValue === 'DEPENDENTS' && (
            <QuestionSection
              questions={dependetsQuestions}
              selectedQuestion={selectedQuestion}
              answers={dependetsAnswers}
              onQuestionClick={handleQuestionClick}
            />
          )}
        </div>
      </div>

      <div className="mx-4 sm:mx-8 md:mx-10 lg:mx-10 xl:mx-96 mt-5 mb-20">
        <div className="w-full bg-neutral-300 text-black p-3 rounded mb-5">
          <span className="font-bold">Still have questions?</span>
          <p>
            Didnt find the answer you were looking for? No problem.{' '}
            <Link
              href="/contact"
              target="_blank"
              className="text-blue-500 hover:text-blue-400"
            >
              Contact us
            </Link>{' '}
            and well get back to you as soon as possible.
          </p>
        </div>
        <div className="w-full bg-amber-100 text-black p-3 rounded">
          <span className="font-bold">Club-related inquiries?</span>
          <p>
            <span className="font-semibold">Attention!</span> Any inquiries
            unrelated to the Richmond Greyhounds Fan Membership program,
            including questions about the club, youth categories, squad, and
            other matters, will not be addressed.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Faq
