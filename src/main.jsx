import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './components/Home'
import PostDetail from './components/PostDetail'


const router=createBrowserRouter([
  {
    path:'/',
    element:<Home/>,
  },
  {
    path:"/post/:id",
    element:<PostDetail/>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
