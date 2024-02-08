import Image from 'next/image'
import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import { FaBehance, FaFacebook, FaInstagram, FaXTwitter } from 'react-icons/fa6'

const RichmondPlusCarroucel = () => {
  return (
    <div className="mx-auto container w-1/3 mb-10">
      <Carousel
        infiniteLoop
        emulateTouch
        renderIndicator={false}
        showArrows={false}
        showIndicators={false}
        showThumbs={false}
        showStatus={false}
      >
        <div className="border-4 border-blue-600 bg-blue-600 rounded">
          <Image src="/images/social/x.png" width={400} height={400} alt="" />
          <p className="my-2 flex items-center justify-center space-x-2">
            <FaXTwitter className="" size={30} />{' '}
            <span className=" ">
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
            <span className="mt-1">AFCRichmond</span>
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
            <span className="mt-1">AFCRichmond</span>
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
            <span className="mt-1">AFCRichmond</span>
          </p>
        </div>
      </Carousel>
    </div>
  )
}

export default RichmondPlusCarroucel
