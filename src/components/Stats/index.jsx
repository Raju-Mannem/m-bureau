import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

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
        transition={{ duration: 2, ease: "linear" }}
      >
        <div
          className="max-w-screen-2xl px-4 py-24 
        bg-[url('https://res.cloudinary.com/dhxtw97su/image/upload/f_auto,q_auto/v1/marriage-bureau/qwwdgikizxdpxq3ggdqi')]
        bg-no-repeat
        bg-cover
         sm:px-6 sm:py-12 lg:px-8"
        >
          <div className="mx-auto max-w-3xl text-center bg-white mb-32">
            <h2 className="text-2xl font-bold text-green-400 py-2 sm:text-xl bg-white rounded-t-lg underline decoration-4">
              We are here to make your dreams come true
            </h2>

            <p className="mt-4 text-gray-700 font-bold sm:text-xl">
              Marriages can be arranged in any country: India, USA, Canada,
              England, Australia.
            </p>
          </div>

          <dl className="mg-6 grid lg:grid-cols-4 gap-4 divide-y divide-gray-100 sm:mt-8 sm:grid-cols-2 sm:divide-x sm:divide-y-0">
            <div className="flex flex-col px-4 py-8 text-center bg-white rounded-full border-none">
              <dt className="order-last text-lg font-medium text-[#00bf63]">
                Successful Marriages
              </dt>

              <dd className="text-xl font-extrabold text-[#00bf63] md:text-5xl">
                50+
              </dd>
            </div>

            <div className="flex flex-col px-4 py-8 text-center bg-white rounded-full border-none">
              <dt className="order-last text-lg font-medium text-[#00bf63]">
                Indian Relationships
              </dt>

              <dd className="text-xl font-extrabold text-[#00bf63] md:text-5xl">
                70+
              </dd>
            </div>

            <div className="flex flex-col px-4 py-8 text-center bg-white rounded-full border-none">
              <dt className="order-last text-lg font-medium text-[#00bf63]">
                Other Countries
              </dt>

              <dd className="text-xl font-extrabold text-[#00bf63] md:text-5xl">
                90%
              </dd>
            </div>

            <div className="flex flex-col px-4 py-8 text-center bg-white rounded-full border-none">
              <dt className="order-last text-lg font-medium text-[#00bf63]">
                Satisfaction and Trust
              </dt>

              <dd className="text-xl font-extrabold text-[#00bf63] md:text-5xl">
                99%
              </dd>
            </div>
          </dl>
        </div>
      </motion.section>
    </div>
  );
}

export default Stats;
