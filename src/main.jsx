import { StrictMode } from 'react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import './index.css';
import Layout from './Layout.jsx';
import DelCard from './components/DelCard.jsx'
import OnlineDel from './components/OnlineDel.jsx'
import Cart from './components/Cart.jsx'





const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path="/" element={<Layout />} >
      <Route path='' element={<App />} />
      <Route path='/items' element={<DelCard />} />
      <Route path='/restro' element={<OnlineDel />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/items/cart' element={<Cart />} />



    </Route>

  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
