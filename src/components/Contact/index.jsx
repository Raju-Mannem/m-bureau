import React from 'react'
import { NavbarDemo } from '../Navbar'
import Footer from '../Footer';

function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
  
    console.log('Form submitted');
  };
  return (
    <div>
      <NavbarDemo />
      <div>
      <div className="flex items-center min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="max-w-md mx-auto my-10 bg-white dark:bg-gray-800 p-5 rounded-md shadow-sm">
          <div className="text-center">
            <h1 className="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">Contact Us</h1>
            <p className="text-gray-400 dark:text-gray-400">సంప్రదించుటకు క్రింది ఫోరం ని ఆనుసరించండి  </p>
          </div>
          <div className="m-7">
            <form action="https://api.web3forms.com/submit" method="POST" id="form" onSubmit={handleSubmit}>
              <input type="hidden" name="apikey" value="YOUR_ACCESS_KEY_HERE" />
              <input type="hidden" name="subject" value="New Submission from Web3Forms" />
              <input type="checkbox" name="botcheck" id="" style={{ display: 'none' }} />

              <div className="mb-6">
                <label htmlFor="name" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">పూర్తి  పేరు</label>
                <input 
                  type="text" 
                  name="name" 
                  id="name" 
                  placeholder="మీ పేరును ఎంటర్ చేయండి " 
                  required 
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" 
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">ఈమెయిల్ అడ్రసు </label>
                <input 
                  type="email" 
                  name="email" 
                  id="email" 
                  placeholder="మీ ఈమెయిల్ అడ్రసు ఎంటర్ చేయండి " 
                  required 
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" 
                />
              </div>
              <div className="mb-6">
                <label htmlFor="phone" className="text-sm text-gray-600 dark:text-gray-400">ఫోన్ నెంబర్ </label>
                <input 
                  type="text" 
                  name="phone" 
                  id="phone" 
                  placeholder="మీ ఫోన్ నెంబర్ ఎంటర్ చేయండి " 
                  required 
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" 
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">సందేశం</label>
                <textarea 
                  rows="5" 
                  name="message" 
                  id="message" 
                  placeholder="మీ సందేశం ఎంటర్ చేయండి " 
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" 
                  required 
                />
              </div>
              <div className="mb-6">
                <button 
                  type="submit" 
                  className="w-full px-3 py-4 text-white bg-[#00bf63] rounded-md focus:bg-indigo-600 focus:outline-none"
                >
                  సందేశం పంపండి
                </button>
              </div>
              <p className="text-base text-center text-gray-400" id="result"></p>
            </form>
          </div>
        </div>
      </div>
    </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact