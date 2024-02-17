import Footer from '@/components/Footer'
import Nav from '@/components/Nav'
import FanMemberNav from '@/components/Nav/FanMemberNav'
import Title from '@/components/Title'
import Image from 'next/image'
import { Accordion, AccordionItem } from '@szhsin/react-accordion'

const richmonites = () => {
  return (
    <div>
      <Nav />
      <FanMemberNav />
      <Title title="Richmonites" subtitle="The AFC RICHMOND Supporters" />
      <div className="flex justify-center my-10">
        <Image
          className="rounded-lg border border-yellow-500"
          src="/images/Become/richmonites/afc_fans.webp"
          alt="AFC Richmond stadium"
          width={1000}
          height={562}
        />
      </div>
      <div className="max-w-4xl mx-auto px-4 mb-10">
        <p className="text-center text-lg">
          Welcome to the official page of the AFC Richmond supporters known as
          Richmonites. We are a passionate and loyal community of fans dedicated
          to supporting our club in every match and every moment.
        </p>
        <p className="text-center text-lg mt-4">
          Here, you will find information on how to become a member, upcoming
          events, community support initiatives, and much more.
        </p>
        <p className="text-center text-lg mt-4">
          Join us and be part of this exciting journey as we celebrate AFC
          Richmond together!
        </p>
      </div>

<<<<<<< HEAD
      <div className="flex justify-center w-10/12 mx-auto text-center mb-10">
        <Accordion className="w-10/12 font-bold text-lg">
          <AccordionItem
            className="border p-10 space-y-10"
            header={
              <>
                <span className="cursor-pointer">
                  Match Day Gatherings
                  <span className="ml-2 text-gray-500 text-xs">
                    Click to expand
                  </span>
                </span>
              </>
            }
          >
=======
      <div>
        <Accordion>
          <AccordionItem header="Match Day Gatherings">
>>>>>>> development_backend
            Join us on match days to rally behind AFC Richmond, meet fellow
            fans, and share the excitement of the game.
          </AccordionItem>

<<<<<<< HEAD
          <AccordionItem
            className="border p-10 space-y-10"
            header={
              <>
                <span className="cursor-pointer">
                  Club History
                  <span className="ml-2 text-gray-500 text-xs">
                    Click to expand
                  </span>
                </span>
              </>
            }
          >
=======
          <AccordionItem header="Club History">
>>>>>>> development_backend
            Learn about the rich history of AFC Richmond, including its
            founding, iconic moments, and the legends who have shaped the clubs
            legacy.
          </AccordionItem>

<<<<<<< HEAD
          <AccordionItem
            className="border p-10 space-y-10"
            header={
              <>
                <span className="cursor-pointer">
                  Membership Information
                  <span className="ml-2 text-gray-500 text-xs">
                    Click to expand
                  </span>
                </span>
              </>
            }
          >
=======
          <AccordionItem header="Membership Information">
>>>>>>> development_backend
            Interested in becoming a Richmonite? Discover the benefits of
            membership, how to join, and exclusive perks available to our
            supporters.
          </AccordionItem>
        </Accordion>
      </div>

      <Footer />
    </div>
  )
}

export default richmonites
