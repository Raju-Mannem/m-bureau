import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import '@fontsource/roboto';
function About2() {
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
          <div className="md:7/12 lg:w-6/12 text-left text-xl leading-relaxed">
            <h1 className="about-h1">Our Specialties</h1>
            <ul>
              <li>
                <strong className="about-strong">Cultural Sensitivity:</strong>{" "}
                Our services are designed to respect and align with the unique
                cultural skills specific to Telugu families.
              </li>
              <li>
                <strong className="about-strong">Personalized Service:</strong>{" "}
                We understand that you have unique needs. Therefore, we strive
                to make finding the right partner easy and enjoyable for you.
              </li>
              <li>
                <strong className="about-strong">Privacy:</strong> We handle
                your personal information with the utmost confidentiality. Your
                trust is very valuable to us.
              </li>
              <li>
                <strong className="about-strong">Guided Analysis:</strong> With
                our experience, we can provide you with the best guidance to
                help you find the right partner.
              </li>
            </ul>
          </div>
          <div className="md:5/12 lg:w-5/12">
            <img
              src="https://res.cloudinary.com/dhxtw97su/image/upload/f_auto,q_auto/v1/marriage-bureau/egsmjmjyf7i8nhuv9mcu"
              alt="image"
              className="w-full h-auto rounded-full"
            />
          </div>
        </div>
      </motion.section>
    </div>
  );
}

export default About2;
