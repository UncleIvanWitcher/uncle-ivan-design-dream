
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Info } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const SkillsSection: React.FC = () => {
  const skills = [{
    name: 'Adobe After Effects',
    color: 'from-brand-turquoise to-brand-blue',
    description: 'Анимация и визуальные эффекты'
  }, {
    name: 'Adobe Illustrator',
    color: 'from-brand-gold to-brand-orange',
    description: 'Векторная графика и иллюстрации'
  }, {
    name: 'Figma',
    color: 'from-brand-violet to-brand-blue',
    description: 'UI/UX дизайн и прототипирование'
  }, {
    name: 'Adobe Photoshop',
    color: 'from-brand-blue to-brand-indigo',
    description: 'Обработка изображений и фото'
  }];

  return (
    <section id="skills" className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-white to-transparent opacity-80"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="section-title text-center">
          <span className="gradient-text from-brand-indigo to-brand-teal">Инструменты</span>
        </h2>
        
        <p className="text-xl text-center max-w-2xl mx-auto mb-12">
          Инструменты, которые превращают идеи в бренды
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-10">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group hover:shadow-xl transition-all duration-300 border-none bg-white overflow-hidden">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-full mb-6">
                    <div className={`h-3 w-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-300 group-hover:h-4`}></div>
                  </div>
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
          <h3 className="text-2xl font-bold text-center mb-8">Области экспертности</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[{
            title: 'Брендинг и Айдентика',
            description: 'Создание уникальных визуальных идентичностей, которые выделяют бренд на рынке',
            color: 'from-brand-red to-brand-brick'
          }, {
            title: 'Графический Дизайн',
            description: 'Разработка привлекательных визуальных материалов для печати и цифровых платформ',
            color: 'from-brand-gold to-brand-orange'
          }, {
            title: 'Маркетинговые Материалы',
            description: 'Дизайн, который помогает достигать конкретных бизнес-целей и увеличивать продажи',
            color: 'from-brand-blue to-brand-indigo'
          }].map((skill, index) => <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-none bg-white">
                  <CardContent className="p-6">
                    <div className={`h-2 w-24 bg-gradient-to-r ${skill.color} rounded-full mb-4`}></div>
                    <h4 className="text-xl font-bold mb-3">{skill.title}</h4>
                    <p className="text-gray-600">{skill.description}</p>
                  </CardContent>
                </Card>)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
