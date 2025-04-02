
import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TYPOGRAPHY, SPACING } from '@/constants/styles';

const IndustryBenefits = () => {
  return (
    <section className="bg-bio-navy py-16 md:py-24">
      <div className={SPACING.container}>
        <div className="text-center mb-16">
          <h2 className={`${TYPOGRAPHY.h2} text-white mb-4`}>
            Partner with <span className="text-bio-light-blue">Industry-Leading Expertise</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Pharmaceutical and biotech companies partner with Dr. Jain to overcome technical challenges and accelerate their product development lifecycle.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 transition-transform hover:translate-y-[-5px]">
            <div className="w-12 h-12 bg-bio-blue/20 rounded-full flex items-center justify-center mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 12H15M12 9V15M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z" stroke="#BAE6FD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Accelerate R&D</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <Check className="text-bio-light-blue mr-2 mt-1 h-5 w-5" />
                <span className="text-gray-300">Reduce development timeline by 30-40%</span>
              </li>
              <li className="flex items-start">
                <Check className="text-bio-light-blue mr-2 mt-1 h-5 w-5" />
                <span className="text-gray-300">Access cutting-edge research methods</span>
              </li>
              <li className="flex items-start">
                <Check className="text-bio-light-blue mr-2 mt-1 h-5 w-5" />
                <span className="text-gray-300">Leverage specialized equipment & facilities</span>
              </li>
            </ul>
            <Button variant="outline" className="w-full border-bio-light-blue/30 text-bio-light-blue hover:bg-bio-light-blue/10">
              Learn More <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 transition-transform hover:translate-y-[-5px]">
            <div className="w-12 h-12 bg-bio-teal/20 rounded-full flex items-center justify-center mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 11L12 14L22 4M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C14.8273 3 17.35 4.30605 19 6.34267" stroke="#99F6E4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Solve Technical Challenges</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <Check className="text-bio-light-teal mr-2 mt-1 h-5 w-5" />
                <span className="text-gray-300">Overcome formulation & stability issues</span>
              </li>
              <li className="flex items-start">
                <Check className="text-bio-light-teal mr-2 mt-1 h-5 w-5" />
                <span className="text-gray-300">Optimize bioprocess parameters</span>
              </li>
              <li className="flex items-start">
                <Check className="text-bio-light-teal mr-2 mt-1 h-5 w-5" />
                <span className="text-gray-300">Develop novel drug delivery systems</span>
              </li>
            </ul>
            <Button variant="outline" className="w-full border-bio-light-teal/30 text-bio-light-teal hover:bg-bio-light-teal/10">
              View Case Studies <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 transition-transform hover:translate-y-[-5px]">
            <div className="w-12 h-12 bg-bio-blue/20 rounded-full flex items-center justify-center mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 8L8 16M16 16L8 8M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z" stroke="#BAE6FD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Regulatory & Compliance</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <Check className="text-bio-light-blue mr-2 mt-1 h-5 w-5" />
                <span className="text-gray-300">90% success rate in regulatory approvals</span>
              </li>
              <li className="flex items-start">
                <Check className="text-bio-light-blue mr-2 mt-1 h-5 w-5" />
                <span className="text-gray-300">Expert guidance on compliance issues</span>
              </li>
              <li className="flex items-start">
                <Check className="text-bio-light-blue mr-2 mt-1 h-5 w-5" />
                <span className="text-gray-300">Support for technical documentation</span>
              </li>
            </ul>
            <Button variant="outline" className="w-full border-bio-light-blue/30 text-bio-light-blue hover:bg-bio-light-blue/10">
              Request Consultation <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryBenefits;
