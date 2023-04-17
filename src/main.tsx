import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ChatContextProvider } from "./contexts/ChatContext"
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChatContextProvider>
      <App />
    </ChatContextProvider>
  </React.StrictMode>,
)
