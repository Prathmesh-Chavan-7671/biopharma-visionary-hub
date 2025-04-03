
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroIndustry from '@/components/HeroIndustry';
import ResearchSection from '@/components/ResearchSection';
import SpeakingSection from '@/components/SpeakingSection';
import ContactCTA from '@/components/ContactCTA';
import IndustrySolutions from '@/components/IndustrySolutions';
import CollaborationSection from '@/components/CollaborationSection';
import IndustryBenefits from '@/components/IndustryBenefits';
import StartupSection from '@/components/StartupSection';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <HeroIndustry />
        <IndustryBenefits />
        <IndustrySolutions />
        <ResearchSection />
        <CollaborationSection />
        <StartupSection />
        <SpeakingSection />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
