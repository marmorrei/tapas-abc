import { type FC } from 'react'
import { Letter, Rating } from '.'

export type TTapaTile = {
  tapaName: string
  id: string
}

export const TapaTile: FC<TTapaTile> = ({ tapaName, id }) => {
  return (
    <div className='flex flex-col bg-wood bg-cover rounded-lg shadow-lg shadow-black w-full h-auto px-2 py-3 space-y-6 dark:text-black'>
      <div>
        <p className='text-center leading-tight font-semibold'>{tapaName}</p>
      </div>
      <div className='flex flex-col space-y-4'>
        <div className='flex flex-row justify-center space-x-6'>
          <div className='flex flex-row'>
            <Letter letter='s' size={4} />
            <p>abor</p>
          </div>
          <Rating name={`flavour-` + id} />
        </div>
        <div className='flex flex-row justify-center space-x-6'>
          <div className='flex flex-row'>
            <Letter letter='o' size={4} />
            <p>riginalidad</p>
          </div>
          <Rating name={`originality-` + id} />
        </div>
        <div className='flex flex-row justify-center space-x-6'>
          <div className='flex flex-row'>
            <Letter letter='r' size={4} />
            <p>eto</p>
          </div>
          <Rating name={`challenge-` + id} />
        </div>
      </div>
    </div>
  )
}
