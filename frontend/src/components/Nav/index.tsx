import Link from 'next/link'
import { useState } from 'react'
import SecondaryNav from './SecondaryNav'
import Image from 'next/image'
import { FaBars } from 'react-icons/fa6'
import { FaTimes } from 'react-icons/fa'

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <div className="relative">
      <nav
        className="flex items-center justify-between mx-auto p-2 
      bg-blue-600 font-bold text-sm lg:text-base"
      >
        <div className="flex items-center justify-center">
          <Link href="/home">
            <Image
              src="/images/logos/Richmond_logo.png"
              width={150}
              height={150}
              alt="Afc Richmond logo"
              className="w-24 h-auto cursor-pointer"
            />
          </Link>
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
          className={`md:hidden absolute top-24 left-0 right-0 bg-blue-600
           z-20 ${menuOpen ? 'block' : 'hidden'}`}
        >
          <div className="flex flex-col items-center space-y-4 m-2">
            <Link href="/become" className="p-1" onClick={toggleMenu}>
              Become a member
            </Link>
            <Link href="/players" className="p-1" onClick={toggleMenu}>
              Squad
            </Link>
            <Link href="/stadium" className="p-1" onClick={toggleMenu}>
              Stadium
            </Link>
            <Link href="/news" className="p-1" onClick={toggleMenu}>
              News
            </Link>
            <Link href="/history" className="p-1" onClick={toggleMenu}>
              History
            </Link>
            <Link href="/contact" className="p-1" onClick={toggleMenu}>
              Contact
            </Link>
            <Link href="/shop" className="p-1" onClick={toggleMenu}>
              Shop
            </Link>
          </div>
        </div>
        <div
          className="hidden md:flex items-center space-x-5 mx-auto 
        lg:space-x-10"
        >
          <Link href="/become" className="nav-link">
            Become a member
          </Link>
          <Link href="/players" className="nav-link">
            Squad
          </Link>
          <Link href="/stadium" className="nav-link">
            Stadium
          </Link>
          <Link href="/news" className="nav-link">
            News
          </Link>
          <Link href="/history" className="nav-link">
            History
          </Link>
          <Link href="/contact" className="nav-link">
            Contact
          </Link>
          <Link href="/shop" className="nav-link mx-2">
            Shop
          </Link>
        </div>
      </nav>
      <SecondaryNav />
    </div>
  )
}

export default Nav
