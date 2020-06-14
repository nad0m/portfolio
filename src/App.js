import React from 'react'

import Home from './pages/Home'
import portfolio from './config/portfolio-data.json'

function App() {
  const data = JSON.parse(portfolio)
  return (
    <Home data={data} />
  )
}

export default App
