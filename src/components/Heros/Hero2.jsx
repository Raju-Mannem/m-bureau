import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import '@fontsource/roboto';
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
      <motion.section
        initial={{ y: 80, opacity: 0 }}
        animate={isVisible ? { y: -20, opacity: 1 } : {}}
        transition={{ duration: 2, ease: "linear" }}
      >
        <div className="mx-auto my-16 max-w-screen-xl px-4 py-32 sm:px-6 sm:py-12 lg:px-8 lg:py-8 shadow-2xl shadow-green-550 rounded-lg border-r-4 border-b-4 border-green-400 bg-white">
          <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 lg:py-8">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-first lg:h-full">
              <img
                alt="krishnaveni marriage bureau"
                src="https://res.cloudinary.com/dhxtw97su/image/upload/f_auto,q_auto/v1/marriage-bureau/tcsc5ogufkfyxn4llmtd"
                className="absolute inset-0 h-full w-full object-contain"
              />
            </div>

            <div className="lg:py-24 sm:px-12">
              <h2 className="text-xl font-bold bg-green-400 text-white rounded-lg w-fit px-4 py-1 sm:text-4xl">
                Blessing of the Almighty
              </h2>
              <p className="mt-4 text-gray-600 font-bold text-left leading-9">
                In Hindu tradition, marriage is a bond based on mutual love,
                respect, and the blessing of the Almighty. We are ready to
                assist you in this sacred bond.
              </p>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

export default Hero2;
