
import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, BarChart3, LineChart, Expand, Maximize2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const caseStudies = [
  {
    title: "Study of Biosimilars",
    client: "Mangalam Drug & Organics",
    description: "Comprehensive analysis and optimization of biosimilar production processes, resulting in 30% reduced development timeline.",
    results: "Accelerated time-to-market by 8 months"
  },
  {
    title: "Downstream Bioprocessing",
    client: "Advy Chemicals",
    description: "Streamlined purification workflows and enhanced yield in biopharmaceutical manufacturing processes.",
    results: "Improved product yield by 42%"
  },
  {
    title: "Probiotics Study",
    client: "Meteoric Biopharmaceuticals",
    description: "Optimized formulation and stability of probiotic products for enhanced shelf life and efficacy.",
    results: "Extended product stability by 12 months"
  },
  {
    title: "mRNA Process Development",
    client: "Serum Institute of India",
    description: "Developed scalable manufacturing processes for mRNA-based therapeutics with improved quality attributes.",
    results: "Reduced production costs by 35%"
  },
  {
    title: "Process Development for Vaccines",
    client: "Mynvax Pvt. Ltd.",
    description: "Engineered innovative vaccine production platforms with enhanced stability and immunogenicity profiles.",
    results: "Increased production capacity by 250%"
  },
  {
    title: "Due Diligence for New Technology",
    client: "BDR Pharmaceuticals",
    description: "Comprehensive evaluation of novel drug delivery technologies for potential acquisition and integration.",
    results: "Identified $12M investment opportunity"
  }
];

const CaseStudiesSection = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    if (expandedCard === index) {
      setExpandedCard(null);
    } else {
      setExpandedCard(index);
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-black via-bio-navy/80 to-bio-navy/90" id="case-studies">
      <div className="content-container relative">
        {/* Background data visualization */}
        <div className="absolute inset-0 z-0 opacity-10">
          <svg width="100%" height="100%" viewBox="0 0 1000 600" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,100 Q250,20 500,300 T1000,100" fill="none" stroke="rgba(14, 165, 233, 0.8)" strokeWidth="2" />
            <path d="M0,200 Q250,100 500,400 T1000,200" fill="none" stroke="rgba(13, 148, 136, 0.8)" strokeWidth="2" />
            <path d="M0,300 Q250,380 500,200 T1000,300" fill="none" stroke="rgba(186, 230, 253, 0.5)" strokeWidth="2" />
            {/* Dots along the path */}
            {[...Array(20)].map((_, i) => (
              <circle key={i} cx={i * 50} cy={Math.sin(i * 0.5) * 50 + 250} r="3" fill="rgba(186, 230, 253, 0.8)" />
            ))}
          </svg>
        </div>
        
        <div className="relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1.5 neo-glassmorphism rounded-full mb-6 border border-bio-blue/30">
              <span className="text-bio-light-blue text-sm font-medium">Industry Impact</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Successful Projects with <span className="text-gradient-neon">Measurable Results</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Science-driven consulting delivering real-world impact for leading pharmaceutical and biotech companies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {caseStudies.map((study, index) => (
              <Card 
                key={index} 
                className={`neo-glassmorphism border border-bio-blue/20 hover:border-bio-blue/40 transition-all duration-300 animate-fade-in group overflow-hidden relative ${expandedCard === index ? 'md:col-span-2 md:row-span-2' : ''}`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader className="relative">
                  <div className="absolute top-3 right-3">
                    <button 
                      onClick={() => toggleExpand(index)} 
                      className="text-bio-light-blue hover:text-bio-blue transition-colors"
                    >
                      <Maximize2 className="h-5 w-5" />
                    </button>
                  </div>
                  <div className="bg-gradient-to-r from-bio-blue/20 to-bio-teal/20 p-2 rounded-md inline-block mb-2">
                    <BarChart3 className="h-5 w-5 text-bio-light-blue" />
                  </div>
                  <CardTitle className="text-white group-hover:text-bio-light-blue transition-colors">{study.title}</CardTitle>
                  <CardDescription className="text-bio-light-blue font-medium">{study.client}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">{study.description}</p>
                  <div className="flex items-center mt-4 text-bio-light-blue">
                    <LineChart className="h-5 w-5 mr-2" />
                    <span className="font-semibold">{study.results}</span>
                  </div>
                  
                  {expandedCard === index && (
                    <div className="mt-6 pt-6 border-t border-bio-blue/20 animate-fade-in">
                      <h4 className="text-bio-light-blue font-semibold mb-3">Detailed Approach</h4>
                      <p className="text-gray-300 mb-4">
                        Utilized advanced analytical techniques and computational modeling to optimize process parameters and formulation components.
                      </p>
                      <div className="grid grid-cols-2 gap-4 mt-4">
                        <div className="bg-black/30 rounded-lg p-3">
                          <p className="text-bio-light-blue text-sm font-semibold">Timeline</p>
                          <p className="text-white">8 months</p>
                        </div>
                        <div className="bg-black/30 rounded-lg p-3">
                          <p className="text-bio-light-blue text-sm font-semibold">Team Size</p>
                          <p className="text-white">6 specialists</p>
                        </div>
                        <div className="bg-black/30 rounded-lg p-3">
                          <p className="text-bio-light-blue text-sm font-semibold">Tech Used</p>
                          <p className="text-white">AI-ML, HPLC</p>
                        </div>
                        <div className="bg-black/30 rounded-lg p-3">
                          <p className="text-bio-light-blue text-sm font-semibold">ROI</p>
                          <p className="text-white">3.2x</p>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
                <CardFooter className="border-t border-bio-blue/10 pt-4">
                  <Button variant="link" className="text-bio-blue p-0 hover:text-bio-light-blue group">
                    View full case study 
                    <ArrowRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardFooter>
                
                {/* Cyberpunk-style corner accent */}
                <div className="absolute -bottom-2 -right-2 w-12 h-12 overflow-hidden">
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-bio-light-blue/50"></div>
                  <div className="absolute bottom-0 right-0 w-full h-full border-r-2 border-b-2 border-bio-light-blue/50"></div>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="neo-glassmorphism border border-bio-blue/20 rounded-xl p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-bio-blue/10 to-bio-teal/5"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-bio-blue to-bio-teal"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center">
              <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
                <h3 className="text-2xl font-bold text-white mb-4">Proven Results for Industry Leaders</h3>
                <p className="text-gray-300 mb-4">
                  Dr. Jain's expertise has helped companies save valuable time, resources, and R&D costs while accelerating innovation and market readiness.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-bio-teal mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">Reduced development timelines by <span className="text-bio-light-blue font-medium">25-40%</span></span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-bio-teal mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">Optimized processes saving millions in <span className="text-bio-light-blue font-medium">R&D costs</span></span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-bio-teal mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">Improved product quality and <span className="text-bio-light-blue font-medium">manufacturing efficiency</span></span>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <div className="rounded-full bg-black/30 p-8 border border-bio-blue/30 relative">
                  <LineChart className="h-24 w-24 text-bio-light-blue relative z-10" />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-bio-blue/20 to-bio-teal/20 animate-pulse-slow" style={{ animationDuration: '3s' }}></div>
                </div>
              </div>
            </div>
            <div className="text-center mt-8 relative z-10">
              <Button className="neo-button primary rounded-md group relative overflow-hidden">
                <span className="relative z-10 flex items-center">
                  Leverage Proven Expertise – Schedule a Discussion
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-bio-teal via-bio-blue to-bio-light-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
              </Button>
            </div>
            
            {/* Futuristic corner accents */}
            <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
              <div className="absolute top-0 right-0 w-4 h-16 border-r-2 border-bio-light-blue/30"></div>
              <div className="absolute top-0 right-0 w-16 h-4 border-t-2 border-bio-light-blue/30"></div>
            </div>
            <div className="absolute bottom-0 left-0 w-16 h-16 overflow-hidden">
              <div className="absolute bottom-0 left-0 w-4 h-16 border-l-2 border-bio-light-blue/30"></div>
              <div className="absolute bottom-0 left-0 w-16 h-4 border-b-2 border-bio-light-blue/30"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
