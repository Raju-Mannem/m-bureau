import React from 'react'
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import RetroGrid from "../ui/RetroGrid";
import {NavbarDemo} from '../Navbar'
export default function Home() {
  const words = [
    {
      text: "Build",
    },
    {
      text: "awesome",
    },
    {
      text: "apps",
    },
    {
      text: "with",
    },
    {
      text: "Aceternity.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div >
      <NavbarDemo />
      <div className="flex flex-row justify-center align-center " style={{
        background:'url(src/assets/toran.png)', 
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat', 
        backgroundPosition: 'center',
        width:'90vw',
        height:'100%', 
        padding:'0px',
        margin:'0px', 
        boxSizing:'border-box',
        margin: '0px 0 0 0'}}>
      <div  className="relative flex h-[550px] w-screen flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <span>
      <div className="flex flex-col items-center justify-center h-[40rem]  ">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
        The road to freedom starts from here
      </p>
      <TypewriterEffectSmooth words={words} />
      <div
        className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button
          className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          Join now
        </button>
      </div>
    </div>
      </span>
      <RetroGrid />
      <div className='absolute bottom-0 animate-wiggle' style={{alignSelf:'end'}}   >
      <img src="src/assets/banana-r.png" width="300px" height="200px" alt="banana" />
      </div>
      <div className='bottom-0 absolute animate-wiggle' style={{alignSelf:'start'}}   >
      <img src="src/assets/banana-l.png" width="300px" height="200px" alt="banana"/>
      </div>
    </div>
    </div>
    </div>
  )
}