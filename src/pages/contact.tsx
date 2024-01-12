import React from 'react'
import Footer from '@/components/Footer'
import ContactForm from '@/components/Form/ContactForm'
import Nav from '@/components/Nav'
import Title from '@/components/Title'
import {
  envelopeIcon,
  facebookIcon,
  githubIcon,
  linkedinIcon,
  plussIcon,
  twiterIcon,
} from '@/components/icons/icons'

const Contact = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Nav />
      <Title title="Contact" subtitle="Here you can leave a feedback message" />
      <div className="flex justify-center container mx-auto mt-8 p-4">
        <div className="flex flex-col items-center">
          <img
            src="images/contact/Ted at the press conference.jpg"
            alt="Ted Lasso in a Press conference"
            className="object-cover w-full md:w-96 lg:w-full h-64 md:h-auto border rounded mb-4"
          />
          <div className="w-full md:w-full">
            <hr />
            <ContactForm />
          </div>
          <h2></h2>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center">
        <div className="space-y-5">
          <div className="">
            <span className="font-bold">AFC Richmond Headquarters</span>
            <p>(123) 456-7890</p>
          </div>
          <div>
            <span className="font-bold">AFC Richmond Training Ground</span>
            <p>(987) 654-3210</p>
          </div>
          <div>
            <span className="font-bold">AFC Richmond Stadium</span>
            <p>(555) 123-4567</p>
          </div>
          <div>
            <p>
              <span className="font-bold">CNPJ:</span> 12.345.678/0001-90
            </p>
          </div>
        </div>
        <img
          src="images/contact/Sam and Tartt.jpeg"
          alt="logo with Jamie tartt and Sam Obisanya"
          className="ml-32"
          width={300}
        />
      </div>
      <div className="flex flex-row justify-center space-x-4 my-10">
        <div className="hover:text-blue-500 cursor-pointer">{facebookIcon}</div>
        <div className="hover:text-blue-500 cursor-pointer">{linkedinIcon}</div>
        <div className="hover:text-blue-500 cursor-pointer">{githubIcon}</div>
        <div className="hover:text-blue-500 cursor-pointer">{twiterIcon}</div>
        <div className="hover:text-blue-500 cursor-pointer">{envelopeIcon}</div>
        <div className="hover:text-blue-500 cursor-pointer">{plussIcon}</div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact
