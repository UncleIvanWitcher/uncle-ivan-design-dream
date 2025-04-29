
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Menu, X } from 'lucide-react';

const StickyHeader: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const showStickyHeader = window.scrollY > 300;
      setIsVisible(showStickyHeader);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

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
              <div className="bg-white p-2 rounded-full overflow-hidden mr-3 shadow-sm">
                <img 
                  src="/lovable-uploads/cd7b0a94-9d94-4b25-885c-2736ac7350cd.png" 
                  alt="Uncle Ivan Logo" 
                  className="w-8 h-8 object-contain" 
                />
              </div>
              <span className="font-bold text-xl">Uncle Ivan</span>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="hidden md:flex gap-6">
                <motion.a 
                  href="#about" 
                  className="text-gray-700 hover:text-brand-red transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  О&nbsp;Мне
                </motion.a>
                <motion.a 
                  href="#skills" 
                  className="text-gray-700 hover:text-brand-red transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  Услуги
                </motion.a>
                <motion.a 
                  href="#portfolio" 
                  className="text-gray-700 hover:text-brand-red transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  Проекты
                </motion.a>
                <motion.a 
                  href="#contact" 
                  className="text-gray-700 hover:text-brand-red transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  Контакты
                </motion.a>
              </div>
              
              <motion.a 
                href="https://t.me/UncleIvanWitcher" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-brand-red text-white rounded-lg px-4 py-2 flex items-center justify-center hover:bg-red-700 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                <span>Связаться</span>
              </motion.a>
              
              <button 
                className="md:hidden text-gray-700 focus:outline-none"
                onClick={toggleMenu}
              >
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
          
          {/* Mobile Menu */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div 
                className="md:hidden absolute left-0 right-0 bg-white shadow-md mt-3 py-4 px-6"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-col space-y-4">
                  <a href="#about" className="text-gray-700 hover:text-brand-red py-2" onClick={toggleMenu}>О Мне</a>
                  <a href="#skills" className="text-gray-700 hover:text-brand-red py-2" onClick={toggleMenu}>Услуги</a>
                  <a href="#portfolio" className="text-gray-700 hover:text-brand-red py-2" onClick={toggleMenu}>Проекты</a>
                  <a href="#contact" className="text-gray-700 hover:text-brand-red py-2" onClick={toggleMenu}>Контакты</a>
                  <button 
                    className="text-left text-gray-700 hover:text-brand-blue py-2"
                    onClick={() => {
                      document.getElementById('checklist-modal')?.classList.remove('hidden');
                      toggleMenu();
                    }}
                  >
                    Скачать чек-лист
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyHeader;
