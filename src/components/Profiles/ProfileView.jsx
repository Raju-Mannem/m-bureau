import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { NavbarDemo } from "../Navbar";
import Footer from "../Footer";
import "@fontsource/roboto";

function ProfileView() {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`https://m-bureau-backend.onrender.com/api/profiles/${id}`);
        setProfile(response.data);
      } catch (error) {
        setError(error.response?.data?.error || "An error occurred");
      }
    };
    fetchProfile();
  }, [id]);
  return (
    <div className="flex flex-row items-center justify-center w-screen h-full mx-2">
      <div className="h-full w-screen
      bg-[url('https://res.cloudinary.com/dhxtw97su/image/upload/f_auto,q_auto/v1/marriage-bureau/ls2vpjzhqd6qgfkmb96j')]
      bg-no-repeat
      bg-cover
      bg-center">
        <NavbarDemo />
        <div className="my-20 py-12">
          {!profile ? (
            <div className="text-red-400">{error}</div>
          ) : (
            <div className="rounded-lg p-8 text-left">
            <h1 className="text-xl font-semibold mb-4">Profile Details</h1>
              <p>Full Name: {profile.fullName}</p>
              <p>Father Name: {profile.fatherName}</p>
              <p>Mother Name: {profile.motherName}</p>
              <p>Mobile: {profile.mobile}</p>
              <p>Age: {profile.age}</p>
              <p>Occupation: {profile.occupation}</p>
              <p>Experience: {profile.experience}</p>
              <p>Salary: {profile.salary}</p>
              <p>Current Address: {profile.currentAddress}</p>
              <p>Permanent Address: {profile.permanentAddress}</p>
              <p>Photo 1: <img src={profile.photo1} alt="Profile Photo 1" className="w-32 h-32 object-cover" /></p>
              <p>Photo 2: <img src={profile.photo2} alt="Profile Photo 2" className="w-32 h-32 object-cover" /></p>
              <p>Height: {profile.height}</p>
              <p>Message: {profile.message}</p>
            </div>
          )}
          </div>
        <Footer />
      </div>
    </div>
  );
}

export default ProfileView;
