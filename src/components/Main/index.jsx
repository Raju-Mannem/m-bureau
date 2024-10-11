import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Contact from '../Contact'
import Disclimar from '../Disclimar'
import Home from '../Home'
import About from '../About'
import Register from '../Register'
import Dashboard from '../Dashboard'
import ProtectedRoute from '../ProtectedRoute'
import Adminsignin from '../Adminsignin'
import AdminDashboard from '../AdminDashboard'
import Profiles from '../Profiles'
import { ProfileForm } from '../Profiles/ProfilesForm'
import { HomeContainer} from './MainStyledComponents'

const Main=()=> {
    const location = useLocation()
  return (
    <div>
      <HomeContainer>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/disclimar" element={<Disclimar />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin-signin" element={<Adminsignin />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/upload-profiles" element={<ProfileForm />} />
        <Route path="profiles" element={<Profiles />} />
        <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
      </Routes>
      </HomeContainer>
    </div>
  )
}

export default Main