import Link from 'next/link'
import { FaShoppingBag, FaUserPlus, FaYoutube } from 'react-icons/fa'
import { MdStadium } from 'react-icons/md'

const VerticalVideoNav = () => {
  return (
    <div
      className="absolute left-0 top-0 h-full p-4 bg-black bg-opacity-50 text-white
     z-10"
    >
      <nav>
        <ul className="flex flex-col mt-10">
          <li className="mb-10">
            <Link href={'/become'} className="text-white cursor-pointer">
              <div className="flex flex-col-reverse items-center transform transition-transform hover:scale-110">
                Become <FaUserPlus />
              </div>
            </Link>
          </li>
          <li className="mb-10">
            <Link href={'/become'} className="text-white cursor-pointer ">
              <div className="flex flex-col-reverse items-center transform transition-transform hover:scale-110">
                RichmondTv <FaYoutube />
              </div>
            </Link>
          </li>
          <li className="mb-10">
            <Link href={'/stadium'} className="text-white cursor-pointer">
              <div className="flex flex-col-reverse items-center transform transition-transform hover:scale-110">
                Nelson Road <MdStadium />
              </div>
            </Link>
          </li>
          <li>
            <Link href={'/shop'} className="text-white cursor-pointer">
              <div className="flex flex-col-reverse flex-col items-center transform transition-transform hover:scale-110">
                Richmond Store <FaShoppingBag />
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default VerticalVideoNav
