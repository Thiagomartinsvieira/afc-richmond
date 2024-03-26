import Nav from '@/components/Nav'
import MemberNav from '@/components/Nav/MemberNav'
import Title from '@/components/Title'
import { useAuth } from '@/context/Auth'
import { authenticated } from '@/utils/auth'
import { GetServerSideProps } from 'next'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

interface userType {
  name: string
  email: String
  password: string
  confirmPassword: string
}

interface ProfileProps {
  user: userType | null
}

const Security = ({ user }: ProfileProps) => {
  const { currentUser, deleteAccount, edit, loading } = useAuth()
  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [userBornDate, setUserBornDate] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const [userProfilePic, setUserProfilePic] = useState('.')
  const [userConfirmPassword, setUserConfirmPassword] = useState('')
  const [deleteAccountConfirm, setDeleteAccountConfirm] = useState(false)

  useEffect(() => {
    if (currentUser) {
      setUserName(currentUser.name)
      setUserEmail(currentUser.email)
      if (currentUser.born_date) {
        const formattedBornDate = formatBornDateForInput(currentUser.born_date)
        setUserBornDate(formattedBornDate)
      }
    }
  }, [currentUser])

  const formatBornDateForInput = (isoDate: string) => {
    const date = new Date(isoDate)
    const year = date.getFullYear()
    const month = `0${date.getMonth() + 1}`.slice(-2)
    const day = `0${date.getDate()}`.slice(-2)
    return `${year}-${month}-${day}`
  }

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (userPassword !== userConfirmPassword) {
      alert('Password and confirm passsword are different')
      return
    } else {
      await edit(
        userName,
        userEmail,
        userBornDate,
        userPassword,
        userConfirmPassword,
        userProfilePic,
      )
      toast.success('Password changed with successFully!')
    }
    setUserPassword('')
    setUserConfirmPassword('')
  }

  return (
    <div>
      <Nav />
      <MemberNav />
      <Title
        title="Account Security"
        subtitle="Protecting Your AFC Richmond Experience"
      />
      <div className="flex flex-col items-center">
        <div
          className="flex flex-col items-start w-full max-w-xs 
        sm:max-w-sm md:max-w-md lg:max-w-lg"
        >
          <label className="text-lg font-bold">Name</label>
          <input
            disabled
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="w-full pl-4 rounded p-1"
          />
        </div>
        <div
          className="flex flex-col items-start w-full max-w-xs sm:max-w-sm 
        md:max-w-md lg:max-w-lg mt-4"
        >
          <label className="text-lg font-bold">Email</label>
          <input
            disabled
            type="email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            className="w-full pl-4 rounded p-1"
          />
        </div>
        <div
          className="flex flex-col items-start w-full max-w-xs sm:max-w-sm 
        md:max-w-md lg:max-w-lg mt-4"
        >
          <label className="text-lg font-bold">Born Date</label>
          <input
            type="date"
            className="w-full pl-4 rounded p-1"
            disabled
            value={userBornDate}
            onChange={(e) => setUserEmail(e.target.value)}
          />
        </div>
        <form
          onSubmit={handleFormSubmit}
          className="flex flex-col items-start w-full max-w-xs sm:max-w-sm 
        md:max-w-md lg:max-w-lg mt-4"
        >
          <span className="mx-auto text-lg font-bold">Change Password</span>
          <label className="text-base font-semibold mb-2">New Password</label>
          <input
            type="password"
            className="w-full pl-4 rounded p-1 mb-2"
            value={userPassword}
            required
            onChange={(e) => setUserPassword(e.target.value)}
          />
          <label className="text-base font-semibold mb-2">
            Confirm new Password
          </label>
          <input
            type="password"
            required
            className="w-full pl-4 rounded p-1"
            value={userConfirmPassword}
            onChange={(e) => setUserConfirmPassword(e.target.value)}
          />

          <button
            type="submit"
            className={`mx-auto 
            ${loading ? 'bg-red-700 hover:bg-red-600' : 'bg-blue-700 hover:bg-blue-600'}
             transition duration-300 rounded p-1 mt-5`}
          >
            {loading ? 'Loading...' : 'Send Password'}
          </button>
        </form>
        {!deleteAccountConfirm ? (
          <div
            className="text-center space-y-3 mt-10 bg-gray-300 p-10 
          rounded mb-20 text-black"
          >
            <p>Need to delete your account? This action cannot be undone.</p>
            <button
              type="button"
              onClick={() => setDeleteAccountConfirm(true)}
              className="bg-red-700 p-2 rounded-xl text-white"
            >
              Delete Account
            </button>
          </div>
        ) : (
          <div
            className="text-center space-y-3 mt-10 space-x-5 bg-gray-300
           p-10 rounded mb-20 text-black"
          >
            <p>Are you sure you want to delete your account?</p>
            <button
              type="button"
              onClick={() => {
                const password = prompt('Please confirm your password:')
                if (password) {
                  deleteAccount(userEmail, password)
                }
              }}
              className="bg-blue-700 p-2 px-3 rounded-xl text-white"
            >
              Yes, delete it
            </button>
            <button
              onClick={() => setDeleteAccountConfirm(false)}
              className="bg-red-700 p-2 px-3 rounded-xl text-white"
            >
              Cancel
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return await authenticated(ctx)
}

export default Security
