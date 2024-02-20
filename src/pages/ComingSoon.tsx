import { type FC } from 'react'
import { BackButton, Letter, Title } from '../components'

export const ComingSoon: FC = () => (
  <>
    <Title text='SITE UNDER CONSTRUCTION' />
    <div className='flex flex-col items-center'>
      <div className='flex flex-row justify-center'>
        <Letter letter='c' size={8} />
        <Letter letter='o' size={8} />
        <Letter letter='m' size={8} />
        <Letter letter='i' size={8} />
        <Letter letter='n' size={8} />
        <Letter letter='g' size={8} />
      </div>
      <div className='flex flex-row justify-center'>
        <Letter letter='s' size={8} />
        <Letter letter='o' size={8} />
        <Letter letter='o' size={8} />
        <Letter letter='n' size={8} />
      </div>
    </div>
    <BackButton />
  </>
)
