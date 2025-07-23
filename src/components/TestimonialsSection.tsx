
import React, { useState } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import TestimonialCard from './testimonials/TestimonialCard';
import TestimonialControls from './testimonials/TestimonialControls';
import { Button } from "@/components/ui/button";

const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      text: "Иван превзошел все ожидания! Ребрендинг для Pocus Moscow увеличил наш трафик в 2 раза и помог привлечь новую аудиторию. Рекомендую его всем, кто хочет получить качественный дизайн, который работает на бизнес.",
      author: "Всеволод",
      role: "CEO Pocus Moscow",
      color: "border-brand-brick",
      bgColor: "from-brand-yellow to-brand-orange/30",
      rating: 5,
      image: "/lovable-uploads/cd7b0a94-9d94-4b25-885c-2736ac7350cd.png"
    },
    {
      text: "Невероятно талантливый дизайнер. Создал для нас логотип, который сразу запоминается клиентам. Мы получили не просто красивые картинки, а полноценный визуальный язык бренда, который легко масштабируется на все материалы.",
      author: "Михаил",
      role: "Маркетинг-директор",
      color: "border-brand-indigo",
      bgColor: "from-brand-teal to-brand-blue/30",
      rating: 5,
      image: "/lovable-uploads/cd7b0a94-9d94-4b25-885c-2736ac7350cd.png"
    },
    {
      text: "Работать с Иваном - одно удовольствие. Точно попадает в бриф и всегда предлагает свежие идеи. Дизайн, который он сделал для нашего бизнеса, получил множество положительных отзывов от клиентов и увеличил продажи на 30%.",
      author: "Елена",
      role: "Предприниматель",
      color: "border-brand-violet",
      bgColor: "from-brand-purple to-brand-violet/30",
      rating: 5,
      image: "/lovable-uploads/cd7b0a94-9d94-4b25-885c-2736ac7350cd.png"
    }
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-white to-transparent opacity-80"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title text-center">
            <span className="gradient-text from-[hsl(var(--brand-secondary))] to-[hsl(var(--brand-primary))]">Отзывы Клиентов</span>
          </h2>
          
          <p className="text-xl text-center max-w-2xl mx-auto mb-12">
            Что говорят клиенты о сотрудничестве со мной
          </p>
        </motion.div>
        
        {/* Desktop - Grid */}
        <div className="hidden md:grid grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
        
        {/* Mobile - Carousel */}
        <div className="md:hidden relative mt-8">
          <div className="overflow-hidden px-4 py-8">
            <AnimatePresence mode="wait">
              <TestimonialCard 
                key={activeIndex}
                testimonial={testimonials[activeIndex]}
                index={activeIndex}
                isMobile={true}
              />
            </AnimatePresence>
          </div>
          
          <TestimonialControls
            activeIndex={activeIndex}
            testimonialsCount={testimonials.length}
            onPrev={prevTestimonial}
            onNext={nextTestimonial}
            onDotClick={setActiveIndex}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <button 
            onClick={() => document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center bg-[hsl(var(--brand-tertiary))] hover:bg-[hsl(var(--brand-tertiary)/0.9)] text-white rounded-lg px-6 py-3 font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <MessageSquare className="w-5 h-5 mr-2" />
            Стать следующим довольным клиентом
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
