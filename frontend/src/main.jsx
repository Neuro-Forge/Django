import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import App from './App.jsx'
import { datastate } from './context/datastate.jsx'
import 'react-toastify/dist/ReactToastify.css'

axios.defaults.withCredentials = true

const DataState = datastate
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataState>
      <App />
    </DataState>
  </StrictMode>
)
