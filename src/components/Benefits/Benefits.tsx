import React from 'react'
import { arrowRight } from '../icons/icons'

const Benefits = () => {
  return (
    <div className="flex justify-start my-8">
      <img
        src="https://www.asumidsouth.edu/wp-content/uploads/2021/10/Greyhounds_dog_head.png"
        alt=""
        style={{ width: 60, height: 50 }}
      />
      <div className="ml-2 flex-col">
        <h2>Benefits</h2>
        <h3>No Santos, todo sócio é Rei</h3>
        <hr className="w-auto mx-auto border-gray-500 my-4" />
        <p>
          Só quem é Sócio Rei tem prioridade e desconto para comprar ingressos,
          vantagens em nossos parceiros, possibilidade de participar de
          experiências incríveis, acesso a conteúdos exclusivos e muito mais.
        </p>

        <div className="flex flex-wrap justify-center items-center m-4">
          <div className="p-6 w-56 h-56 bg-gray-200 m-4 md:w-1/4">
            <h3 className="font-extrabold text-center">Santos+</h3>
            <p className="text-xs">
              Descontos e vantagens em nossa rede de parceiros. Economizando nas
              suas compras, seu plano pode até sair de graça.
            </p>
          </div>
          <div className="p-6 w-56 h-56 bg-gray-200 m-4 md:w-1/4">
            <h2 className="font-extrabold text-center">Santos Store</h2>
            <p className="text-xs">
              10% de desconto em todos os produtos, além de ofertas e promoções
              especiais.
            </p>
          </div>
          <div className="p-6 w-56 h-56 bg-gray-200 m-4 md:w-1/4">
            <h3 className="font-bold text-center">Ingresso</h3>
            <p className="text-xs">
              Mínimo de 50% de desconto e prioridade na compra.
            </p>
          </div>
          <div className="p-6 w-56 h-56 bg-gray-200 m-4 md:w-1/4">
            <h2 className="font-bold text-center">Recompensas</h2>
            <p className="text-xs">
              Resgate e sorteio de produtos exclusivos e experiências
              inesquecíveis.
            </p>
          </div>
          <div className="p-6 w-56 h-56 bg-gray-200 m-4 md:w-1/4">
            <h2 className="font-bold text-center">Conteúdo</h2>
            <p className="text-xs">
              Entrevistas, vídeos de bastidores, enquetes e muito mais para você
              viver o Santos mais de perto.
            </p>
          </div>
          <div className="p-6 w-56 h-56 bg-gray-200 m-4 md:w-1/4">
            <h2 className="font-bold text-center">Voto</h2>
            <p className="text-xs">
              Ajude a construir o futuro do seu clube. Todos os sócios maiores
              de 18 anos têm direito a voto após 3 anos de associação.
            </p>
          </div>
        </div>
        <br />
        <div className="flex flex-col text-center justify-center items-center">
          <span className="mb-2">
            E aí! Não dá pra perder esse tanto de benefícios, né?
          </span>
          <p className="mb-2">
            Torne-se sócio-torcedor do Santos F.C., um verdadeiro{' '}
            <span className="text-yellow-600">Sócio Rei</span>!
          </p>
          <button
            className="flex text-center justify-center border border-yellow-500
          p-4 text-yellow-500 transition duration-200 hover:bg-white
          hover:text-black rounded mt-4"
          >
            <span className="mr-2">Sign up for a plan</span> {arrowRight}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Benefits
