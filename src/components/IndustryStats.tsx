
import React, { useEffect, useState, useRef } from 'react';
import { TYPOGRAPHY, SPACING, INDUSTRY_METRICS } from '@/constants/styles';

const IndustryStats = () => {
  const [animated, setAnimated] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (statsRef.current) {
        const rect = statsRef.current.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.75;
        
        if (isVisible && !animated) {
          setAnimated(true);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [animated]);

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full filter blur-[100px]"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/5 rounded-full filter blur-[100px]"></div>
      
      <div className={SPACING.container}>
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4">
            <span className="text-blue-400 text-sm font-medium">Proven Track Record</span>
          </div>
          <h2 className={`${TYPOGRAPHY.h2} text-white mb-4`}>
            <span className="text-blue-400">Data-Driven</span> Industry Impact
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Prof. Jain's academic-industry collaborations have delivered significant ROI for pharmaceutical and biotech partners.
          </p>
        </div>
        
        <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <StatCard
            title="Time to Market"
            value="8-12"
            suffix="months"
            description="Accelerated development timelines for innovative pharmaceuticals"
            delay={0}
            isAnimated={animated}
            gradient="from-blue-500/20 to-blue-600/20"
            iconGradient="from-blue-500 to-blue-600"
          />
          
          <StatCard
            title="R&D Cost Reduction"
            value="30-40"
            suffix="%"
            description="Lower research and development costs through optimized processes"
            delay={200}
            isAnimated={animated}
            gradient="from-indigo-500/20 to-indigo-600/20" 
            iconGradient="from-indigo-500 to-indigo-600"
          />
          
          <StatCard
            title="Success Rate"
            value="90"
            suffix="%"
            description="First-time regulatory approval for collaborative projects"
            delay={400}
            isAnimated={animated}
            gradient="from-sky-500/20 to-sky-600/20"
            iconGradient="from-sky-500 to-sky-600"
          />
        </div>
        
        <div className="mt-16 backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-indigo-600/5"></div>
          
          <div className="relative z-10">
            <h3 className="text-2xl font-semibold text-white mb-6 text-center">Delivering Measurable Results</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex flex-col items-center bg-white/5 rounded-lg p-6 backdrop-blur-sm hover:bg-white/10 transition-all">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-blue-600/20 mb-4">
                  <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <p className="text-3xl font-bold text-white mb-1">25-60%</p>
                <p className="text-gray-400 text-center">Improved manufacturing yield</p>
              </div>
              
              <div className="flex flex-col items-center bg-white/5 rounded-lg p-6 backdrop-blur-sm hover:bg-white/10 transition-all">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500/20 to-indigo-600/20 mb-4">
                  <svg className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-3xl font-bold text-white mb-1">$50M+</p>
                <p className="text-gray-400 text-center">Revenue generated for partners</p>
              </div>
              
              <div className="flex flex-col items-center bg-white/5 rounded-lg p-6 backdrop-blur-sm hover:bg-white/10 transition-all">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-sky-500/20 to-sky-600/20 mb-4">
                  <svg className="w-6 h-6 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <p className="text-3xl font-bold text-white mb-1">15+</p>
                <p className="text-gray-400 text-center">Joint patents developed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface StatCardProps {
  title: string;
  value: string;
  suffix: string;
  description: string;
  delay: number;
  isAnimated: boolean;
  gradient: string;
  iconGradient: string;
}

const StatCard = ({ title, value, suffix, description, delay, isAnimated, gradient, iconGradient }: StatCardProps) => {
  const [count, setCount] = useState(0);
  const valueNum = parseInt(value);
  const duration = 2000; // animation duration in ms
  const incrementInterval = 30; // update interval in ms
  
  useEffect(() => {
    if (isAnimated) {
      let start = 0;
      const end = valueNum;
      const totalSteps = duration / incrementInterval;
      const incrementAmount = end / totalSteps;
      
      setTimeout(() => {
        const timer = setInterval(() => {
          start += incrementAmount;
          if (start >= end) {
            setCount(end);
            clearInterval(timer);
          } else {
            setCount(Math.floor(start));
          }
        }, incrementInterval);
        
        return () => clearInterval(timer);
      }, delay);
    }
  }, [isAnimated, valueNum, delay]);

  return (
    <div className={`relative rounded-xl overflow-hidden bg-${gradient} p-8 transition-all transform hover:-translate-y-1 hover:shadow-lg duration-300`}>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-indigo-500/5"></div>
      <div className="relative z-10">
        <div className={`inline-block p-4 rounded-xl bg-gradient-to-br ${iconGradient} bg-opacity-10 mb-6`}>
          <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        </div>

        <h3 className="text-lg font-medium text-gray-300 mb-3">{title}</h3>
        <div className="flex items-baseline">
          <span className="text-4xl font-bold text-white">{isAnimated ? count : 0}</span>
          <span className="text-xl font-medium text-gray-300 ml-1">{suffix}</span>
        </div>
        <p className="mt-4 text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default IndustryStats;
