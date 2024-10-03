import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "@fontsource/ramaraja";
function About1() {
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
    <div ref={ref} className="py-24">
      <motion.section
        initial={{ y: 80, opacity: 0 }}
        animate={isVisible ? { y: -20, opacity: 1 } : {}}
        transition={{ duration: 2, ease: "linear" }}
      >
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12 py-12">
          <div className="md:5/12 lg:w-5/12">
            <img
              src="https://res.cloudinary.com/dhxtw97su/image/upload/f_auto,q_auto/v1/marriage-bureau/ecg2rsekjf9pnpeqakbk"
              alt="image"
              className="w-full h-auto rounded-full"
            />
          </div>
          <div className="md:7/12 lg:w-6/12 text-left text-xl leading-relaxed">
            మీరు సరైన భాగస్వామిని కనుగొనడంలో మీకు సహాయపడటమే మా ముఖ్యమైన లక్ష్యం!
            ప్రతి ప్రొఫైల్‌ను పరిశీలించడం, మీరు కోరుకునే విలువలు మరియు ఆశయాలను
            అర్థం చేసుకోవడం ద్వారా, మీకు సరిపోయే సంబంధాలను ఏర్పరచడం మా సర్వస్వం.
            <h1>మా హామీ</h1>
            మీ భాగస్వామిని కనుగొనడం మీకు సంతృప్తికరమైన అనుభవంగా
            మారాలనుకుంటున్నాము. మీ సంప్రదాయాలను గౌరవించే మరియు మీ ఆశయాలను
            నెరవేర్చే స్ఫూర్తితో, మేము మీకు సహాయపడేందుకు సిద్ధంగా ఉన్నాం.
          </div>
        </div>
      </motion.section>
    </div>
  );
}

export default About1;
