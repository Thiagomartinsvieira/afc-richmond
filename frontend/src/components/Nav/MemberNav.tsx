import { useAuth } from '@/context/Auth'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const MemberNav = () => {
  const { logout } = useAuth()

  return (
    <div>
      <nav>
        <ul className="flex items-center justify-around">
          <li>
            <Link href="/become">
              <Image
                src="/images/logos/Greyhounds_dog.png"
                alt="AFC Richmond logo"
                width={90}
                height={90}
                className=""
              />
            </Link>
          </li>
          <li>Profile</li>
          <li>Partners</li>
          <button onClick={logout}>
            <li>Logout</li>
          </button>
        </ul>
      </nav>
    </div>
  )
}

export default MemberNav
