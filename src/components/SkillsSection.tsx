
import React from 'react';

const SkillsSection: React.FC = () => {
  const skills = [{
    name: 'Figma',
    icon: '/lovable-uploads/518f6874-421a-4766-9af5-779997962ca5.png',
    color: 'from-brand-purple to-brand-blue'
  }, {
    name: 'Adobe Illustrator',
    icon: '/lovable-uploads/8e3478c2-85c6-4da9-a14e-5554a379e79b.png',
    color: 'from-brand-orange to-brand-yellow'
  }, {
    name: 'Adobe Photoshop',
    icon: '/lovable-uploads/024f7577-2127-4fc3-80c6-46f7dc80ee6d.png',
    color: 'from-brand-blue to-brand-green'
  }, {
    name: 'After Effects',
    icon: '/lovable-uploads/7975a273-de24-4c2f-855d-fb53b9b8896a.png',
    color: 'from-brand-purple to-brand-darkpurple'
  }];
  
  return <section id="skills" className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-white to-transparent opacity-80"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="section-title text-center">
          <span className="gradient-text from-brand-blue to-brand-green">Инструменты</span>
        </h2>
        
        <p className="text-xl text-center max-w-2xl mx-auto mb-12">
          Инструменты, которые превращают идеи в бренды.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
          {skills.map((skill, index) => (
            <div key={index} className="icon-box group flex flex-col items-center text-center">
              <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-4 bg-white shadow-lg p-4 group-hover:shadow-xl transition-all duration-300`}>
                <img 
                  src={skill.icon} 
                  alt={skill.name} 
                  className="w-12 h-12 object-contain" 
                />
              </div>
              <div className={`h-1 w-16 rounded-full bg-gradient-to-r ${skill.color} mb-3 group-hover:w-24 transition-all duration-300`}></div>
              <h3 className="text-lg font-bold">{skill.name}</h3>
            </div>
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
            color: 'from-brand-yellow to-brand-orange'
          }, {
            title: 'Маркетинговые Материалы',
            description: 'Дизайн, который помогает достигать конкретных бизнес-целей и увеличивать продажи',
            color: 'from-brand-blue to-brand-green'
          }].map((skill, index) => <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className={`h-2 w-24 bg-gradient-to-r ${skill.color} rounded-full mb-4`}></div>
                <h4 className="text-xl font-bold mb-3">{skill.title}</h4>
                <p className="text-gray-600">{skill.description}</p>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};

export default SkillsSection;
