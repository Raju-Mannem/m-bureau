import { Routes, Route } from 'react-router-dom'
import Contact from '../Contact'
import Disclaimer from '../Disclaimer'
import Privacy from '../Privacy'
import TermsAndConditions from '../TermsAndConditions'
import Home from '../Home'
import About from '../About'
import Register from '../Register'
import Dashboard from '../Dashboard'
import ProtectedRoute from '../ProtectedRoute'
import Adminsignin from '../Adminsignin'
import AdminDashboard from '../AdminDashboard'
import Profiles from '../Profiles'
import ProfileView from '../Profiles/ProfileView'
import { ProfileForm } from '../Profiles/ProfilesForm'
import BioData from '../BioData'
import BioDataList from '../AdminDashboard/BioDataList';
import BioDataDetails from '../AdminDashboard/BioDataDetails';
import NotFound from '../NotFound'
import { HomeContainer} from './MainStyledComponents'

const Main=()=> {
  return (
    <div>
      <HomeContainer>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/register" element={<Register />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/admin-signin" element={<Adminsignin />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/upload-profiles" element={<ProfileForm />} />
        <Route path="/bio-data" element={<BioData />} />
        <Route path="profiles" element={<Profiles />} />
        <Route path="/profile/:id" element={<ProfileView />} />
        <Route path="/admin/biodata" element={<BioDataList />} />
        <Route path="/bio-data/:id" element={<BioData />} />
        <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </HomeContainer>
    </div>
  )
}

export default Main