import React from 'react'

import Home from './pages/Home'
import portfolio from './config/portfolio-data.json'

function App() {
  return (
    <Home data={portfolio} />
  )
}

export default App
