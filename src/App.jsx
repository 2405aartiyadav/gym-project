import { useState } from 'react'
import React from 'react'
import Header from './component/Header.jsx'
import Home from './component/Home.jsx'
import Footer from './component/footer/Footer.jsx'
import Schedule from './component/schedule/Schedule.jsx'
import Pricing from './component/pricing/Pricing.jsx'
import './App.css'

function App() {

  return (
    <>
      <Header />
      <Home />
      <Schedule />
      <Pricing />
      <Footer />
      


    </>
  )
}

export default App
