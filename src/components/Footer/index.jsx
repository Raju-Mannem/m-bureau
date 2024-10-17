import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "@fontsource/roboto";
import "@fontsource-variable/noto-serif";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const itemAnimation = {
    initial: { y: 60, opacity: 0 },
    animate: isVisible ? { y: 0, opacity: 1.5 } : {},
  };

  return (
    <div
      className="h-full w-screen border border-green-300 hover:shadow-lg shadow-2xl shadow-blue-500/50 rounded-t-lg
      bg-[url('https://res.cloudinary.com/dhxtw97su/image/upload/f_auto,q_auto/v1/marriage-bureau/ls2vpjzhqd6qgfkmb96j')]
      bg-no-repeat
      bg-cover
      bg-center
      "
      ref={ref}
    >
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-4/12 px-4 py-6 text-green-400 sm:border-b border-green-200 lg:border-none">
            <motion.h4 {...itemAnimation} transition={{ duration: 1.5 }}>
              <div className="mb-4 h-1/2 w-1/2">
                <img
                  src="https://res.cloudinary.com/dhxtw97su/image/upload/f_auto,q_auto/v1/marriage-bureau/xy4pnmommssiuorbghoe"
                  alt="Krishnaveni Marriage Bureau"
                  className="scale-100 rounded-full"
                />
              </div>
              Krishnaveni Marriage Bureau
            </motion.h4>
            <motion.h5
              {...itemAnimation}
              transition={{ duration: 1.5, delay: 0.1 }}
            >
              Providing trustworthy and personalized services.
            </motion.h5>
          </div>
          <div className="w-full lg:w-8/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto sm:border-b border-green-200 lg:border-none">
                <ul className="list-unstyled">
                  {[
                    { name: "Register", url: "/register" },
                    { name: "About Us", url: "/about" },
                    { name: "Admin Login", url: "/admin-signin" },
                    { name: "Upload Profiles", url: "/upload-profiles" },
                  ].map((link, index) => (
                    <motion.li
                      key={link.name}
                      {...itemAnimation}
                      transition={{
                        duration: 1.5,
                        delay: 0.2 + index * 0.1,
                      }}
                    >
                      <a
                        className="text-green-400 font-semibold block pb-2 text-sm"
                        href={link.url}
                      >
                        {link.name}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <ul className="list-unstyled">
                  {[
                    { name: "Disclaimer", url: "/disclaimer" },
                    { name: "Terms & Conditions", url: "/terms" },
                    { name: "Privacy Policy", url: "/privacy" },
                    { name: "Contact Us", url: "/contact" },
                  ].map((link, index) => (
                    <motion.li
                      key={link.name}
                      {...itemAnimation}
                      transition={{ duration: 1.5, delay: 0.2 + index * 0.1 }}
                    >
                      <a
                        className="text-green-400 font-semibold block pb-2 text-sm"
                        href={link.url}
                      >
                        {link.name}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-green-200" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-green-400 font-semibold py-1">
              <motion.span {...itemAnimation} transition={{ duration: 1.5 }}>
                Copyright ©{" "}
                <span id="get-current-year">
                  krishnaveni marriage bureau {new Date().getFullYear()}
                </span>
              </motion.span>
            </div>
          </div>
          <span className="text-xs right-auto">
            Designed and Developed by{" "}
            <Link
              to="https://zeusit.us/"
              className="text-orange-400 hover:text-gray-800 text-sm"
              target="_blank"
              {...itemAnimation}
              transition={{ duration: 1.5, delay: 0.2 }}
            >
              ZeusIT
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
