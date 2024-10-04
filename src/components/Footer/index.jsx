import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

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
    animate: isVisible ? { y: 0, opacity: 1.5 } : {}
  };

  return (
    <div style={{ width: '100vw' }} className="border border-green-300 hover:shadow-lg shadow-2xl shadow-blue-500/50 rounded-t-lg" ref={ref}>
      <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" />

      <motion.footer
        className="relative pt-8 pb-6"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ duration: 1.5, ease: 'linear' }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-left lg:text-left">
            <div className="w-full lg:w-6/12 px-4 text-green-400">
              <motion.h4 {...itemAnimation} transition={{ duration: 1.5 }}>Let's keep in touch!</motion.h4>
              <motion.h5 {...itemAnimation} transition={{ duration: 1.5, delay: 0.1 }}>
                Find us on any of these platforms, we respond 1-2 business days.
              </motion.h5>
              <div className="mt-6 lg:mb-0 mb-6">
                {['twitter', 'facebook-square', 'instagram', 'whatsapp'].map((icon, index) => (
                  <motion.button
                    key={icon}
                    className="bg-white text-green-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                    type="button"
                    {...itemAnimation}
                    transition={{ duration: 1.5, delay: 0.2 + index * 0.1 }}
                  >
                    <i className={`fab fa-${icon}`}></i>
                  </motion.button>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <ul className="list-unstyled">
                    {['About Us', 'Profiles', 'Register', 'Login'].map((link, index) => (
                      <motion.li key={link} {...itemAnimation} transition={{ duration: 1.5, delay: 0.2 + index * 0.1 }}>
                        <a className="text-green-400 font-semibold block pb-2 text-sm" href="#">
                          {link}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <ul className="list-unstyled">
                    {['Disclaimer', 'Terms & Conditions', 'Privacy Policy', 'Contact Us'].map((link, index) => (
                      <motion.li key={link} {...itemAnimation} transition={{ duration: 1.5, delay: 0.2 + index * 0.1 }}>
                        <a className="text-green-400  font-semibold block pb-2 text-sm" href="#">
                          {link}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-blueGray-300" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-green-400 font-semibold py-1">
                <motion.span {...itemAnimation} transition={{ duration: 1.5 }}>Copyright © <span id="get-current-year">krishnaveni marriage bureau {new Date().getFullYear()}</span></motion.span>
                </div>
            </div>
            <span className='text-xs right-auto'>Designed and Developed by <Link to="https://www.creative-tim.com/product/notus-js" className="text-green-400 hover:text-gray-800 text-sm" target="_blank" {...itemAnimation} transition={{ duration: 1.5, delay: 0.2 }}>ZeusIT</Link></span>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}

export default Footer;
