import Link from 'next/link'

const Nav = () => {
  return (
    <div>
      <nav className="flex items-center justify-center mx-auto my-8">
        <Link href="/home">
          <img
            src="https://i.pinimg.com/originals/03/87/0f/03870f01e4595fe300ccc1a328043153.png"
            alt="logo"
            className="w-12 h-12"
          />
        </Link>
        <Link href="/home" className="m-2">
          Home
        </Link>
        <Link href="/become" className="m-2">
          Become a fan member
        </Link>
        <Link href="/players" className="m-2">
          Players squad
        </Link>
        <Link href="/news" className="m-2">
          News
        </Link>
        <Link href="/history" className="m-2">
          History
        </Link>
        <Link href="/contact" className="m-2">
          Contact
        </Link>
      </nav>
    </div>
  )
}

export default Nav
