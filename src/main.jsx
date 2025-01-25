/**
   @copyright 2025 Measum-Shah
 @license Apache-2.0 */

// Node Modules
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Components
import './index.css';
import 'lenis/dist/lenis.css'

// CSS Link
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
