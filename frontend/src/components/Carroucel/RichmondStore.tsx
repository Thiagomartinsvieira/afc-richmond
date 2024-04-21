import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { useWindowSize } from 'react-use'

const RichmondStore = () => {
  const { width } = useWindowSize()

  const isMobile = width < 768

  return (
    <div className="my-20">
      <div className="flex items-center space-x-4 mx-10">
        <Image
          src="/images/logos/Greyhounds_athletic.png"
          width={100}
          height={100}
          alt="Afc richmond athletic logo"
        />

        <div className="bg-gray-300 w-px h-10" />
        <div className="flex flex-col font-bold text-2xl">
          <h2>Richmond</h2>
          <h2>Store.com</h2>
        </div>
      </div>
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
        <div className="my-5">
          <div
            className={`flex items-center mx-auto justify-center space-x-2
             ${isMobile ? 'flex-col space-y-5' : ''}`}
          >
            <div className="flex flex-col space-y-1 w-64">
              <Image
                className="rounded-xl object-cover w-full h-48"
                src="/images/store/t-shirt1.webp"
                width={300}
                height={300}
                alt="Official A.F.C Richmond T-shirt"
                layout="responsive"
              />
              <p className="text-base font-semibold">
                OFFICIAL A.F.C RICHMOND T-SHIRT
              </p>
              <p>From the value:</p>
              <p className="text-base font-semibold">£59.95</p>
              <Link className="bg-blue-600 rounded" href="/shop">
                Buy
              </Link>
            </div>
            <div className="flex flex-col space-y-1 w-64">
              <Image
                className="rounded-xl object-cover w-full h-48"
                src="/images/store/t-shirt2.webp"
                width={300}
                height={300}
                alt="Official A.F.C Richmond T-shirt 2"
                layout="responsive"
              />
              <p className="text-base font-semibold">
                OFFICIAL A.F.C RICHMOND T-SHIRT 2
              </p>
              <p>From the value:</p>
              <p className="text-base font-semibold">£59.95</p>
              <Link className="bg-blue-600 rounded" href="/shop">
                Buy
              </Link>
            </div>
            <div className="flex flex-col space-y-1 w-64">
              <Image
                className="rounded-xl object-cover w-full h-48"
                src="/images/store/AFCR-ARCH.webp"
                width={300}
                height={300}
                alt="Official A.F.C Richmond T-shirt"
                layout="responsive"
              />
              <p className="text-base font-semibold">
                A.F.C. RICHMOND ARCH AND CREST ADULT
              </p>
              <p>From the value:</p>
              <p className="text-base font-semibold">£69.95</p>
              <Link className="bg-blue-600 rounded" href="/shop">
                Buy
              </Link>
            </div>
          </div>
        </div>

        <div className="my-5">
          <div
            className={`flex items-center mx-auto justify-center space-x-2
             ${isMobile ? 'flex-col space-y-5' : ''}`}
          >
            <div className="flex flex-col space-y-1 w-64">
              <Image
                className="rounded-xl object-cover w-full h-48"
                src="/images/store/AFCR-CRST.avif"
                width={300}
                height={300}
                alt="Official A.F.C Richmond T-shirt"
                layout="responsive"
              />
              <p className="text-base font-semibold">
                A.F.C. RICHMOND CREST ADULT SHORT SLEEVE T-SHIRT
              </p>
              <p>From the value:</p>
              <p className="text-base font-semibold">£23.95</p>
              <Link className="bg-blue-600 rounded" href="/shop">
                Buy
              </Link>
            </div>
            <div className="flex flex-col space-y-1 w-64">
              <Image
                className="rounded-xl object-cover w-full h-48"
                src="/images/store/TL-BOB1.webp"
                width={300}
                height={300}
                alt="Official A.F.C Richmond T-shirt"
                layout="responsive"
              />
              <p className="text-base font-semibold">
                TED LASSO BOBBLEHEAD ADULT SHORT SLEEVE T-SHIRT TED LASSO
              </p>
              <p>From the value:</p>
              <p className="text-base font-semibold">£15.95</p>
              <Link className="bg-blue-600 rounded" href="/shop">
                Buy
              </Link>
            </div>
            <div className="flex flex-col space-y-1 w-64">
              <Image
                className="rounded-xl object-cover w-full h-48"
                src="/images/store/TL-BOB3.webp"
                width={300}
                height={300}
                alt="Official A.F.C Richmond T-shirt"
                layout="responsive"
              />
              <p className="text-base font-semibold">
                OFFICIAL BOBBLEHEAD ADULT SHORT SLEEVE T-SHIRT ROY KENT
              </p>
              <p>From the value:</p>
              <p className="text-base font-semibold">£15.95</p>
              <Link className="bg-blue-600 rounded" href="/shop">
                Buy
              </Link>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  )
}

export default RichmondStore
