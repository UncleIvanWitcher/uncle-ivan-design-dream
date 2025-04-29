
import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

interface TestimonialProps {
  testimonial: {
    text: string;
    author: string;
    role: string;
    color: string;
    bgColor: string;
    rating: number;
    image: string;
  };
  index: number;
  isMobile?: boolean;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ testimonial, index, isMobile = false }) => {
  return (
    <motion.div
      key={`testimonial-${index}`}
      className={`testimony-card ${testimonial.color}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: isMobile ? 0 : index * 0.1 }}
      viewport={{ once: true }}
      exit={isMobile ? { opacity: 0, y: -20 } : undefined}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.bgColor} opacity-10 z-0`}></div>
      
      <div className="flex items-start gap-4 mb-4 relative z-10">
        <div className="flex-shrink-0">
          <div className="bg-white rounded-full p-2 shadow-md w-12 h-12 flex items-center justify-center">
            <img 
              src={testimonial.image} 
              alt={`${testimonial.author}'s company`} 
              className="w-8 h-8 object-contain" 
            />
          </div>
        </div>
        <div>
          <p className="font-bold text-lg">{testimonial.author}</p>
          <p className="text-gray-600 text-sm">{testimonial.role}</p>
        </div>
      </div>
      
      <div className="mb-4 relative z-10">
        <Quote className="w-8 h-8 text-gray-300 mb-2 inline-block" />
        <p className="text-gray-700">{testimonial.text}</p>
      </div>
      
      <div className="flex justify-between items-center relative z-10">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
