
import React from 'react';
import { Calendar, CheckCircle, Trophy, Clock, Award, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const AboutSection: React.FC = () => {
  const advantages = [
    'Стратегический подход к каждому проекту — анализируем рынок и конкурентов',
    'Глубокое погружение в бизнес клиента для создания релевантных решений',
    'Уникальная айдентика, которая выделяет бренд среди конкурентов',
    'Комплексный подход: от логотипа до полного фирменного стиля',
    'Неограниченное количество правок до полного утверждения результата',
    'Постпроектное сопровождение и консультации по развитию бренда'
  ];

  const stats = [
    { icon: Trophy, value: '1', label: 'сильный проект', color: 'from-[hsl(var(--brand-secondary))] to-[hsl(var(--brand-secondary)/0.8)]' },
    { icon: Calendar, value: '2+', label: 'года опыта', color: 'from-[hsl(var(--brand-tertiary))] to-[hsl(var(--brand-tertiary)/0.8)]' },
    { icon: Award, value: '100%', label: 'качество работ', color: 'from-[hsl(var(--brand-primary))] to-[hsl(var(--brand-primary)/0.8)]' },
    { icon: Clock, value: '24/7', label: 'поддержка', color: 'from-[hsl(var(--brand-quaternary))] to-[hsl(var(--brand-quaternary)/0.8)]' }
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
            <span className="gradient-text from-[hsl(var(--brand-quaternary))] to-[hsl(var(--brand-tertiary))]">Обо мне</span>
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
                    className="w-24 h-24 rounded-full border-4 border-brand-red shadow-lg object-cover" 
                    src="/lovable-uploads/5405f1cb-6f28-4eed-9b97-3435cc723e5b.png" 
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
                  <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-brand-red to-brand-orange bg-clip-text text-transparent">Uncle Ivan</h3>
                  <div className="flex items-center mb-2">
                    <Globe className="w-4 h-4 text-gray-500 mr-2" />
                    <p className="text-gray-600 font-medium">Графический дизайнер & Бренд-стратег</p>
                  </div>
                  <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-brand-blue/10 to-brand-indigo/10 rounded-full">
                    <span className="text-sm font-semibold text-brand-blue">Основатель UncleIvan Inc.</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <p className="text-lg font-medium text-gray-800 leading-relaxed">
                  Привет! Меня зовут Иван, и я основатель креативной студии <span className="font-bold text-brand-red">UncleIvan Inc.</span> 
                  Я занимаюсь созданием брендов, которые остаются в памяти и работают на результат.
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  За свою карьеру я понял: успешный бренд — это не просто красивая картинка. Это система, которая 
                  решает реальные бизнес-задачи. Моя команда и я создаём айдентику, которая увеличивает продажи 
                  и формирует лояльность клиентов.
                </p>
                
                <div className="bg-gradient-to-r from-brand-yellow/20 to-brand-orange/10 rounded-lg p-4 border-l-4 border-brand-orange">
                  <p className="text-gray-800 font-medium">
                    <strong>Наша философия:</strong> Один сильный проект лучше сотни посредственных. 
                    Мы работаем с каждым клиентом как с единственным, вкладывая максимум креатива и экспертизы.
                  </p>
                </div>
              </div>
              
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
                      <span className="text-sm text-white/90">{stat.label}</span>
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
                  onClick={() => document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full bg-[hsl(var(--brand-primary))] text-white hover:bg-[hsl(var(--brand-primary)/0.9)] transition-all duration-300 hover:scale-105 shadow-lg"
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
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-brand-purple to-brand-blue bg-clip-text text-transparent">
                Почему выбирают нас
              </h3>
              
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
                  <h4 className="font-bold mb-3 flex items-center text-lg">
                    <Award className="w-6 h-6 mr-2 text-brand-blue" />
                    UncleIvan Inc. — Больше чем дизайн
                  </h4>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Мы не просто создаём красивые логотипы. Мы выстраиваем стратегию бренда, которая 
                    увеличивает узнаваемость, доверие клиентов и, как следствие, прибыль бизнеса.
                  </p>
                  <p className="text-sm text-gray-600 font-medium">
                    💡 Каждый бренд уникален, поэтому каждое решение создаётся с нуля под конкретные задачи и целевую аудиторию.
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
