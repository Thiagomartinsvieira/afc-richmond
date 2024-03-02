import { useContext, createContext, useState, ReactNode } from 'react'

interface AuthProviderProps {
  children: ReactNode
}

interface AuthContextProps {
  currentUser: string | null
  token: string
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
  const [currentUser, setCurrentUser] = useState<string | null>(null)
  const [token, setToken] = useState('')

  const login = async (email: string, password: string) => {
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
      throw new Error('Login failed')
    }

    const data = await response.json()
    setToken(data.token)
    setCurrentUser({ ...data.user })
  }

  const logout = () => {
    setCurrentUser(null)
    setToken('')
  }

  const register = async (
    name: string,
    email: string,
    bornDate: string,
    password: string,
    confirmPassword: string,
  ) => {
    const response = await fetch(
      'https://afc-richmond.onrender.com/users/register',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
          bornDate,
          confirmPassword,
        }),
      },
    )

    if (!response.ok) {
      throw new Error('Register failed')
    }
  }

  const value = {
    currentUser,
    token,
    login,
    logout,
    register,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
