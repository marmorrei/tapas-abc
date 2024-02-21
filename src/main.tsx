import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

import { Layout } from './layout'
import {
  DietaryRequirementsProvider,
  // TapasProvider,
  UserProvider
} from './context'
import { App } from './App'

const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Failed to find the root element')
const root = ReactDOM.createRoot(rootElement)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        {/* <TapasProvider> */}
        <DietaryRequirementsProvider>
          <Layout>
            <App />
          </Layout>
        </DietaryRequirementsProvider>
        {/* </TapasProvider> */}
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
)
