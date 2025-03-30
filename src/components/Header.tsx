import React from 'react';
import { Button } from '@/components/ui/button';
const Header: React.FC = () => {
  return <header className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-20 pb-10 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-white bg-opacity-80 backdrop-blur-sm z-0"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="flex-1 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start mb-6">
              <img alt="Uncle Ivan Logo" className="w-16 h-16 rounded-full border-2 border-brand-red mr-4" src="/lovable-uploads/fb60ea8f-370b-47a1-8a3b-22c50aa09f1c.jpg" />
              <h1 className="text-3xl font-extrabold">Uncle Ivan</h1>
            </div>
            
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 leading-tight">
              <span className="gradient-text from-brand-red to-brand-brick">Творческое Видение</span>
              <br />
              <span className="gradient-text from-brand-yellow to-brand-orange">Реальные Результаты</span>
            </h2>
            
            <p className="text-xl mb-10 max-w-xl mx-auto lg:mx-0">
              Превратите ваш бренд в историю, которую захотят рассказывать. Графический дизайн, брендинг, айдентика.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="btn-primary" onClick={() => document.getElementById('contact')?.scrollIntoView()}>
                Заказать проект
              </Button>
              <Button className="bg-white border-2 border-brand-red text-brand-red hover:bg-brand-red hover:text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg" onClick={() => document.getElementById('portfolio')?.scrollIntoView()}>
                Портфолио
              </Button>
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-yellow rounded-full opacity-30 -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-brand-blue rounded-full opacity-30 -z-10"></div>
            <img alt="Uncle Ivan" className="rounded-xl shadow-2xl z-10 relative animate-float max-w-full" src="/lovable-uploads/2a6b4a7a-a882-4872-a911-ffe2da639211.png" />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
        <svg className="w-10 h-10 text-gray-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </header>;
};
export default Header;