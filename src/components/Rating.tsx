import { type FC } from 'react'

export type TRating = {
  name: string
}

export const Rating: FC<TRating> = ({ name }) => {
  return (
    <div className='rating flex flex-row space-x-2'>
      <input
        type='radio'
        name={name}
        value={1}
        className='mask mask-star-2 bg-[#109076]'
      />
      <input
        type='radio'
        name={name}
        value={2}
        className='mask mask-star-2 bg-[#109076]'
      />
      <input
        type='radio'
        name={name}
        value={3}
        className='mask mask-star-2 bg-[#109076]'
      />
      <input
        type='radio'
        name={name}
        value={4}
        className='mask mask-star-2 bg-[#109076]'
      />
      <input
        type='radio'
        name={name}
        value={5}
        className='mask mask-star-2 bg-[#109076]'
      />
    </div>
  )
}
