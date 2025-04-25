
import React, { useState } from 'react';
import { ExternalLink, TrendingUp, ArrowRight, Check } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { motion } from 'framer-motion';

const CaseStudySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'branding' | 'print' | 'digital'>('all');
  
  const portfolioItems = [
    {
      id: 1,
      title: 'Логотип для ресторана',
      image: '/lovable-uploads/269c4c24-d0db-4bb0-912c-fe5cd1f455cf.png',
      category: 'branding'
    },
    {
      id: 2,
      title: 'Дизайн концепции',
      image: '/lovable-uploads/ad382bbc-1202-49e6-8da0-c7bf26537e46.png',
      category: 'print'
    },
    {
      id: 3,
      title: 'Пиксельная иллюстрация',
      image: '/lovable-uploads/4c1b5c9d-6ed1-440a-928d-44c6c8a40f7a.png',
      category: 'digital'
    },
    {
      id: 4,
      title: 'Маркетинговые материалы',
      image: '/lovable-uploads/3c127fba-d34a-4258-bcf3-0d66d201bf11.png',
      category: 'print'
    },
    {
      id: 5,
      title: 'Брендбук для стартапа',
      image: '/lovable-uploads/604c8239-7753-4aa0-934b-87425532e774.png',
      category: 'branding'
    },
    {
      id: 6,
      title: 'Дизайн упаковки',
      image: '/lovable-uploads/842f0a3f-1b50-4435-b31b-6bdc54a5f95f.png',
      category: 'print'
    }
  ];
  
  const filteredItems = activeTab === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeTab);
  
  const services = [
    {
      title: 'Графический дизайн',
      description: 'Создание визуальных материалов, которые эффективно передают сообщение бренда',
      image: '/lovable-uploads/3c127fba-d34a-4258-bcf3-0d66d201bf11.png',
      features: ['Логотипы', 'Иллюстрации', 'Макеты для печати', 'Цифровые ресурсы']
    },
    {
      title: 'Брендинг',
      description: 'Разработка целостной визуальной идентичности, которая выделяет бренд на рынке',
      image: '/lovable-uploads/604c8239-7753-4aa0-934b-87425532e774.png',
      features: ['Логотип', 'Цветовая схема', 'Типографика', 'Руководство по стилю']
    },
    {
      title: 'Дизайн печатных материалов',
      description: 'Создание эффективных печатных материалов для маркетинговых кампаний',
      image: '/lovable-uploads/842f0a3f-1b50-4435-b31b-6bdc54a5f95f.png',
      features: ['Визитки', 'Брошюры', 'Плакаты', 'Упаковка']
    }
  ];

  return (
    <section id="portfolio" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title text-center">
            <span className="gradient-text from-brand-orange to-brand-yellow text-fuchsia-300">Кейс-стади</span>
          </h2>
        </motion.div>
        
        <motion.div 
          className="bg-white rounded-2xl shadow-xl overflow-hidden mt-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          whileHover={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-12">
              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-blue-50 text-brand-blue rounded-full text-sm font-medium mb-4">Успешный проект</span>
                <h3 className="text-3xl font-bold mb-4">Pocus Moscow</h3>
                <p className="text-xl text-gray-600 mb-6">
                  Ребрендинг, который увеличил узнаваемость и повысил продажи
                </p>
                
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="stat-badge bg-gradient-to-r from-brand-orange to-brand-amber">
                    <TrendingUp className="w-6 h-6 text-white mr-2" />
                    <span className="text-lg font-bold text-white">+40% аудитории</span>
                  </div>
                  <div className="stat-badge bg-gradient-to-r from-brand-indigo to-brand-azure">
                    <TrendingUp className="w-6 h-6 text-white mr-2" />
                    <span className="text-lg font-bold text-white">+25% продаж</span>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6">
                  Проект для Pocus Moscow включал полное обновление визуальной идентичности бренда, 
                  создание запоминающегося логотипа и разработку маркетинговых материалов, 
                  которые помогли компании выделиться на рынке и привлечь новую аудиторию.
                </p>
                
                <a href="https://t.me/UncleIvanWitcher" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-brand-red hover:text-brand-brick font-bold transition-colors">
                  Заказать подобный проект <ExternalLink className="w-5 h-5 ml-2" />
                </a>
              </div>
            </div>
            
            <div className="relative overflow-hidden bg-gradient-to-r from-gray-100 to-gray-200 flex items-center justify-center">
              <motion.div 
                className="grid grid-cols-2 gap-4 p-8 transform"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <img src="/lovable-uploads/7974d94d-9815-47bc-8f99-2452fbc93db1.png" alt="Pocus Moscow" className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 w-full h-auto object-cover" />
                <img src="/lovable-uploads/5e992c69-26e7-4020-bc0f-b9ae8a22a258.png" alt="Pocus Moscow Logo" className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 w-full h-auto object-cover" />
                <img src="/lovable-uploads/b272c2be-69dd-42d2-b753-3ec20fd016c9.png" alt="Pocus Moscow Design" className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 w-full h-auto object-cover col-span-2" />
              </motion.div>
            </div>
          </div>
        </motion.div>
        
        <motion.h3 
          className="text-3xl font-bold mt-16 mb-4 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <span className="gradient-text from-brand-purple to-brand-blue">Портфолио</span>
        </motion.h3>
        
        <div className="flex justify-center mb-8">
          <div className="flex gap-2 bg-gray-100 p-1 rounded-lg">
            {[
              { id: 'all', label: 'Все работы' },
              { id: 'branding', label: 'Брендинг' },
              { id: 'print', label: 'Печать' },
              { id: 'digital', label: 'Цифровой дизайн' }
            ].map(tab => (
              <button 
                key={tab.id} 
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded-lg transition-all ${activeTab === tab.id ? 'bg-white shadow-sm font-medium' : 'hover:bg-white/50'}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 h-full">
                <AspectRatio ratio={4/5}>
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="object-cover w-full h-full"
                  />
                </AspectRatio>
                <CardContent className="p-4">
                  <h4 className="font-medium">{item.title}</h4>
                  <div className="mt-2">
                    <span className="inline-block px-2 py-1 bg-gray-100 text-xs rounded-full">
                      {item.category === 'branding' ? 'Брендинг' : 
                       item.category === 'print' ? 'Печать' : 'Цифровой дизайн'}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16">
          <motion.h3 
            className="text-3xl font-bold mb-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="gradient-text from-brand-red to-brand-orange">Услуги</span>
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 h-full flex flex-col">
                  <AspectRatio ratio={16/9}>
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </AspectRatio>
                  
                  <CardContent className="p-6 flex flex-col flex-grow">
                    <h4 className="text-xl font-bold mb-3">{service.title}</h4>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    
                    <ul className="space-y-2 mt-auto">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-gray-700">
                          <Check className="w-4 h-4 text-brand-green mr-2" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-6 pt-4 border-t border-gray-100">
                      <a 
                        href="#contact" 
                        className="inline-flex items-center text-brand-blue hover:text-brand-indigo font-medium"
                      >
                        Заказать услугу <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
