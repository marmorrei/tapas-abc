import { useState, type ChangeEvent, type FC } from 'react'
import { BackButton, Button, Title } from '../components'
// import { supabase } from '../supabase/supabase'

export type TTapa = {
  name: string | undefined
  contestant: string | undefined
  description: string | undefined
}
export const Register: FC = () => {
  const [tapa, setTapa] = useState<TTapa>({
    name: '',
    contestant: '',
    description: ''
  })

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setTapa(prevTapa => {
      return {
        ...prevTapa,
        [e.target.name]: e.target.value
      }
    })
  }

  const handleSubmit = async (
    e: React.SyntheticEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault()
    // try {
    //   const { error } = await supabase
    //     .from('tapas')
    //     .insert([
    //       {
    //         tapa_name: tapa.name,
    //         contestant_name: tapa.contestant,
    //         tapa_description: tapa.description
    //       }
    //     ])
    //     .select()

    //   if (error != null) {
    //     throw new Error(error.message)
    //   } else {
    //     alert(
    //       `Tu tapa ha sido registrada con éxito \n${tapa.name?.toUpperCase()}: ${tapa.description?.toLocaleLowerCase()}`
    //     )
    //   }
    // } catch (error) {
    //   console.log(error)
    // } finally {
    //   setTapa({
    //     name: '',
    //     contestant: '',
    //     description: ''
    //   })
    // }
  }

  return (
    <>
      <Title text='REGISTRA TU TAPA' />
      <div className='flex flex-col px-4 space-y-6 dark:text-black'>
        <h1 className='text-center font-semibold'>
          Danos más detalles acerca de tu tapa.
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
            name='contestant'
            id='contestant'
            value={tapa.contestant}
            placeholder='Tu nombre'
            onChange={e => {
              handleChange(e)
            }}
          />
          <input
            className='input input-bordered input-sm w-full max-w-xs'
            type='text'
            required
            name='name'
            id='name'
            value={tapa.name}
            placeholder='Nombre de la tapa'
            onChange={e => {
              handleChange(e)
            }}
          />
          <textarea
            className='textarea textarea-bordered w-full max-w-xs'
            required
            name='description'
            id='description'
            value={tapa.description}
            placeholder='Breve explicación de la tapa'
            onChange={e => {
              handleChange(e)
            }}
          ></textarea>
          <Button type='submit' text='GUARDAR' />
        </form>
      </div>
      <BackButton />
    </>
  )
}
