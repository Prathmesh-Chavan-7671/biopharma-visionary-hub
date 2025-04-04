
import React from 'react';
import { Brain, Award, BookOpen, FlaskConical, Globe, Users } from 'lucide-react';

const ExpertiseHighlights = () => {
  const expertise = [
    {
      icon: Brain,
      title: "Deep Scientific Knowledge",
      description: "Ph.D. in Pharmaceutical Sciences with 20+ years of research experience spanning biochemistry, nanotechnology, and drug delivery systems.",
      color: "bio-blue"
    },
    {
      icon: Award,
      title: "Industry Recognition",
      description: "Recipient of multiple international awards for breakthrough innovations in biopharmaceutical technologies.",
      color: "bio-teal"
    },
    {
      icon: BookOpen,
      title: "Academic Excellence",
      description: "Professor at IIT Bombay and Visiting Faculty at Harvard Medical School, published 130+ peer-reviewed research papers.",
      color: "bio-light-blue"
    },
    {
      icon: FlaskConical,
      title: "Innovation Catalyst",
      description: "Developed 30+ patented technologies currently utilized by leading pharmaceutical companies worldwide.",
      color: "bio-blue"
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description: "Collaborated with research institutions and companies across North America, Europe, and Asia for diverse industry applications.",
      color: "bio-teal"
    },
    {
      icon: Users,
      title: "Proven Collaboration",
      description: "Successfully partnered with 50+ companies ranging from startups to Fortune 500 organizations.",
      color: "bio-light-blue"
    }
  ];

  return (
    <section className="py-24 relative bg-gradient-to-b from-bio-navy/90 to-black overflow-hidden">
      {/* Animated molecular structures in background */}
      <div className="absolute inset-0 z-1">
        <div className="relative w-full h-full overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute futuristic-hexagon"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                opacity: 0.1 + Math.random() * 0.2,
                transform: `scale(${0.5 + Math.random() * 1})`,
                filter: `hue-rotate(${Math.random() * 60}deg) blur(${Math.random() * 2}px)`
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-bio-teal/10 border border-bio-teal/20 rounded-full mb-4">
            <span className="text-bio-light-teal text-sm font-medium">Expert Profile</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Partner with <span className="text-gradient bg-gradient-to-r from-bio-light-blue via-bio-teal to-bio-blue bg-clip-text text-transparent">Dr. Jain</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A unique combination of scientific excellence, industry understanding, and proven implementation success.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertise.map((item, index) => (
            <div 
              key={index} 
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-bio-blue/20 to-bio-teal/20 rounded-xl blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
              <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-6 relative z-10 h-full hover:-translate-y-1 transition-transform duration-300">
                <div className={`h-12 w-12 rounded-full bg-${item.color}/10 flex items-center justify-center mb-4`}>
                  <item.icon className={`h-6 w-6 text-${item.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseHighlights;
