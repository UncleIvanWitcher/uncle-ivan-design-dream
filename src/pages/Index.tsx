
import React, { useEffect, lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import CaseStudySection from '@/components/CaseStudySection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';
import ContactButton from '@/components/ContactButton';
import StickyHeader from '@/components/StickyHeader';
import LeadCaptureModal from '@/components/LeadCaptureModal';

// Use lazy loading for non-critical components
const LazyAnimatedBackground = lazy(() => import('@/components/AnimatedBackground'));

const Index = () => {
  // Page view tracking
  useEffect(() => {
    // Track page view - would connect to analytics in production
    console.log('Page view: Home');
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* SEO Optimizations */}
      <Helmet>
        <title>Uncle Ivan - Графический дизайнер и бренд-стратег | Дизайн, Брендинг, Айдентика</title>
        <meta name="description" content="Профессиональный графический дизайн, разработка брендинга и айдентики для бизнеса. 10+ успешных брендов. Превращаю ваш бренд в историю, которую захотят рассказывать." />
        <meta name="keywords" content="графический дизайнер, брендинг, айдентика, дизайн логотипов, фирменный стиль, Uncle Ivan, дизайн в Москве" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Uncle Ivan - Графический дизайнер" />
        <meta property="og:description" content="Профессиональный графический дизайн, разработка брендинга и айдентики для бизнеса. 10+ успешных брендов." />
        <meta property="og:image" content="https://lovable.dev/opengraph-image-p98pqg.png" />
        <meta property="og:url" content="https://uncleeivan.lovable.dev/" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Uncle Ivan - Графический дизайнер" />
        <meta name="twitter:description" content="Профессиональный графический дизайн, разработка брендинга и айдентики для бизнеса. 10+ успешных брендов." />
        <meta name="twitter:image" content="https://lovable.dev/opengraph-image-p98pqg.png" />
        
        {/* Schema.org structured data for LocalBusiness */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Uncle Ivan - Графический дизайнер",
              "image": "https://lovable.dev/opengraph-image-p98pqg.png",
              "telephone": "+79167697802",
              "email": "ivlevish4ever@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Москва",
                "addressRegion": "Москва",
                "addressCountry": "RU"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 55.7558,
                "longitude": 37.6173
              },
              "url": "https://uncleeivan.lovable.dev/",
              "priceRange": "$$",
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"
                ],
                "opens": "10:00",
                "closes": "18:00"
              }
            }
          `}
        </script>
      </Helmet>
      
      <Suspense fallback={<div className="bg-white h-full w-full" />}>
        <LazyAnimatedBackground />
      </Suspense>
      
      <Header />
      <StickyHeader />
      <AboutSection />
      <SkillsSection />
      <CaseStudySection />
      <TestimonialsSection />
      <Footer />
      <ContactButton />
      <LeadCaptureModal id="checklist-modal" />
    </div>
  );
};

export default Index;
