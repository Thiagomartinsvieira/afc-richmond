import Nav from '@/components/Nav'
import MemberNav from '@/components/Nav/MemberNav'
import Title from '@/components/Title'
import { useAuth } from '@/context/Auth'
import { authenticated } from '@/utils/auth'
import { GetServerSideProps } from 'next'
import React, { useEffect, useState } from 'react'

interface userType {
  name: string
  email: String
}

interface ProfileProps {
  user: userType | null
}

const Security = ({ user }: ProfileProps) => {
  const { currentUser, deleteAccount } = useAuth()
  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [deleteAccountConfirm, setDeleteAccountConfirm] = useState(false)

  useEffect(() => {
    if (currentUser) {
      setUserName(currentUser.name)
      setUserEmail(currentUser.email)
    }
  }, [currentUser])

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
            className="w-full pl-4 rounded p-1"
          />
        </div>
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
