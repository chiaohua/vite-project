import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
//import App from './App.jsx'
//import'./sass/all.scss'

import App from './App0819'
import { HashRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
    <App />
    </HashRouter>
  </StrictMode>,
  //嚴謹模式
)
