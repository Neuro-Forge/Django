import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { datastate } from './context/datastate.jsx'
const DataState = datastate
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataState>
      <App />
    </DataState>
  </StrictMode>
)
