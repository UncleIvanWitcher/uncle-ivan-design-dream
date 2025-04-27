import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Info, Check, Award, TrendingUp } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const SkillsSection: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);
  
  const skills = [{
    name: 'Adobe After Effects',
    color: 'from-brand-turquoise to-brand-blue',
    description: 'Анимация и визуальные эффекты',
    icon: "/lovable-uploads/de1c8367-ebbd-4363-b0c9-36e789c3bd6b.png"
  }, {
    name: 'Adobe Photoshop',
    color: 'from-brand-blue to-brand-indigo',
    description: 'Обработка изображений и фото',
    icon: "/lovable-uploads/e8983e8c-e632-4964-9cba-f7e91051ba01.png"
  }, {
    name: 'Adobe Illustrator',
    color: 'from-brand-gold to-brand-orange',
    description: 'Векторная графика и иллюстрации',
    icon: "/lovable-uploads/fd99123f-1b4a-4584-911c-9f23c8299775.png"
  }, {
    name: 'Figma',
    color: 'from-brand-violet to-brand-blue',
    description: 'UI/UX дизайн и прототипирование',
    icon: "/lovable-uploads/6209f4c4-bd6f-4f60-9e55-e9910e744947.png"
  }];

  const expertiseAreas = [
    {
      title: 'Брендинг и Айдентика',
      description: 'Создание уникальных визуальных идентичностей, которые выделяют бренд на рынке',
      color: 'from-brand-red to-brand-brick',
      stats: '100+ брендов'
    }, 
    {
      title: 'Графический Дизайн',
      description: 'Разработка привлекательных визуальных материалов для печати и цифровых платформ',
      color: 'from-brand-gold to-brand-orange',
      stats: '200+ работ'
    }, 
    {
      title: 'Маркетинговые Материалы',
      description: 'Дизайн, который помогает достигать конкретных бизнес-целей и увеличивать продажи',
      color: 'from-brand-blue to-brand-indigo',
      stats: '+40% конверсия'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 relative overflow-hidden">
      <motion.div 
        className="absolute inset-0 bg-gradient-radial from-white to-transparent opacity-80"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ duration: 1 }}
      ></motion.div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title text-center">
            <span className="gradient-text from-brand-indigo to-brand-teal">Инструменты</span>
          </h2>
          
          <p className="text-xl text-center max-w-2xl mx-auto mb-12">
            Инструменты, которые превращают идеи в бренды
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-10">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredSkill(index)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <Card className="group hover:shadow-xl transition-all duration-300 border-none bg-white overflow-hidden">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-full mb-6">
                    <div className={`h-3 w-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-300 group-hover:h-4`}></div>
                  </div>
                  
                  {skill.icon && (
                    <motion.div 
                      className="mb-4 w-16 h-16 flex items-center justify-center"
                      animate={{ 
                        scale: hoveredSkill === index ? 1.1 : 1,
                        rotate: hoveredSkill === index ? 5 : 0
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <img 
                        src={skill.icon} 
                        alt={skill.name} 
                        className="max-w-full max-h-full object-contain" 
                      />
                    </motion.div>
                  )}
                  
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-bold text-gray-800">{skill.name}</h3>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <Info className="w-4 h-4 text-gray-400 hover:text-gray-600 transition-colors" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{skill.description}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20">
          <motion.h3 
            className="text-2xl font-bold text-center mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Области экспертности
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {expertiseAreas.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-none bg-white h-full">
                  <CardContent className="p-6 h-full flex flex-col">
                    <div className={`h-2 w-24 bg-gradient-to-r ${skill.color} rounded-full mb-4`}></div>
                    <h4 className="text-xl font-bold mb-3">{skill.title}</h4>
                    <p className="text-gray-600 mb-auto">{skill.description}</p>
                    <div className="flex items-center mt-4 text-gray-700 font-medium">
                      <Award className="w-5 h-5 mr-2 text-brand-red" />
                      {skill.stats}
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

export default SkillsSection;
