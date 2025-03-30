
import React from 'react';
import { Quote } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      text: "Иван превзошел ожидания! Брендинг для Pocus Moscow увеличил наш трафик в 2 раза.",
      author: "Анна",
      role: "CEO Pocus Moscow",
      color: "border-brand-red",
      image: "/lovable-uploads/25299389-5c74-4e75-aee6-b64c98178818.png"
    },
    {
      text: "Невероятно талантливый дизайнер. Создал для нас логотип, который сразу запоминается клиентам.",
      author: "Михаил",
      role: "Маркетинг-директор",
      color: "border-brand-blue",
      image: "/lovable-uploads/25299389-5c74-4e75-aee6-b64c98178818.png"
    },
    {
      text: "Работать с Иваном - одно удовольствие. Точно попадает в бриф и всегда предлагает свежие идеи.",
      author: "Елена",
      role: "Предприниматель",
      color: "border-brand-green",
      image: "/lovable-uploads/25299389-5c74-4e75-aee6-b64c98178818.png"
    }
  ];

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-white to-transparent opacity-80"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="section-title text-center">
          <span className="gradient-text from-brand-red to-brand-brick">Отзывы</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className={`testimony-card ${testimonial.color} transform hover:scale-105 transition-all duration-300`}
            >
              <Quote className="w-10 h-10 text-gray-200 absolute top-4 right-4" />
              
              <p className="text-lg mb-6 relative z-10">{testimonial.text}</p>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold">{testimonial.author}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
