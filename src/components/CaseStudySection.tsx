
import React from 'react';
import { ExternalLink, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const CaseStudySection: React.FC = () => {
  return <section id="portfolio" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="section-title text-center">
          <span className="gradient-text from-brand-orange to-brand-yellow text-fuchsia-300">Кейс-стади</span>
        </h2>
        
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-12">
              <div className="mb-6">
                <h3 className="text-3xl font-bold mb-4">Pocus Moscow</h3>
                <p className="text-xl text-gray-600 mb-6">
                  Ребрендинг, который увеличил узнаваемость и повысил продажи
                </p>
                
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="stat-badge bg-gradient-to-r from-brand-orange to-brand-yellow">
                    <TrendingUp className="w-6 h-6 text-white mr-2" />
                    <span className="text-lg font-bold text-white">+40% аудитории</span>
                  </div>
                  <div className="stat-badge bg-gradient-to-r from-brand-blue to-brand-green">
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
              <div className="grid grid-cols-2 gap-4 p-8 transform hover:scale-105 transition-transform duration-500">
                <img src="/lovable-uploads/7974d94d-9815-47bc-8f99-2452fbc93db1.png" alt="Pocus Moscow" className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 w-full h-auto object-cover" />
                <img src="/lovable-uploads/5e992c69-26e7-4020-bc0f-b9ae8a22a258.png" alt="Pocus Moscow Logo" className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 w-full h-auto object-cover" />
                <img src="/lovable-uploads/b272c2be-69dd-42d2-b753-3ec20fd016c9.png" alt="Pocus Moscow Design" className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 w-full h-auto object-cover col-span-2" />
              </div>
            </div>
          </div>
        </div>
        
        <h3 className="text-3xl font-bold mt-16 mb-8 text-center">
          <span className="gradient-text from-brand-purple to-brand-blue">Портфолио</span>
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <AspectRatio ratio={4/5}>
              <img 
                src="/lovable-uploads/6e4d6e86-9021-4330-b6d1-c04acda0649a.png" 
                alt="Portfolio - Digital Art" 
                className="object-cover w-full h-full"
              />
            </AspectRatio>
          </Card>
          
          <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <AspectRatio ratio={4/5}>
              <img 
                src="/lovable-uploads/269c4c24-d0db-4bb0-912c-fe5cd1f455cf.png" 
                alt="Portfolio - Illustration" 
                className="object-cover w-full h-full"
              />
            </AspectRatio>
          </Card>
          
          <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <AspectRatio ratio={4/5}>
              <img 
                src="/lovable-uploads/ad382bbc-1202-49e6-8da0-c7bf26537e46.png" 
                alt="Portfolio - Concept Art" 
                className="object-cover w-full h-full"
              />
            </AspectRatio>
          </Card>
          
          <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <AspectRatio ratio={1}>
              <img 
                src="/lovable-uploads/4c1b5c9d-6ed1-440a-928d-44c6c8a40f7a.png" 
                alt="Portfolio - Pixel Art" 
                className="object-cover w-full h-full"
              />
            </AspectRatio>
          </Card>
          
          <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 col-span-1 md:col-span-2">
            <AspectRatio ratio={16/9}>
              <img 
                src="/lovable-uploads/c1b431b3-f138-4d2c-9f26-0e1e7b85e626.jpg" 
                alt="Portfolio - Banner Design" 
                className="object-cover w-full h-full"
              />
            </AspectRatio>
          </Card>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[{
          title: 'Графический дизайн',
          description: 'Создание визуальных материалов, которые эффективно передают сообщение бренда',
          image: '/lovable-uploads/3c127fba-d34a-4258-bcf3-0d66d201bf11.png'
        }, {
          title: 'Брендинг',
          description: 'Разработка целостной визуальной идентичности, которая выделяет бренд на рынке',
          image: '/lovable-uploads/604c8239-7753-4aa0-934b-87425532e774.png'
        }, {
          title: 'Дизайн печатных материалов',
          description: 'Создание эффективных печатных материалов для маркетинговых кампаний',
          image: '/lovable-uploads/842f0a3f-1b50-4435-b31b-6bdc54a5f95f.png'
        }].map((item, index) => <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
              
              
            </div>)}
        </div>
      </div>
    </section>;
};
export default CaseStudySection;
