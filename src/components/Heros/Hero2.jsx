import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

function Hero2() {
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
      <section className='border'>
        <div className="mx-auto max-w-screen-xl px-4 py-32 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            <motion.div
              className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-first lg:h-full"
              initial={{ y: 60, opacity: 0 }}
              animate={isVisible ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 1.5, ease: 'linear' }}
            >
              <img
                alt=""
                src="https://res.cloudinary.com/dhxtw97su/image/upload/f_auto,q_auto/v1/marriage-bureau/mfaep9ton450b8nm5b5z"
                className="absolute inset-0 h-full w-full object-contain"
              />
            </motion.div>

            <div className="lg:py-24">
              <motion.h2
                className="text-3xl font-bold sm:text-4xl"
                initial={{ y: 60, opacity: 0 }}
                animate={isVisible ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 2, ease: 'linear' }}
              >
                Grow your audience
              </motion.h2>
              <motion.p
                className="mt-4 text-gray-600"
                initial={{ y: 60, opacity: 0 }}
                animate={isVisible ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 2, ease: 'linear' }}
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic atque tenetur quis
                eius quos ea neque sunt, accusantium soluta minus veniam tempora deserunt? Molestiae eius
                quidem quam repellat.
              </motion.p>
              <motion.a
                href="#"
                className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
                initial={{ y: 60, opacity: 0 }}
                animate={isVisible ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 2, ease: 'linear' }}
              >
                Get Started Today
              </motion.a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero2;