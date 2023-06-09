import React from 'react'
import './index.css'
import Navbar from './Navbar/Navbar'
import Image from './Navbar/Image'
import About from './Navbar/About'
import Menu from './Navbar/Menu'
import Products from './Navbar/Products'
import Review from './Navbar/Review'
import Contact from './Navbar/Contact'

const App = () => {
  return <>
  <Navbar />
  <Image/>
  <About />
  <Menu />
  <Products />
  <Review />
  <Contact />
  
  </>
   
}

export default App
