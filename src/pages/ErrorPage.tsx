import { type FC } from 'react'
import { BackButton, Letter, Title } from '../components'

export const ErrorPage: FC = () => (
  <>
    <Title text='Error 404' />
    <div className='flex flex-col items-center'>
      <div className='flex flex-row justify-center'>
        <Letter letter='n' size={8} />
        <Letter letter='o' size={8} />
        <Letter letter='t' size={8} />
      </div>
      <div className='flex flex-row justify-center'>
        <Letter letter='f' size={8} />
        <Letter letter='o' size={8} />
        <Letter letter='u' size={8} />
        <Letter letter='n' size={8} />
        <Letter letter='d' size={8} />
      </div>
    </div>
    <BackButton />
  </>
)
