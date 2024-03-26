import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import Cookie from 'js-cookie'
import { toast } from 'react-toastify'
import { useAuth } from './Auth'

export interface Associate {
  name: string
  id: string
}

export interface MembershipContextProps {
  associates: Associate[]
  addAssociate: (membership: string) => Promise<void>
  deleteAssociate: () => Promise<void>
  editAssociate: (membership: string) => Promise<void>
  fetchAssociates: () => void
  updateUserPlan: (newPlan: string) => void
  currentPlan: string
}

const MembershipContext = createContext<MembershipContextProps>({
  associates: [],
  addAssociate: () => Promise.resolve(),
  deleteAssociate: () => Promise.resolve(),
  editAssociate: () => Promise.resolve(),
  fetchAssociates: () => {},
  updateUserPlan: () => {},
  currentPlan: '',
})

export const useMembership = (): MembershipContextProps => {
  const context = useContext(MembershipContext)
  if (!context) {
    throw new Error('useMembership must be used within a MembershipProvider')
  }
  return context
}

export const MembershipProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [associates, setAssociates] = useState<Associate[]>([])
  const [userPlan, setUserPlan] = useState<string>('')
  const [currentPlan, setCurrentPlan] = useState('')
  const { currentUser } = useAuth()

  useEffect(() => {
    fetchAssociates()
  }, [])

  useEffect(() => {
    if (currentUser) {
      setCurrentPlan(currentUser.membership)
    }
  }, [currentUser])

  const fetchAssociates = () => {}

  const updateUserPlan = (newPlan: string) => {
    setUserPlan(newPlan)
  }

  const addAssociate = async (membership: string) => {
    console.log('Tentando adicionar associado:', membership)
    try {
      const token = Cookie.get('token')
      if (!token) {
        throw new Error('User not authenticated')
      }

      console.log('token:' + token)

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/membership/add`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ membership }),
        },
      )
      if (!response.ok) {
        throw new Error('Failed to add associate')
      }

      updateUserPlan(membership)
      setCurrentPlan(membership)

      toast.success(`Your plan now is ${membership}`)
    } catch (error) {
      console.error('An error occurred while adding associate:', error)
    }
  }

  const editAssociate = async (membership: string) => {
    try {
      const token = Cookie.get('token')
      if (!token) {
        throw new Error('User not authenticated')
      }

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/membership/edit`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ membership }),
        },
      )

      if (!response.ok) {
        throw new Error('Failed to update associate')
      }

      updateUserPlan(membership)
      setCurrentPlan(membership)

      toast.success(`Your plan now is ${membership}`)
    } catch (error) {
      console.error('An error occurred while updating associate:', error)
    }
  }

  const deleteAssociate = async () => {
    console.log('Tentando excluir')

    try {
      const token = Cookie.get('token')
      if (!token) {
        throw new Error('User not authenticated')
      }

      console.log('token:' + token)

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/membership/delete`,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ membership: '' }),
        },
      )

      if (!response.ok) {
        throw new Error('Failed to delete associate')
      }

      updateUserPlan('')
      setCurrentPlan('')
    } catch (error) {
      console.error('An error occurred while removing associate:', error)
    }
  }

  const value: MembershipContextProps = {
    currentPlan,
    associates,
    addAssociate,
    deleteAssociate,
    editAssociate,
    fetchAssociates,
    updateUserPlan,
  }

  return (
    <MembershipContext.Provider value={value}>
      {children}
    </MembershipContext.Provider>
  )
}
