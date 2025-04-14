
import React from 'react';
import { ArrowRight, Brain, Atom, Rocket, MessageCircle, Circle, Square, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const SitePreview = () => {
  const sections = [
    {
      id: 1,
      title: "About Me",
      description: "Learn more about my background, expertise, and professional journey in biopharmaceutical innovation.",
      icon: User,
      color: "from-bio-blue/20 to-bio-blue/5",
      borderColor: "bio-blue",
      link: "/about"
    },
    {
      id: 2,
      title: "Consulting",
      description: "Strategic consulting for pharmaceutical & biotech companies to accelerate R&D and optimize processes.",
      icon: Brain,
      color: "from-bio-blue/20 to-bio-blue/5",
      borderColor: "bio-blue",
      link: "/consulting"
    },
    {
      id: 3,
      title: "Research",
      description: "Pioneering research in drug delivery systems, bioprocess engineering, and pharmaceutical nanotechnology.",
      icon: Atom,
      color: "from-bio-teal/20 to-bio-teal/5",
      borderColor: "bio-teal",
      link: "/research"
    },
    {
      id: 4,
      title: "Startups",
      description: "Supporting biotech startups with scientific expertise, mentorship, and technology development.",
      icon: Rocket,
      color: "from-bio-light-blue/20 to-bio-light-blue/5",
      borderColor: "bio-light-blue",
      link: "/startups"
    },
    {
      id: 5,
      title: "Collaborations",
      description: "Strategic partnerships with industry leaders to develop next-generation therapeutics and technologies.",
      icon: Circle,
      color: "from-bio-blue/20 to-bio-teal/5",
      borderColor: "bio-blue",
      link: "/collaborations"
    },
    {
      id: 6,
      title: "Speaking",
      description: "Expert insights on pharmaceutical innovation, drug delivery, and industry-academia partnerships.",
      icon: MessageCircle, 
      color: "from-bio-teal/20 to-bio-light-blue/5",
      borderColor: "bio-teal",
      link: "/speaking"
    },
    {
      id: 7,
      title: "Media",
      description: "Featured in leading scientific publications and media outlets for groundbreaking research and insights.",
      icon: Square,
      color: "from-bio-light-blue/20 to-bio-blue/5",
      borderColor: "bio-light-blue",
      link: "/media"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-bio-navy to-black relative overflow-hidden">
      {/* Background animation effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-bio-blue/5 to-transparent animate-pulse-slow opacity-70"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Explore Dr. Jain's <span className="text-gradient bg-gradient-to-r from-bio-light-blue via-bio-teal to-bio-blue bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how Dr. Jain's multidisciplinary approach combines scientific innovation with industry applications.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((section) => (
            <div 
              key={section.id} 
              className={`bg-gradient-to-br ${section.color} backdrop-blur-md border border-${section.borderColor}/30 rounded-xl p-6 hover:border-${section.borderColor}/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(14,165,233,0.15)] hover:-translate-y-1`}
            >
              <div className={`h-12 w-12 rounded-lg bg-${section.borderColor}/10 flex items-center justify-center mb-4`}>
                <section.icon className={`h-6 w-6 text-${section.borderColor}`} />
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-3">{section.title}</h3>
              <p className="text-gray-300 mb-6">{section.description}</p>
              
              <Link to={section.link}>
                <Button variant="link" className={`text-${section.borderColor} p-0 flex items-center group`}>
                  <span>Explore More</span>
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SitePreview;
