import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App /> 
    {/* this App component provides a default layout in the webpage, we can also change it and use other html components like h1 */}
    {/* <h1>hello react</h1> */}
    {/* the styling occurs as I import the index.CSS */}

    {/* the strict mode will look for potential problems in the app */}
  </StrictMode>,
)
