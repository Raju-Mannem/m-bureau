import React, { useEffect, useState } from "react";
import { NavbarDemo } from "../Navbar";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import axios from "axios";
import "@fontsource/roboto";

const Profiles = () => {
  const [profiles, setProfiles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const response = await axios.get("https://m-bureau-backend.onrender.com/api/profiles");
        setProfiles(response.data);
      } catch (error) {
        setError("Error fetching profiles");
      }
    };

    fetchProfiles();
  }, []);
  return (
    <div className="flex flex-row items-center justify-center w-screen h-full mx-2">
      <div className="h-full w-screen">
        <NavbarDemo />
        <div className="my-20 py-12">
        <h1 className="text-xl font-semibold mb-4">Profiles</h1>
        <div className="h-full  flex items-center justify-around dark:bg-gray-900 rounded-lg py-8">
        <Link to="/admin-dashboard" className="text-xs text-white bg-green-400 px-4 py-1 rounded font-bold focus:outline-none">Dashboard</Link>
        <Link to="/upload-profiles" className="text-xs text-white bg-green-400 px-4 py-1 rounded font-bold focus:outline-none">Upload Profile</Link>
        {error && <p className="text-red-500">{error}</p>}
        </div>
        <div className="max-w-screen overflow-x-auto">
        <table className="max-w-screen bg-white border border-gray-300 text-sm">
          <thead>
            <tr className="bg-green-400 text-white text-sm">
              <th className="border px-4 py-2">Full Name</th>
              <th className="border px-4 py-2">Age</th>
              <th className="border px-4 py-2">Occupation</th>
              <th className="border px-4 py-2">Address</th>
              <th className="border px-4 py-2">View</th>
            </tr>
          </thead>
          <tbody>
            {profiles.length > 0 ? (
              profiles.map((profile) => (
                <tr key={profile._id}>
                  <td className="border px-4 py-2 text-xs">{profile.fullName}</td>
                  <td className="border px-4 py-2 text-xs">{profile.age}</td>
                  <td className="border px-4 py-2 text-xs">{profile.occupation}</td>
                  <td className="border px-4 py-2 text-xs">{profile.currentAddress}</td>
                  <td className="border px-4 py-2 text-xs"><Link to={`/profile/${profile._id}`} className="text-xs text-red-400 underline rounded font-bold focus:outline-none">View</Link></td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="border px-4 py-2 text-center">
                  No profiles found
                </td>
              </tr>
            )}
          </tbody>
        </table>
        </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Profiles;
