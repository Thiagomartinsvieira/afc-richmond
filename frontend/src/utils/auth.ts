import { GetServerSidePropsContext } from 'next'
import nookies from 'nookies'

export async function verifyToken(token: string | undefined) {
  if (!token) return null

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/users/getuserbytoken`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  )

  if (!response.ok) {
    return null
  }

  const data = await response.json()
  return data
}

export const authenticated = async (ctx: GetServerSidePropsContext) => {
  const cookies = nookies.get(ctx)
  const token = cookies.token

  if (!token) {
    console.log('No token found, redirecting to /become/login...')

    return {
      redirect: {
        destination: '/become/login',
        permanent: false,
      },
    }
  }

  const userData = await verifyToken(token)

  if (!userData) {
    console.log('Invalid token, redirecting to /become/login...')

    return {
      redirect: {
        destination: '/become/login',
        permanent: false,
      },
    }
  }

  return { props: { user: userData } }
}
