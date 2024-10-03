import React from "react";
import { NavbarDemo } from "../Navbar";
import Footer from "../Footer";
import About1 from "./About1";
import About2 from "./About2";
import About3 from "./About3";
import "@fontsource/ramabhadra";
import "@fontsource/ramaraja";
import "./index.css";
function About() {
  return (
    <div>
      <NavbarDemo />
      <div className="bg-[url('https://img.freepik.com/premium-photo/simple-elegant-green-leaves-dots-background_1007521-19543.jpg?ga=GA1.1.268735415.1727945180&semt=ais_hybrid')]
      bg-no-repeat
      bg-cover
      bg-center
      ">
        <div className="container m-auto py-32 px-6 text-gray-600 md:px-12 xl:px-6 ">
          <h2 className="text-2xl text-[#00bf63] font-bold md:text-4xl pb-8">
            <strong className="underline">కృష్ణవేణి మ్యారేజ్ బ్యూరో</strong>,
            సంప్రదాయాలను గౌరవించి, సంతోషకరమైన సంబంధాలను ఏర్పరుస్తాము
          </h2>
          <p>
            కృష్ణవేణి మ్యారేజ్ బ్యూరో వద్ద నమ్మకమైన మరియు వ్యక్తిగత సేవలను
            అందించడానికి సిద్ధంగా ఉన్నాను.
          </p>
          <About1 />
          <span className="relative flex justify-center">
            <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>

            <span className="relative z-10 bg-white px-6">
              Lorem, ipsum dolor
            </span>
          </span>
          <About2 />{" "}
          <span className="relative flex justify-center">
            <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>

            <span className="relative z-10 bg-white px-6">
              Lorem, ipsum dolor
            </span>
          </span>
          <About3 />
          <h2 className="text-2xl text-[#00bf63] font-bold md:text-4xl pb-8">
            కృష్ణవేణి మ్యారేజ్ బ్యూరో"ని మీ అనుభవంలో భాగస్వామిగా ఎంపిక
            చేసినందుకు ధన్యవాదాలు. మీ సంతోషకరమైన జీవితాన్ని కనుగొనడానికి మేము
            ఎదురు చూస్తున్నాము!
          </h2>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
