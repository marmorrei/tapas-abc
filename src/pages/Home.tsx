import { type FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { Title, Button, TapasCounter } from '../components'
import { paths } from '../constants'

export const Home: FC = () => {
  const navigate = useNavigate()

  return (
    <>
      <Title text='CONCURSO DE TAPAS' />
      <TapasCounter />
      <Button
        text='NORMAS DEL CONCURSO'
        onClick={() => {
          navigate(paths.rules)
        }}
      />
      <Button
        text='REQUERIMIENTOS ALIMENTARIOS'
        onClick={() => {
          navigate(paths.dietaryRequirements)
        }}
      />
      <Button
        text='REGISTRA TU TAPA'
        onClick={() => {
          navigate(paths.registerTapa)
        }}
      />
      <Button
        text='VOTA LAS TAPAS'
        onClick={() => {
          navigate(paths.comingSoon)
        }}
      />
    </>
  )
}
