import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import NotionDeveloper from "../src/components/page.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NotionDeveloper/>
  </StrictMode>,
)
