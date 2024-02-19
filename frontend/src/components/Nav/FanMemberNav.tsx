import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { FaBars } from 'react-icons/fa6'

const FanMemberNav = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <div className="relative">
      <nav
        className="md:hidden flex items-center justify-between mx-auto p-2 
      bg-black font-bold text-sm lg:text-base"
      >
        <div className="flex items-center justify-between">
          <Link href="/become">
            <Image
              src="/images/logos/Greyhounds_dog.png"
              alt="AFC Richmond logo"
              width={90}
              height={90}
              className=""
            />
          </Link>
          <span className="ml-2">Become a fan member</span>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {menuOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
          </button>
        </div>
        <div
          className={`md:hidden absolute top-16 left-0 right-0 bg-black
           z-10 ${menuOpen ? 'block' : 'hidden'}`}
        >
          <div className="flex flex-col items-center space-y-4 m-2">
            <Link href="/become/richmonites">
              <h2
                className="text-lg font-normal text-center text-white
               pl-5"
              >
                Richmonites
              </h2>
            </Link>

            <Link
              href="/become/plans"
              className="text-white hover:text-gray-300 p-1"
            >
              Plans
            </Link>

            <Link
              href="/become/richmod"
              className="text-white hover:text-gray-300 p-1"
            >
              Richmond+
            </Link>

            <Link
              href="/become/experiences"
              className="text-white hover:text-gray-300 p-1"
            >
              experiences
            </Link>

            <Link
              href="/become/faq"
              className="text-white hover:text-gray-300 p-1"
            >
              FAQ
            </Link>

            <Link
              href="/become/register"
              className="bg-red-500 p-2 rounded-full hover:bg-red-600 
            transition duration-300 cursor-pointer"
            >
              I want to join
            </Link>

            <Link
              href="/become/login"
              className="text-white hover:text-gray-300 p-1"
            >
              Sign In
            </Link>
          </div>
        </div>
      </nav>

      <nav
        className="hidden md:flex flex-row justify-around items-center
       bg-black p-1"
      >
        <div
          className="flex text-center justify-center items-center 
        cursor-pointer"
        >
          <Link href="/become">
            <Image
              src="/images/logos/Greyhounds_dog.png"
              alt="AFC Richmond logo"
              width={90}
              height={90}
            />
          </Link>
        </div>
        <Link href="/become/richmonites">
          <h2 className="text-lg font-normal text-center text-white pl-5">
            Richmonites
          </h2>
        </Link>
        <ul>
          <Link href="/become/plans" className="text-white hover:text-gray-300">
            Plans
          </Link>
        </ul>
        <ul>
          <Link
            href="/become/richmod"
            className="text-white hover:text-gray-300"
          >
            Richmond+
          </Link>
        </ul>
        <ul>
          <Link
            href="/become/experiences"
            className="text-white hover:text-gray-300"
          >
            experiences
          </Link>
        </ul>
        <ul>
          <Link href="/become/faq" className="text-white hover:text-gray-300">
            FAQ
          </Link>
        </ul>
        <ul>
          <Link
            href="/become/register"
            className="bg-red-500 p-2 rounded-full hover:bg-red-600 
            transition duration-300 cursor-pointer"
          >
            I want to join
          </Link>
        </ul>
        <ul>
          <Link href="/become/login" className="text-white hover:text-gray-300">
            Sign In
          </Link>
        </ul>
      </nav>
    </div>
  )
}

export default FanMemberNav
