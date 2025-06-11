import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './compnents/Navbar'
import Hero from './compnents/Hero'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Navbar />
  <Hero />
  </StrictMode>,
)
