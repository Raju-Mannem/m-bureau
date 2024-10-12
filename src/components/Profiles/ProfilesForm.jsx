import React, { useState } from 'react';
import axios from 'axios';
import { NavbarDemo } from '../Navbar';
import Footer from '../Footer';
import {Link } from "react-router-dom"; 
import "@fontsource/roboto";
import "@fontsource-variable/noto-sans-jp";
import "./index.css";

export const ProfileForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    fatherName: '',
    motherName: '',
    mobile: '',
    age: '',
    occupation: '',
    experience: '',
    salary: '',
    currentAddress: '',
    permanentAddress: '',
    photo1: null,
    photo2: null,
    height: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    for (let key in formData) {
      formDataToSend.append(key, formData[key]);
    }
  
    setLoading(true); // Start loading state
  
    try {
      const response = await axios.post('https://m-bureau-backend.onrender.com/api/profiles', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert("Profile uploaded successfully");
    } catch (error) {
      setError("Failed to create profile: Profile Already Exist: " + (error.response?.data.error || error.message));
    } finally {
      setLoading(false); // End loading state
    }
  };

  return (
    <div>
      <NavbarDemo />
      <div>
        <div className="flex items-center min-h-screen bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto">
            <div className="max-w-md mx-auto my-20 bg-white dark:bg-gray-800 p-5 rounded-md shadow-sm">
            <h1 className="text-sm font-semibold mb-4">Upload Profiles</h1>
            <div className="h-full  flex items-center justify-around dark:bg-gray-900 rounded-lg py-8">
        <Link to="/admin-dashboard" className="text-xs text-white bg-green-400 px-4 py-1 rounded font-bold focus:outline-none">Dashboard</Link>
        <Link to="/profiles" className="text-xs text-white bg-green-400 px-4 py-1 rounded font-bold focus:outline-none">View Profiles</Link>
        </div>
              <div className="m-7">
                <form onSubmit={handleSubmit}>
                  {/* Full Name */}
                  <div className="mb-6 flex items-center">
                    <label htmlFor="fullName" className="mr-2 text-xs text-gray-600 dark:text-gray-400 w-1/3">
                      Full Name:
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      id="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                      className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-400 focus:border-green-400 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                    />
                  </div>
                  {/* Father Name */}
                  <div className="mb-6 flex items-center">
                    <label htmlFor="fatherName" className="mr-2 text-xs text-gray-600 dark:text-gray-400 w-1/3">
                      Father's Name:
                    </label>
                    <input
                      type="text"
                      name="fatherName"
                      id="fatherName"
                      value={formData.fatherName}
                      onChange={handleChange}
                      placeholder="Enter your father's name"
                      required
                      className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-400 focus:border-green-400 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                    />
                  </div>
                  {/* Mother Name */}
                  <div className="mb-6 flex items-center">
                    <label htmlFor="motherName" className="mr-2 text-xs text-gray-600 dark:text-gray-400 w-1/3">
                      Mother's Name:
                    </label>
                    <input
                      type="text"
                      name="motherName"
                      id="motherName"
                      value={formData.motherName}
                      onChange={handleChange}
                      placeholder="Enter your mother's name"
                      required
                      className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-400 focus:border-green-400 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                    />
                  </div>
                  {/* Mobile */}
                  <div className="mb-6 flex items-center">
                    <label htmlFor="mobile" className="mr-2 text-xs text-gray-600 dark:text-gray-400 w-1/3">
                      Mobile:
                    </label>
                    <input
                      type="text"
                      name="mobile"
                      id="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      placeholder="Enter your mobile number"
                      required
                      className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-400 focus:border-green-400 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                    />
                  </div>
                  {/* Age */}
                  <div className="mb-6 flex items-center">
                    <label htmlFor="age" className="mr-2 text-xs text-gray-600 dark:text-gray-400 w-1/3">
                      Age:
                    </label>
                    <input
                      type="number"
                      name="age"
                      id="age"
                      value={formData.age}
                      onChange={handleChange}
                      placeholder="Enter your age"
                      required
                      className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-400 focus:border-green-400 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                    />
                  </div>
                  {/* Occupation */}
                  <div className="mb-6 flex items-center">
                    <label htmlFor="occupation" className="mr-2 text-xs text-gray-600 dark:text-gray-400 w-1/3">
                      Occupation:
                    </label>
                    <input
                      type="text"
                      name="occupation"
                      id="occupation"
                      value={formData.occupation}
                      onChange={handleChange}
                      placeholder="Enter your occupation"
                      required
                      className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-400 focus:border-green-400 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                    />
                  </div>
                  {/* Experience */}
                  <div className="mb-6 flex items-center">
                    <label htmlFor="experience" className="mr-2 text-xs text-gray-600 dark:text-gray-400 w-1/3">
                      Experience:
                    </label>
                    <input
                      type="text"
                      name="experience"
                      id="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      placeholder="Enter your experience"
                      required
                      className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-400 focus:border-green-400 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                    />
                  </div>
                  {/* Salary */}
                  <div className="mb-6 flex items-center">
                    <label htmlFor="salary" className="mr-2 text-xs text-gray-600 dark:text-gray-400 w-1/3">
                      Salary:
                    </label>
                    <input
                      type="text"
                      name="salary"
                      id="salary"
                      value={formData.salary}
                      onChange={handleChange}
                      placeholder="Enter your salary"
                      required
                      className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-400 focus:border-green-400 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                    />
                  </div>
                  {/* Current Address */}
                  <div className="mb-6 flex items-center">
                    <label htmlFor="currentAddress" className="mr-2 text-xs text-gray-600 dark:text-gray-400 w-1/3">
                      Current Address:
                    </label>
                    <input
                      type="text"
                      name="currentAddress"
                      id="currentAddress"
                      value={formData.currentAddress}
                      onChange={handleChange}
                      placeholder="Enter your current address"
                      required
                      className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-400 focus:border-green-400 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                    />
                  </div>
                  {/* Permanent Address */}
                  <div className="mb-6 flex items-center">
                    <label htmlFor="permanentAddress" className="mr-2 text-xs text-gray-600 dark:text-gray-400 w-1/3">
                      Permanent Address:
                    </label>
                    <input
                      type="text"
                      name="permanentAddress"
                      id="permanentAddress"
                      value={formData.permanentAddress}
                      onChange={handleChange}
                      placeholder="Enter your permanent address"
                      required
                      className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-400 focus:border-green-400 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                    />
                  </div>
                  {/* Photo 1 */}
                  <div className="mb-6 flex items-center">
                    <label htmlFor="photo1" className="mr-2 text-xs text-gray-600 dark:text-gray-400 w-1/3">
                      Photo 1:
                    </label>
                    <input
                      type="file"
                      name="photo1"
                      id="photo1"
                      accept="image/*"
                      onChange={handleFileChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-400 focus:border-green-400 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                    />
                  </div>
                  {/* Photo 2 */}
                  <div className="mb-6 flex items-center">
                    <label htmlFor="photo2" className="mr-2 text-xs text-gray-600 dark:text-gray-400 w-1/3">
                      Photo 2:
                    </label>
                    <input
                      type="file"
                      name="photo2"
                      id="photo2"
                      accept="image/*"
                      onChange={handleFileChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-400 focus:border-green-400 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                    />
                  </div>
                  {/* Height */}
                  <div className="mb-6 flex items-center">
                    <label htmlFor="height" className="mr-2 text-xs text-gray-600 dark:text-gray-400 w-1/3">
                      Height:
                    </label>
                    <input
                      type="text"
                      name="height"
                      id="height"
                      value={formData.height}
                      onChange={handleChange}
                      placeholder="Enter your height"
                      required
                      className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-400 focus:border-green-400 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                    />
                  </div>
                  {/* Message */}
                  <div className="mb-6 flex items-center">
                    <label htmlFor="message" className="mr-2 text-xs text-gray-600 dark:text-gray-400 w-1/3">
                      Message:
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Enter your message"
                      className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-400 focus:border-green-400 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600"
                    ></textarea>
                  </div>
                  {/* Submit Button */}
                  <div className="mb-6">
                    <button
                      type="submit"
                      className="w-full px-3 py-4 text-white bg-[#00bf63] rounded-md text-xs focus:bg-indigo-600 focus:outline-none"
                    >
                      Submit Profile
                    </button>
                  </div>
                  {error && <p className="text-red-500 text-xs">{error}</p>}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
