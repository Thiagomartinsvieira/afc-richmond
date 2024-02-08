import Image from 'next/image'
import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import { FaBehance, FaFacebook, FaInstagram, FaXTwitter } from 'react-icons/fa6'

const RichmondPlusCarroucel = () => {
  return (
    <div
      className="mx-auto container sm:w-1/2 md:w-1/4 lg:w-1/3 xl:w-1/4
     mb-20 cursor-pointer"
    >
      <Carousel
        autoPlay
        stopOnHover
        infiniteLoop
        transitionTime={600}
        emulateTouch
        showArrows={false}
        showIndicators={false}
        showThumbs={false}
        showStatus={false}
      >
        <div className="border-4 border-blue-600 bg-blue-600 rounded">
          <Image src="/images/social/x.png" width={400} height={400} alt="" />
          <p
            className="my-2 flex items-center justify-center 
          space-x-2"
          >
            <FaXTwitter className="" size={30} />{' '}
            <span>
              <b className="text-red-600 text-2xl">@</b>AFCRichmond
            </span>
          </p>
        </div>
        <div className="border-4 border-blue-600 bg-blue-600 rounded">
          <Image
            src="/images/social/behance.png"
            width={400}
            height={400}
            alt=""
          />
          <p className="my-2 flex items-center justify-center space-x-2">
            <FaBehance size={30} />
            <span>
              <b className="text-red-600 text-2xl">@</b>AFCRichmond
            </span>
          </p>
        </div>
        <div className="border-4 border-blue-600 bg-blue-600 rounded">
          <Image
            src="/images/social/instagram.png"
            width={400}
            height={400}
            alt=""
          />
          <p className="my-2 flex items-center justify-center space-x-2">
            <FaInstagram className="" size={30} />{' '}
            <span>
              <b className="text-red-600 text-2xl">@</b>AFCRichmond
            </span>
          </p>
        </div>
        <div className="border-4 border-blue-600 bg-blue-600 rounded">
          <Image
            src="/images/social/facebook.png"
            width={400}
            height={400}
            alt=""
          />
          <p className="my-2 flex items-center justify-center space-x-2">
            <FaFacebook className="" size={30} />{' '}
            <span>
              <b className="text-red-600 text-2xl">@</b>AFCRichmond
            </span>
          </p>
        </div>
      </Carousel>
      <p className="text-center text-gray-500 mt-4">
        Please note that these social media accounts are not managed by the
        creator of this page. The images are for illustration purposes only.
      </p>
    </div>
  )
}

export default RichmondPlusCarroucel
