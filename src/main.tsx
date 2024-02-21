import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import {
  ComingSoon,
  DietaryRequirements,
  ErrorPage,
  Home,
  Register,
  Rules,
  Votes
} from './pages'
import { Layout } from './layout'
import { paths } from './constants'
// import { DietaryRequirementsProvider } from './context/DietaryRequirementsProvider'
// import { TapasProvider } from './context/TapasProvider'

const router = createBrowserRouter([
  {
    path: paths.home,
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: paths.comingSoon,
    element: <ComingSoon />
  },
  {
    path: paths.dietaryRequirements,
    element: <DietaryRequirements />
  },
  {
    path: paths.register,
    element: <Register />
  },
  {
    path: paths.rules,
    element: <Rules />
  },
  {
    path: paths.votes,
    element: <Votes />
  }
])

const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Failed to find the root element')
const root = ReactDOM.createRoot(rootElement)
root.render(
  <React.StrictMode>
    {/* <TapasProvider> */}
    {/* <DietaryRequirementsProvider> */}
    <Layout>
      <RouterProvider router={router} />
    </Layout>
    {/* </DietaryRequirementsProvider> */}
    {/* </TapasProvider> */}
  </React.StrictMode>
)
