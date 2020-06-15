import React from 'react'

import Home from './pages/Home'
import useTracker from './utils/useTracker'
import portfolio from './config/portfolio-data.json'

function App() {
  useTracker()
  
  return (
    <Home data={portfolio} />
  )
}

export default App
