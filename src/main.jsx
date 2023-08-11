import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRoutes from './routes/AppRoutes'
import { theme } from './utils/theme' 
import { ThemeProvider } from '@mui/material'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
     <AppRoutes />
  </ThemeProvider>
)
