import React from 'react'
import Home from './components/Home'
import NavBar from './components/NavBar'
import {Routes, Route} from 'react-router-dom'
import Footer from './components/Footer'
import Restaurant from './components/Restaurant'
import Login from './screens/Login'
import Signup from './screens/Signup'
import AddRestaurant from './screens/AddRestaurant'




function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/restaurants" element={<Restaurant/>} />
        <Route path="/" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/addrestaurant" element={<AddRestaurant/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App