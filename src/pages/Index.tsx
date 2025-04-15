
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroIndustry from '@/components/HeroIndustry';
import IndustryBenefitsSection from '@/components/IndustryBenefitsSection';
import EnhancedFeaturedProjects from '@/components/EnhancedFeaturedProjects';
import CollaborationModels from '@/components/CollaborationModels';
import SpeakingHighlights from '@/components/SpeakingHighlights';
import StartupInnovation from '@/components/StartupInnovation';
import PublicationsMedia from '@/components/PublicationsMedia';
import IndustryStats from '@/components/IndustryStats';
import SitePreview from '@/components/SitePreview';
import PartnerShowcase from '@/components/PartnerShowcase';
import IndustrySolutions from '@/components/IndustrySolutions';
import ContactCTA from '@/components/ContactCTA';
import ExpertiseHighlights from '@/components/ExpertiseHighlights';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-bio-off-white">
      <Header />
      <main className="flex-grow">
        <HeroIndustry />
        <IndustryStats />
        <IndustryBenefitsSection />
        <EnhancedFeaturedProjects />
        <IndustrySolutions />
        <ExpertiseHighlights />
        <CollaborationModels />
        <SpeakingHighlights />
        <StartupInnovation />
        <PublicationsMedia />
        <PartnerShowcase />
        <SitePreview />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
