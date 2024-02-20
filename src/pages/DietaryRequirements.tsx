/* eslint-disable array-callback-return */
import { useState, type FC, type ChangeEvent } from 'react'
import { BackButton, Button, RequirementsList, Title } from '../components'
import { supabase } from '../supabase/supabase'

export type TDietaryRequirement = {
  name: string | undefined
  requirement: string | undefined
}
export const DietaryRequirements: FC = () => {
  const [dietaryRequirement, setDietaryRequirement] =
    useState<TDietaryRequirement>({ name: undefined, requirement: undefined })

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setDietaryRequirement(prevDietaryRequirement => {
      return {
        ...prevDietaryRequirement,
        [e.target.name]: e.target.value
      }
    })
  }

  const handleSubmit = async (): Promise<void> => {
    try {
      const { error } = await supabase
        .from('dietary_requirements')
        .insert([
          {
            name: dietaryRequirement.name,
            requirement: dietaryRequirement.requirement
          }
        ])
        .select()

      if (error != null) {
        throw new Error(error.message)
      }
    } catch (error) {
      console.log(error)
    } finally {
      alert('Gracias por la info, aparecerá a continuación')
      setDietaryRequirement({ name: undefined, requirement: undefined })
    }
  }

  return (
    <>
      <Title text='REQUERIMIENTOS ALIMENTARIOS' />
      <div className='flex flex-col space-y-6 px-4 dark:text-black'>
        <h1 className='text-center font-semibold'>
          Escribe tu requerimiento, alergia o intolerancia y se actualizará más
          abajo.
        </h1>
        <form
          className='flex flex-col items-center space-y-4 form-control'
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          onSubmit={handleSubmit}
        >
          <input
            className='input input-bordered input-sm w-full max-w-xs'
            type='text'
            required
            name='name'
            id='name'
            value={dietaryRequirement?.name}
            placeholder='Nombre'
            onChange={e => {
              handleChange(e)
            }}
          />
          <input
            className='input input-bordered input-sm w-full max-w-xs'
            type='text'
            required
            name='requirement'
            id='requirement'
            value={dietaryRequirement?.requirement}
            placeholder='Requerimiento'
            onChange={e => {
              handleChange(e)
            }}
          />
          <Button type='submit' text='GUARDAR' />
        </form>
      </div>
      <div className='flex flex-col space-y-4 dark:text-black'>
        <h1 className='text-center font-semibold'>
          ¿Qué hay que tener en cuenta?
        </h1>
        <RequirementsList />
      </div>
      <BackButton />
    </>
  )
}
