import React from 'react'
import Signup from './screens/Signup'
import Login from './screens/Login'
import AddRestaurant from "./screens/AddRestaurant"
import LoginRestaurant from './screens/LoginRestaurant'
import { Routes, Route } from 'react-router-dom'
import Home from './screens/Home'
import NavBar from './screens/NavBar'


function App() {
  return (
  
    <screens>
      <NavBar/>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup />} />
        <Route path='/registerrestaurant' element={<AddRestaurant/>} />
        <Route path='/loginrestaurant' element={<LoginRestaurant/>} />
        <Route path='/home' element={<Home/>}/>
      </Routes>
    </screens>
  )
}

export default App