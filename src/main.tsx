import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './boot.css'
import Home from './pages/home/Home.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Home />
  </StrictMode>,
)
