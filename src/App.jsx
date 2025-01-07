import { Children, useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'
import About from './pages/About'
// router
let route = createBrowserRouter([
  {path: "", element: <Layout/>, children: [
    {index:true, element: <Home/>},
    {path: "contact", element: <Contact/>},
    {path: "portfolio", element: <Portfolio/>},
    {path: "about", element: <About/>},
  ]}
])

function App() {
  return <RouterProvider router={route}></RouterProvider>
}

export default App
