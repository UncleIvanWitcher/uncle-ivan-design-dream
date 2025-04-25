
import React, { useState } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight, MessageSquare } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from 'framer-motion';

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
      image: "/lovable-uploads/86898651-dd96-4c37-baaa-63ecd659c8c1.jpg"
    },
    {
      text: "Невероятно талантливый дизайнер. Создал для нас логотип, который сразу запоминается клиентам. Мы получили не просто красивые картинки, а полноценный визуальный язык бренда, который легко масштабируется на все материалы.",
      author: "Михаил",
      role: "Маркетинг-директор",
      color: "border-brand-indigo",
      bgColor: "from-brand-teal to-brand-blue/30",
      rating: 5,
      image: "/lovable-uploads/c1b431b3-f138-4d2c-9f26-0e1e7b85e626.jpg"
    },
    {
      text: "Работать с Иваном - одно удовольствие. Точно попадает в бриф и всегда предлагает свежие идеи. Дизайн, который он сделал для нашего бизнеса, получил множество положительных отзывов от клиентов и увеличил продажи на 30%.",
      author: "Елена",
      role: "Предприниматель",
      color: "border-brand-violet",
      bgColor: "from-brand-purple to-brand-violet/30",
      rating: 5,
      image: "/lovable-uploads/86898651-dd96-4c37-baaa-63ecd659c8c1.jpg"
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
            <span className="gradient-text from-brand-amber to-brand-red">Отзывы Клиентов</span>
          </h2>
          
          <p className="text-xl text-center max-w-2xl mx-auto mb-12">
            Что говорят клиенты о сотрудничестве со мной
          </p>
        </motion.div>
        
        {/* Desktop - Grid */}
        <div className="hidden md:grid grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className={`testimony-card ${testimonial.color} transform transition-all duration-300 bg-gradient-to-br ${testimonial.bgColor}`}
            >
              <Quote className="w-10 h-10 text-gray-200 absolute top-4 right-4" />
              
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              
              <p className="text-lg mb-6 relative z-10">{testimonial.text}</p>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-white shadow-md">
                  <Avatar>
                    <AvatarImage src={testimonial.image} alt={testimonial.author} />
                    <AvatarFallback>{testimonial.author[0]}</AvatarFallback>
                  </Avatar>
                </div>
                <div>
                  <h4 className="font-bold">{testimonial.author}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Mobile - Carousel */}
        <div className="md:hidden relative mt-8">
          <div className="overflow-hidden px-4 py-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className={`testimony-card ${testimonials[activeIndex].color} bg-gradient-to-br ${testimonials[activeIndex].bgColor}`}
              >
                <Quote className="w-8 h-8 text-gray-200 absolute top-4 right-4" />
                
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 ${i < testimonials[activeIndex].rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                
                <p className="text-base mb-6 relative z-10">{testimonials[activeIndex].text}</p>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full overflow-hidden mr-3 border-2 border-white shadow-md">
                    <Avatar>
                      <AvatarImage src={testimonials[activeIndex].image} alt={testimonials[activeIndex].author} />
                      <AvatarFallback>{testimonials[activeIndex].author[0]}</AvatarFallback>
                    </Avatar>
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonials[activeIndex].author}</h4>
                    <p className="text-xs text-gray-600">{testimonials[activeIndex].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <div className="flex justify-center gap-4 mt-6">
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full shadow-sm" 
              onClick={prevTestimonial}
            >
              <ChevronLeft className="w-5 h-5" />
              <span className="sr-only">Предыдущий отзыв</span>
            </Button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button 
                  key={i}
                  className={`w-2 h-2 rounded-full transition-all ${i === activeIndex ? 'bg-brand-red scale-125' : 'bg-gray-300'}`}
                  onClick={() => setActiveIndex(i)}
                  aria-label={`Перейти к отзыву ${i + 1}`}
                ></button>
              ))}
            </div>
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full shadow-sm" 
              onClick={nextTestimonial}
            >
              <ChevronRight className="w-5 h-5" />
              <span className="sr-only">Следующий отзыв</span>
            </Button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a 
            href="https://t.me/UncleIvanWitcher" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center bg-brand-blue hover:bg-brand-indigo text-white rounded-lg px-6 py-3 font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <MessageSquare className="w-5 h-5 mr-2" />
            Стать следующим довольным клиентом
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
