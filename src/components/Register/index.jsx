import React,{useState} from 'react';
import { NavbarDemo } from "../Navbar";
import Footer from "../Footer";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import "@fontsource-variable/noto-sans-jp";
import "@fontsource/roboto";


const Register = () => {
  const [loginError, setLoginError] = useState(null);
  const handleLoginSuccess = async (credentialResponse) => {
    if (!credentialResponse || !credentialResponse.credential) {
      setLoginError('unable to signin, please try again');
      return;
    }
    const token = credentialResponse.credential; // This is the JWT token
    try {
      const response = await axios.post('https://m-bureau-backend.onrender.com/api/users', {token})

      // Store token or any identifier in localStorage
      localStorage.setItem('token', {token});
      localStorage.setItem('userid', response.data.user.googleId);
      localStorage.setItem('usermail', response.data.user.email);
      localStorage.setItem('payment', response.data.user.payment);
      localStorage.setItem('access', response.data.user.access);
      localStorage.setItem('profiles', JSON.stringify(response.data.profiles)); 
      // Redirect to dashboard
      window.location.href = '/dashboard'; 
    } catch (error) {
      setLoginError("unable to signin, backend not responding");
    }
  };
  return (
    <div>
      <NavbarDemo />
      <div
        className="flex items-center min-h-screen dark:bg-gray-900 
      bg-[url('https://res.cloudinary.com/dhxtw97su/image/upload/f_auto,q_auto/v1/marriage-bureau/ls2vpjzhqd6qgfkmb96j')]
      bg-no-repeat
      bg-cover
      bg-center"
      >
        <div className="container mx-auto py-12">
          <div>
            <p className="sm:text-xl lg:text-2xl">Please sign in with Google</p>
            {loginError&&(<p className="text-red-500 text-sm">{loginError}</p>)}
            
            <div className="w-fit h-fit py-12 mx-auto my-4">
              <GoogleLogin
                onSuccess={handleLoginSuccess}
                onError={() => setLoginError('unable to signin, please try again')}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
