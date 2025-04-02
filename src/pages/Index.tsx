
import React, { useEffect } from 'react';
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

const Index = () => {
  // Add scroll animation effect
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          entry.target.classList.remove('opacity-0');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach((section) => {
      section.classList.add('opacity-0');
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      <Header />
      <main className="flex-grow">
        <HeroIndustry />
        
        <section className="animate-on-scroll">
          <IndustryBenefits />
        </section>
        
        <section className="animate-on-scroll">
          <IndustrySolutions />
        </section>
        
        <section className="animate-on-scroll">
          <IndustryStats />
        </section>
        
        <section className="animate-on-scroll">
          <PartnerShowcase />
        </section>
        
        <section className="animate-on-scroll">
          <ExpertiseAreas />
        </section>
        
        <section className="animate-on-scroll">
          <TestimonialsCarousel />
        </section>
        
        <section className="animate-on-scroll">
          <ContactCTA />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
