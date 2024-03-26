import { useAuth } from '@/context/Auth'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { FaUser } from 'react-icons/fa6'

const MemberNav = () => {
  const { logout } = useAuth()
  const [isOpen, setIsOpen] = useState(false)

  const toogleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <nav className="relative">
        <ul className="flex items-center justify-between mx-10">
          <li>
            <Link href="/dashboard">
              <Image
                src="/images/logos/Greyhounds_dog.png"
                alt="AFC Richmond logo"
                width={90}
                height={90}
              />
            </Link>
          </li>

          <li className="cursor-pointer" onClick={toogleMenu}>
            {!isOpen ? <FaUser size={20} /> : <FaTimes size={20} />}
          </li>
          {isOpen && (
            <ul
              onMouseLeave={toogleMenu}
              className="absolute right-0 top-10 mt-2 w-32 lg:w-48 xl:w-52 
              bg-white shadow-md rounded-lg z-50 cursor-pointer"
            >
              <li
                className="block px-4 py-2 text-sm text-gray-700 
              hover:bg-gray-100 hover:rounded-lg text-center"
              >
                <Link href="/dashboard">Home</Link>
              </li>
              <li
                className="block px-4 py-2 text-sm text-gray-700 
              hover:bg-gray-100 hover:rounded-lg text-center"
              >
                <Link href="/profile">Profile</Link>
              </li>
              <li
                className="block px-4 py-2 text-sm text-gray-700 
              hover:bg-gray-100 text-center"
              >
                <Link href="/member/security">Security</Link>
              </li>
              <li
                className="block px-4 py-2 text-sm text-gray-700 
              hover:bg-gray-100 text-center"
              >
                <Link href="/member/plan">Plan</Link>
              </li>
              <li
                className="block px-4 py-2 text-sm text-gray-700 
              hover:bg-gray-100 text-center"
              >
                <Link href="/member/tickets">Tickets</Link>
              </li>
              <li
                className="block px-4 py-2 text-sm text-gray-700 
                hover:bg-gray-100 hover:rounded-lg text-center"
                onClick={logout}
              >
                Logout
              </li>
            </ul>
          )}
        </ul>
      </nav>
    </div>
  )
}

export default MemberNav
