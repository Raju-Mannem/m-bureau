import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import '@fontsource/roboto';
function About3() {
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
              src="https://res.cloudinary.com/dhxtw97su/image/upload/f_auto,q_auto/v1/marriage-bureau/juhwsgxzdtue8iao8u1s"
              alt="image"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="md:7/12 lg:w-6/12 text-left sm:text-sm lg:text-xl leading-relaxed">
            <h1 className="about-h1">Contact Us</h1>
            <p className="about-p">
              We welcome you to reach out to us and learn more about our
              services!
            </p>
            <ul className="leading-6 my-6">
              <li className="leading-6">
                <strong className="about-strong">Phone:</strong> +91 1111111111
              </li>
              <li className="leading-6">
                <strong className="about-strong">Email:</strong>
                <Link to="mailto:abc@gmail.com">abc@gmail.com</Link>
              </li>
              <li className="leading-6">
                <strong className="about-strong">Address:</strong> Your office
                address
              </li>
            </ul>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

export default About3;
