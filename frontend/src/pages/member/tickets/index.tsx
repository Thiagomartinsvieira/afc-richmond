import Nav from '@/components/Nav'
import MemberNav from '@/components/Nav/MemberNav'
import ticketsGame from '@/data/ticketsGameData'
import TicketsCard from '@/components/Card/TicketsCard'
import { GetServerSideProps } from 'next'
import { authenticated } from '@/utils/auth'

const tickets = () => {
  return (
    <div>
      <Nav />
      <MemberNav />
      {ticketsGame.map((ticket) => (
        <TicketsCard key={ticket.id} {...ticket} />
      ))}
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return await authenticated(ctx)
}

export default tickets
