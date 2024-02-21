import { type FC } from 'react'
import { paths } from './constants'
import {
  ComingSoon,
  DietaryRequirements,
  ErrorPage,
  Home,
  Login,
  RegisterTapa,
  Rules,
  Votes
} from './pages'
import { Route, Routes } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute/ProtectedRoute'

export const App: FC = () => (
  <Routes>
    <Route path={paths.home} element={<Home />} errorElement={<ErrorPage />} />
    <Route path={paths.rules} element={<Rules />} />
    <Route path={paths.comingSoon} element={<ComingSoon />} />
    <Route path={paths.login} element={<Login />} />
    <Route element={<ProtectedRoute />}>
      <Route
        path={paths.dietaryRequirements}
        element={<DietaryRequirements />}
      />
      <Route path={paths.registerTapa} element={<RegisterTapa />} />
      <Route path={paths.votes} element={<Votes />} />
    </Route>
  </Routes>
)
