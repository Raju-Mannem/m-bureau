import React from "react";
import { NavbarDemo } from "../Navbar";
import Footer from "../Footer";
import About1 from "./About1";
import About2 from "./About2";
import About3 from "./About3";
import '@fontsource/roboto';
import "./index.css";

function About() {
  return (
    <div>
      <NavbarDemo />
      <div
        className="bg-[url('https://res.cloudinary.com/dhxtw97su/image/upload/f_auto,q_auto/v1/marriage-bureau/ls2vpjzhqd6qgfkmb96j')]
      bg-no-repeat
      bg-cover
      bg-center
      "
      >
        <div className="container m-auto py-32 px-6 text-gray-600 md:px-12 xl:px-6 ">
          <h2 className="sm:text-base text-[#00bf63] font-bold lg:text-2xl pb-8">
            <strong className="underline about-strong">
              Krishnaveni Marriage Bureau
            </strong>
            , respecting traditions and fostering joyful relationships
          </h2>
          <p className="about-p sm:text-base lg:text-xl">
            We are ready to provide trustworthy and personalized services at
            Krishnaveni Marriage Bureau.
          </p>
          <About1 />
          <span className="relative flex justify-center">
            <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>
          </span>
          <About2 />
          <span className="relative flex justify-center">
            <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>
          </span>
          <About3 />
          <span className="relative flex justify-center">
            <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>
          </span>
          <h2 className="sm:text-base py-12 text-[#00bf63] font-bold lg:text-xl pb-8">
            Thank you for choosing "Krishnaveni Marriage Bureau" as part of
            your experience. We look forward to helping you find your happy
            life!
          </h2>
          <span className="relative flex justify-center">
            <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>
          </span>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
