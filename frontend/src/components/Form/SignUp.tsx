import Link from 'next/link'
import { useState } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useRouter } from 'next/router'
import { FormEvent } from 'react'
import { useAuth } from '@/context/Auth'

const SignUp = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [bornDate, setBornDate] = useState('')

  const router = useRouter()

  const { register } = useAuth()

  const formatBornDate = (bornDate: string): string => {
    return bornDate
  }

  const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      toast.error("Passwords don't match!")
      return
    }

    try {
      const formattedBornDate = formatBornDate(bornDate)

      console.log('Dados a serem enviados para registro:')
      console.log('Name:', name)
      console.log('Email:', email)
      console.log('Formatted Born Date:', formattedBornDate)
      console.log('Password:', password)
      console.log('Confirm Password:', confirmPassword)

      await register(name, email, formattedBornDate, password, confirmPassword)
      toast.success('Registration successful')
      router.push('/dashboard')
    } catch (error) {
      console.error('Registration failed: ', error)
      toast.error('Error occurred')
    }
  }

  const getCurrentDateFormatted = () => {
    const currentDate = new Date()
    const year = currentDate.getFullYear()
    const month = `0${currentDate.getMonth() + 1}`.slice(-2)
    const day = `0${currentDate.getDate()}`.slice(-2)
    return `${year}-${month}-${day}`
  }

  return (
    <div className="flex items-center justify-center mb-10">
      <form
        onSubmit={handleRegister}
        className="flex flex-col bg-slate-800 p-8 
      rounded-lg w-96 shadow-md"
      >
        <h3
          className="text-center text-2xl font-bold 
        mb-4"
        >
          Register your account
        </h3>
        <input
          type="text"
          placeholder="Full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="mb-4 p-2 border border-gray-300 rounded-md"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="mb-4 p-2 border border-gray-300 rounded-md"
        />
        <input
          className="mb-4 p-2 border border-gray-300 rounded-md"
          type="date"
          required
          max={getCurrentDateFormatted()}
          value={bornDate}
          onChange={(e) => setBornDate(e.target.value)}
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
        <input
          type="password"
          required
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          minLength={6}
          placeholder="Confirm Password"
          className="mb-4 p-2 border border-gray-300 rounded-md"
        />
        <span className="text-gray-400 mb-2">
          Already have an account?{' '}
          <Link
            className="text-blue-500 
          hover:underline"
            href="/become/login"
          >
            Click here
          </Link>
        </span>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 rounded-md 
          hover:bg-blue-700 transition duration-300 cursor-pointer"
        >
          Register
        </button>
      </form>
    </div>
  )
}

export default SignUp
