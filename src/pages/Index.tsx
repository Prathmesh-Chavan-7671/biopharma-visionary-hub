
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import IndustryBenefitsSection from '@/components/IndustryBenefitsSection';
import SignatureProjects from '@/components/SignatureProjects';
import CollaborationModels from '@/components/CollaborationModels';
import SpeakingHighlights from '@/components/SpeakingHighlights';
import StartupInnovation from '@/components/StartupInnovation';
import PublicationsMedia from '@/components/PublicationsMedia';
import PartnerTestimonials from '@/components/PartnerTestimonials';
import SitePreview from '@/components/SitePreview';
import ContactCTA from '@/components/ContactCTA';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <IndustryBenefitsSection />
        <SignatureProjects />
        <CollaborationModels />
        <SpeakingHighlights />
        <StartupInnovation />
        <PublicationsMedia />
        <PartnerTestimonials />
        <SitePreview />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
