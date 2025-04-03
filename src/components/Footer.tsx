
import React from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Send, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  return <footer id="contact" className="bg-gradient-to-b from-gray-50 to-gray-100 pt-20 pb-10 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 gradient-text from-brand-violet to-brand-blue">Связаться со мной</h3>
              <p className="text-gray-600 mb-6">Готов обсудить ваш проект и предложить креативные решения для вашего бренда.</p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-brand-teal to-brand-blue flex items-center justify-center mr-3">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <span>uncle.ivan@example.com</span>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-brand-orange to-brand-red flex items-center justify-center mr-3">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <span>+7 (999) 123-45-67</span>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-brand-purple to-brand-violet flex items-center justify-center mr-3">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <span>Москва, Россия</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4 gradient-text from-brand-gold to-brand-orange">Быстрая заявка</h3>
              <form className="space-y-4">
                <input type="text" placeholder="Ваше имя" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-indigo focus:border-transparent outline-none" />
                <input type="email" placeholder="Email" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-indigo focus:border-transparent outline-none" />
                <textarea placeholder="Опишите ваш проект" rows={3} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-indigo focus:border-transparent outline-none"></textarea>
                <Button className="w-full bg-gradient-to-r from-brand-orange to-brand-red hover:opacity-90">
                  <Send className="w-4 h-4 mr-2" />
                  Отправить заявку
                </Button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <div className="flex justify-center items-center mb-6">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-md mr-3">
              <img src="/lovable-uploads/cd7b0a94-9d94-4b25-885c-2736ac7350cd.png" alt="Uncle Ivan Logo" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-2xl font-bold gradient-text from-brand-blue to-brand-violet">Uncle Ivan INC</h3>
          </div>
          
          <p className="text-gray-600">Творческое видение, реальные результаты. © 2025 Uncle Ivan. Все права защищены.</p>
          
          <div className="flex justify-center mt-6 space-x-4">
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-brand-teal to-brand-blue text-white hover:opacity-90 transition-opacity">
              <ExternalLink size={20} />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-brand-indigo to-brand-violet text-white hover:opacity-90 transition-opacity">
              <ExternalLink size={20} />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-brand-orange to-brand-red text-white hover:opacity-90 transition-opacity">
              <ExternalLink size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>;
};

export default Footer;
