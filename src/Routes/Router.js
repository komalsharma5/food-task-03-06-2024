import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import FoodDetails from '../Pages/FoodDetails'
import Cart from '../Pages/Cart'
import Contact from '../Pages/Contact'
import AllFood from '../Pages/AllFood'
import CheckOut from '../Pages/CheckOut'
import Login from '../Pages/Login'
import Register from '../Pages/Register'

export default function Router() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/food/:id' element={<FoodDetails></FoodDetails>}></Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/food' element={<AllFood></AllFood>}></Route>
        <Route path='/checkout' element={<CheckOut></CheckOut>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>
    </div>
  )
}
