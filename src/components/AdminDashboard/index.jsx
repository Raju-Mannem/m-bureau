import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { NavbarDemo } from "../Navbar";
import Footer from "../Footer";
import axios from "axios";

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // New loading state
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      const storedUsers = localStorage.getItem("users");
      if (storedUsers) {
        setUsers(JSON.parse(storedUsers));
        setLoading(false); // Stop loading if users are found
      } else {
        setError("No users found in localStorage");
        setLoading(false); // Stop loading if no users
      }
    };

    fetchUsers();
  }, []);

  const storedAdminName = localStorage.getItem("adminName");
  if (!storedAdminName) {
    navigate("/admin-signin");
  }

  const handleLogout = () => {
    localStorage.clear();
    navigate("/admin-signin");
  };

  const toggleAccess = async (userId, currentAccess) => {
    try {
      const updatedAccess = !currentAccess;
      const adminName = localStorage.getItem("adminName");
      await axios.patch(
        `https://m-bureau-backend.onrender.com/api/users/${userId}`,
        { access: updatedAccess, admin: adminName }
      );
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user._id === userId ? { ...user, access: updatedAccess } : user
        )
      );
    } catch (error) {
      console.error("Error updating access:", error);
      setError("Failed to update access");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full mx-2">
      <div className="h-full w-full">
        <NavbarDemo />
        <div className="h-full mt-28 mb-2 flex items-center justify-around border border-slate-300 dark:bg-gray-900 rounded-lg py-4">
          <p className="sm:text-xs lg:text-sm">
            Welcome:{" "}
            <strong className="text-green-500 sm:text-xs lg:text-sm">
              {storedAdminName}
            </strong>
          </p>
          <Link
            to="/profiles"
            className="bg-green-400 text-xs text-white px-4 py-1 rounded-full font-bold focus:outline-none mx-2"
          >
            View Profiles
          </Link>
          <Link
            to="/upload-profiles"
            className="bg-green-400 text-xs text-white px-4 py-1 rounded-full font-bold focus:outline-none mx-2"
          >
            Upload Profiles
          </Link>
          <button
            onClick={handleLogout}
            className="bg-green-400 hover:bg-green-200 focus:outline-none text-white sm:text-xs lg:text-sm font-bold py-1 px-4 rounded-full mx-2"
          >
            Logout
          </button>
        </div>

        <div className="py-8 h-full overflow-x-auto overflow-y-hidden">
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
            <>
              {error && <p className="text-red-500">{error}</p>}
              <table className="w-full table-auto bg-white border border-gray-300 text-sm">
                <thead>
                  <tr className="bg-green-400 text-white text-sm">
                    <th className="border px-4 py-2">User ID</th>
                    <th className="border px-4 py-2">Email</th>
                    <th className="border px-4 py-2">Payment Status</th>
                    <th className="border px-4 py-2">Profile Access</th>
                  </tr>
                </thead>
                <tbody>
                  {users.length > 0 ? (
                    users.map((user) => (
                      <tr
                        key={user._id}
                        className="hover:bg-slate-300 hover:text-white"
                      >
                        <td className="border px-4 py-2 text-xs">{user._id}</td>
                        <td className="border px-4 py-2 text-xs">
                          {user.email}
                        </td>
                        <td className="border px-4 py-2 text-xs">
                          {user.payment ? "Paid" : "Unpaid"}
                        </td>
                        <td className="border px-4 py-2 text-xs">
                          <label>
                            <input
                              type="checkbox"
                              checked={user.access}
                              onChange={() =>
                                toggleAccess(user._id, user.access)
                              }
                            />
                            {user.access ? " Access" : " No Access"}
                          </label>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4" className="border px-4 py-2 text-center">
                        No users found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </>
          )}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default AdminDashboard;
