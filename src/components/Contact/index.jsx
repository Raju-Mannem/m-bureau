import React, { useState } from "react";
import { NavbarDemo } from "../Navbar";
import Footer from "../Footer";
import "./Contact.css";
import "@fontsource/roboto";
import "@fontsource-variable/noto-sans-jp";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
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
                  Contact Us
                </h1>
                <p className="text-gray-400 sm:text-sm dark:text-gray-400">
                  Please follow the form below to contact us
                </p>
              </div>
              <div className="m-7">
                <form action="" method="POST" id="form" onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <label
                      htmlFor="name"
                      className="block mb-2 text-xs text-gray-600 dark:text-gray-400"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                      className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-400 focus:border-green-400 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-xs text-gray-600 dark:text-gray-400"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email address"
                      required
                      className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-400 focus:border-green-400 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="phone"
                      className="text-xs text-gray-600 dark:text-gray-400"
                    >
                      Phone Number
                    </label>
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      required
                      className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-400 focus:border-green-400 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="address"
                      className="text-xs text-gray-600 dark:text-gray-400"
                    >
                      Addresss
                    </label>
                    <input
                      type="text"
                      name="address"
                      id="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Enter your address"
                      required
                      className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-400 focus:border-green-400 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className="block mb-2 text-xs text-gray-600 dark:text-gray-400"
                    >
                      Message
                    </label>
                    <textarea
                      rows="5"
                      name="message"
                      id="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Enter your message"
                      className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-400 focus:border-green-400 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <button
                      type="submit"
                      className="w-full px-3 py-4 text-white bg-[#00bf63] rounded-md text-xs focus:bg-indigo-600 focus:outline-none"
                    >
                      Send Message
                    </button>
                  </div>
                  <p
                    className="text-base text-center text-gray-400"
                    id="result"
                  ></p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
