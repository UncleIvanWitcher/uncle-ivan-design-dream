
import React from 'react';
import { Quote, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

type TestimonialType = {
  text: string;
  author: string;
  role: string;
  color: string;
  bgColor: string;
  rating: number;
  image: string;
};

interface TestimonialCardProps {
  testimonial: TestimonialType;
  index: number;
  isMobile?: boolean;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, index, isMobile = false }) => {
  const cardMotionProps = isMobile 
    ? {
        initial: { opacity: 0, x: 50 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -50 },
        transition: { duration: 0.4 }
      }
    : {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.6, delay: index * 0.2 },
        viewport: { once: true },
        whileHover: { y: -10 }
      };

  return (
    <motion.div
      className={`testimony-card ${testimonial.color} transform transition-all duration-300 bg-gradient-to-br ${testimonial.bgColor}`}
      {...cardMotionProps}
    >
      <Quote className={`${isMobile ? 'w-8 h-8' : 'w-10 h-10'} text-gray-200 absolute top-4 right-4`} />
      
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`${isMobile ? 'w-4 h-4' : 'w-5 h-5'} ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
          />
        ))}
      </div>
      
      <p className={`${isMobile ? 'text-base' : 'text-lg'} mb-6 relative z-10`}>{testimonial.text}</p>
      
      <div className="flex items-center">
        <div className={`${isMobile ? 'w-12 h-12' : 'w-14 h-14'} bg-white rounded-full overflow-hidden mr-4 p-1 shadow-md`}>
          <Avatar>
            <AvatarImage 
              src={testimonial.image} 
              alt={testimonial.author} 
              className="w-full h-full object-contain"
            />
            <AvatarFallback className="bg-brand-blue text-white">
              {testimonial.author[0]}
            </AvatarFallback>
          </Avatar>
        </div>
        <div>
          <h4 className="font-bold">{testimonial.author}</h4>
          <p className={`${isMobile ? 'text-xs' : 'text-sm'} text-gray-600`}>{testimonial.role}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
