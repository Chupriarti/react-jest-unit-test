import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import AboutPage from './pages/AboutPage'
import ErrorPage from './pages/ErrorPage'
import MainPage from './pages/MainPage'
import UserDetailsPage from './pages/UserDetailsPage'
import AppRouter from './router/AppRouter'
import Users from './users/Users'

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
