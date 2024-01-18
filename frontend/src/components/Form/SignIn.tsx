import Link from 'next/link'
import { useState } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useRouter } from 'next/router'

const SignIn = () => {
  const router = useRouter()

  const [logonData, setLogonData] = useState({
    email: '',
    password: '',
  })

  const handleLoginChange = (e) => {
    const { name, value } = e.target
    setLogonData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleLogin = (e) => {
    e.preventDefault()

    setLogonData({
      email: '',
      password: '',
    })

    toast.success('it`s ok')

    setTimeout(() => {
      router.push('/become/member')
    }, 1500)
  }

  return (
    <div className="flex items-center justify-center mb-10">
      <form
        onSubmit={handleLogin}
        className="flex flex-col bg-slate-800 p-8 rounded-lg w-96 shadow-md"
      >
        <h3 className="text-center text-2xl font-bold mb-4">Login</h3>
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          value={logonData.email}
          onChange={handleLoginChange}
          className="mb-4 p-2 border border-gray-300 rounded-md"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          value={logonData.password}
          minLength={6}
          onChange={handleLoginChange}
          className="mb-4 p-2 border border-gray-300 rounded-md"
        />
        <span className="text-gray-400 mb-2">
          Not a fan member yet?{' '}
          <Link
            className="text-blue-500 hover:underline"
            href="/become/register"
          >
            Click here
          </Link>
        </span>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 rounded-md 
          hover:bg-blue-700 transition duration-300 cursor-pointer"
        >
          Sign Up
        </button>
      </form>
    </div>
  )
}

export default SignIn
