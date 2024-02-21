import {
  useState,
  useContext,
  createContext,
  useEffect,
  type FC,
  type ReactNode
} from 'react'
import { type AuthChangeEvent } from '@supabase/supabase-js'
import { supabase } from '../supabase/supabase'

type UserType = {
  user_id: string | undefined
  name: string
  surname: string
} | null

export interface UserContextType {
  userData: UserType
  updateUserData: (newUserData: UserType) => void
}

export interface LoginContextType {
  isLogged: boolean
  updateLoginState: (newLoginState: boolean) => void
}

// CREATE CONTEXT
const UserContext = createContext<UserContextType | undefined>(undefined)

const LoginContext = createContext<LoginContextType | undefined>(undefined)

// CUSTOM HOOKS
export const useUserContext = (): UserContextType => {
  const userContext = useContext(UserContext)
  if (userContext === undefined)
    throw new Error('useUserContext must be used within a UserProvider')
  return userContext
}

export const useLoginContext = (): LoginContextType => {
  const loginContext = useContext(LoginContext)
  if (loginContext === undefined)
    throw new Error('useLoginContext must be used within a UserProvider')
  return loginContext
}

// CONTEXT PROVIDER
type TUserProvider = {
  children: ReactNode
}
export const UserProvider: FC<TUserProvider> = ({ children }) => {
  // useState
  const [userData, setUserData] = useState<UserType>(null)
  const [isLogged, setIsLogged] = useState<boolean>(false)
  const [auth, setAuth] = useState<AuthChangeEvent | null>(null)

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      setAuth(event)
      session !== null ? updateLoginState(true) : updateLoginState(false)
    })
  }, [auth])

  // update states
  const updateUserData = (newUserData: UserType): void => {
    setUserData(newUserData)
  }

  const updateLoginState = (newLoginState: boolean): void => {
    setIsLogged(newLoginState)
  }

  return (
    <UserContext.Provider value={{ userData, updateUserData }}>
      <LoginContext.Provider value={{ isLogged, updateLoginState }}>
        {children}
      </LoginContext.Provider>
    </UserContext.Provider>
  )
}
