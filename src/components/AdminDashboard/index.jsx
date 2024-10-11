import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavbarDemo } from "../Navbar";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import axios from "axios";

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUsers = localStorage.getItem("users");
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    } else {
      setError("No users found in localStorage");
    }
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
      await axios.patch(`https://m-bureau-backend.onrender.com/api/users/${userId}`, { access: updatedAccess, admin: adminName });
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
        <div className="h-full mt-28 mb-2 flex items-center justify-around dark:bg-gray-900 rounded-lg py-8">
          <p className="sm:text-xs lg:text-sm">
            Welcome: <strong className="text-green-500">{storedAdminName}</strong>
          </p>
          <Link to="/profiles" className="bg-green-400 text-xs text-white px-4 py-1 rounded font-bold focus:outline-none">view profiles</Link>
          <button
            onClick={handleLogout}
            className="bg-green-400 hover:bg-green-200 focus:outline-none text-white sm:text-xs lg:text-sm font-bold py-1 px-4 rounded"
          >
            Logout
          </button>
        </div>
        <div className="py-20 border-t border-green-200">
          {error && <p className="text-red-500">{error}</p>}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="font-bold bg-green-400 text-white p-2 rounded">User ID</div>
            <div className="font-bold bg-green-400 text-white p-2 rounded">Email</div>
            <div className="font-bold bg-green-400 text-white p-2 rounded">Payment Status</div>
            <div className="font-bold bg-green-400 text-white p-2 rounded">Profile Access</div>
            {users.length > 0 ? (
              users.map((user) => (
                <React.Fragment key={user._id}>
                  <div className="border p-2">{user._id}</div>
                  <div className="border p-2">{user.email}</div>
                  <div className="border p-2">{user.payment ? "Paid" : "Unpaid"}</div>
                  <div className="border p-2">
                    <label>
                      <input
                        type="checkbox"
                        checked={user.access}
                        onChange={() => toggleAccess(user._id, user.access)}
                      />
                      {user.access ? " Access" : " No Access"}
                    </label>
                  </div>
                </React.Fragment>
              ))
            ) : (
              <div className="col-span-4 border p-2 text-center">No users found</div>
            )}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default AdminDashboard;
