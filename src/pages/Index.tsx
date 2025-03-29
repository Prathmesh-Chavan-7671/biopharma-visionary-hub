
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ResearchSection from '@/components/ResearchSection';
import CollaborationSection from '@/components/CollaborationSection';
import StartupSection from '@/components/StartupSection';
import ConsultingSection from '@/components/ConsultingSection';
import SpeakingSection from '@/components/SpeakingSection';
import MediaSection from '@/components/MediaSection';
import CtaSection from '@/components/CtaSection';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <ResearchSection />
        <CollaborationSection />
        <StartupSection />
        <ConsultingSection />
        <SpeakingSection />
        <MediaSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
