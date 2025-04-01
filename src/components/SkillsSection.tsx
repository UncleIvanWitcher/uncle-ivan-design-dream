
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const SkillsSection: React.FC = () => {
  const skills = [{
    name: 'Adobe After Effects',
    icon: '/lovable-uploads/468aaa48-4bf7-42e7-b317-fc3b8bd80d4a.png',
    color: 'from-[#9999FF] to-[#5151ff]'
  }, {
    name: 'Adobe Illustrator',
    icon: '/lovable-uploads/87d2be4d-d52d-4cbe-87aa-560e30d1da31.png',
    color: 'from-[#FF9A00] to-[#c97800]'
  }, {
    name: 'Figma',
    icon: '/lovable-uploads/9cf4adc9-57a1-430a-8dbd-ff2178e02858.png',
    color: 'from-[#FF5555] to-[#19BCFE]'
  }, {
    name: 'Adobe Photoshop',
    icon: '/lovable-uploads/b0e7507a-306f-4181-91f2-d1a85016a759.png',
    color: 'from-[#00C8FF] to-[#0088cc]'
  }];

  return <section id="skills" className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-white to-transparent opacity-80"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="section-title text-center">
          <span className="gradient-text from-brand-blue to-brand-green">Инструменты</span>
        </h2>
        
        <p className="text-xl text-center max-w-2xl mx-auto mb-12">
          Инструменты, которые превращают идеи в бренды
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-10">
          {skills.map((skill, index) => <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-none bg-white overflow-hidden">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-xl flex items-center justify-center mb-6 p-4 group-hover:scale-110 transition-all duration-300">
                  <img 
                    src={skill.icon} 
                    alt={skill.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className={`h-1 w-16 rounded-full bg-gradient-to-r ${skill.color} mb-4 group-hover:w-24 transition-all duration-300`}></div>
                <h3 className="text-lg font-bold">{skill.name}</h3>
              </CardContent>
            </Card>)}
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
            color: 'from-brand-yellow to-brand-orange'
          }, {
            title: 'Маркетинговые Материалы',
            description: 'Дизайн, который помогает достигать конкретных бизнес-целей и увеличивать продажи',
            color: 'from-brand-blue to-brand-green'
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
    </section>;
};

export default SkillsSection;
