
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send, ExternalLink, Instagram, Facebook } from 'lucide-react';
import { toast } from "@/hooks/use-toast";
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Имитация отправки формы
    setTimeout(() => {
      toast({
        title: "Сообщение отправлено",
        description: "Спасибо! Мы свяжемся с вами в ближайшее время.",
        variant: "default",
      });
      setName('');
      setEmail('');
      setMessage('');
      setIsSubmitting(false);
    }, 1000);
  };

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
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="bg-gradient-to-br from-brand-blue via-brand-indigo to-brand-violet p-8 md:p-12 text-white">
              <h3 className="text-3xl font-bold mb-6">Связаться со мной</h3>
              <p className="mb-8 text-white/80">
                Готовы обсудить свой проект? Заполните форму или свяжитесь со мной напрямую через удобный для вас канал связи.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-4">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-white/70">Телефон</p>
                    <a href="tel:+79123456789" className="hover:text-white/80 transition-colors">
                      +7 (912) 345-67-89
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-4">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-white/70">Email</p>
                    <a href="mailto:info@uncleivan.com" className="hover:text-white/80 transition-colors">
                      info@uncleivan.com
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
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Instagram className="w-5 h-5 text-white" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Facebook className="w-5 h-5 text-white" />
                </a>
                <a href="https://t.me/UncleIvanWitcher" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Send className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>
            
            <div className="p-8 md:p-12">
              <h4 className="text-xl font-bold mb-6">Отправить сообщение</h4>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder="Ваше имя" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border-gray-300 focus:border-brand-blue focus:ring-brand-blue"
                    required
                  />
                </div>
                
                <div>
                  <Input
                    type="email"
                    placeholder="Ваш email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border-gray-300 focus:border-brand-blue focus:ring-brand-blue"
                    required
                  />
                </div>
                
                <div>
                  <Textarea
                    placeholder="Ваше сообщение"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="border-gray-300 focus:border-brand-blue focus:ring-brand-blue"
                    rows={4}
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-brand-red hover:bg-red-700 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  {isSubmitting ? 'Отправка...' : 'Отправить сообщение'}
                </Button>
              </form>
            </div>
          </div>
        </motion.div>
        
        <div className="mt-16 text-center">
          <div className="flex justify-center items-center mb-6">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-md mr-3">
              <img src="/lovable-uploads/cd7b0a94-9d94-4b25-885c-2736ac7350cd.png" alt="Uncle Ivan Logo" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-2xl font-bold gradient-text from-brand-blue to-brand-violet">Uncle Ivan INC</h3>
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
