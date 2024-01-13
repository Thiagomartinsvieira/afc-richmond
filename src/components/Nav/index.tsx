import Link from 'next/link'
import { useState } from 'react'
import { shoppingBagIcon } from '../icons/icons'
import SecondaryNav from './SecondaryNav'

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <div>
      <nav className="flex items-center justify-between mx-auto p-2 bg-blue-600 font-bold">
        <div className="flex items-center">
          <Link href="/home">
            <img
              src="images/logos/Richmond_logo.png"
              alt="Afc Richmond logo"
              className="w-24 h-auto"
            />
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-10 mx-auto">
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
          {/* Adicionando margem horizontal para espaçamento entre os ícones */}
          <Link href="/shop" className="nav-link mx-2">
            {shoppingBagIcon()}
          </Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            ☰
          </button>
          {menuOpen && (
            <div className="">
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
              {/* Adicionando margem horizontal para espaçamento entre os ícones */}
              <Link href="/shop" className="nav-link mx-2">
                {shoppingBagIcon()}
              </Link>
            </div>
          )}
        </div>
      </nav>
      <SecondaryNav />
    </div>
  )
}

export default Nav
