import React, { useEffect, useState } from 'react';

const FlickerImages = () => {
  const [showFirstImage, setShowFirstImage] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirstImage((prev) => !prev);
    }, 2000); // Change image every 1 second (1000 ms)

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <span className="relative w-60 h-12 overflow-hidden">
      <img
        src="/src/assets/ban-logo.png"
        alt="First"
        className={`absolute inset-0 w-1/8 h-12 m-0 p-0 transition-opacity duration-800 ${showFirstImage ? 'opacity-100' : 'opacity-0'}`}
      />
      <img
        src="/src/assets/ban-logo-e.png"
        alt="Second"
        className={`absolute inset-0 w-1/8 h-12 m-0 p-0 transition-opacity duration-800 ${showFirstImage ? 'opacity-0' : 'opacity-100'}`}
      />
    </span>
  );
};

export default FlickerImages;