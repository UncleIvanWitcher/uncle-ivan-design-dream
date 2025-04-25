
import React from 'react';
import { Calendar, CheckCircle, Trophy, Clock, Award, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const AboutSection: React.FC = () => {
  const advantages = [
    'Точное следование брифу и техническому заданию',
    'Глубокое понимание маркетинговых стратегий',
    'Уникальный подход к каждому проекту',
    'Быстрое выполнение заказов любой сложности',
    'Неограниченное количество правок до полного утверждения',
    'Понимание тенденций современного дизайна'
  ];

  const stats = [
    { icon: Trophy, value: '100+', label: 'проектов', color: 'from-brand-orange to-brand-amber' },
    { icon: Calendar, value: '1+', label: 'год опыта', color: 'from-brand-indigo to-brand-azure' },
    { icon: Award, value: '90%', label: 'повторных обращений', color: 'from-brand-teal to-brand-green' },
    { icon: Clock, value: '24/7', label: 'поддержка клиентов', color: 'from-brand-violet to-brand-purple' }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent z-10"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title text-center">
            <span className="gradient-text from-brand-indigo to-brand-purple">Обо мне</span>
          </h2>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row items-center gap-12 mt-12">
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-xl shadow-xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-brand-yellow opacity-10 rounded-full transform translate-x-10 -translate-y-10"></div>
              
              <div className="flex items-start gap-6 mb-8">
                <div className="relative">
                  <img 
                    alt="Uncle Ivan" 
                    className="w-24 h-24 rounded-full border-4 border-brand-red shadow-lg" 
                    src="/lovable-uploads/c1b431b3-f138-4d2c-9f26-0e1e7b85e626.jpg" 
                  />
                  <motion.div 
                    className="absolute -bottom-2 -right-2 bg-white rounded-full p-1 shadow-md"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  >
                    <div className="bg-green-500 w-4 h-4 rounded-full"></div>
                  </motion.div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-2">Иван</h3>
                  <div className="flex items-center">
                    <Globe className="w-4 h-4 text-gray-500 mr-2" />
                    <p className="text-gray-600">Графический дизайнер</p>
                  </div>
                </div>
              </div>
              
              <p className="text-lg mb-6">
                Я, Иван, занимаюсь дизайном более года, выполнил 300+ работ. Специализация: графический дизайн. 
                Мои преимущества: точность, прагматизм, эффективность, проницательность.
                Работаю с брендами любого масштаба - от стартапов до крупных компаний.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className={`stat-badge bg-gradient-to-r ${stat.color}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <stat.icon className="w-8 h-8 text-white mr-3" />
                    <div className="flex flex-col">
                      <span className="text-xl font-bold text-white">{stat.value}</span>
                      <span className="text-xs text-white/80">{stat.label}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <Button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full bg-gradient-to-r from-brand-red to-brand-brick text-white hover:opacity-90 transition-opacity"
                >
                  Связаться для консультации
                </Button>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-xl shadow-xl p-8 h-full">
              <h3 className="text-2xl font-bold mb-6">Мои преимущества</h3>
              
              <ul className="space-y-4">
                {advantages.map((item, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start group"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="p-1 rounded-full bg-gradient-to-r from-brand-teal to-brand-blue transition-all duration-300 group-hover:scale-110 mr-3 flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
              
              <div className="mt-8 pt-6 border-t border-gray-100">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  viewport={{ once: true }}
                  className="p-6 bg-gradient-to-r from-brand-indigo/10 to-brand-blue/5 rounded-lg"
                >
                  <h4 className="font-bold mb-2 flex items-center">
                    <Award className="w-5 h-5 mr-2 text-brand-blue" />
                    Профессиональный подход
                  </h4>
                  <p className="text-gray-700">
                    Каждый проект - это не просто работа, а возможность создать что-то уникальное, что поможет вашему бизнесу выделиться среди конкурентов и достичь новых высот.
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
