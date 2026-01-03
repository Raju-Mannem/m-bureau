import { useEffect, useState } from "react";
import { NavbarDemo } from "../Navbar";
import Footer from "../Footer";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "@fontsource/roboto";

const Profiles = () => {
  const navigate = useNavigate();
  const storedAdminName = localStorage.getItem("adminName");

  useEffect(() => {
    if (!storedAdminName) {
      navigate("/admin-signin");
    }
  }, [storedAdminName, navigate]);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/admin-signin");
  };

  const [profiles, setProfiles] = useState([]);
  const [error, setError] = useState(null);
  const [deleteDiv, setDeleteDiv] = useState(false);
  const [selectedProfileId, setSelectedProfileId] = useState(null);
  const [loading, setLoading] = useState(true); // New loading state

  const handleDelete = (id) => {
    setDeleteDiv(true);
    setSelectedProfileId(id);
  };

  const handleDeleteProfile = async (id) => {
    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/profiles/${id}`);
      setProfiles(profiles.filter((profile) => profile._id !== id));
      setError(null);
      setDeleteDiv(false);
    } catch (error) {
      setError("Error deleting profile "+error);
    }
  };

  useEffect(() => {
    const fetchProfiles = async () => {
      setLoading(true); // Start loading
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/profiles`
        );
        setProfiles(response.data);
      } catch (error) {
        setError("Error fetching profiles "+error);
      } finally {
        setLoading(false); // End loading
      }
    };

    fetchProfiles();
  }, []);

  return (
    <div className="flex flex-row items-center justify-center w-screen h-full mx-2">
      <div className="h-full w-screen">
        <NavbarDemo />
        <div className="my-16 py-12">
          <div className="h-full mb-2 flex items-center justify-around flex-wrap border border-slate-300 dark:bg-gray-900 rounded-lg py-4">
            <p className="sm:text-xs lg:text-sm">
              Welcome:{" "}
              <strong className="text-green-500 sm:text-xs lg:text-sm">
                {storedAdminName}
              </strong>
            </p>
            <Link
              to="/admin-dashboard"
              className="bg-green-400 text-xs text-white px-4 py-1 rounded-full font-bold focus:outline-none mx-2"
            >
              Dashboard
            </Link>
            <Link
              to="/upload-profiles"
              className="bg-green-400 text-xs text-white px-4 py-1 rounded-full font-bold focus:outline-none mx-2"
            >
              Upload Profiles
            </Link>
            <button
              onClick={handleLogout}
              className="bg-green-400 focus:outline-none text-white text-xs lg:text-sm font-bold py-1 px-4 rounded-full mx-2 my-4"
            >
              Logout
            </button>
          </div>
          {error && <p className="text-red-500">{error}</p>}
          {loading ? ( // Display loading animation
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
            <>
              {deleteDiv && (
                <div className="bg-white w-1/2 p-2 mx-auto fixed right-20 left-20 z-50 rounded-lg border">
                  <h1 className="text-center text-green-400 text-sm lg:text-2xl my-4">
                    Are you sure you want to delete this profile?
                  </h1>
                  <div>
                    <div className="w-1/2 inline-block text-xs lg:text-2xl font-bold">
                      <button
                        onClick={() => handleDeleteProfile(selectedProfileId)}
                        className="bg-green-400 hover:bg-green-200 focus:outline-none text-white py-1 px-3 rounded-full my-8"
                      >
                        Yes
                      </button>
                    </div>
                    <div className="w-1/2 inline-block text-xs lg:text-2xl font-bold">
                      <button
                        onClick={() => setDeleteDiv(false)}
                        className="bg-red-400 hover:bg-red-200 focus:outline-none text-white py-1 px-3 rounded-full my-8"
                      >
                        No
                      </button>
                    </div>
                  </div>
                </div>
              )}
              <div className="h-full my-12 overflow-x-auto overflow-y-hidden">
                <table className="w-full table-auto">
                  <thead>
                    <tr className="bg-green-400 text-white text-sm">
                      <th className="border px-4 py-2">Full Name</th>
                      <th className="border px-4 py-2">Age</th>
                      <th className="border px-4 py-2">Occupation</th>
                      <th className="border px-4 py-2">Address</th>
                      <th className="border px-4 py-2" colSpan="2">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {profiles.length > 0 ? (
                      profiles.map((profile) => (
                        <tr
                          key={profile._id}
                          className="hover:bg-slate-300 hover:text-white"
                        >
                          <td className="border px-4 py-2 text-xs">
                            {profile.fullName}
                          </td>
                          <td className="border px-4 py-2 text-xs">
                            {profile.age}
                          </td>
                          <td className="border px-4 py-2 text-xs">
                            {profile.occupation}
                          </td>
                          <td className="border px-4 py-2 text-xs">
                            {profile.currentAddress}
                          </td>
                          <td className="border px-4 py-2 text-xs">
                            <Link
                              to={`/profile/${profile._id}`}
                              className="text-xs text-red-400 underline rounded font-bold focus:outline-none"
                            >
                              View
                            </Link>
                          </td>
                          <td className="border px-4 py-2 text-xs">
                            <Link
                              to="#"
                              onClick={() => handleDelete(profile._id)}
                              className="text-xs text-red-400 underline rounded font-bold focus:outline-none"
                            >
                              Delete
                            </Link>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td
                          colSpan="5"
                          className="border px-4 py-2 text-center"
                        >
                          No profiles found
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Profiles;
