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

      <div>
        <Accordion>
          <AccordionItem header="Match Day Gatherings">
            Join us on match days to rally behind AFC Richmond, meet fellow
            fans, and share the excitement of the game.
          </AccordionItem>

          <AccordionItem header="Club History">
            Learn about the rich history of AFC Richmond, including its
            founding, iconic moments, and the legends who have shaped the clubs
            legacy.
          </AccordionItem>

          <AccordionItem header="Membership Information">
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
