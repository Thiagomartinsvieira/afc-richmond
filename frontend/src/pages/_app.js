import '@/styles/globals.css'
import { ToastContainer } from 'react-toastify'
import { AuthProvider } from '../context/Auth'
import { MembershipProvider } from '../context/MembershipContext'

export default function App({ Component, pageProps }) {
  return (
    <>
      <AuthProvider>
        <MembershipProvider>
          <Component {...pageProps} />
        </MembershipProvider>
      </AuthProvider>
      <ToastContainer />
    </>
  )
}
