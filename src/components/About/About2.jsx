import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "@fontsource/ramaraja";
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
            <h1> మా ప్రత్యేకతలు </h1>
            <ul>
              <li>
                <strong>సాంస్కృతిక సెన్సిటివిటీ:</strong> తెలుగు కుటుంబాలకు
                ప్రత్యేకమైన సాంస్కృతిక నైపుణ్యాలను గౌరవిస్తూ, మా సేవలు ఈ
                సంప్రదాయాలకు అనుగుణంగా రూపొందించబడ్డాయి.
              </li>
              <li>
                <strong>వ్యక్తిగత సేవ:</strong> మీకు ప్రత్యేకమైన అవసరాలు
                ఉన్నాయని మేము అర్థం చేసుకుంటాము. అందుకే, మీకు సరైన భాగస్వామిని
                కనుగొనడం సులభంగా మరియు ఆనందంగా ఉండేలా మేము కృషి చేస్తాము.
              </li>
              <li>
                <strong>గోప్యత:</strong> మీ వ్యక్తిగత సమాచారాన్ని మేము అత్యంత
                గోప్యతతో నిర్వహిస్తాము. మీ నమ్మకం మాకు చాలా విలువైనది.
              </li>
              <li>
                <strong>విశ్లేషణ మార్గనిర్దేశం:</strong> మా అనుభవంతో, మేము మీకు
                ఉత్తమ మార్గనిర్దేశాన్ని అందించగలము, ఇది మీ కోసం సరైన భాగస్వామిని
                కనుగొనడంలో సహాయపడుతుంది.
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
