import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
function Hero3() {
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
        transition={{ duration: 2, ease: 'linear' }}
      >
        <div className="mx-auto max-w-screen-xl px-4 py-32 sm:px-6 sm:py-12 lg:px-8 lg:py-8 shadow-2xl shadow-yellow-950 rounded-lg
        bg-[url('https://res.cloudinary.com/dhxtw97su/image/upload/f_auto,q_auto/v1/marriage-bureau/evbsmlx59bl8dwpn9fi9')]
        bg-no-repeat
        bg-cover
        ">
          <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 lg:py-8">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <img
                alt=""
                src="https://res.cloudinary.com/dhxtw97su/image/upload/f_auto,q_auto/v1/marriage-bureau/mfaep9ton450b8nm5b5z"
                className="absolute inset-0 h-full w-full object-contain"
              />
            </div>

            <div className="lg:py-24 sm:px-12">
            <h2 className="text-xl font-bold bg-green-400 text-white rounded-lg w-fit px-4 py-1 sm:text-4xl">
            మీరు కోరుకున్న బంధం
              </h2>
              <p className="mt-4 text-gray-600 font-bold text-left leading-9">
              మీకు సరైన వ్యక్తిని కనుగొనడంలో, మేము మీకు సహాయపడతాము. 
              మా విశేషమైన సేవలతో, మీ జీవితంలో ప్రేమను మరియు సంతోషాన్ని అందించడం మాకు ముఖ్యమైనది.
              </p>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

export default Hero3;
