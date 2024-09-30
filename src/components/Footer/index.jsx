import React, { useEffect, useRef, useState } from 'react';
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
    <div style={{ width: '100vw' }} ref={ref}>
      <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" />

      <motion.footer
        className="relative bg-[#7be768] pt-8 pb-6"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ duration: 1.5, ease: 'linear' }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-left lg:text-left">
            <div className="w-full lg:w-6/12 px-4 text-white">
              <motion.h4 {...itemAnimation} transition={{ duration: 1.5 }}>Let's keep in touch!</motion.h4>
              <motion.h5 {...itemAnimation} transition={{ duration: 1.5, delay: 0.1 }}>
                Find us on any of these platforms, we respond 1-2 business days.
              </motion.h5>
              <div className="mt-6 lg:mb-0 mb-6">
                {['twitter', 'facebook-square', 'dribbble', 'github'].map((icon, index) => (
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
                  <span className="block uppercase text-white text-sm font-semibold mb-2">Useful Links</span>
                  <ul className="list-unstyled">
                    {['About Us', 'Blog', 'Github', 'Free Products'].map((link, index) => (
                      <motion.li key={link} {...itemAnimation} transition={{ duration: 1.5, delay: 0.2 + index * 0.1 }}>
                        <a className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#">
                          {link}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <span className="block uppercase text-white text-sm font-semibold mb-2">Other Resources</span>
                  <ul className="list-unstyled">
                    {['MIT License', 'Terms & Conditions', 'Privacy Policy', 'Contact Us'].map((link, index) => (
                      <motion.li key={link} {...itemAnimation} transition={{ duration: 1.5, delay: 0.2 + index * 0.1 }}>
                        <a className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#">
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
              <div className="text-sm text-white font-semibold py-1">
                <motion.span {...itemAnimation} transition={{ duration: 1.5 }}>Copyright © <span id="get-current-year">2021</span></motion.span>
                <motion.a href="https://www.creative-tim.com/product/notus-js" className="text-white hover:text-gray-800" target="_blank" {...itemAnimation} transition={{ duration: 1.5, delay: 0.2 }}> Notus JS by</motion.a>
                <motion.a href="https://www.creative-tim.com?ref=njs-profile" className="text-white hover:text-blueGray-800" {...itemAnimation} transition={{ duration: 1.5, delay: 0.3 }}>Creative Tim</motion.a>.
              </div>
            </div>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}

export default Footer;
