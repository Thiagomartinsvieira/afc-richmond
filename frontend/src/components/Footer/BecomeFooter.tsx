import { useAuth } from '@/context/Auth'
import { count, error } from 'console'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { FaEnvelope, FaHeadset, FaWhatsapp } from 'react-icons/fa'

const BecomeFooter = () => {
  const { qtdUsers } = useAuth()
  const [userCount, setUserCount] = useState(10)

  useEffect(() => {
    const fetchUserCount = async () => {
      const count = await qtdUsers()
      setUserCount(count)
    }

    fetchUserCount()
  }, [qtdUsers])

  const copyToClipboard = (text: string) => {
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(text)
        .then(() => {
          alert('Information copied to clipboard!')
        })
        .catch((err) => {
          console.error('Erro ao copiar para a área de transferência', err)
        })
    } else {
      const textarea = document.createElement('textarea')
      textarea.value = text
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.removeChild(textarea)
      alert('information copied to clipboard')
    }
  }

  return (
    <div className="bg-gray-800">
      <footer className="container mx-auto px-4 py-8">
        <div
          className="flex flex-col md:flex-row items-center
         md:items-start justify-center lg:space-x-20"
        >
          <div className="flex flex-col mb-4 md:mb-0">
            <Link href="/become/#plans">
              <div className="flex">
                <Image
                  width={200}
                  height={200}
                  src="/images/logos/Greyhounds_dog.png"
                  alt="Company Logo"
                  className="w-24 h-auto mb-2"
                />
              </div>
              <address className="mt-2">
                <div>
                  <span>Be a goldfish</span>
                </div>
                <div>
                  <span>Membership Program</span>
                </div>
                <div>
                  <span>AFC Richmond</span>
                </div>
              </address>
            </Link>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            <div>
              <h2 className="text-lg font-semibold text-yellow-600">
                Useful Links
              </h2>
              <ul className="list-disc pl-2">
                <li>
                  <Link href="/become/plans">Plans</Link>
                </li>
                <li>
                  <Link href="/become/richmod">Richmond+</Link>
                </li>
                <li>
                  <a href="/experiences">Experiences</a>
                </li>
                <li>
                  <Link href="/faq">FAQ</Link>
                </li>
                <li>
                  <Link href="/become/richmonites">Richmonites</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-yellow-600">
                Customer Service
              </h2>
              <div className="flex items-center">
                <FaHeadset />
                <button
                  onClick={() => copyToClipboard('(11) 96290-3104')}
                  className="ml-2"
                >
                  <p>(11) 96290-3104</p>
                  <p>Customer Support</p>
                </button>
              </div>
              <div className="flex items-center">
                <FaWhatsapp />
                <button
                  onClick={() => copyToClipboard('(11) 96290-3104')}
                  className="ml-2"
                >
                  <p>(11) 96290-3104</p>
                  <p>WhatsApp</p>
                </button>
              </div>
              <div className="flex items-center">
                <FaEnvelope />
                <a href="mailto:thiago.devstack@gmail.com">
                  <p className="ml-2">thiago.devstack@gmail.com</p>
                </a>
              </div>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-yellow-600">
                Memberships
              </h2>
              <p className="text-center flex justify-between items-center my-2">
                <span
                  className="bg-white text-black p-2 px-6 rounded 
                mx-auto font-black text-lg border-yellow-500 border-2"
                >
                  {userCount}
                </span>
              </p>

              <p className="bg-yellow-600 border text-center rounded-lg">
                <Link href="/become/register">Fan Partner</Link>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default BecomeFooter
