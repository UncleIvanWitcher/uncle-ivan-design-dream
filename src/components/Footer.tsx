
import React from 'react';
import { Mail, Phone, MapPin, Send, Instagram, Facebook } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-gradient-to-b from-gray-50 to-gray-100 pt-20 pb-10 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-brand-blue via-brand-indigo to-brand-violet p-12 text-white">
            <h3 className="text-3xl font-bold mb-6">Связаться со мной</h3>
            <p className="mb-8 text-white/80">
              Готовы обсудить свой проект? Свяжитесь со мной любым удобным способом.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-4">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-white/70">Телефон</p>
                  <a href="tel:+79167697802" className="hover:text-white/80 transition-colors">
                    +7 (916) 769-78-02
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-4">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-white/70">Email</p>
                  <a href="mailto:ivlevish4ever@gmail.com" className="hover:text-white/80 transition-colors">
                    ivlevish4ever@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-4">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-white/70">Локация</p>
                  <p>Москва, Россия</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center mt-10 space-x-4">
              <motion.a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram className="w-5 h-5 text-white" />
              </motion.a>
              <motion.a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Facebook className="w-5 h-5 text-white" />
              </motion.a>
              <motion.a 
                href="https://t.me/UncleIvanWitcher" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Send className="w-5 h-5 text-white" />
              </motion.a>
            </div>
          </div>
        </motion.div>
        
        <div className="mt-16 text-center">
          <div className="flex justify-center items-center mb-6">
            <div className="bg-white w-16 h-16 p-2 rounded-full shadow-md mr-4 flex items-center justify-center">
              <img 
                src="/lovable-uploads/cd7b0a94-9d94-4b25-885c-2736ac7350cd.png" 
                alt="Uncle Ivan Logo" 
                className="w-full h-full object-contain" 
              />
            </div>
            <h3 className="text-2xl font-bold gradient-text from-brand-blue to-brand-violet">Uncle Ivan</h3>
          </div>
          
          <p className="text-gray-600">Творческое видение, реальные результаты. © 2025 Uncle Ivan. Все права защищены.</p>
          
          <div className="mt-4">
            <a
              href="https://t.me/UncleIvanWitcher"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-blue hover:text-brand-indigo transition-colors"
            >
              Telegram: @UncleIvanWitcher
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
