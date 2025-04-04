
import React from 'react';
import { ArrowRight, Flask, Database, FileCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { TYPOGRAPHY, SPACING } from '@/constants/styles';
import { Button } from '@/components/ui/button';

const SignatureProjects = () => {
  const projects = [
    {
      title: "mRNA Process Development",
      client: "Serum Institute of India",
      description: "Developed scalable, cost-effective mRNA production protocol used in vaccine pipelines, resulting in 40% production cost reduction.",
      icon: Flask,
      color: "from-bio-light-blue to-bio-blue",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1600&q=80"
    },
    {
      title: "Biosimilars Scale-Up",
      client: "Mangalam Drug & Organics",
      description: "Led end-to-end optimization of biosimilar production processes, reducing development timeline by 30% and improving yield.",
      icon: Database,
      color: "from-bio-teal to-bio-light-blue",
      image: "https://images.unsplash.com/photo-1614308456595-69ede7a1d39d?auto=format&fit=crop&w=1600&q=80"
    },
    {
      title: "Due Diligence for Technology Acquisition",
      client: "BDR Pharmaceuticals",
      description: "Executed comprehensive evaluation of novel drug delivery technologies (Tigen and Kure.ai) for strategic acquisition and integration.",
      icon: FileCheck,
      color: "from-bio-blue to-bio-teal",
      image: "https://images.unsplash.com/photo-1583912267550-aeb711395e0e?auto=format&fit=crop&w=1600&q=80"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-bio-navy/90 to-black relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIHN0cm9rZT0icmdiYSgxNCwgMTY1LCAyMzMsIDAuMSkiIHN0cm9rZS13aWR0aD0iMC41IiBkPSJNLjUuNWg2MHY2MGgtNjB6Ii8+PHBhdGggZmlsbD0icmdiYSgxNCwgMTY1LCAyMzMsIDAuMDQpIiBkPSJNMzAgMzBoMzB2MzBoLTMweiIvPjwvZz48L3N2Zz4=')] opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-bio-blue/10 border border-bio-blue/20 rounded-full mb-4">
            <span className="text-bio-light-blue text-sm font-medium">Signature Projects</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-gradient bg-gradient-to-r from-bio-light-blue via-bio-teal to-bio-blue bg-clip-text text-transparent">Show, Don't Just Tell</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how Dr. Jain's scientific expertise translates into measurable industry outcomes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-black/40 backdrop-blur-md border border-bio-blue/20 rounded-xl overflow-hidden hover:border-bio-blue/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(14,165,233,0.2)] group hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-5">
                  <span className="px-3 py-1 bg-bio-blue/80 backdrop-blur-sm text-white text-sm font-medium rounded-full">
                    {project.client}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`h-10 w-10 rounded-lg bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                    <project.icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                </div>
                
                <p className="text-gray-300 mb-6">{project.description}</p>
                
                <Link to="/consulting" className="inline-flex items-center text-bio-light-blue hover:text-bio-blue transition-colors group/link">
                  <span>View Full Case Study</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/consulting">
            <Button className="bg-bio-blue hover:bg-bio-navy text-white px-6 py-2.5 rounded-md text-base font-medium group">
              <span>See All Projects</span>
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SignatureProjects;
