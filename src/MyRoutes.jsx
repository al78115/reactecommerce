import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from './Components/Cart'
import Item from './Components/Item'
import Home from './Pages/Home'
import Product from './Pages/Product'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Signin from './Pages/Signin'
import Register from './Pages/Register'

const MyRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/> } />
          <Route path='/product' element={<Product/> } />
          <Route path='/about' element={<About/> } />
          <Route path='/contact' element={<Contact/> } />
          <Route path='/products/:id' element={<Item/> } />
          <Route path='/cart' element={<Cart/> } />
          <Route path='/signin' element={<Signin/> } />
          <Route path='/register' element={<Register/> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default MyRoutes