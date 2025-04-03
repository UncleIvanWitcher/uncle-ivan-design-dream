import React from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Send, ExternalLink } from 'lucide-react';
const Footer: React.FC = () => {
  return <footer id="contact" className="bg-gradient-to-b from-gray-50 to-gray-100 pt-20 pb-10 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          
        </div>
        
        <div className="mt-16 text-center">
          <div className="flex justify-center items-center mb-6">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-md mr-3">
              <img src="/lovable-uploads/cd7b0a94-9d94-4b25-885c-2736ac7350cd.png" alt="Uncle Ivan Logo" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-2xl font-bold gradient-text from-brand-blue to-brand-violet">Uncle Ivan INC</h3>
          </div>
          
          <p className="text-gray-600">Творческое видение, реальные результаты. © 2025 Uncle Ivan. Все права защищены.</p>
          
          <div className="flex justify-center mt-6 space-x-4">
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-brand-teal to-brand-blue text-white hover:opacity-90 transition-opacity">
              <ExternalLink size={20} />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-brand-indigo to-brand-violet text-white hover:opacity-90 transition-opacity">
              <ExternalLink size={20} />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-brand-orange to-brand-red text-white hover:opacity-90 transition-opacity">
              <ExternalLink size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;