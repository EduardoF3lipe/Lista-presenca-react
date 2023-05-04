import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './pages/Home/Index'

import './style/global.css' 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
)