import React from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.jsx'
import Chatbot from './chatbot.jsx'
import Layout from './Layout.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

const routes = createBrowserRouter( 
  createRoutesFromElements(
   <Route path='/' element={<Layout />}>, 
  <Route path='' element={<App />} />,
  <Route path='chatbot' element={<Chatbot />} />,

  </Route>
  ),
)


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes}/>
  </React.StrictMode>,
)
