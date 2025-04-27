
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare } from 'lucide-react';

const StickyHeader: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Показываем липкую шапку после прокрутки на 300px
      const showStickyHeader = window.scrollY > 300;
      setIsVisible(showStickyHeader);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md py-3 px-4"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <div className="container mx-auto flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-white rounded-full overflow-hidden mr-3 p-1 shadow-sm">
                <img 
                  src="/lovable-uploads/cd7b0a94-9d94-4b25-885c-2736ac7350cd.png" 
                  alt="Uncle Ivan Logo" 
                  className="w-full h-full object-contain" 
                />
              </div>
              <span className="font-bold text-xl">Uncle Ivan</span>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="hidden md:flex gap-6">
                <a href="#about" className="text-gray-700 hover:text-brand-red transition-colors">О&nbsp;Мне</a>
                <a href="#skills" className="text-gray-700 hover:text-brand-red transition-colors">Навыки</a>
                <a href="#portfolio" className="text-gray-700 hover:text-brand-red transition-colors">Проекты</a>
                <a href="#contact" className="text-gray-700 hover:text-brand-red transition-colors">Контакты</a>
              </div>
              
              <a 
                href="https://t.me/UncleIvanWitcher" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-brand-red text-white rounded-lg px-4 py-2 flex items-center justify-center hover:bg-red-700 transition-all duration-300"
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                <span>Связаться</span>
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyHeader;
