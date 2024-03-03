/* eslint-disable @next/next/no-img-element */

import Image from 'next/image'
import {
  facebookIcon,
  instaIcon,
  linkedinIcon,
  twiterIcon,
  youtubeIcon,
} from '../icons/icons'

const SocialMediaCard = () => {
  return (
    <div>
      <div
        className="flex flex-col text-center items-center 
      justify-center"
      >
        <h2>
          Follow <strong>RICHMOND</strong> on social Media
        </h2>
        <div className="flex space-x-2 ml-2 my-4">
          <div className="cursor-pointer text-purple-600 hover:text-purple-700">
            {instaIcon}
          </div>
          <div className="cursor-pointer text-blue-600 hover:text-blue-700">
            {facebookIcon}
          </div>
          <div className="cursor-pointer text-blue-400 hover:text-blue-500">
            {twiterIcon}
          </div>
          <div className="cursor-pointer text-red-600 hover:text-red-700">
            {youtubeIcon}
          </div>
          <div className="cursor-pointer text-blue-800 hover:text-blue-900">
            {linkedinIcon}
          </div>
        </div>
      </div>
      <div
        className="max-w-md mx-auto bg-zinc-900 rounded-xl shadow-md
       overflow-hidden md:max-w-2xl my-5"
      >
        <div className="md:flex my-5">
          <div className="md:flex-shrink-0">
            <Image
              width={100}
              height={48}
              className="h-48 w-full object-cover md:w-48 rounded"
              src="/images/gif/0_Mvcyh2tEUs72-85S.bin"
              alt="AFC Richmond"
            />
          </div>
          <div className="p-8">
            <div
              className="uppercase tracking-wide text-sm text-blue-600
             font-semibold"
            >
              11-time Champions
            </div>
            <p className="mt-2 text-xl font-semibold text-gray-300">
              AFC Richmond Football Club
            </p>
            <p className="mt-2 text-gray-400">
              After securing the Championship in the Richmond Cup... 42K 304
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SocialMediaCard
