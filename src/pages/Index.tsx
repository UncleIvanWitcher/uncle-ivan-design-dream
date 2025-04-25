
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import CaseStudySection from '@/components/CaseStudySection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';
import ContactButton from '@/components/ContactButton';
import StickyHeader from '@/components/StickyHeader';

const Index = () => {
  useEffect(() => {
    document.title = "Uncle Ivan - Графический дизайнер";
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <AnimatedBackground />
      <Header />
      <StickyHeader />
      <AboutSection />
      <SkillsSection />
      <CaseStudySection />
      <TestimonialsSection />
      <Footer />
      <ContactButton />
    </div>
  );
};

export default Index;
