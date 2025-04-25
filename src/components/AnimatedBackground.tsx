
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden -z-10">
      <motion.div 
        className="shape w-96 h-96 bg-brand-red top-0 left-1/4"
        animate={{ 
          x: mousePosition.x * 0.02,
          y: mousePosition.y * 0.02,
          rotate: [0, 360]
        }}
        transition={{ 
          rotate: { 
            repeat: Infinity,
            duration: 50,
            ease: "linear"
          },
          x: { type: "spring", stiffness: 10 },
          y: { type: "spring", stiffness: 10 }
        }}
      ></motion.div>
      
      <motion.div 
        className="shape w-64 h-64 bg-brand-orange top-1/3 left-10"
        animate={{ scale: [0.9, 1.1, 0.9] }}
        transition={{ 
          repeat: Infinity,
          duration: 4,
          ease: "easeInOut"
        }}
      ></motion.div>
      
      <motion.div 
        className="shape w-80 h-80 bg-brand-yellow bottom-0 left-1/4"
        animate={{ 
          y: [0, -30, 0],
          x: mousePosition.x * 0.01
        }}
        transition={{ 
          y: {
            repeat: Infinity, 
            duration: 6,
            ease: "easeInOut"
          },
          x: { type: "spring", stiffness: 5 }
        }}
      ></motion.div>
      
      <motion.div 
        className="shape w-72 h-72 bg-brand-blue top-1/4 right-10"
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ 
          repeat: Infinity,
          duration: 3,
          ease: "easeInOut"
        }}
      ></motion.div>
      
      <motion.div 
        className="shape w-96 h-96 bg-brand-green bottom-1/4 right-1/4"
        animate={{ 
          rotate: [0, -360],
          x: mousePosition.x * -0.015,
          y: mousePosition.y * -0.015
        }}
        transition={{ 
          rotate: { 
            repeat: Infinity,
            duration: 40,
            ease: "linear"
          },
          x: { type: "spring", stiffness: 8 },
          y: { type: "spring", stiffness: 8 }
        }}
      ></motion.div>
      
      <motion.div 
        className="shape w-80 h-80 bg-brand-purple top-3/4 right-1/3"
        animate={{ y: [0, 40, 0] }}
        transition={{ 
          repeat: Infinity,
          duration: 7,
          ease: "easeInOut"
        }}
      ></motion.div>
      
      <div className="absolute inset-0 backdrop-blur-[120px]"></div>
    </div>
  );
};

export default AnimatedBackground;
