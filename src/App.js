import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import AboutPage from './pages/AboutPage'
import ErrorPage from './pages/ErrorPage'
import MainPage from './pages/MainPage'

const App = () => {
  return (
    <div>
      <Link to="/" data-testid="main-link">Main Page</Link>
      <Link to="/about" data-testid="about-link">About Page</Link>
      <Routes>
        <Route path="/" element= {<MainPage />} />
        <Route path="/about" element= {<AboutPage />} />
        <Route path="/*" element= {<ErrorPage />} />
      </Routes>
    </div>
  )
}

export default App
