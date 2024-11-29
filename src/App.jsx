import { useState } from 'react'
import Navbar from './Components/NavBar'
import './App.css'
import HomeIntro from './Components/HomeIntro'
import Footer from './Components/Footer'
import { Routes, Route } from 'react-router-dom'
import Menu from './Components/Menu'
function App() {
  
  return (
    <>
      <Navbar/>
      <Routes>

      <Route path='/' element={<HomeIntro/>} />
      <Route path='/menu' element={<Menu/>} />

      </Routes>
      <Footer/>

  </>
  )
}

export default App
