
import React from 'react';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden -z-10">
      <div className="shape w-96 h-96 bg-brand-red top-0 left-1/4 animate-spin-slow"></div>
      <div className="shape w-64 h-64 bg-brand-orange top-1/3 left-10 animate-pulse-slow"></div>
      <div className="shape w-80 h-80 bg-brand-yellow bottom-0 left-1/4 animate-float"></div>
      <div className="shape w-72 h-72 bg-brand-blue top-1/4 right-10 animate-pulse-slow"></div>
      <div className="shape w-96 h-96 bg-brand-green bottom-1/4 right-1/4 animate-spin-slow"></div>
      <div className="shape w-80 h-80 bg-brand-purple top-3/4 right-1/3 animate-float"></div>
    </div>
  );
};

export default AnimatedBackground;
