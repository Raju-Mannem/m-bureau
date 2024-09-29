import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Waves from '../Waves';
function Hero1() {
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

  return (
    <div ref={ref}>
      <Waves />
      <motion.section
        initial={{ y: 80, opacity: 0 }}
        animate={isVisible ? { y: -20, opacity: 1 } : {}}
        transition={{ duration: 2, ease: 'linear' }}
      >
        <div className="mx-auto my-16 max-w-screen-xl px-4 py-32 sm:px-6 sm:py-12 lg:px-8 lg:py-8 shadow-2xl shadow-yellow-950 rounded-lg">
          <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 lg:py-8">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <img
                alt=""
                src="https://res.cloudinary.com/dhxtw97su/image/upload/f_auto,q_auto/v1/marriage-bureau/ecg2rsekjf9pnpeqakbk"
                className="absolute inset-0 h-full w-full object-contain"
              />
            </div>

            <div className="lg:py-24 sm:px-12">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Grow your audience
              </h2>
              <p className="mt-4 text-gray-600">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic atque tenetur quis
                eius quos ea neque sunt, accusantium soluta minus veniam tempora deserunt? Molestiae eius
                quidem quam repellat.
              </p>
              <a
                href="#"
                className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Get Started Today
              </a>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

export default Hero1;
