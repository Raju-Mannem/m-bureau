import React from "react";
import { Link } from "react-router-dom";
import { NavbarDemo } from "../Navbar";
import Footer from "../Footer";
import "@fontsource/roboto";

function Disclaimer() {
  return (
    <div>
      <NavbarDemo />
      <div className="container m-auto py-32 px-6 text-gray-600 border border-b-0 border-green-400">
        <h2 className="sm:text-base text-[#00bf63] font-bold lg:text-2xl pb-8">
          <strong className="underline about-strong">Disclaimer</strong>
        </h2>

        <p className="about-p sm:text-base lg:text-xl">
          Welcome to Krishnaveni Marriage Bureau. Please read this disclaimer
          carefully before using our services.
        </p>

        <div className="w-full text-left sm:text-sm lg:text-xl leading-relaxed ">
          <h1 className="about-h1">General Information</h1>
          <p>
            The information provided by Krishnaveni Marriage Bureau is intended
            for general informational purposes only. While we strive to keep the
            information accurate and up to date, we make no representations or
            warranties of any kind, express or implied, about the completeness,
            accuracy, reliability, suitability, or availability with respect to
            the website or the information, services, or related graphics
            contained on the website.
          </p>

          <h1 className="about-h1">No Guarantees</h1>
          <p>
            We cannot guarantee that you will find a suitable partner through
            our services. Every individual's experience is unique, and outcomes
            may vary based on personal circumstances and choices.
          </p>

          <h1 className="about-h1">User Responsibility</h1>
          <p>
            By using our services, you acknowledge that you are responsible for
            your own actions and decisions. We encourage you to conduct your own
            due diligence before engaging with any individuals you meet through
            our services.
          </p>

          <h1 className="about-h1">Privacy and Confidentiality</h1>
          <p>
            We value your privacy and handle your personal information with the
            utmost confidentiality. However, we cannot be held liable for any
            unauthorized access to or use of your personal data that is beyond
            our control.
          </p>
        </div>

        <span className="relative flex justify-center">
          <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>
        </span>

        <div className="md:7/12 lg:w-6/12 text-left sm:text-sm lg:text-xl leading-relaxed">
          <h1 className="about-h1">Changes to the Disclaimer</h1>
          <p>
            We may update this disclaimer from time to time. We encourage you to
            review this page periodically for the latest information on our
            practices.
          </p>

          <h1 className="about-h1">Contact Us</h1>
          <p className="about-p">
            If you have any questions about this disclaimer or our practices,
            please contact us:
          </p>
          <ul className="leading-6 my-6">
            <li className="leading-6">
              <strong className="about-strong">Phone:</strong> +91 1111111111
            </li>
            <li className="leading-6">
              <strong className="about-strong">Email:</strong>
              <Link to="mailto:abc@gmail.com">abc@gmail.com</Link>
            </li>
            <li className="leading-6">
              <strong className="about-strong">Address:</strong> Your office
              address
            </li>
          </ul>
        </div>

        <span className="relative flex justify-center">
          <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>
        </span>

        <h2 className="sm:text-base py-12 text-[#00bf63] font-bold lg:text-xl pb-8">
          Thank you for your understanding. We are here to support you in your
          journey towards finding a partner.
        </h2>

        <span className="relative flex justify-center">
          <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>
        </span>
      </div>
      <Footer />
    </div>
  );
}

export default Disclaimer;
