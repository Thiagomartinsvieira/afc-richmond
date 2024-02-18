import Link from 'next/link'
import { FaShoppingBag, FaUserPlus, FaYoutube } from 'react-icons/fa'
import { MdStadium } from 'react-icons/md'
import { FaNewspaper, FaPeopleGroup } from 'react-icons/fa6'

const VerticalVideoNav = () => {
  return (
    <div
      className="absolute left-0 top-0 h-full p-4 bg-black bg-opacity-50 
    text-white z-10 flex justify-center items-center"
    >
      <nav>
        <ul className="flex flex-col items-center">
          <li className="mb-10">
            <Link href={'/become'} className="text-white cursor-pointer">
              <div
                className="flex flex-col-reverse items-center transform 
              transition-transform hover:scale-110"
              >
                Become <FaUserPlus size={30} />
              </div>
            </Link>
          </li>
          <li className="mb-10">
            <Link
              href={
                'https://tv.apple.com/br/show/ted-lasso/umc.cmc.vtoh0mn0xn7t3c643xqonfzy'
              }
              target="_blank"
              className="text-white cursor-pointer "
            >
              <div
                className="flex flex-col-reverse items-center justify-center 
                transform transition-transform hover:scale-110"
              >
                RichmondTv <FaYoutube size={30} />
              </div>
            </Link>
          </li>
          <li className="mb-10">
            <Link href={'/players'} className="text-white cursor-pointer">
              <div className="flex flex-col-reverse items-center transform transition-transform hover:scale-110">
                Players <FaPeopleGroup size={30} />
              </div>
            </Link>
          </li>
          <li className="mb-10">
            <Link href={'/stadium'} className="text-white cursor-pointer">
              <div className="flex flex-col-reverse items-center transform transition-transform hover:scale-110">
                Nelson Road <MdStadium size={30} />
              </div>
            </Link>
          </li>
          <li className="mb-10">
            <Link href={'/news  '} className="text-white cursor-pointer">
              <div className="flex flex-col-reverse items-center transform transition-transform hover:scale-110">
                News <FaNewspaper size={30} />
              </div>
            </Link>
          </li>
          <li>
            <Link href={'/shop'} className="text-white cursor-pointer">
              <div
                className="flex flex-col-reverse items-center 
              transform transition-transform hover:scale-110"
              >
                Richmond Store <FaShoppingBag size={30} />
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default VerticalVideoNav
