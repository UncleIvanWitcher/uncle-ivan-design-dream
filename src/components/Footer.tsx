import React from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Send, ExternalLink } from 'lucide-react';
const Footer: React.FC = () => {
  return <footer id="contact" className="bg-gradient-to-b from-gray-50 to-gray-100 pt-20 pb-10 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-12 bg-gradient-to-br from-brand-red to-brand-brick text-white">
              <h2 className="text-3xl font-bold mb-6">Готовы увеличить продажи?</h2>
              <p className="text-lg mb-8">
                Напишите мне, и я помогу вашему бренду выделиться на рынке и достичь новых высот.
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <Mail className="w-5 h-5 mr-3" />
                  <span>ivlevish4ever@gmail.com</span>
                </li>
                <li className="flex items-center">
                  <Phone className="w-5 h-5 mr-3" />
                  <span>+7 (916) 769 78 02</span>
                </li>
                <li className="flex items-center">
                  <MapPin className="w-5 h-5 mr-3" />
                  <span>Москва, Россия</span>
                </li>
              </ul>
              
              <a href="https://pocus.moscow" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-white hover:text-gray-200 font-bold transition-colors">
                Портфолио <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
            
            <div className="p-8 lg:p-12">
              <h3 className="text-2xl font-bold mb-6">Напишите мне</h3>
              
              <form>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Имя
                    </label>
                    <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent" placeholder="Ваше имя" />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent" placeholder="your@email.com" />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Сообщение
                    </label>
                    <textarea id="message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent" placeholder="Опишите ваш проект..."></textarea>
                  </div>
                  
                  <Button className="btn-primary w-full flex items-center justify-center">
                    Отправить <Send className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <div className="flex justify-center items-center mb-6">
            <img src="/lovable-uploads/e5d7aa62-1d7a-4884-86bb-5949adfdc90a.png" alt="Uncle Ivan Logo" className="w-12 h-12 rounded-full border-2 border-brand-red mr-3" />
            <h3 className="text-2xl font-bold">Uncle Ivan</h3>
          </div>
          
          <p className="text-gray-600">
            Творческое видение, реальные результаты. © 2023 Uncle Ivan. Все права защищены.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;