import Link from 'next/link'
import Image from 'next/image'

const FanMemberNav = () => {
  return (
    <div>
      <nav
        className="flex flex-row justify-around items-center
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
          <a href="/become/richmod" className="text-white hover:text-gray-300">
            Richmond+
          </a>
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
