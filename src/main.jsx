import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Card from '../src/Components/Card.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Card/>
  </StrictMode>,
)
