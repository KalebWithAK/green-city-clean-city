import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './css/global.css'
import Layout from './components/layout'
import Home from './pages/home'

function App() {
  return (
    <Layout>
      <Home />
    </Layout>
  )
}

export default App
