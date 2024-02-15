import TicketsCard from '@/components/Card/TicketsCard'
import Footer from '@/components/Footer'
import Nav from '@/components/Nav'
import Title from '@/components/Title'
import ticketsGame from '@/data/ticketsGameData'
import React from 'react'

const Tickets = () => {
  return (
    <div>
      <Nav />
      <Title
        title="Ticket Options"
        subtitle="Select the match you want to go to"
      />
      {ticketsGame.map((ticket) => (
        <TicketsCard key={ticket.id} {...ticket} />
      ))}

      <Footer />
    </div>
  )
}

export default Tickets
