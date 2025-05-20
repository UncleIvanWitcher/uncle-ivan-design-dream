
import React from 'react';
import { ExternalLink, TrendingUp, ArrowRight, Check, Palette, Layout, Link } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const CaseStudySection: React.FC = () => {
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
          className="bg-white rounded-2xl shadow-xl overflow-hidden mt-12 mb-20"
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
              <motion.div 
                className="p-8 transform" 
                whileHover={{
                  scale: 1.05
                }} 
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }}
              >
                <img 
                  src="/lovable-uploads/30ec6484-b3cd-47d0-922b-1245672d998e.png" 
                  alt="Pocus Moscow" 
                  className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 w-full h-auto object-cover"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
        
        <div className="mb-16">
          <motion.div 
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.7}}
            viewport={{once: true}}
            className="text-center"
          >
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
              <span className="gradient-text from-brand-purple to-brand-blue">Моё портфолио</span>
            </h3>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Просмотрите мои работы, чтобы увидеть примеры брендинга, векторной графики и других проектов
            </p>
            
            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="inline-block"
            >
              <a 
                href="https://disk.yandex.ru/d/Q70OoPQnExvytg" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group"
              >
                <Button variant="default" size="lg" className="bg-gradient-to-r from-brand-indigo to-brand-purple hover:shadow-lg transition-all duration-300 text-lg px-8 py-6 h-auto">
                  <Link className="mr-2 w-5 h-5" />
                  Посмотреть портфолио
                  <motion.span 
                    className="inline-block ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ 
                      repeat: Infinity, 
                      repeatType: "loop", 
                      duration: 1.5,
                      ease: "easeInOut" 
                    }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.span>
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>
        
        <div className="mt-16">
          <motion.h3 
            className="text-3xl font-bold mb-6 text-center"
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.5}}
            viewport={{once: true}}
          >
            <span className="gradient-text from-brand-red to-brand-orange">Услуги</span>
          </motion.h3>
          
          <motion.p
            className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto"
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.5, delay: 0.2}}
            viewport={{once: true}}
          >
            Предлагаю широкий спектр услуг в сфере графического дизайна и брендинга, 
            чтобы помочь вашему бизнесу выделиться на рынке
          </motion.p>
          
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
                    <div className="flex items-center gap-3 mb-5">
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
                    
                    <motion.div 
                      className="mt-auto pt-4"
                      whileHover={{ scale: 1.03 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <a 
                        href="#contact" 
                        className={`inline-flex items-center font-medium py-2 px-4 rounded-md bg-white border border-gray-200 hover:border-transparent hover:bg-gradient-to-r ${service.color} hover:text-white transition-colors duration-300`}
                      >
                        Заказать услугу <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="mt-16 text-center"
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.6}}
            viewport={{once: true}}
          >
            <a 
              href="https://t.me/UncleIvanWitcher" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gradient-to-r from-brand-orange to-brand-red text-white font-medium py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Обсудить индивидуальный проект <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
