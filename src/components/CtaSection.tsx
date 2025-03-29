
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CtaSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-bio-navy to-bio-teal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Innovate with Dr. Jain?</h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Whether you're seeking scientific consulting, a speaker for your event, or exploring a potential research collaboration, take the first step towards innovation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-white text-bio-navy hover:bg-bio-light-blue transition-colors shadow-md hover:shadow-lg font-medium px-8 py-3">
            Schedule a Consultation
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button className="bg-transparent border border-white text-white hover:bg-white/10 transition-colors shadow-md hover:shadow-lg font-medium px-8 py-3">
            Contact Dr. Jain
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
