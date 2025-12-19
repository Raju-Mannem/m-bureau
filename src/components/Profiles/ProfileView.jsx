import { useEffect, useState } from "react";
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
        const response = await axios.get(
          `https://m-bureau-backend.onrender.com/api/profiles/${id}`
        );
        setProfile(response.data);
      } catch (error) {
        setError(error.response?.data?.error || "An error occurred");
      }
    };
    fetchProfile();
  }, [id]);
  return (
    <div className="flex flex-row items-center justify-center w-screen h-full mx-2">
      <div
        className="h-full w-screen">
        <NavbarDemo />
        <div className="my-12 py-12">
          {!profile ? (
            <div className="text-red-400">{error}</div>
          ) : (
            <div className="rounded-lg p-8 bg-white text-left mx-auto sm:w-full lg:w-1/2 shadow-2xl">
              <h1 className="text-xs lg:text-sm font-semibold pb-4 text-center border-b">
                Profile Details
                <img
                  src="https://res.cloudinary.com/dhxtw97su/image/upload/f_auto,q_auto/v1/marriage-bureau/xy4pnmommssiuorbghoe"
                  alt="Krishnaveni Marriage Bureau"
                  className="w-auto h-10 inline-block px-4 mx-4 border-l"
                />
              </h1>
              <table className="min-w-full">
                <tbody>
                  <tr className="border-b text-xs lg:text-sm">
                    <td className="py-2 px-4 font-semibold">Full Name:</td>
                    <td className="py-2 px-4">{profile.fullName}</td>
                  </tr>
                  <tr className="border-b text-xs lg:text-sm">
                    <td className="py-2 px-4 font-semibold">Father Name:</td>
                    <td className="py-2 px-4">{profile.fatherName}</td>
                  </tr>
                  <tr className="border-b text-xs lg:text-sm">
                    <td className="py-2 px-4 font-semibold">Mother Name:</td>
                    <td className="py-2 px-4">{profile.motherName}</td>
                  </tr>
                  <tr className="border-b text-xs lg:text-sm">
                    <td className="py-2 px-4 font-semibold">Mobile:</td>
                    <td className="py-2 px-4">{profile.mobile}</td>
                  </tr>
                  <tr className="border-b text-xs lg:text-sm">
                    <td className="py-2 px-4 font-semibold">Age:</td>
                    <td className="py-2 px-4">{profile.age}</td>
                  </tr>
                  <tr className="border-b text-xs lg:text-sm">
                    <td className="py-2 px-4 font-semibold">Occupation:</td>
                    <td className="py-2 px-4">{profile.occupation}</td>
                  </tr>
                  <tr className="border-b text-xs lg:text-sm">
                    <td className="py-2 px-4 font-semibold">Experience:</td>
                    <td className="py-2 px-4">{profile.experience}</td>
                  </tr>
                  <tr className="border-b text-xs lg:text-sm">
                    <td className="py-2 px-4 font-semibold">Salary:</td>
                    <td className="py-2 px-4">{profile.salary}</td>
                  </tr>
                  <tr className="border-b text-xs lg:text-sm">
                    <td className="py-2 px-4 font-semibold">
                      Current Address:
                    </td>
                    <td className="py-2 px-4">{profile.currentAddress}</td>
                  </tr>
                  <tr className="border-b text-xs lg:text-sm">
                    <td className="py-2 px-4 font-semibold">
                      Permanent Address:
                    </td>
                    <td className="py-2 px-4">{profile.permanentAddress}</td>
                  </tr>
                  <tr className="border-b text-xs lg:text-sm">
                    <td className="py-2 px-4">
                      <img
                        src={profile.photo1}
                        alt="Profile Photo 1"
                        className="w-auto h-24 object-contain rounded"
                      />
                    </td>
                    <td className="py-2 px-4">
                      <img
                        src={profile.photo2}
                        alt="Profile Photo 2"
                        className="w-auto h-24 object-contain rounded"
                      />
                    </td>
                  </tr>
                  <tr className="border-b text-xs lg:text-sm">
                    <td className="py-2 px-4 font-semibold">Height:</td>
                    <td className="py-2 px-4">{profile.height}</td>
                  </tr>
                  <tr className="border-b text-xs lg:text-sm">
                    <td className="py-2 px-4 font-semibold">Message:</td>
                    <td className="py-2 px-4">{profile.message}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default ProfileView;
