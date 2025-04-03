
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const SkillsSection: React.FC = () => {
  const skills = [{
    name: 'Adobe After Effects',
    icon: '/lovable-uploads/b1dfde2b-8eae-476f-b951-f5c4843df5c0.png',
    color: 'from-brand-turquoise to-brand-blue'
  }, {
    name: 'Adobe Illustrator',
    icon: '/lovable-uploads/c09b5100-cf2d-41ba-87dd-41a5ed93ce07.png',
    color: 'from-brand-gold to-brand-orange'
  }, {
    name: 'Figma',
    icon: '/lovable-uploads/90557acf-bdbe-4348-be07-01f9ec876b1b.png',
    color: 'from-brand-violet to-brand-blue'
  }, {
    name: 'Adobe Photoshop',
    icon: '/lovable-uploads/4ab1ba55-747e-480a-8806-3c4acc723d77.png',
    color: 'from-brand-blue to-brand-indigo'
  }];

  return <section id="skills" className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-white to-transparent opacity-80"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="section-title text-center">
          <span className="gradient-text from-brand-indigo to-brand-teal">Инструменты</span>
        </h2>
        
        <p className="text-xl text-center max-w-2xl mx-auto mb-12">
          Инструменты, которые превращают идеи в бренды
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-10">
          {skills.map((skill, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-none bg-white overflow-hidden">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="h-16 w-16 mb-4 flex items-center justify-center">
                  <img 
                    src={skill.icon} 
                    alt={skill.name} 
                    className="w-full h-full object-contain" 
                  />
                </div>
                <div className={`h-1 w-16 rounded-full bg-gradient-to-r ${skill.color} mb-4 group-hover:w-24 transition-all duration-300`}></div>
                <h3 className="text-lg font-bold">{skill.name}</h3>
              </CardContent>
            </Card>
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
          }].map((skill, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-none bg-white">
                  <CardContent className="p-6">
                    <div className={`h-2 w-24 bg-gradient-to-r ${skill.color} rounded-full mb-4`}></div>
                    <h4 className="text-xl font-bold mb-3">{skill.title}</h4>
                    <p className="text-gray-600">{skill.description}</p>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </div>
    </section>;
};

export default SkillsSection;
