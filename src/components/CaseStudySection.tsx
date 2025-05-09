import React, { useState } from 'react';
import { ExternalLink, TrendingUp, ArrowRight, Check, Palette, Layout } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { motion } from 'framer-motion';

const CaseStudySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'branding' | 'vector' | 'digital'>('all');
  
  const portfolioItems = [{
    id: 1,
    title: 'Векторная иллюстрация',
    image: '/lovable-uploads/fa5f2de1-c599-435b-90a3-a16db37fe170.png',
    category: 'vector'
  }, {
    id: 2,
    title: 'Дизайн персонажа',
    image: '/lovable-uploads/cbbf1e7b-c102-44e2-8388-7850a0868672.png',
    category: 'vector'
  }, {
    id: 3,
    title: 'Брендинг',
    image: '/lovable-uploads/33c4ac0c-bda1-4f2e-b863-5d9464fc66c0.png',
    category: 'branding'
  }, {
    id: 4,
    title: 'Векторная графика',
    image: '/lovable-uploads/028266e0-8fe9-43fb-bf7b-a906baa2bc01.png',
    category: 'vector'
  }, {
    id: 5,
    title: 'Иллюстрация',
    image: '/lovable-uploads/70eaf3c6-e160-4b6b-a5a4-5cb5ecf683d3.png',
    category: 'vector'
  }, {
    id: 6,
    title: 'Дизайн логотипа',
    image: '/lovable-uploads/a0dea25d-4619-4c1c-bb7c-dc2e941fcee8.png',
    category: 'branding'
  }];
  
  const filteredItems = activeTab === 'all' ? portfolioItems : portfolioItems.filter(item => item.category === activeTab);
  
  const services = [
    {
      title: 'Брендинг',
      description: 'Разработка целостной визуальной идентичности, которая выделяет бренд на рынке',
      icon: Palette,
      color: 'from-brand-orange to-brand-red',
      features: ['Логотип', 'Цветовая схема', 'Типографика', 'Руководство по стилю'],
      bgClass: 'bg-gradient-to-br from-amber-50 to-orange-50'
    }, 
    {
      title: 'Векторная графика',
      description: 'Создание масштабируемых векторных иллюстраций и графических элементов',
      icon: Layout,
      color: 'from-brand-indigo to-brand-violet',
      features: ['Иллюстрации', 'Иконки', 'Инфографика', 'Технические чертежи'],
      bgClass: 'bg-gradient-to-br from-blue-50 to-indigo-50'
    }, 
    {
      title: 'Графический дизайн',
      description: 'Создание визуальных материалов, которые эффективно передают сообщение бренда',
      icon: Layout,
      color: 'from-brand-turquoise to-brand-blue',
      features: ['Логотипы', 'Иллюстрации', 'Баннеры', 'Цифровые ресурсы'],
      bgClass: 'bg-gradient-to-br from-teal-50 to-cyan-50'
    }
  ];

  return (
    <section id="portfolio" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{opacity: 0, y: 30}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.7}}
          viewport={{once: true}}
        >
          <h2 className="section-title text-center">
            <span className="gradient-text from-brand-orange to-brand-yellow text-fuchsia-300">Кейс-стади</span>
          </h2>
        </motion.div>
        
        <motion.div 
          className="bg-white rounded-2xl shadow-xl overflow-hidden mt-12"
          initial={{opacity: 0, y: 40}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.7, delay: 0.2}}
          viewport={{once: true}}
          whileHover={{boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"}}
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
              <motion.div className="grid grid-cols-2 gap-4 p-8 transform" whileHover={{
              scale: 1.05
            }} transition={{
              type: "spring",
              stiffness: 300,
              damping: 20
            }}>
                <img src="/lovable-uploads/7974d94d-9815-47bc-8f99-2452fbc93db1.png" alt="Pocus Moscow" className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 w-full h-auto object-cover" />
                <img src="/lovable-uploads/5e992c69-26e7-4020-bc0f-b9ae8a22a258.png" alt="Pocus Moscow Logo" className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 w-full h-auto object-cover" />
                <img src="/lovable-uploads/b272c2be-69dd-42d2-b753-3ec20fd016c9.png" alt="Pocus Moscow Design" className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 w-full h-auto object-cover col-span-2" />
              </motion.div>
            </div>
          </div>
        </motion.div>
        
        <motion.h3 
          className="text-3xl font-bold mt-16 mb-4 text-center"
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{duration: 0.5, delay: 0.3}}
          viewport={{once: true}}
        >
          <span className="gradient-text from-brand-purple to-brand-blue">Портфолио</span>
        </motion.h3>
        
        <div className="flex justify-center mb-8">
          <div className="flex gap-2 bg-gray-100 p-1 rounded-lg">
            {[{
            id: 'all',
            label: 'Все работы'
          }, {
            id: 'branding',
            label: 'Брендинг'
          }, {
            id: 'vector',
            label: 'Вектор'
          }, {
            id: 'digital',
            label: 'Цифровой дизайн'
          }].map(tab => <button key={tab.id} onClick={() => setActiveTab(tab.id as any)} className={`px-4 py-2 rounded-lg transition-all ${activeTab === tab.id ? 'bg-white shadow-sm font-medium' : 'hover:bg-white/50'}`}>
                {tab.label}
              </button>)}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredItems.map((item, index) => <motion.div key={item.id} layout initial={{
          opacity: 0,
          scale: 0.9
        }} animate={{
          opacity: 1,
          scale: 1
        }} exit={{
          opacity: 0,
          scale: 0.9
        }} transition={{
          duration: 0.5,
          delay: index * 0.1
        }}>
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 h-full bg-white">
                <div className="w-full h-64 relative bg-white flex items-center justify-center p-4">
                  <img src={item.image} alt={item.title} className="max-w-full max-h-full object-contain" />
                </div>
                <CardContent className="p-4">
                  <h4 className="font-medium">{item.title}</h4>
                  <div className="mt-2">
                    <span className="inline-block px-2 py-1 bg-gray-100 text-xs rounded-full">
                      {item.category === 'branding' ? 'Брендинг' : item.category === 'vector' ? 'Вектор' : 'Цифровой дизайн'}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>)}
        </div>
        
        <div className="mt-16">
          <motion.h3 
            className="text-3xl font-bold mb-12 text-center"
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.5}}
            viewport={{once: true}}
          >
            <span className="gradient-text from-brand-red to-brand-orange">Услуги</span>
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                initial={{opacity: 0, y: 30}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.6, delay: index * 0.2}}
                viewport={{once: true}}
                whileHover={{y: -10}}
              >
                <Card className={`rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 h-full flex flex-col border-0 ${service.bgClass}`}>
                  <div className="p-1">
                    <div className={`h-2 w-full rounded-t-xl bg-gradient-to-r ${service.color}`}></div>
                  </div>
                  
                  <CardContent className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-br ${service.color}`}>
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-xl font-bold">{service.title}</h4>
                    </div>
                    
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    
                    <div className="bg-white/70 rounded-lg p-4 mb-6 backdrop-blur-sm">
                      <h5 className="text-sm uppercase text-gray-500 font-medium mb-3">Включает</h5>
                      <ul className="space-y-3 mt-auto">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center text-gray-700">
                            <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center mr-3 shrink-0`}>
                              <Check className="w-4 h-4 text-white" />
                            </div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mt-auto pt-4">
                      <a 
                        href="#contact" 
                        className={`inline-flex items-center font-medium py-2 px-4 rounded-md bg-white border border-gray-200 hover:border-transparent hover:bg-gradient-to-r ${service.color} hover:text-white transition-colors duration-300`}
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
