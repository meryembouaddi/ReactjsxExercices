import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Formulaire, CheckPassword } from "./Formulaire";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Formulaire />
    <CheckPassword />
  </StrictMode>,
)
