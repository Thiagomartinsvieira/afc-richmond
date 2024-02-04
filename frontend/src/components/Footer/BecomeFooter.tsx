import Image from 'next/image'
import { FaEnvelope, FaHeadset, FaWhatsapp } from 'react-icons/fa'

const BecomeFooter = () => {
  return (
    <div className="bg-gray-800">
      <footer className="container mx-auto px-4 py-8">
        <div
          className="flex flex-col md:flex-row items-center
         md:items-start justify-center space-x-20"
        >
          <div className="flex flex-col mb-4 md:mb-0">
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
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            <div>
              <h2 className="text-lg font-semibold text-yellow-600">
                Useful Links
              </h2>
              <ul className="list-disc pl-2">
                <li>
                  <a href="#">Plans</a>
                </li>
                <li>
                  <a href="#">Richmond+</a>
                </li>
                <li>
                  <a href="#">Experiences</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Regulation</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-yellow-600">
                Customer Service
              </h2>
              <div className="flex items-center">
                <FaHeadset />
                <a href="tel:(11)11111-1111" className="ml-2">
                  <p>(11) 11111-1111</p>
                  <p>Customer Support</p>
                </a>
              </div>
              <div className="flex items-center">
                <FaWhatsapp />
                <a href="tel:(11)22222-2222" className="ml-2">
                  <p>(11) 22222-2222</p>
                  <p>WhatsApp</p>
                </a>
              </div>
              <div className="flex items-center">
                <FaEnvelope />
                <a href="#">
                  <p className="ml-2">email@email.com</p>
                </a>
              </div>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-yellow-600">
                Memberships
              </h2>
              <p className="text-center flex justify-between items-center my-2">
                <span className="bg-white text-black p-2 rounded">0</span>
                <span className="bg-white text-black p-2 rounded">0</span>
                <span className="bg-white text-black p-2 rounded">0</span>
                <span className="bg-white text-black p-2 rounded">0</span>
                <span className="bg-white text-black p-2 rounded">0</span>
              </p>
              <p className="bg-yellow-600 border text-center rounded-lg">
                <a href="#">Fan Partner</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default BecomeFooter
