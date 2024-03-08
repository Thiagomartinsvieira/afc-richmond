import { GetServerSideProps } from 'next'
import { authenticated } from '../utils/auth'
import React from 'react'
import { useRouter } from 'next/router'

interface UserType {
  name: string
}

interface DashboardProps {
  user: UserType | null
}

const Dashboard = (props: DashboardProps) => {
  const router = useRouter()

  return (
    <div>
      <h1>Dashboard</h1>
      {props.user && <p>Bem-vindo, {props.user.name}!</p>}
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return await authenticated(ctx)
}

export default Dashboard
