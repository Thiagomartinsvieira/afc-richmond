import Footer from '@/components/Footer'
import Nav from '@/components/Nav'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

const Buy = () => {
  const router = useRouter()
  const param = router.query.buy

  return (
    <div>
      <Nav />
      
      <Footer />
    </div>
  )
}

export default Buy
