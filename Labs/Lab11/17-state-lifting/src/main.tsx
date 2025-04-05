import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { DiceManager } from './DiceManager.js'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DiceManager />
  </StrictMode>,
)
