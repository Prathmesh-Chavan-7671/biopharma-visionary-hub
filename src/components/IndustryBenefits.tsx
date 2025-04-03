
import React, { useState } from 'react';
import { Check, ArrowRight, Beaker, ChartBar, FileCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TYPOGRAPHY, SPACING } from '@/constants/styles';

const IndustryBenefits = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  
  const handleHover = (index: number) => {
    setActiveCard(index);
  };

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500/20 via-blue-500/40 to-blue-500/20"></div>
      
      <div className={SPACING.container}>
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4">
            <span className="text-blue-400 text-sm font-medium">Excellence in Partnership</span>
          </div>
          <h2 className={`${TYPOGRAPHY.h2} text-gray-900 mb-4`}>
            Transform Your R&D with <span className="text-blue-600">Expert Collaboration</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Industry leaders partner with Dr. Jain to overcome technical challenges, accelerate development timelines, and gain competitive advantages through innovative solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div 
            className={`relative rounded-xl shadow-lg transition-all duration-300 bg-white ${activeCard === 0 ? 'scale-[1.02] z-10 shadow-xl' : 'scale-100 z-0'}`}
            onMouseEnter={() => handleHover(0)}
            onMouseLeave={() => setActiveCard(null)}
          >
            <div className="p-8 h-full flex flex-col">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mb-6">
                <Beaker className="text-blue-600 h-7 w-7" />
              </div>
              
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Accelerate R&D</h3>
              
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-start">
                  <div className="mt-1 mr-3 p-0.5 bg-blue-100 rounded-full">
                    <Check className="text-blue-600 h-4 w-4" />
                  </div>
                  <span className="text-gray-600">Reduce development timeline by 30-40%</span>
                </li>
                <li className="flex items-start">
                  <div className="mt-1 mr-3 p-0.5 bg-blue-100 rounded-full">
                    <Check className="text-blue-600 h-4 w-4" />
                  </div>
                  <span className="text-gray-600">Access proprietary research methodologies</span>
                </li>
                <li className="flex items-start">
                  <div className="mt-1 mr-3 p-0.5 bg-blue-100 rounded-full">
                    <Check className="text-blue-600 h-4 w-4" />
                  </div>
                  <span className="text-gray-600">Leverage specialized equipment & facilities</span>
                </li>
              </ul>
              
              <Button variant="outline" className="w-full rounded-lg border-blue-200 text-blue-600 hover:bg-blue-50 hover:border-blue-300 mt-auto">
                <span className="flex items-center">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 opacity-70" />
                </span>
              </Button>
            </div>
          </div>
          
          <div 
            className={`relative rounded-xl shadow-lg transition-all duration-300 bg-white ${activeCard === 1 ? 'scale-[1.02] z-10 shadow-xl' : 'scale-100 z-0'}`}
            onMouseEnter={() => handleHover(1)}
            onMouseLeave={() => setActiveCard(null)}
          >
            <div className="p-8 h-full flex flex-col">
              <div className="w-14 h-14 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-xl flex items-center justify-center mb-6">
                <ChartBar className="text-indigo-600 h-7 w-7" />
              </div>
              
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Solve Technical Challenges</h3>
              
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-start">
                  <div className="mt-1 mr-3 p-0.5 bg-indigo-100 rounded-full">
                    <Check className="text-indigo-600 h-4 w-4" />
                  </div>
                  <span className="text-gray-600">Overcome complex formulation hurdles</span>
                </li>
                <li className="flex items-start">
                  <div className="mt-1 mr-3 p-0.5 bg-indigo-100 rounded-full">
                    <Check className="text-indigo-600 h-4 w-4" />
                  </div>
                  <span className="text-gray-600">Optimize bioprocess parameters</span>
                </li>
                <li className="flex items-start">
                  <div className="mt-1 mr-3 p-0.5 bg-indigo-100 rounded-full">
                    <Check className="text-indigo-600 h-4 w-4" />
                  </div>
                  <span className="text-gray-600">Develop novel drug delivery systems</span>
                </li>
              </ul>
              
              <Button variant="outline" className="w-full rounded-lg border-indigo-200 text-indigo-600 hover:bg-indigo-50 hover:border-indigo-300 mt-auto">
                <span className="flex items-center">
                  View Case Studies
                  <ArrowRight className="ml-2 h-4 w-4 opacity-70" />
                </span>
              </Button>
            </div>
          </div>
          
          <div 
            className={`relative rounded-xl shadow-lg transition-all duration-300 bg-white ${activeCard === 2 ? 'scale-[1.02] z-10 shadow-xl' : 'scale-100 z-0'}`}
            onMouseEnter={() => handleHover(2)}
            onMouseLeave={() => setActiveCard(null)}
          >
            <div className="p-8 h-full flex flex-col">
              <div className="w-14 h-14 bg-gradient-to-br from-sky-100 to-sky-200 rounded-xl flex items-center justify-center mb-6">
                <FileCheck className="text-sky-600 h-7 w-7" />
              </div>
              
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Regulatory & Compliance</h3>
              
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-start">
                  <div className="mt-1 mr-3 p-0.5 bg-sky-100 rounded-full">
                    <Check className="text-sky-600 h-4 w-4" />
                  </div>
                  <span className="text-gray-600">90% success rate in regulatory approvals</span>
                </li>
                <li className="flex items-start">
                  <div className="mt-1 mr-3 p-0.5 bg-sky-100 rounded-full">
                    <Check className="text-sky-600 h-4 w-4" />
                  </div>
                  <span className="text-gray-600">Expert guidance on compliance issues</span>
                </li>
                <li className="flex items-start">
                  <div className="mt-1 mr-3 p-0.5 bg-sky-100 rounded-full">
                    <Check className="text-sky-600 h-4 w-4" />
                  </div>
                  <span className="text-gray-600">Comprehensive technical documentation</span>
                </li>
              </ul>
              
              <Button variant="outline" className="w-full rounded-lg border-sky-200 text-sky-600 hover:bg-sky-50 hover:border-sky-300 mt-auto">
                <span className="flex items-center">
                  Request Consultation
                  <ArrowRight className="ml-2 h-4 w-4 opacity-70" />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryBenefits;
