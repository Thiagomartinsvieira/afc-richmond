import Link from 'next/link'
import { arrowDown, shoppingBagIcon } from '../icons/icons'
import DropdownMenu from './DropdownMenu'
import { useState } from 'react'
import SecondaryNav from './SecondaryNav'

const Nav = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const handleDropdownToggle = () => {
    setIsDropdownOpen(isDropdownOpen)
  }

  return (
    <div>
      <nav className="flex items-center justify-around mx-auto p-2 bg-blue-600 font-bold">
        <Link href="/home">
          <img
            src="images/logos/Richmond_logo.png"
            alt="Afc Richmond logo"
            className="w-24 h-auto"
          />
        </Link>
        <Link
          href="/become"
          className="hover:text-white transition duration-300 ease-in-out hover:border-b
          hover:border-yellow-500"
        >
          Become a member
        </Link>
        <Link
          href="/players"
          className="hover:text-white transition duration-300 ease-in-out hover:border-b
          hover:border-yellow-500"
        >
          Squad
        </Link>
        <Link
          href="/stadium"
          className="hover:text-white transition duration-300 ease-in-out hover:border-b
          hover:border-yellow-500"
        >
          Stadium
        </Link>
        <Link
          href="/news"
          className="hover:text-white transition duration-300 ease-in-out hover:border-b
          hover:border-yellow-500"
        >
          News
        </Link>
        <Link
          href="/history"
          className="hover:text-white transition duration-300 ease-in-out hover:border-b
          hover:border-yellow-500"
        >
          History
        </Link>
        <Link
          href="/news"
          className="hover:text-white transition duration-300 ease-in-out hover:border-b
          hover:border-yellow-500"
        >
          Contact
        </Link>
        <Link
          href="/shop"
          className="hover:text-white transition duration-300 ease-in-out  hover:scale-110"
        >
          {shoppingBagIcon()}
        </Link>
      </nav>
      <SecondaryNav />
    </div>
  )
}

export default Nav
