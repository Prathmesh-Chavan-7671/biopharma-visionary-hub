
import React from 'react';
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
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <HeroIndustry />
        <IndustryBenefits />
        <IndustrySolutions />
        <IndustryStats />
        <PartnerShowcase />
        <ExpertiseAreas />
        <TestimonialsCarousel />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
