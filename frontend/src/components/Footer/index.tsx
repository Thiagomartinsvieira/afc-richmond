import React from 'react'
import SponsorFooter from './SponsorFooter'
import BecomeFooter from './BecomeFooter'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <div>
      <SponsorFooter />
      <BecomeFooter />
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto flex items-center justify-around ">
          <div className="flex items-center space-x-4">
            <img
              src="https://i.pinimg.com/originals/03/87/0f/03870f01e4595fe300ccc1a328043153.png"
              alt=""
              className="w-14 h-14"
            />
            <h2 className="text-xl font-semibold">AFC Richmond</h2>
          </div>

          <div className="space-x-4">
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

          <div className="flex items-center space-x-4">
            <a href="#" className="text-xl hover:text-gray-400">
              <i className="fab fa-facebool"></i>
            </a>
          </div>
        </div>
      </footer>
      <div>
        <footer className="flex items-center justify-between bg-black p-3">
          <p className="ml-10">
            Richmond Football Club Association © 2024 - All rights are free -
            Developed by Thiago Martins
          </p>
          <div className="flex space-x-2 mr-10">
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
