import {
  createContext,
  useContext,
  useState,
  type FC,
  type ReactNode
} from 'react'
// import { supabase } from '../supabase/supabase'

export type TTapasContext = {
  tapas: any[] | null
  // getTapas: () => Promise<void>
}
const TapasContext = createContext<TTapasContext | null>(null)

export const useTapasContext = (): TTapasContext => {
  const tapasContext = useContext(TapasContext)
  if (tapasContext === null)
    throw new Error('useTapasContext must be used within an TapasProvider')
  return tapasContext
}

type TTapasProvider = {
  children: ReactNode
}
export const TapasProvider: FC<TTapasProvider> = ({ children }) => {
  const [tapas, setTapas] = useState<any[] | null>(null)
  setTapas([])
  // const getTapas = async (): Promise<void> => {
  //   const { data } = await supabase.from('tapas').select('*')
  //   setTapas(data)
  // }

  return (
    <TapasContext.Provider value={{ tapas }}>{children}</TapasContext.Provider>
  )
}
