import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "../../lib/utils";
import './index.css';
import '@fontsource/ramabhadra';
import { Link } from "react-router-dom";
import FlickerImages from "./FlickerImages";
import '@fontsource/ramaraja';
export function NavbarDemo() {
  return (
    (<div className="relative w-full flex items-center justify-center">
      <Navbar className="top-0  border-slate-300 hover:shadow-lg shadow-blue-500/50 rounded-b-lg "/>
    </div>)
  );
}

function Navbar({
  className
}) {
  const [active, setActive] = useState(null);
  return (
    (<div
      className={cn("fixed top-10 inset-x-0 min-w-2xl mx-auto z-50", className)} >
      <Menu setActive={setActive}>
        <FlickerImages />
        <Link to="/" className="text-black dark:text-white">హోమ్ పేజీ</Link>
       <Link to="/about" className="text-black dark:text-white">మా గురించి</Link>
        <Link to="/register" className="text-black dark:text-white">
        {/* <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div>
        </MenuItem> */}
        రిజిస్టర్
        </Link>
{/*         
        <MenuItem setActive={setActive} active={active} item="Products">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Algochurn"
              href="https://algochurn.com"
              src="https://assets.aceternity.com/demos/algochurn.webp"
              description="Prepare for tech interviews like never before." />
            <ProductItem
              title="Tailwind Master Kit"
              href="https://tailwindmasterkit.com"
              src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
              description="Production ready Tailwind css components for your next project" />
            <ProductItem
              title="Moonbeam"
              href="https://gomoonbeam.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
              description="Never write from scratch again. Go from idea to blog in minutes." />
            <ProductItem
              title="Rogue"
              href="https://userogue.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI" />
          </div>
        </MenuItem> */}
        <Link to="/contact" className="text-black dark:text-white">సంప్రదించండి</Link>
          {/* <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div> */}
      </Menu>
    </div>)
  );
}
