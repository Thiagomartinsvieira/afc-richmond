import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="relative h-screen">
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          backgroundImage: `url('images/cover/Afc_cover.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>

      <div className="absolute top-0 right-0 m-4 text-black text-right">
        <div className="my-10 flex flex-col items-center">
          <Link href={'/home'}>
            <Image
              width={100}
              height={100}
              src="/images/logos/Richmond_logo.png"
              alt="AFC Richmond logo"
              className="w-28 h-auto"
            />
          </Link>
          <Link href={'/home'} className="font-extrabold">
            Site
          </Link>
        </div>
      </div>

      <div className="absolute top-36 right-0 m-4 text-black text-right">
        <div className="my-10 flex flex-col items-center">
          <Link href={'/become'}>
            <Image
              width={100}
              height={100}
              src="/images/logos/Greyhounds_dog.png"
              alt="AFC Richmond logo"
              className="w-24 h-auto"
            />
          </Link>
          <Link href={'/become'} className="font-extrabold">
            Become
          </Link>
        </div>
      </div>

      <div className="absolute top-60 right-0 m-4 text-black text-right">
        <div className="my-10 flex flex-col items-center">
          <Link href={'/shop'}>
            <Image
              width={100}
              height={100}
              src="/images/logos/Greyhounds_athletic.png"
              alt="AFC Richmond logo"
              className="w-24 h-auto"
            />
          </Link>
          <Link href={'/shop'} className="font-extrabold">
            Shop
          </Link>
        </div>
      </div>
      <h1 className="absolute bottom-3 left-1/2 transform -translate-x-1/2 text-red-100">
        Project created by Thiago Martins Vieira
      </h1>
    </div>
  )
}
