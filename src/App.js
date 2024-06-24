import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Products from './Routes/Products'
import SingleProduct from './Routes/SingleProduct'
import Cart from './Components/Redux/Cart'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Products/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/products/:id' element={<SingleProduct/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </>
  )
}

export default App
