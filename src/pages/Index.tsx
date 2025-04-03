
import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroIndustry from '@/components/HeroIndustry';
import IndustryBenefits from '@/components/IndustryBenefits';
import IndustrySolutions from '@/components/IndustrySolutions';
import PartnerShowcase from '@/components/PartnerShowcase';
import ExpertiseAreas from '@/components/ExpertiseAreas';
import IndustryStats from '@/components/IndustryStats';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import ContactCTA from '@/components/ContactCTA';
import ConsultancyProjects from '@/components/ConsultancyProjects';
import StartupSection from '@/components/StartupSection';
import CollaborationSection from '@/components/CollaborationSection';
import { ANIMATIONS } from '@/constants/styles';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Page load animation
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 100);
  }, []);

  // Scroll animation with IntersectionObserver
  useEffect(() => {
    const observerOptions = { 
      threshold: 0.15,
      rootMargin: '0px 0px -10% 0px'
    };
    
    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const delay = Number(entry.target.getAttribute('data-delay') || 0);
          setTimeout(() => {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }, delay);
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    
    // Observe all sections with animation
    document.querySelectorAll('.animate-on-scroll').forEach((section, index) => {
      section.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-700');
      section.setAttribute('data-delay', `${index * 150}`);
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-900 to-slate-800 overflow-x-hidden">
      <Header />
      <main className="flex-grow">
        <HeroIndustry />
        
        <section className="animate-on-scroll relative">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-800 to-slate-900 -z-10"></div>
          <IndustryBenefits />
        </section>
        
        <section className="animate-on-scroll relative">
          <div className="absolute inset-0 bg-white/5 backdrop-blur-sm -z-10"></div>
          <IndustrySolutions />
        </section>
        
        <section className="animate-on-scroll relative">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-800 -z-10"></div>
          <IndustryStats />
        </section>
        
        <section className="animate-on-scroll relative">
          <div className="absolute inset-0 bg-slate-800/50 backdrop-blur-sm -z-10"></div>
          <ConsultancyProjects />
        </section>
        
        <section className="animate-on-scroll relative">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-800 to-slate-900 -z-10"></div>
          <StartupSection />
        </section>
        
        <section className="animate-on-scroll relative">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-800 -z-10"></div>
          <CollaborationSection />
        </section>
        
        <section className="animate-on-scroll relative">
          <div className="absolute inset-0 bg-slate-800/50 backdrop-blur-sm -z-10"></div>
          <PartnerShowcase />
        </section>
        
        <section className="animate-on-scroll relative">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-800 to-slate-900 -z-10"></div>
          <ExpertiseAreas />
        </section>
        
        <section className="animate-on-scroll relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-800 -z-10"></div>
          <TestimonialsCarousel />
        </section>
        
        <section className="animate-on-scroll relative">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-800 to-slate-900 -z-10"></div>
          <ContactCTA />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
