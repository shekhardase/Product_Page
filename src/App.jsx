import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Card from './Components/Card'
import Home from './Components/Home'
import { createBrowserRouter, RouterProvider, Route, Navigate } from 'react-router-dom'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Navigate to="/home" replace />,
    },
    {
      path: '/home',
      element: <Home />,
    },
    {
      path: '/cards',
      element:
        <div>
          <Navbar />
          <Card />
        </div>,
    },
    {
      path: '*', // Handles unknown routes (404)
      element: <h1 className="text-center mt-10 text-3xl text-red-500">404 Not Found GO BACK MF</h1>,
    }
  ])


  return (
    <RouterProvider router={router} />
  )
}

export default App

