import React from 'react';
import { Calendar, CheckCircle, Trophy } from 'lucide-react';
const AboutSection: React.FC = () => {
  return <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent z-10"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="section-title text-center">
          <span className="gradient-text from-brand-purple to-brand-darkpurple">Обо мне</span>
        </h2>
        
        <div className="flex flex-col lg:flex-row items-center gap-12 mt-12">
          <div className="flex-1">
            <div className="bg-white rounded-xl shadow-xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-brand-yellow opacity-10 rounded-full transform translate-x-10 -translate-y-10"></div>
              
              <div className="flex items-start gap-6 mb-8">
                <img alt="Uncle Ivan" className="w-24 h-24 rounded-full border-4 border-brand-red shadow-lg" src="/lovable-uploads/c1b431b3-f138-4d2c-9f26-0e1e7b85e626.jpg" />
                <div>
                  <h3 className="text-2xl font-bold mb-2">Иван</h3>
                  <p className="text-gray-600">Графический дизайнер</p>
                </div>
              </div>
              
              <p className="text-lg mb-6">Я, Иван, занимаюсь дизайном более года, выполнил 400+ работ. Специализация: графический дизайн. Мои преимущества: точность, прагматизм, эффективность, проницательность.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="stat-badge bg-gradient-to-r from-brand-yellow to-brand-orange">
                  <Trophy className="w-8 h-8 text-white mr-3" />
                  <span className="text-xl font-bold text-white">100+ проектов</span>
                </div>
                <div className="stat-badge bg-gradient-to-r from-brand-blue to-brand-green">
                  <Calendar className="w-8 h-8 text-white mr-3" />
                  <span className="text-xl font-bold text-white">1+ год опыта</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex-1">
            <div className="bg-white rounded-xl shadow-xl p-8 h-full">
              <h3 className="text-2xl font-bold mb-6">Мои преимущества</h3>
              
              <ul className="space-y-4">
                {['Точное следование брифу и техническому заданию', 'Глубокое понимание маркетинговых стратегий', 'Уникальный подход к каждому проекту', 'Быстрое выполнение заказов любой сложности', 'Неограниченное количество правок до полного утверждения', 'Понимание тенденций современного дизайна'].map((item, index) => <li key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-brand-green mt-1 mr-3 flex-shrink-0" />
                    <span>{item}</span>
                  </li>)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;