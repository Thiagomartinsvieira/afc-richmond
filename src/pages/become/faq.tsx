import Footer from '@/components/Footer'
import Nav from '@/components/Nav'
import FanMemberNav from '@/components/Nav/FanMemberNav'
import Title from '@/components/Title'
import Link from 'next/link'

const faq = () => {
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
            className="bg-stone-900 max-w-xs
          rounded p-2"
          >
            Membership card
          </button>
          <button
            className="bg-stone-900 max-w-xs
          rounded p-2"
          >
            PAYMENT
          </button>
          <button
            className="bg-stone-900 max-w-xs rounded
          p-2"
          >
            BENEFITS
          </button>
          <button
            className="bg-stone-900 max-w-xs rounded
          p-2"
          >
            TICKETS
          </button>
          <button
            className="bg-stone-900 max-w-xs rounded
          p-2"
          >
            DEPENDENTES
          </button>
        </div>
        <div className="flex flex-col space-y-3 mb-10">
          <span>DEPENDENTES</span>
          <div className="flex flex-col space-y-3 ">
            <button
              className="bg-stone-900 max-w-xs rounded
          p-2"
            >
              Posso incluir um dependente a qualquer momento no meu plano?
            </button>
            <button
              className="bg-stone-900 max-w-xs rounded
          p-2"
            >
              Posso incluir um dependente a qualquer momento no meu plano?
            </button>
          </div>
        </div>
      </div>
      <div
        className="flex flex-col space-y-5 justify-center items-center
      mx-10 mt-5 mb-20"
      >
        <div className="bg-neutral-300 text-black space-y-1 p-3 rounded">
          <span className="m-10 font-bold">Não fique na dúvida</span>
          <p className="mx-10">
            Não encontrou a resposta que procurava? Não tem problema.{' '}
            <Link href="/contact" target="_blank" className="text-blue-500">
              Entre em contato
            </Link>{' '}
            que lhe responderemos o mais breve possível.
          </p>
        </div>
        <div className="bg-amber-100 text-black space-y-1 p-3 rounded">
          <span className="mx-10 font-bold">Dúvidas sobre o clube?</span>
          <p className="mx-10">
            Não encontrou a resposta que procurava? Não tem problema. Entre em
            contato que lhe responderemos o mais breve possível.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default faq
