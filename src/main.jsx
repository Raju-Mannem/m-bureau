import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google';
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_G_CLIENT_ID}>
    <App />
    </GoogleOAuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
