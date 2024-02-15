import Link from 'next/link'
import { useState } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useRouter } from 'next/router'
import { FormEvent } from 'react'

const SignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      toast.success('its ok')
      setTimeout(() => {
        router.push('/become/member')
      }, 2000)
    } catch (error) {
      toast.error('try again')
    }

    setEmail('')
    setPassword('')
  }

  return (
    <div className="flex items-center justify-center mb-10">
      <form
        onSubmit={handleLogin}
        className="flex flex-col bg-slate-800 p-8 
      rounded-lg w-96 shadow-md"
      >
        <h3
          className="text-center text-2xl font-bold 
        mb-4"
        >
          Login
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
            className="text-blue-500 
          hover:underline"
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

export default SignUp
