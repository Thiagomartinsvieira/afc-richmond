import Link from 'next/link'
import { shoppingBagIcon } from '../icons/icons'

const Nav = () => {
  return (
    <div>
      <nav className="flex items-center justify-around mx-auto p-2 bg-blue-600 font-bold">
        <Link href="/home">
          <img
            src="https://i.pinimg.com/originals/03/87/0f/03870f01e4595fe300ccc1a328043153.png"
            alt="logo"
            className="w-24 h-auto"
          />
        </Link>
        <Link
          href="/home"
          className="hover:text-white hover:underline transition duration-300 ease-in-out"
        >
          Home
        </Link>
        <Link
          href="/become"
          className="hover:text-white hover:underline transition duration-300 ease-in-out"
        >
          Become a fan member
        </Link>
        <Link
          href="/players"
          className="hover:text-white hover:underline transition duration-300 ease-in-out"
        >
          Players squad
        </Link>
        <Link
          href="/news"
          className="hover:text-white hover:underline transition duration-300 ease-in-out"
        >
          News
        </Link>
        <Link
          href="/history"
          className="hover:text-white hover:underline transition duration-300 ease-in-out"
        >
          History
        </Link>
        <Link
          href="/shop"
          className="hover:text-white hover:underline transition duration-300 ease-in-out"
        >
          {shoppingBagIcon()}
        </Link>
      </nav>
    </div>
  )
}

export default Nav
