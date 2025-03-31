import { StrictMode } from 'react'
import React from "react";
import { createRoot } from 'react-dom/client'
import ReactDOM from "react-dom";
import './index.css'
import './app.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
