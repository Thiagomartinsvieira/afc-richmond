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
            <img
              src="images/logos/Richmond_logo.png"
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
            <img
              src="images/logos/Greyhounds_dog.png"
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
            <img
              src="https://s3-us-west-2.amazonaws.com/sportshub2-uploads-prod/files/sites/1037/2019/12/23165553/logo_outline-1.png"
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
