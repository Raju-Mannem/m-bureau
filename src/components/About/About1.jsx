import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import '@fontsource/roboto';
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
          <div className="md:7/12 lg:w-6/12 text-left sm:text-sm lg:text-xl leading-relaxed">
            Our main goal is to assist you in finding the right partner! By
            reviewing each profile and understanding the values and aspirations
            you desire, we aim to create relationships that suit you.
            <h1 className="about-h1">Our Guarantee</h1>
            We want finding your partner to be a satisfying experience for you.
            With the spirit of respecting your traditions and fulfilling your
            aspirations, we are ready to assist you.
          </div>
        </div>
      </motion.section>
    </div>
  );
}

export default About1;
