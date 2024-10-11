import React, { useState } from "react";
import { NavbarDemo } from "../Navbar";
import Footer from "../Footer";
import '@fontsource/roboto';
import '@fontsource-variable/noto-sans-jp';

const Dashboard = () => {
  const handleLogout = async () => {
    localStorage.clear();
    window.location.href = "/register";
  };
  const usermail = localStorage.getItem("usermail");
  const payment = localStorage.getItem("payment");
  const access = localStorage.getItem("access");

  return (
    <div className="flex flex-row items-center justify-center w-screen h-full mx-2 py-12">
      <div className="h-full">
        <NavbarDemo />
        <div className="h-full mt-28 mb-2 flex items-center justify-around dark:bg-gray-900 rounded-lg">
          <p className="sm:text-xs lg:text-sm">Welcome: <strong className="text-green-500">{usermail}</strong></p>
          <button
            onClick={handleLogout}
            className="bg-green-400 hover:bg-green-200 focus:outline-none text-white sm:text-xs lg:text-sm font-bold py-1 px-4 rounded"
          >
            Logout
          </button>
        </div>
        <div className="py-20 border-t border-green-200">
        {access === "false"? (
          <p className="text-red-500 text-sm">
            you don't have access to the profiles
          </p>
        ):<p> you have access to the profiles</p>
        }
        {payment === "false"? (
          <p className="text-red-500 text-sm">
            Please make payment to access the profiles
          </p>
        ):<p>payment done waiting for admin approval</p>
        }
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
