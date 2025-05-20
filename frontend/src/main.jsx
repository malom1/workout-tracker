import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { WorkoutsContext } from './context/WorkoutsContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WorkoutsContext>
      <App />
    </WorkoutsContext>
  </StrictMode>,
)
