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

interface AuthProviderProps {
  children: ReactNode
}

interface AuthContextProps {
  currentUser: any
  login: (email: string, password: string) => Promise<void>
  logout: () => void
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
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      verifyUser(token)
    }
  }, [])

  const verifyUser = async (token: string) => {
    try {
      const userData = await verifyToken(token)
      setCurrentUser(userData)
    } catch (error) {
      console.error('Error verifying user:', error)
    }
  }

  const login = async (email: string, password: string) => {
    try {
      const response = await fetch(
        'https://afc-richmond.onrender.com/users/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        },
      )

      if (!response.ok) {
        throw new Error('Falha no login')
      }

      const { token } = await response.json()

      Cookie.set('token', token, { expires: 1 })
      verifyUser(token)
      router.push('/dashboard')
    } catch (error) {
      console.error('An error occurred during login:', error)
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
  ) => {}

  const value = {
    currentUser,
    login,
    logout,
    register,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
