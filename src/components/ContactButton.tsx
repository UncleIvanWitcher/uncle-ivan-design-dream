
import React from 'react';
import { MessageSquare } from 'lucide-react';

const ContactButton: React.FC = () => {
  return (
    <div className="fixed bottom-8 right-8 z-50">
      <a 
        href="https://www.instagram.com/uncleivaninc/profilecard/?igsh=bDdvb2F5YjB5aTRm" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center justify-center bg-white text-brand-blue hover:bg-brand-blue hover:text-white border-2 border-brand-blue rounded-lg px-4 py-3 font-bold shadow-lg transition-all duration-300 transform hover:scale-105"
      >
        <MessageSquare className="w-5 h-5 mr-2" />
        Instagram: @uncleivaninc
      </a>
    </div>
  );
};

export default ContactButton;
