import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
// import './index.css'
//import App from './App.jsx'
//import'./sass/all.scss'
import'./sass/all.scss'

import App from './pages/App0819c'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
    <App />
    </HashRouter>
  </StrictMode>,
  //嚴謹模式
)
