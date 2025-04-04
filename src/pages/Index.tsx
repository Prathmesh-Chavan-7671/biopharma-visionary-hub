
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import IndustryBenefitsSection from '@/components/IndustryBenefitsSection';
import EnhancedFeaturedProjects from '@/components/EnhancedFeaturedProjects';
import ExpertiseHighlights from '@/components/ExpertiseHighlights';
import SitePreview from '@/components/SitePreview';
import ContactCTA from '@/components/ContactCTA';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <IndustryBenefitsSection />
        <EnhancedFeaturedProjects />
        <ExpertiseHighlights />
        <SitePreview />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
