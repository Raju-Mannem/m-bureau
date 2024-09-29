import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

function Stats() {
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
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-12 lg:px-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Trusted by eCommerce Businesses</h2>

          <p className="mt-4 text-gray-500 sm:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolores laborum labore
            provident impedit esse recusandae facere libero harum sequi.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col rounded-lg bg-zinc-200 px-4 py-8 text-center">
            <dl>
              <dt className="order-last text-lg font-medium text-gray-500">Total Sales</dt>
              <dd className="text-4xl font-extrabold text-white md:text-5xl">$4.8m</dd>
            </dl>
          </div>

          <div className="flex flex-col rounded-lg bg-zinc-200 px-4 py-8 text-center">
            <dl>
              <dt className="order-last text-lg font-medium text-gray-500">Official Addons</dt>
              <dd className="text-4xl font-extrabold text-white md:text-5xl">24</dd>
            </dl>
          </div>

          <div className="flex flex-col rounded-lg bg-zinc-200 px-4 py-8 text-center">
            <dl>
              <dt className="order-last text-lg font-medium text-gray-500">Total Addons</dt>
              <dd className="text-4xl font-extrabold text-white md:text-5xl">86</dd>
            </dl>
          </div>

          <div className="flex flex-col rounded-lg bg-zinc-200 px-4 py-8 text-center">
            <dl>
              <dt className="order-last text-lg font-medium text-gray-500">Downloads</dt>
              <dd className="text-4xl font-extrabold text-white md:text-5xl">86k</dd>
            </dl>
          </div>
        </div>
      </div>
      </motion.section>
    </div>
  );
}

export default Stats;
