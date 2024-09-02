import React from 'react'
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import ShimmerButton from "../ui/shimmerButton";
import RetroGrid from "../ui/RetroGrid";
import {NavbarDemo} from '../Navbar'
import { TimelineDemo } from "../TimelineDemo";
import '@fontsource-variable/noto-sans-jp';
import '@fontsource-variable/baloo-tammudu-2';
import '@fontsource/ramaraja';
import Footer from '../Footer'
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
      <div className="flex flex-row justify-center align-center" style={{
        background:'url(src/assets/toran.png)', 
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat', 
        backgroundPosition: 'center 10%',
        width:'100vw',
        height:'100%', 
        padding:'0px',
        margin:'0px', 
        boxSizing:'border-box',
        margin: '0px'}}>
      <div style={{padding: '150px 0 0 0'}} className="relative flex h-[650px] w-screen flex-col items-center justify-center overflow-hidden bg-background">
      <span>
      <div className="flex flex-col items-center justify-center h-[40rem]  ">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
        The road to freedom starts from here
      </p>
      <TypewriterEffectSmooth words={words} />
      
      <div className="z-10 flex min-h-[10rem] items-center justify-center">
      <ShimmerButton>
        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
          Shimmer Button
        </span>
      </ShimmerButton>
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
    <TimelineDemo />
    <Footer />
    </div>
  )
}