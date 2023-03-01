import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import { Home } from './pages/home/Home'
import { SelfEmployed } from './pages/selfEmployed/SelfEmployed'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
)
