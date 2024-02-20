import React from 'react'
import SponsorFooter from './SponsorFooter'
import BecomeFooter from './BecomeFooter'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import Image from 'next/image'

const Footer = () => {
  return (
    <div>
      <SponsorFooter />
      <BecomeFooter />
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-around ">
          <div className="flex items-center space-x-4 md:order-2">
            <Image
              width={100}
              height={100}
              src="/images/logos/Richmond_logo.png"
              alt=""
            />
            <h2 className="text-xl font-semibold">AFC Richmond</h2>
          </div>

          <div
            className="hidden lg:flex items-center justify-center md:justify-start 
          mt-4 md:mt-0 space-x-4 md:order-1"
          >
            <a href="#" className="hover:text-gray-400">
              Home
            </a>
            <a href="#" className="hover:text-gray-400">
              Players squad
            </a>
            <a href="#" className="hover:text-gray-400">
              Become a fan member
            </a>
            <a href="#" className="hover:text-gray-400">
              History
            </a>
            <a href="#" className="hover:text-gray-400">
              Contact
            </a>
          </div>

          <div
            className="flex items-center space-x-4 md:order-3 mt-4 
          md:mt-0"
          >
            <a href="#" className="text-xl hover:text-gray-400">
              <i className="fab fa-facebool"></i>
            </a>
          </div>
        </div>
      </footer>
      <div>
        <footer
          className="flex flex-col-reverse md:flex-row items-center 
        justify-between bg-black p-3"
        >
          <p
            className="text-center md:text-left md:ml-10 md:order-1 mb-4 
          md:mb-0 mt-2 lg:mb-2"
          >
            Richmond Football Club Association © 2024 - All rights are free -
            Developed by Thiago and Lucas
          </p>
          <div
            className="flex items-center justify-center md:justify-end 
          space-x-2 md:order-2"
          >
            <a
              href="https://www.linkedin.com/in/thiago-martins-vieira-074550192/"
              target="_blank"
            >
              <FaLinkedin size={30} color="white" />
            </a>
            <a href="https://github.com/Thiagomartinsvieira" target="_blank">
              <FaGithub size={30} color="white" />
            </a>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Footer
