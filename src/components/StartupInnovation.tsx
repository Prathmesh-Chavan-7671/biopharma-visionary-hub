
import React from 'react';
import { ArrowRight, Lightbulb, Rocket, Brain, Dna } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const StartupInnovation = () => {
  const startups = [
    {
      name: "BioStartup 1",
      role: "Scientific Advisor",
      focus: "Novel Drug Delivery Systems",
      impact: "Developed IP strategy leading to $5M seed funding",
      color: "from-bio-light-blue to-bio-blue",
      icon: Dna
    },
    {
      name: "BioStartup 2",
      role: "Co-founder",
      focus: "mRNA Platform Technologies",
      impact: "Created proprietary workflow reducing production costs by 40%",
      color: "from-bio-teal to-bio-light-blue",
      icon: Brain
    },
    {
      name: "BioStartup 3",
      role: "Technical Mentor",
      focus: "Cell Line Development",
      impact: "Guided R&D team to successful Series A milestone achievements",
      color: "from-bio-blue to-bio-teal",
      icon: Lightbulb
    }
  ];
  
  return (
    <section className="py-24 bg-gradient-to-b from-bio-navy/90 to-black relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-bio-teal/10 via-bio-blue/5 to-transparent opacity-70 animate-pulse-slow"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-bio-teal/10 border border-bio-teal/20 rounded-full mb-4">
            <span className="text-bio-light-blue text-sm font-medium">Startups & Innovation</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-gradient bg-gradient-to-r from-bio-light-blue via-bio-teal to-bio-blue bg-clip-text text-transparent">Building Tomorrow's</span> Biotech
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Dr. Jain supports innovative biotech startups through mentorship, scientific advisory, and technical guidance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {startups.map((startup, index) => (
            <div 
              key={index}
              className="bg-black/40 backdrop-blur-md border border-bio-blue/20 rounded-xl p-6 hover:border-bio-blue/40 transition-all duration-300 hover:shadow-[0_0_20px_rgba(14,165,233,0.15)] hover:-translate-y-1"
            >
              <div className={`h-12 w-12 rounded-lg bg-gradient-to-br ${startup.color} flex items-center justify-center mb-6`}>
                <startup.icon className="h-6 w-6 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-2">{startup.name}</h3>
              <div className="flex items-center space-x-2 mb-4">
                <span className="px-3 py-1 bg-bio-blue/20 text-bio-light-blue text-xs font-medium rounded-full">
                  {startup.role}
                </span>
                <span className="text-gray-400 text-sm">•</span>
                <span className="text-gray-400 text-sm">{startup.focus}</span>
              </div>
              
              <p className="text-gray-300 mb-6">
                <span className="font-semibold text-bio-teal">Impact:</span> {startup.impact}
              </p>
              
              <Link to="/collaborations" className="inline-flex items-center text-bio-light-blue hover:text-bio-blue transition-colors group/link">
                <span>View Details</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>
        
        <div className="bg-black/40 backdrop-blur-md border border-bio-teal/20 rounded-xl p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center space-x-4">
              <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-bio-teal to-bio-blue flex items-center justify-center flex-shrink-0">
                <Rocket className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Looking for a Scientific Co-founder or Advisor?</h3>
                <p className="text-gray-300">Dr. Jain selectively partners with promising biotech startups with novel approaches.</p>
              </div>
            </div>
            
            <Link to="/contact">
              <Button className="bg-bio-teal hover:bg-bio-navy text-white px-6 py-2.5 rounded-md text-base font-medium whitespace-nowrap">
                Discuss Your Venture
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartupInnovation;
