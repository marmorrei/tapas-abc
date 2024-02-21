import { supabase } from '../supabase/supabase'
import { type FC, useState } from 'react'
import { BackButton, Button, Title } from '../components'
import { useNavigate } from 'react-router-dom'
import { paths } from '../constants'

export const Login: FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const navigate = useNavigate()

  const resetData = (): void => {
    setFormData({
      email: '',
      password: ''
    })
  }

  const handleChange = (e: {
    target: { name: string; value: string }
  }): void => {
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value
      }
    })
  }

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault()

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password
      })

      if (error != null) {
        if (error.message.includes('Invalid login credentials')) {
          alert('Invalid password or email address!')
        } else {
          alert(`Error during login: ${error.message}`)
        }
      }
    } catch (error) {
      console.error(error)
    } finally {
      resetData()
      navigate(paths.home)
    }
  }

  return (
    <>
      <Title text='ACCEDE A TU USUARIO' />
      <form
        className='flex flex-col items-center space-y-4 form-control'
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onSubmit={handleSubmit}
        action='#'
        method='POST'
      >
        <input
          id='email'
          name='email'
          value={formData.email}
          type='email'
          placeholder='Email'
          onChange={handleChange}
          autoComplete='email'
          required
          className='input input-bordered input-sm w-full max-w-xs'
        />
        <input
          id='password'
          name='password'
          value={formData.password}
          type='password'
          placeholder='Contraseña'
          onChange={handleChange}
          autoComplete='current-password'
          required
          className='input input-bordered input-sm w-full max-w-xs'
        />

        <Button type='submit' text='CONECTAR' />
      </form>
      <BackButton />
    </>
  )
}
