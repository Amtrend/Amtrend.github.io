import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { UIProvider } from './components/UIProvider.jsx'
import { ThemeProvider } from './components/ThemeContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UIProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </UIProvider>
  </StrictMode>,
);
