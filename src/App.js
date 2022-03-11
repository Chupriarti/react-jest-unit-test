import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import AboutPage from './pages/AboutPage'
import MainPage from './pages/MainPage'

const App = () => {
  return (
    <div>
      <Link to="/" data-testid="main-link">Main Page</Link>
      <Link to="/about" data-testid="about-link">About Page</Link>
      <Routes>
        <Route path="/" element= {<MainPage />} />
        <Route path="/about" element= {<AboutPage />} />
      </Routes>
    </div>
  )
}

export default App
