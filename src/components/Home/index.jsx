import React from "react";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import ShimmerButton from "../ui/ShimmerButton";
import RetroGrid from "../ui/RetroGrid";
import { NavbarDemo } from "../Navbar";
import Hero1 from "../Heros";
import Hero2 from "../Heros/Hero2";
import Hero3 from "../Heros/Hero3";
import Stats from "../Stats";
import Faq from "../Faq";
import Footer from "../Footer";
import { Link } from "react-router-dom";

export default function Home() {
  const words = [
    {
      text: "Krishna Veni \u00A0 ",
    },
    {
      text: "Marriage \u00A0 ",
    },
    {
      text: "Bureau \u00A0",
    },
    {
      text: "(Former Sarpanch)",
      className: "text-black-500 dark:text-blue-500",
    },
  ];

  return (
    <div>
      <NavbarDemo />
      <div
        className="flex flex-row justify-center align-center"
        style={{
          background:
            "url(https://res.cloudinary.com/dhxtw97su/image/upload/f_auto,q_auto/v1/marriage-bureau/alvqjzpslu3gd6k6jmqc)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center 10%",
          width: "100vw",
          height: "100%",
          padding: "0px",
          boxSizing: "border-box",
          margin: "4% 0px",
        }}
      >
        <div
          style={{ padding: "150px 0 0 0" }}
          className="relative flex h-[650px] w-screen flex-col items-center justify-center overflow-hidden bg-background"
        >
          <span>
            <div className="flex flex-col items-center justify-center h-[40rem]">
              <h1 className="text-2xl md:text-2xl lg:text-4xl">
                Your marriage is our responsibility
              </h1>
              <TypewriterEffectSmooth words={words} />
              <div className="z-10 flex min-h-[10rem] items-center justify-center">
                <Link to="/contact">
                  <ShimmerButton>
                    <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                      Contact us now
                    </span>
                  </ShimmerButton>
                </Link>
              </div>
            </div>
          </span>
          <RetroGrid />
          <div
            className="absolute bottom-0 animate-wiggle md:flex w-1/3 h-1/4 sm:w-1/4 sm:h-1/2 items:end"
            style={{ alignSelf: "end", zIndex: "12" }}
          >
            <img
              src="https://res.cloudinary.com/dhxtw97su/image/upload/f_auto,q_auto/v1/marriage-bureau/psu08sjip80jkzo8i7jw"
              alt="banana"
              className="w-full h-full"
            />
          </div>
          <div
            className="absolute bottom-0 animate-wiggle md:flex w-1/3 h-1/4 sm:w-1/4 sm:h-1/2 items:end"
            style={{ alignSelf: "start", zIndex: "10" }}
          >
            <img
              src="https://res.cloudinary.com/dhxtw97su/image/upload/f_auto,q_auto/v1/marriage-bureau/p4ajsijgw2g3vsxree1t"
              alt="banana"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
      <Hero1 />
      <Hero2 />
      <Hero3 />
      <Stats />
      <Faq />
      <Footer />
    </div>
  );
}
