import Link from 'next/link'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useRouter } from 'next/router'
import { FormEvent } from 'react'
import { useAuth } from '@/context/Auth'

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { login, loading } = useAuth()

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      await login(email, password)
    } catch (error) {
      console.log('An error occurred:', error)
    }

    setEmail('')
    setPassword('')
  }

  return (
    <div className="flex items-center justify-center mb-10">
      <form
        onSubmit={handleLogin}
        className="flex flex-col bg-slate-800 p-8 rounded-lg w-96 shadow-md"
      >
        <h3 className="text-center text-2xl font-bold mb-4">
          Login to account
        </h3>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="mb-4 p-2 border border-gray-300 rounded-md"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          minLength={6}
          className="mb-4 p-2 border border-gray-300 rounded-md"
        />
        <span className="text-gray-400 mb-2">
          Do not have an account yet?{' '}
          <Link
            className="text-blue-500 hover:underline"
            href="/become/register"
          >
            Click here
          </Link>
        </span>
        <button
          disabled={loading}
          type="submit"
          className={`bg-blue-500 text-white py-2 rounded-md 
          hover:bg-blue-700 transition duration-300 cursor-pointer
          ${loading && 'bg-red-700 hover:bg-red-700'}`}
        >
          {loading ? 'Loading...' : 'Login'}
        </button>
      </form>
    </div>
  )
}

export default SignIn
