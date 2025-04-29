
import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageSquare, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  return (
    <header id="home" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-20 pb-10 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-white bg-opacity-80 backdrop-blur-sm z-0"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <motion.div 
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-center lg:justify-start mb-6">
              <div className="bg-white rounded-full p-2 shadow-md mr-4">
                <img 
                  alt="Uncle Ivan Logo" 
                  className="w-16 h-16 object-contain" 
                  src="/lovable-uploads/cd7b0a94-9d94-4b25-885c-2736ac7350cd.png" 
                />
              </div>
              <h1 className="text-3xl font-extrabold">Uncle Ivan</h1>
            </div>
            
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 leading-tight">
              <span className="gradient-text from-brand-red to-brand-brick">Творческое Видение</span>
              <br />
              <span className="gradient-text from-brand-yellow to-brand-orange">Реальные Результаты</span>
            </h2>
            
            <p className="text-xl mb-10 max-w-xl mx-auto lg:mx-0">
              Превратите ваш бренд в историю, которую захотят рассказывать. Графический дизайн, брендинг, айдентика.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.a 
                href="https://t.me/UncleIvanWitcher" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-brand-red text-white hover:bg-red-700 font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Заказать проект
              </motion.a>
              
              <motion.button 
                className="bg-white border-2 border-brand-red text-brand-red hover:bg-brand-red hover:text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Портфолио
              </motion.button>
              
              <motion.button 
                className="bg-white border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hidden md:inline-flex"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('checklist-modal')?.classList.remove('hidden')}
              >
                Скачать чек-лист
              </motion.button>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex-1 relative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-yellow rounded-full opacity-30 -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-brand-blue rounded-full opacity-30 -z-10"></div>
            <img alt="Uncle Ivan" className="rounded-xl shadow-2xl z-10 relative max-w-full" loading="lazy" src="/lovable-uploads/2a6b4a7a-a882-4872-a911-ffe2da639211.png" />
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown className="w-10 h-10 text-gray-500" />
      </motion.div>
    </header>
  );
};

export default Header;
