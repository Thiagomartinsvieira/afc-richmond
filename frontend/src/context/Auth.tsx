import {
  useContext,
  createContext,
  useState,
  ReactNode,
  useEffect,
} from 'react'
import Cookie from 'js-cookie'
import { useRouter } from 'next/router'
import { verifyToken } from '@/utils/auth'
import { toast } from 'react-toastify'

interface AuthProviderProps {
  children: ReactNode
}

interface AuthContextProps {
  currentUser: any
  login: (email: string, password: string) => Promise<void>
  edit: (
    name: string,
    email: string,
    password: string,
    confirmPassword: string,
    bornDate: string,
    profilePicUrl: string,
  ) => Promise<void>
  logout: () => void
  deleteAccount: (email: string, password: string) => Promise<void>
  loading: boolean
  register: (
    name: string,
    email: string,
    password: string,
    confirmPassword: string,
    bornDate: string,
  ) => Promise<void>
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined)

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [currentUser, setCurrentUser] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  const router = useRouter()

  useEffect(() => {
    const token = Cookie.get('token')
    if (token) {
      verifyUser(token)
    }
  }, [])

  const verifyUser = async (token: string) => {
    try {
      const userData = await verifyToken(token)
      setCurrentUser(userData)
      return userData
    } catch (error) {
      console.error('Error verifying user:', error)
    }
  }

  const login = async (email: string, password: string) => {
    setLoading(true)
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/users/login`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        },
      )

      if (!response.ok) {
        throw new Error('Login failed')
      }

      const { token } = await response.json()

      Cookie.set('token', token, { expires: 1 })
      const userData = await verifyUser(token)
      await router.push('/dashboard')
      toast.success(`Welcome back ${userData.name.split(' ')[0]}`)
      setLoading(false)
    } catch (error) {
      console.error('An error occurred during login:', error)
      toast.error(
        'An error occurred during login check your credentials and try again',
      )
      setLoading(false)
      throw error
    }
    setLoading(false)
  }

  const edit = async (
    name: string,
    email: string,
    bornDate: string,
    password: string,
    confirmPassword: string,
    profilePicUrl: string,
  ) => {
    setLoading(true)
    try {
      const token = Cookie.get('token')
      if (!token) {
        throw new Error('No token found')
      }

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/users/edit/${currentUser._id}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            name,
            email,
            born_date: bornDate,
            password,
            confirmpassword: confirmPassword,
            profile_pic_url: profilePicUrl,
          }),
        },
      )

      if (!response.ok) {
        const errorData = await response.json()
        console.error('Edit failed:', errorData)
        throw new Error(errorData.message || 'Edit failed')
      }

      setCurrentUser((prev: any) => ({
        ...prev,
        name,
        email,
      }))
      setCurrentUser(bornDate)
      setLoading(false)

      toast.success('Profile updated successfully')
    } catch (error) {
      console.error('An error occurred during edit:', error)
      setLoading(false)
      throw error
    }
  }

  const logout = () => {
    Cookie.remove('token')
    setCurrentUser(null)
    router.push('/become/login')
  }

  const register = async (
    name: string,
    email: string,
    bornDate: string,
    password: string,
    confirmPassword: string,
  ) => {
    setLoading(true)
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/users/register`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            email,
            born_date: bornDate,
            password,
            confirmpassword: confirmPassword,
          }),
        },
      )

      if (!response.ok) {
        throw new Error('Registration failed')
      }

      const { token } = await response.json()

      Cookie.set('token', token, { expires: 1 })
      const userData = await verifyUser(token)
      await router.push('/dashboard')
      toast.success(`Welcome ${userData.name.split(' ')[0]}`)
      setLoading(false)
    } catch (error) {
      console.error('An error occurred during register:', error)
      setLoading(false)
      throw new Error('Registration failed')
    }
  }

  const deleteAccount = async (email: string, password: string) => {
    try {
      const token = Cookie.get('token')
      if (!token) {
        throw new Error('No token found')
      }

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/users/delete/${currentUser._id}`,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ email, password }),
        },
      )

      if (!response.ok) {
        throw new Error('Failed to delete account')
      }

      logout()
      toast.info('Account deleted successfully')
    } catch (error) {
      console.error('An error occurred during account deletion:', error)
    }
  }

  const value = {
    currentUser,
    login,
    logout,
    register,
    loading,
    deleteAccount,
    edit,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
