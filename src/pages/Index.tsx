
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
import CaseStudiesSection from '@/components/CaseStudiesSection';
import ContactSection from '@/components/ContactSection';
import CtaSection from '@/components/CtaSection';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Header />
      <main className="flex-grow">
        <Hero />
        <ConsultingSection />
        <CaseStudiesSection />
        <ResearchSection />
        <CollaborationSection />
        <StartupSection />
        <SpeakingSection />
        <MediaSection />
        <ContactSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
