import {
  createContext,
  useContext,
  useState,
  type FC,
  type ReactNode
} from 'react'
import { type TDietaryRequirement } from '../pages'
import { supabase } from '../supabase/supabase'

export type TDietaryRequirementsContext = {
  requirements: TDietaryRequirement[] | null
  getDietaryRequirements: () => Promise<void>
}
const DietaryRequirementsContext =
  createContext<TDietaryRequirementsContext | null>(null)

export const useDietaryRequirementsContext =
  (): TDietaryRequirementsContext => {
    const dietaryRequirementsContext = useContext(DietaryRequirementsContext)
    if (dietaryRequirementsContext === null)
      throw new Error(
        'useDietaryRequirementsContext must be used within an DietaryRequirementsProvider'
      )
    return dietaryRequirementsContext
  }

type TDietaryRequirementsProvider = {
  children: ReactNode
}
export const DietaryRequirementsProvider: FC<TDietaryRequirementsProvider> = ({
  children
}) => {
  const [requirements, setRequirements] = useState<
    TDietaryRequirement[] | null
  >(null)

  const getDietaryRequirements = async (): Promise<void> => {
    const { data } = await supabase.from('dietary_requirements').select('*')
    setRequirements(data)
  }

  return (
    <DietaryRequirementsContext.Provider
      value={{ requirements, getDietaryRequirements }}
    >
      {children}
    </DietaryRequirementsContext.Provider>
  )
}
