import React, { useState } from "react";
import { NavbarDemo } from "../Navbar";
import Footer from "../Footer";
import axios from "axios";
import "@fontsource/roboto";
import "@fontsource-variable/noto-sans-jp";
import { useNavigate } from "react-router-dom";

function Adminsignin() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    adminName: "",
    adminPassword: "",
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false); // New loading state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
    try {
      const response = await axios.post(
        "https://m-bureau-backend.onrender.com/api/adminlogin",
        formData
      );
      const { adminName, users } = response.data;
      localStorage.setItem("adminName", adminName);
      localStorage.setItem("users", JSON.stringify(users));
      navigate("/admin-dashboard");
    } catch (error) {
      setError("Invalid credentials, please try again.");
    } finally {
      setLoading(false); // End loading
    }
  };

  return (
    <div>
      <NavbarDemo />
      <div>
        <div className="flex items-center min-h-screen bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto">
            <div className="max-w-md mx-auto my-20 bg-white dark:bg-gray-800 p-5 rounded-md shadow-sm">
              <div className="text-center">
                <h1 className="my-3 sm:text-xl lg:text-3xl font-semibold text-gray-700 dark:text-gray-200">
                  Admin Login
                </h1>
              </div>
              {loading ? ( // Show loading animation
                <div className="flex justify-center items-center h-64">
                  <video className="w-32 h-32" autoPlay loop muted>
                    <source
                      src="https://res.cloudinary.com/dhxtw97su/video/upload/f_auto:video,q_auto/v1/marriage-bureau/xuutviaplagriy1f4llj"
                      type="video/webm"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
              ) : (
                <div className="m-7">
                  <form onSubmit={handleSubmit}>
                    <div className="mb-6 flex items-center">
                      <label
                        htmlFor="adminName"
                        className="mr-2 text-xs text-gray-600 dark:text-gray-400 w-1/3"
                      >
                        Admin Name:
                      </label>
                      <input
                        type="text"
                        name="adminName"
                        id="adminName"
                        value={formData.adminName}
                        onChange={handleChange}
                        placeholder="Enter your admin name"
                        required
                        className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-400 focus:border-green-400 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                      />
                    </div>
                    <div className="mb-6 flex items-center">
                      <label
                        htmlFor="adminPassword"
                        className="mr-2 text-xs text-gray-600 dark:text-gray-400 w-1/3"
                      >
                        Password:
                      </label>
                      <input
                        type="password"
                        name="adminPassword"
                        id="adminPassword"
                        value={formData.adminPassword}
                        onChange={handleChange}
                        placeholder="Enter your admin password"
                        required
                        className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-400 focus:border-green-400 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                      />
                    </div>
                    <div className="mb-6">
                      <button
                        type="submit"
                        className="w-full px-3 py-4 text-white bg-[#00bf63] rounded-md text-xs focus:bg-green-500 focus:outline-none"
                      >
                        Login
                      </button>
                    </div>
                    {error && <p className="text-red-500 text-xs">{error}</p>}
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Adminsignin;
