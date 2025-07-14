import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Home, App } from './pages'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/visdecode-landing" element={<Home />} />
        <Route path="/visdecode-landing/app" element={<App />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
