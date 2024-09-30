import React, { useEffect, useRef, useState } from "react";
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
        <div class="mx-auto max-w-screen-xl px-4 py-16 
        bg-[url('https://res.cloudinary.com/dhxtw97su/image/upload/f_auto,q_auto/v1/marriage-bureau/qwwdgikizxdpxq3ggdqi')]
        bg-no-repeat
        bg-cover
         sm:px-6 sm:py-12 lg:px-8">
          <div class="mx-auto max-w-3xl text-center ">
            <h2 class="text-3xl font-bold text-gray-600 sm:text-2xl">
            మీ కలలు నిజం చేయడానికి ఇక్కడ ఉన్నాము
            </h2>

            <p class="mt-4 text-gray-500 sm:text-xl">
            ఇండియా, అమెరికా, కెనడా, ఇంగ్లండ్, ఆస్ట్రేలియా, ఏ ధేశం లో వారికైనా సమంధాలు చూడబడును.

            </p>
          </div>

          <dl class="mg-6 grid lg:grid-cols-4 gap-4 divide-y divide-gray-100 sm:mt-8 sm:grid-cols-2 sm:divide-x sm:divide-y-0">
            <div class="flex flex-col px-4 py-8 text-center">
              <dt class="order-last text-lg font-medium text-[#00bf63]">
              విజయవంతమైన వివాహాలు
              </dt>

              <dd class="text-2xl font-extrabold text-[#00bf63] md:text-5xl">
                50+
              </dd>
            </div>

            <div class="flex flex-col px-4 py-8 text-center">
              <dt class="order-last text-lg font-medium text-[#00bf63]">
              ఇండియన్  సంబందాలు 
              </dt>

              <dd class="text-2xl font-extrabold text-[#00bf63] md:text-5xl">
              70+
              </dd>
            </div>

            <div class="flex flex-col px-4 py-8 text-center">
              <dt class="order-last text-lg font-medium text-[#00bf63]">
                ఇతర ధేశాలు
              </dt>

              <dd class="text-2xl font-extrabold text-[#00bf63] md:text-5xl">
                90%
              </dd>
            </div>

            <div class="flex flex-col px-4 py-8 text-center">
              <dt class="order-last text-lg font-medium text-[#00bf63]">
                సంతృప్తి మరియు విశ్వాసం
              </dt>

              <dd class="text-2xl font-extrabold text-[#00bf63] md:text-5xl">
                86k
              </dd>
            </div>
          </dl>
        </div>
      </motion.section>
    </div>
  );
}

export default Stats;
