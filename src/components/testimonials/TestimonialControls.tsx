
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface TestimonialControlsProps {
  activeIndex: number;
  testimonialsCount: number;
  onPrev: () => void;
  onNext: () => void;
  onDotClick: (index: number) => void;
}

const TestimonialControls: React.FC<TestimonialControlsProps> = ({
  activeIndex,
  testimonialsCount,
  onPrev,
  onNext,
  onDotClick
}) => {
  return (
    <div className="flex justify-center gap-4 mt-6">
      <Button 
        variant="outline" 
        size="icon" 
        className="rounded-full shadow-sm" 
        onClick={onPrev}
      >
        <ChevronLeft className="w-5 h-5" />
        <span className="sr-only">Предыдущий отзыв</span>
      </Button>
      
      <div className="flex gap-2 items-center">
        {[...Array(testimonialsCount)].map((_, i) => (
          <button 
            key={i}
            className={`w-2 h-2 rounded-full transition-all ${i === activeIndex ? 'bg-brand-red scale-125' : 'bg-gray-300'}`}
            onClick={() => onDotClick(i)}
            aria-label={`Перейти к отзыву ${i + 1}`}
          ></button>
        ))}
      </div>
      
      <Button 
        variant="outline" 
        size="icon" 
        className="rounded-full shadow-sm" 
        onClick={onNext}
      >
        <ChevronRight className="w-5 h-5" />
        <span className="sr-only">Следующий отзыв</span>
      </Button>
    </div>
  );
};

export default TestimonialControls;
