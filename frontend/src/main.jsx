import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./scss/style.scss";
import {BrowserRouter} from "react-router-dom"
import './index.css'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)