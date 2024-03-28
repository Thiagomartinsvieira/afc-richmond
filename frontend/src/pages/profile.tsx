import Footer from '@/components/Footer'
import Nav from '@/components/Nav'
import MemberNav from '@/components/Nav/MemberNav'
import Title from '@/components/Title'
import { useAuth } from '@/context/Auth'
import { authenticated } from '@/utils/auth'
import { GetServerSideProps } from 'next'
import Image, { StaticImageData } from 'next/image'
import React, { ChangeEvent, useEffect, useRef, useState } from 'react'
import { toast } from 'react-toastify'
import { FaTrash } from 'react-icons/fa'
import avatar from '../../public/images/user/userNull.webp'

interface UserType {
  name: string
  email: string
  userAvatarUrl?: string
}

interface ProfileProps {
  user: UserType | null
}

const Profile = ({ user }: ProfileProps) => {
  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [userBornDate, setUserBornDate] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const [userConfirmPassword, setUserConfirmPassword] = useState('')
  const [userAvatarUrl, setUserAvatarUrl] = useState<string | StaticImageData>(
    avatar,
  )

  const { currentUser, edit, loading } = useAuth()

  const fileInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (currentUser) {
      setUserName(currentUser.name)
      setUserEmail(currentUser.email)
      if (currentUser.born_date) {
        const formattedBornDate = formatBornDateForInput(currentUser.born_date)
        setUserBornDate(formattedBornDate)
      }
      setUserAvatarUrl(currentUser.avatarUrl || avatar)
    }
  }, [currentUser])

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    try {
      await edit(
        userName,
        userEmail,
        userBornDate,
        userPassword,
        userConfirmPassword,
        typeof userAvatarUrl as string,
      )
      setUserPassword('')
      setUserConfirmPassword('')
    } catch (error) {
      toast.error('Failed to update profile')
      console.error(error)
      setUserPassword('')
      setUserConfirmPassword('')
    }
  }

  const handleUploadClick = () => {
    fileInputRef.current?.click()
  }

  const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const image = e.target.files[0]

      if (
        image.type === 'image/jpeg' ||
        image.type === 'image/png' ||
        image.type === 'image/webp'
      ) {
        setUserAvatarUrl(URL.createObjectURL(image))
      } else {
        toast.error('Upload a png, jpeg, or webp image')
        setUserAvatarUrl(avatar)
        return
      }
    }
  }

  const handleRemoveImage = () => {
    setUserAvatarUrl(avatar)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  const formatBornDateForInput = (isoDate: string) => {
    const date = new Date(isoDate)
    const year = date.getFullYear()
    const month = `0${date.getMonth() + 1}`.slice(-2)
    const day = `0${date.getDate()}`.slice(-2)
    return `${year}-${month}-${day}`
  }

  const getCurrentDateFormatted = () => {
    const currentDate = new Date()
    const year = currentDate.getFullYear()
    const month = `0${currentDate.getMonth() + 1}`.slice(-2)
    const day = `0${currentDate.getDate()}`.slice(-2)
    return `${year}-${month}-${day}`
  }

  return (
    <div>
      <Nav />
      <MemberNav />
      <Title title="Profile" subtitle="Update your profile information" />
      <div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col space-y-2 mb-10 mx-10 md:mx-60 
        lg:mx-72 xl:mx-96"
        >
          <div className="relative w-full h-full flex justify-center items-center mb-5">
            <div
              className="relative w-80 h-80 rounded-full overflow-hidden 
            cursor-pointer"
            >
              <Image
                src={userAvatarUrl}
                alt="Profile image"
                layout="fill"
                objectFit="cover"
                onClick={handleUploadClick}
              />
            </div>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <div className="flex space-x-2 items-center mb-10">
              <input
                onChange={handleFile}
                accept="image/*"
                ref={fileInputRef}
                type="file"
                className="hidden"
              />
              {userAvatarUrl && userAvatarUrl !== avatar && (
                <button
                  type="button"
                  className="mr-48"
                  onClick={handleRemoveImage}
                >
                  <FaTrash size={15} color="#fff" />
                </button>
              )}
            </div>
          </div>

          <div className="flex flex-col">
            <label>Name</label>
            <input
              className="my-2 p-1 pl-2 rounded"
              required
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <label>Email</label>
            <input
              className="my-2 p-1 pl-2 rounded"
              required
              type="email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
            />
            <label>Born Date</label>

            <input
              className="my-2 p-1 pl-2 rounded"
              required
              type="date"
              max={getCurrentDateFormatted()}
              value={userBornDate}
              onChange={(e) => setUserBornDate(e.target.value)}
            />
            <label>Password</label>
            <input
              type="password"
              value={userPassword}
              placeholder="Current Password"
              onChange={(e) => setUserPassword(e.target.value)}
              required
              className="my-2 p-1 pl-2 rounded"
            />
            <label>Confirm Password</label>
            <input
              type="password"
              value={userConfirmPassword}
              placeholder="Current Password"
              onChange={(e) => setUserConfirmPassword(e.target.value)}
              required
              className="my-2 p-1 pl-2 rounded"
            />
            <button
              type="submit"
              disabled={loading}
              className={`mt-2 ${loading ? 'bg-red-800 hover:bg-red-700' : 'bg-blue-800 hover:bg-blue-700'} p-2 rounded-md`}
            >
              {loading ? 'Loading...' : 'save'}
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return await authenticated(ctx)
}

export default Profile
