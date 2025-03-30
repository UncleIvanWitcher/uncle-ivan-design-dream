
import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageSquare } from 'lucide-react';

const ContactButton: React.FC = () => {
  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
      <Button 
        className="btn-secondary animate-pulse-slow"
        onClick={() => document.getElementById('contact')?.scrollIntoView()}
      >
        Бесплатная консультация
      </Button>
      
      <Button 
        className="btn-primary"
        onClick={() => document.getElementById('contact')?.scrollIntoView()}
      >
        Сделать заказ
      </Button>
      
      <a 
        href="https://t.me/UncleIvanWitcher" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center justify-center bg-white text-brand-blue hover:bg-brand-blue hover:text-white border-2 border-brand-blue rounded-lg px-4 py-3 font-bold shadow-lg transition-all duration-300 transform hover:scale-105"
      >
        <MessageSquare className="w-5 h-5 mr-2" />
        Telegram: @UncleIvanWitcher
      </a>
    </div>
  );
};

export default ContactButton;
