import { Navigate, Outlet } from 'react-router-dom'
import { useLoginContext } from '../context/UserProvider'
import { type FC } from 'react'
import { paths } from '../constants'

const ProtectedRoute: FC = () => {
  const { isLogged } = useLoginContext()

  return !isLogged ? <Navigate to={paths.login} /> : <Outlet />
}

export default ProtectedRoute
