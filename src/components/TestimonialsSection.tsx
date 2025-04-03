
import React from 'react';
import { Quote } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      text: "Иван превзошел ожидания! Брендинг для Pocus Moscow увеличил наш трафик в 2 раза.",
      author: "Всеволод",
      role: "CEO Pocus Moscow",
      color: "border-brand-brick",
      bgColor: "from-brand-yellow to-brand-orange/30"
    },
    {
      text: "Невероятно талантливый дизайнер. Создал для нас логотип, который сразу запоминается клиентам.",
      author: "Михаил",
      role: "Маркетинг-директор",
      color: "border-brand-indigo",
      bgColor: "from-brand-teal to-brand-blue/30"
    },
    {
      text: "Работать с Иваном - одно удовольствие. Точно попадает в бриф и всегда предлагает свежие идеи.",
      author: "Елена",
      role: "Предприниматель",
      color: "border-brand-violet",
      bgColor: "from-brand-purple to-brand-violet/30"
    }
  ];

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-white to-transparent opacity-80"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="section-title text-center">
          <span className="gradient-text from-brand-orange to-brand-red">Отзывы</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className={`testimony-card ${testimonial.color} transform hover:scale-105 transition-all duration-300 bg-gradient-to-br ${testimonial.bgColor}`}
            >
              <Quote className="w-10 h-10 text-gray-200 absolute top-4 right-4" />
              
              <p className="text-lg mb-6 relative z-10">{testimonial.text}</p>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-white shadow-md">
                  <Avatar>
                    <AvatarImage src="/lovable-uploads/cd7b0a94-9d94-4b25-885c-2736ac7350cd.png" alt={testimonial.author} />
                    <AvatarFallback>{testimonial.author[0]}</AvatarFallback>
                  </Avatar>
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
