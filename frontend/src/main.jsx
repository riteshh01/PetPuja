import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.min.css';
import StoreContextProvider from './context/StoreContext.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter> {/* ye react router library DOM library se ata hai ye poore app client side routing ko enable krta hai */}
  <ThemeProvider> {/* isse ham pure page ka theme, dark mode, font type ye sab define kr skte hai easily */}
   <StoreContextProvider>  {/* Yeh globaly data provide karta hai. In short ye kisi bhi file ka data kisi aur file me dikhata hai */}
      <App /> 
  </StoreContextProvider>
  </ThemeProvider>
  </BrowserRouter>
)
