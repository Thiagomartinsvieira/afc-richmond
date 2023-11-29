import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-800 text-white py-8">
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
          </div>

          <div className="flex items-center space-x-4">
            <a href="#" className="text-xl hover:text-gray-400">
              <i className="fab fa-facebool"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
