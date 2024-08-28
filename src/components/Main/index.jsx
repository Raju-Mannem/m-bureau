import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Contact from '../Contact'
import Disclimar from '../Disclimar'
import Home from '../Home'
import About from '../About'
import Login from '../Login'
import { HomeContainer, DBHome } from './MainStyledComponents'

const Main=()=> {
    const location = useLocation()
  return (
    <div>
      <HomeContainer>
        <DBHome>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/disclimar" element={<Disclimar />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      </DBHome>
      </HomeContainer>
    </div>
  )
}

export default Main