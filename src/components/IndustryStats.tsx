
import React from 'react';
import { TYPOGRAPHY, SPACING, INDUSTRY_METRICS } from '@/constants/styles';

const IndustryStats = () => {
  return (
    <section className="bg-gradient-to-br from-bio-navy to-black py-16 md:py-24 relative overflow-hidden">
      {/* Background circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-bio-blue/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-bio-teal/10 rounded-full filter blur-3xl"></div>
      
      <div className={SPACING.container}>
        <div className="text-center mb-16">
          <h2 className={`${TYPOGRAPHY.h2} text-white mb-4`}>
            <span className="text-bio-light-blue">Measurable</span> Industry Impact
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Dr. Jain's collaborations have delivered significant ROI for pharmaceutical and biotech partners.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-bio-light-blue/10 mb-6">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#BAE6FD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 6V12L16 14" stroke="#BAE6FD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="text-4xl font-bold text-white mb-2">8-12</div>
            <div className="text-2xl font-light text-white mb-3">Months</div>
            <p className="text-gray-300">Accelerated time-to-market for pharmaceutical products</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-bio-light-teal/10 mb-6">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 3H8C6.89543 3 6 3.89543 6 5V19C6 20.1046 6.89543 21 8 21H16C17.1046 21 18 20.1046 18 19V5C18 3.89543 17.1046 3 16 3Z" stroke="#99F6E4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 7H15" stroke="#99F6E4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 11H15" stroke="#99F6E4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 15H13" stroke="#99F6E4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="text-4xl font-bold text-white mb-2">30-40%</div>
            <div className="text-2xl font-light text-white mb-3">Reduction</div>
            <p className="text-gray-300">Lower R&D costs through optimized development processes</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-bio-blue/10 mb-6">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#BAE6FD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="text-4xl font-bold text-white mb-2">90%</div>
            <div className="text-2xl font-light text-white mb-3">Success Rate</div>
            <p className="text-gray-300">First-time regulatory approval for collaborative projects</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-bio-teal/10 mb-6">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 8V16M12 11V16M8 14V16M3 8L12 4L21 8L12 12L3 8Z" stroke="#99F6E4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 8V16L12 20L21 16V8" stroke="#99F6E4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="text-4xl font-bold text-white mb-2">25-60%</div>
            <div className="text-2xl font-light text-white mb-3">Improvement</div>
            <p className="text-gray-300">Manufacturing yield enhancement through process optimization</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-bio-light-blue/10 mb-6">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 9V14M12 21.4L5.2 17.9C5.07389 17.8389 4.9732 17.7345 4.90478 17.6011C4.83637 17.4677 4.80392 17.3116 4.81106 17.155L5.51106 5.695C5.52106 5.46 5.64606 5.245 5.85106 5.115L12.0011 1.875C12.0549 1.84494 12.1129 1.82468 12.1726 1.81535C12.2322 1.80603 12.2926 1.80778 12.3511 1.82C12.4111 1.83322 12.4681 1.85967 12.5176 1.89705C12.5672 1.93443 12.6082 1.98167 12.6371 2.036L16.8371 8.536C16.9066 8.642 16.9451 8.7691 16.9474 8.89953C16.9498 9.02997 16.9158 9.15849 16.8501 9.268L12.0001 16.068" stroke="#BAE6FD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M19 10V15.5C19 15.5996 18.9687 15.6976 18.9098 15.7812C18.8508 15.8649 18.7665 15.9302 18.669 15.968L16 17" stroke="#BAE6FD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="text-4xl font-bold text-white mb-2">$50M+</div>
            <div className="text-2xl font-light text-white mb-3">Revenue</div>
            <p className="text-gray-300">Generated for partner companies through collaboration</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-bio-light-blue/10 mb-6">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 17V15M12 17V13M15 17V11M17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H14.5858C14.851 3 15.1054 3.10536 15.2929 3.29289L18.7071 6.70711C18.8946 6.89464 19 7.149 19 7.41421V19C19 20.1046 18.1046 21 17 21Z" stroke="#BAE6FD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="text-4xl font-bold text-white mb-2">15+</div>
            <div className="text-2xl font-light text-white mb-3">Patents</div>
            <p className="text-gray-300">Joint intellectual property developed with industry partners</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryStats;
