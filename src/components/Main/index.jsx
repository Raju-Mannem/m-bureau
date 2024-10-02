import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Contact from '../Contact'
import Disclimar from '../Disclimar'
import Home from '../Home'
import About from '../About'
import Login from '../Login'
import Register from '../Register'
import { HomeContainer} from './MainStyledComponents'

const Main=()=> {
    const location = useLocation()
  return (
    <div>
      <HomeContainer className="bg-[url('https://res.cloudinary.com/dhxtw97su/image/upload/f_auto,q_auto/v1/marriage-bureau/alvqjzpslu3gd6k6jmqc')]
    bg-no-repeat 
    bg-cover 
    bg-center 
    bg-fixed
    ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/disclimar" element={<Disclimar />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      </HomeContainer>
    </div>
  )
}

export default Main