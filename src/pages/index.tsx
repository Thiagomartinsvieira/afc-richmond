import Link from 'next/link'

export default function Home() {
  return (
    <div className="text-center items-center justify-center flex flex-col relative">
      <img
        src="https://t2.tudocdn.net/640244?w=1920&h=1440"
        alt="AFC Richmond"
        className="w-full h-full rounded-lg shadow-lg mb-4"
      />

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
        <div>
          <h2 className="m-10 text-4xl font-bold">AFC Richmond</h2>
          <h2 className="m-10 text-xl">Project created by Thiago Martins</h2>
        </div>

        <div className="flex flex-col space-y-4">
          <Link href="/home">
            <button
              className="text-lg bg-blue-500 text-white py-2 px-4 
            rounded-md hover:bg-blue-700 transition"
            >
              Go to website
            </button>
          </Link>
          <Link href="/become">
            <button
              className="text-lg bg-green-500 text-white py-2 px-4 
            rounded-md hover:bg-green-700 transition"
            >
              Become a fan member
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
