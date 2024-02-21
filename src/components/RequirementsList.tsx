import { type FC, useEffect } from 'react'
import { useDietaryRequirementsContext } from '../context/DietaryRequirementsProvider'

export const RequirementsList: FC = () => {
  const { requirements, getDietaryRequirements } =
    useDietaryRequirementsContext()

  useEffect(() => {
    void getDietaryRequirements()
  }, [requirements])

  const requirementsList = requirements?.map(requirement => {
    return (
      <li key={requirement.requirement}>
        {requirement.name?.toUpperCase()}:{' '}
        {requirement.requirement?.toLocaleLowerCase()}
      </li>
    )
  })

  return <ul className='list-disc pl-8'>{requirementsList}</ul>
}
