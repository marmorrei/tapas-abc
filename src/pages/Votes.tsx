import { type FC } from 'react'
import { BackButton, Button, Title } from '../components'
import { TapaTile } from '../components/TapaTile'

export const Votes: FC = () => {
  const handleSubmit = (): void => {}

  return (
    <>
      <Title text='VOTA LAS TAPAS' />
      <div className='flex flex-col px-6 space-y-6 dark:text-black'>
        <h1 className='text-center font-semibold'>
          Es hora de votar. Busca cada tapa en la lista y puntúalas.
        </h1>
        <form
          className='flex flex-col items-center w-full space-y-4 form-control'
          onSubmit={handleSubmit}
        >
          <div className='flex flex-col items-center w-full space-y-4'>
            <TapaTile tapaName='Loritos buenos' id='loritos-buenos' />
            <TapaTile tapaName='Mandarina asada' id='mandarina-asada' />
            <TapaTile tapaName='Palitos de cangrejo' id='palitos-de-cangrejo' />
          </div>
          <Button type='submit' text='GUARDAR' />
        </form>
      </div>
      <BackButton />
    </>
  )
}
