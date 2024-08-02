import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';

// URLs das imagens armazenadas no Firebase Storage
const banner1 = "https://storage.googleapis.com/shopbyte-d1463.appspot.com/public_images/b1.jpg";
const banner2 = "https://storage.googleapis.com/shopbyte-d1463.appspot.com/public_images/b2.jpg";
const banner3 = "https://storage.googleapis.com/shopbyte-d1463.appspot.com/public_images/b3.jpg";

const images = [banner1, banner2, banner3];

const transition = {
  duration: 1,
  ease: "easeInOut",
};

export default function Banner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [paddingTop, setPaddingTop] = useState(0);
  const controls = useAnimation();
  const headerRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const updatePaddingTop = () => {
      if (headerRef.current) {
        setPaddingTop(headerRef.current.offsetHeight);
      }
    };

    window.addEventListener('resize', updatePaddingTop);
    updatePaddingTop();

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', updatePaddingTop);
    };
  }, []);

  useEffect(() => {
    controls.start({
      x: `-${currentIndex * 100}vw`,
      transition,
    });
  }, [currentIndex, controls]);

  return (
    <div
      className="banner-container relative overflow-hidden"
      style={{ paddingTop: `${paddingTop}px` }}
    >
      <motion.div
        className="flex"
        animate={controls}
        initial={{ x: 0 }}
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: `${images.length * 100}vw`,
          transition: 'transform 1s ease-in-out',
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className=""
          >
            <Image
              src={image}
              alt={`banner-${index}`}
              width={1920}
              height={1080}
              style={{
                maxWidth: '100%',
                height: 'auto',
              }}
            />
          </div>
        ))}
      </motion.div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === currentIndex ? 'bg-white' : 'bg-gray-400'
            }`}
            onClick={() => setCurrentIndex(index)}
            style={{ transition: 'background-color 0.3s' }}
          />
        ))}
      </div>
    </div>
  );
}
