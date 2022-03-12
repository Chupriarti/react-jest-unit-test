import React from 'react'
import { Link } from 'react-router-dom'
import AppRouter from './router/AppRouter'

const App = () => {
  return (
    <div>
      <Link to="/" data-testid="main-link">Main Page</Link>
      <Link to="/about" data-testid="about-link">About Page</Link>
      <Link to="/users" data-testid="users-link">Users Page</Link>
      <AppRouter />
    </div>
  )
}

export default App
