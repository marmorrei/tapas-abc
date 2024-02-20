import { type FC } from 'react'
import { Button } from './Button'
import { useNavigate } from 'react-router-dom'
import { paths } from '../constants'

export const BackButton: FC = () => {
  const navigate = useNavigate()

  return (
    <Button
      text='VOLVER'
      onClick={() => {
        navigate(paths.home)
      }}
    />
  )
}
