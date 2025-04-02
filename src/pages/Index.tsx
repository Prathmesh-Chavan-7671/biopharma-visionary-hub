
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
import { ANIMATIONS } from '@/constants/styles';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Page load animation
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 100);
  }, []);

  // Scroll animation effect with enhanced options
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add staggered animations based on data attribute
            const delay = Number(entry.target.getAttribute('data-delay') || 0);
            setTimeout(() => {
              entry.target.classList.add('animate-fade-in');
              entry.target.classList.remove('opacity-0');
              entry.target.classList.remove('translate-y-10');
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { 
        threshold: 0.15,
        rootMargin: '0px 0px -10% 0px'
      }
    );

    // Find and observe all elements with the animate-on-scroll class
    document.querySelectorAll('.animate-on-scroll').forEach((section, index) => {
      section.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-700');
      section.setAttribute('data-delay', `${index * 100}`);
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`min-h-screen flex flex-col bg-slate-900 overflow-x-hidden transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Header />
      <main className="flex-grow">
        <HeroIndustry />
        
        <section className="animate-on-scroll relative">
          <div className="absolute inset-0 bg-slate-900 skew-y-3 -z-10 transform origin-top-left"></div>
          <IndustryBenefits />
        </section>
        
        <section className="animate-on-scroll relative">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 -z-10"></div>
          <IndustrySolutions />
        </section>
        
        <section className="animate-on-scroll relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CiAgPGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSkiIC8+Cjwvc3ZnPg==')] bg-slate-800 -z-10"></div>
          <IndustryStats />
        </section>
        
        <section className="animate-on-scroll relative">
          <div className="absolute inset-0 bg-slate-900 -skew-y-3 -z-10 transform origin-top-right"></div>
          <PartnerShowcase />
        </section>
        
        <section className="animate-on-scroll">
          <ExpertiseAreas />
        </section>
        
        <section className="animate-on-scroll relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-800 to-slate-900 -z-10"></div>
          <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CiAgPGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMTQsIDE2NSwgMjMzLCAwLjMpIiAvPgo8L3N2Zz4=')] -z-10"></div>
          <TestimonialsCarousel />
        </section>
        
        <section className="animate-on-scroll relative">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 -z-10"></div>
          <ContactCTA />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
