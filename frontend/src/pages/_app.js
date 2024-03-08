import '@/styles/globals.css'
import { ToastContainer } from 'react-toastify'
import { AuthProvider } from '../context/Auth'

export default function App({ Component, pageProps }) {
  return (
    <>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
      <ToastContainer />
    </>
  )
}
