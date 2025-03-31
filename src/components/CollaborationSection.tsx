
import React, { useState } from 'react';
import { ArrowRight, Briefcase, Building, Users, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const collaborations = [
  {
    company: "BioPharmaTech Inc.",
    role: "Scientific Advisor",
    description: "Led strategic development of novel drug delivery platforms, resulting in two patented technologies now in clinical trials.",
    icon: Briefcase,
    details: "Collaborative research focused on targeted nanoparticle formulations for cancer therapeutics. Established in-vitro and in-vivo testing protocols that accelerated the path to clinical trials."
  },
  {
    company: "MediGene Solutions",
    role: "Research Consultant",
    description: "Optimized nanomedicine formulations, improving drug targeting efficiency by 67% and reducing production costs by 30%.",
    icon: Building,
    details: "Applied cutting-edge analytical techniques to characterize and optimize drug-polymer interactions. Implemented computational models to predict stability and efficacy of formulations."
  },
  {
    company: "CellTech Innovations",
    role: "Industry Collaborator",
    description: "Co-developed 3D bioprinting protocols for tissue engineering applications, leading to a joint research grant of $2.5M.",
    icon: Users,
    details: "Pioneered novel bioink formulations compatible with stem cell encapsulation. Technology now being used in regenerative medicine applications with potential for organ-on-chip diagnostics."
  }
];

const CollaborationSection = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <section className="py-16 bg-gradient-to-br from-bio-navy via-black to-bio-navy relative overflow-hidden" id="collaborations">
      {/* Animated glowing connection lines */}
      <div className="absolute inset-0 z-0 opacity-20">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(13, 148, 136, 0.6)" />
              <stop offset="100%" stopColor="rgba(14, 165, 233, 0.6)" />
            </linearGradient>
          </defs>
          <path d="M0,100 C150,150 250,50 400,100 C550,150 650,50 800,100 C950,150 1050,50 1200,100" stroke="url(#lineGradient)" strokeWidth="2" fill="none" className="animate-pulse-slow" />
          <path d="M0,200 C150,250 250,150 400,200 C550,250 650,150 800,200 C950,250 1050,150 1200,200" stroke="url(#lineGradient)" strokeWidth="2" fill="none" className="animate-pulse-slow" style={{ animationDelay: '1s' }} />
          <path d="M0,300 C150,350 250,250 400,300 C550,350 650,250 800,300 C950,350 1050,250 1200,300" stroke="url(#lineGradient)" strokeWidth="2" fill="none" className="animate-pulse-slow" style={{ animationDelay: '2s' }} />
          
          {/* Connection nodes */}
          {[...Array(12)].map((_, i) => (
            <circle 
              key={i} 
              cx={100 * (i + 1)} 
              cy={150 + (i % 3) * 100} 
              r="4" 
              fill="rgba(186, 230, 253, 0.8)" 
              className="animate-pulse" 
              style={{ animationDelay: `${i * 0.2}s` }} 
            />
          ))}
        </svg>
      </div>
      
      <div className="content-container relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1.5 neo-glassmorphism rounded-full mb-6 border border-bio-blue/30">
            <span className="text-bio-light-blue text-sm font-medium">Strategic Partnerships</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Industry <span className="text-gradient-neon">Collaborations</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Partnering with leading biotech and pharmaceutical companies to translate academic research into commercial innovations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {collaborations.map((collab, index) => (
            <Card 
              key={index} 
              className="neo-glassmorphism border border-bio-blue/20 hover:border-bio-blue/40 transition-all duration-500 animate-fade-in hover:shadow-[0_0_20px_rgba(14,165,233,0.3)] transform hover:-translate-y-1 cursor-pointer relative overflow-hidden"
              style={{ animationDelay: `${index * 150}ms` }}
              onClick={() => setActiveCard(activeCard === index ? null : index)}
            >
              <div className={`absolute inset-0 bg-gradient-to-br from-bio-blue/10 to-bio-teal/10 transform transition-transform duration-500 ${activeCard === index ? 'scale-100' : 'scale-0'}`}></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-bio-blue to-bio-teal opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <CardHeader>
                <div className="rounded-full bg-black/40 border border-bio-blue/30 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <collab.icon className="text-bio-light-blue" />
                </div>
                <CardTitle className="text-white">{collab.company}</CardTitle>
                <CardDescription className="text-bio-light-blue font-medium">{collab.role}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">{collab.description}</p>
                
                {activeCard === index && (
                  <div className="mt-4 pt-4 border-t border-bio-blue/20 animate-fade-in">
                    <p className="text-gray-300 text-sm">{collab.details}</p>
                    <div className="mt-4 grid grid-cols-2 gap-2">
                      <div className="bg-black/30 p-2 rounded text-center">
                        <p className="text-bio-light-blue text-xs mb-1">Duration</p>
                        <p className="text-white text-sm">3+ Years</p>
                      </div>
                      <div className="bg-black/30 p-2 rounded text-center">
                        <p className="text-bio-light-blue text-xs mb-1">Status</p>
                        <p className="text-white text-sm">Active</p>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
              <CardFooter>
                <Button variant="link" className="text-bio-blue p-0 hover:text-bio-light-blue flex items-center group">
                  <span>Learn more</span> 
                  <ArrowRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardFooter>
              
              {/* Cyberpunk corner accent */}
              <div className="absolute bottom-0 right-0 w-8 h-8 overflow-hidden">
                <div className="absolute bottom-0 right-0 w-full h-full border-r border-b border-bio-blue/40"></div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="neo-glassmorphism border border-bio-blue/20 rounded-xl p-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-bio-blue/10 to-bio-teal/5"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Partner for Innovation</h3>
              <p className="text-gray-300 mb-6">
                Dr. Jain's lab offers state-of-the-art research facilities and multidisciplinary expertise for industry partnerships in biopharmaceutical development and advanced drug delivery systems.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <div className="rounded-full bg-bio-teal/20 p-1 mr-3 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-bio-teal"></div>
                  </div>
                  <span className="text-gray-300">Access to cutting-edge analytical platforms</span>
                </li>
                <li className="flex items-start">
                  <div className="rounded-full bg-bio-teal/20 p-1 mr-3 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-bio-teal"></div>
                  </div>
                  <span className="text-gray-300">Experienced team of research scientists</span>
                </li>
                <li className="flex items-start">
                  <div className="rounded-full bg-bio-teal/20 p-1 mr-3 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-bio-teal"></div>
                  </div>
                  <span className="text-gray-300">IP development and technology transfer expertise</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-black/30 rounded-xl p-6 border border-bio-blue/20">
              <h4 className="text-xl font-semibold text-white mb-4">Featured Partners</h4>
              <div className="grid grid-cols-3 gap-4 mb-6">
                {['Cipla', 'Abbott', 'Reliance', 'Serum Institute', 'Zydus', 'Sun Pharma'].map((company, index) => (
                  <div key={index} className="bg-black/50 rounded-lg p-3 border border-bio-blue/10 hover:border-bio-blue/30 transition-all flex items-center justify-center">
                    <span className="text-bio-light-blue text-sm font-medium">{company}</span>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <Button className="neo-button secondary rounded-md border-bio-blue/30 text-bio-light-blue hover:bg-bio-blue/10 backdrop-blur-md transition-all flex items-center">
                  <span>View All Partnerships</span>
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-bio-blue/20 text-center relative z-10">
            <Button className="neo-button primary rounded-md group relative overflow-hidden">
              <span className="relative z-10 flex items-center">
                Explore Collaboration Opportunities
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
    </section>
  );
};

export default CollaborationSection;
