
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroIndustry from '@/components/HeroIndustry';
import ResearchSection from '@/components/ResearchSection';
import SpeakingSection from '@/components/SpeakingSection';
import ContactCTA from '@/components/ContactCTA';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <HeroIndustry />
        <ResearchSection />
        <SpeakingSection />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
