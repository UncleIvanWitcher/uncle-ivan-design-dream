
import React from 'react';
import { Send } from 'lucide-react';

const ContactButton: React.FC = () => {
  return (
    <div className="fixed bottom-8 right-8 z-50">
      <button 
        onClick={() => document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' })}
        className="flex items-center justify-center bg-white text-brand-blue hover:bg-brand-blue hover:text-white border-2 border-brand-blue rounded-lg px-4 py-3 font-bold shadow-lg transition-all duration-300 transform hover:scale-105"
      >
        <Send className="w-5 h-5 mr-2" />
        <span className="flex flex-col">
          <span className="text-sm">Телеграм:</span>
          <span className="font-bold">@UNCLEIVANINC</span>
        </span>
      </button>
    </div>
  );
};

export default ContactButton;
