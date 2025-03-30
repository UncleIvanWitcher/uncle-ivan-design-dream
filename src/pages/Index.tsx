
import React from 'react';
import Header from '@/components/Header';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import CaseStudySection from '@/components/CaseStudySection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';
import ContactButton from '@/components/ContactButton';

const Index = () => {
  React.useEffect(() => {
    document.title = "Uncle Ivan - Графический дизайнер";
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <AnimatedBackground />
      <Header />
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
