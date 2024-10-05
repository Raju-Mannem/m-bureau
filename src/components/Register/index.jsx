import React from "react";
import { NavbarDemo } from "../Navbar";
import Footer from "../Footer";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import "@fontsource-variable/noto-sans-jp";
import "@fontsource/roboto";
import { jwtDecode } from 'jwt-decode';


const Register = () => {
  const handleLoginSuccess = async (credentialResponse) => {
    if (!credentialResponse || !credentialResponse.credential) {
      console.error('Login failed: Invalid response', credentialResponse);
      return;
    }
  
    const token = credentialResponse.credential; // This is the JWT token
    const decoded = jwtDecode(token); // Decode the JWT token
  
    const userData = {
      id: decoded.sub, // Google ID
      name: decoded.name,
      picture: decoded.picture,
      email: decoded.email,
    };
  
    try {
      // Send user data to backend
      const response = await axios.post('http://localhost:5000/api/users', userData);
      
      // Store token or any identifier in localStorage (if applicable)
      localStorage.setItem('token', response.data.id); // Example of storing ID as token
  
      // Redirect to dashboard or handle as needed
      window.location.href = '/dashboard'; 
    } catch (error) {
      console.error('Error while saving user data:', error);
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
            <div className="w-fit h-fit py-12 mx-auto my-4">
              <GoogleLogin
                onSuccess={handleLoginSuccess}
                onError={() => console.log("Login Failed")}
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
