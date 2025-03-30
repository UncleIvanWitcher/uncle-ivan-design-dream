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
            <img src="/lovable-uploads/e5d7aa62-1d7a-4884-86bb-5949adfdc90a.png" alt="Uncle Ivan Logo" className="w-12 h-12 rounded-full border-2 border-brand-red mr-3" />
            <h3 className="text-2xl font-bold">Uncle Ivan</h3>
          </div>
          
          <p className="text-gray-600">Творческое видение, реальные результаты. © 2025 Uncle Ivan. Все права защищены.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;