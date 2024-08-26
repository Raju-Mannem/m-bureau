import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Contact from './Contact'
import Disclimar from '../Disclimar'
import Home from './Home'
import About from '../About'

const Main=()=> {
    const location = useLocation()
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/disclimar" element={<Disclimar />} />
      </Routes>
    </div>
  )
}

export default Main