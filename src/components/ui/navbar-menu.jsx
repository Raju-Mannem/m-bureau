import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};
export const MenuItem = ({ setActive, active, item, children }) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative ">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white"
        style={{fontFamily: "Roboto"}}
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                layoutId="active"
                className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
              >
                <motion.div layout className="w-max h-full p-4">
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({ setActive, children }) => {
  return (
    <nav
      style={{backgroundImage: 'url(https://res.cloudinary.com/dhxtw97su/image/upload/f_auto,q_auto/v1/marriage-bureau/sdgbrc5o5fbdddco3vux), linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)',backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'center -3%', boxShadow: '0 20px 30px -10px rgba(0, 0, 0, 0.3)'}}
      onMouseLeave={() => setActive(null)}
      className="relative border-transparent dark:bg-black dark:border-white/[0.2] bg-white shadow-input flex justify-center items-center space-x-14 pt-4 pb-1"
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({ title, description, href, src }) => {
  return (
    <Link to={href} className="flex space-x-2">
      <img
        src={src}
        width={140}
        height={70}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="text-xl font-bold mb-1 text-black dark:text-white">
          {title}
        </h4>
        <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
          {description}
        </p>
      </div>
    </Link>
  );
};

export const HoveredLink = ({ children, ...rest }) => {
  return (
    <Link
      {...rest}
      className="text-neutral-700 text-left	 dark:text-neutral-200 hover:text-black"
    >
      {children}
    </Link>
  );
};

// Optional: PropTypes for type-checking
MenuItem.propTypes = {
  setActive: PropTypes.func.isRequired,
  active: PropTypes.string,
  item: PropTypes.string.isRequired,
  children: PropTypes.node,
};

Menu.propTypes = {
  setActive: PropTypes.func.isRequired,
  children: PropTypes.node,
};

ProductItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

HoveredLink.propTypes = {
  children: PropTypes.node.isRequired,
};