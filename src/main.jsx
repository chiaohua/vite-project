import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
//import App from './App.jsx'
import App from './pages/App0811-weather2.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
  //嚴謹模式
)
