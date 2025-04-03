
import React, { useState } from 'react';
import { ArrowRight, Building, FileCheck, Beaker, Microscope, Flask, Dna } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { TYPOGRAPHY, SPACING } from '@/constants/styles';

const consultancyProjects = [
  {
    title: "Study of Biosimilars",
    agency: "Mangalam Drug & Organics",
    description: "Comprehensive analysis and optimization of biosimilar production processes, resulting in 30% reduced development timeline.",
    icon: Beaker
  },
  {
    title: "Downstream Bioprocessing",
    agency: "Advy Chemicals",
    description: "Streamlined purification workflows and enhanced yield in biopharmaceutical manufacturing processes.",
    icon: Flask
  },
  {
    title: "Probiotics Study",
    agency: "Meteoric Biopharmaceuticals",
    description: "Optimized formulation and stability of probiotic products for enhanced shelf life and efficacy.",
    icon: Microscope
  },
  {
    title: "Cell Line Development",
    agency: "Oncosimis Biotech Pvt Ltd",
    description: "Engineering robust and high-yielding cell lines for biopharmaceutical production.",
    icon: Dna
  },
  {
    title: "mRNA Process Development",
    agency: "Serum Institute of India",
    description: "Developed scalable manufacturing processes for mRNA-based therapeutics with improved quality attributes.",
    icon: Beaker
  },
  {
    title: "Due Diligence for New Technology",
    agency: "BDR Pharmaceuticals",
    description: "Comprehensive evaluation of novel drug delivery technologies (Tigen and Kure.ai) for potential acquisition and integration.",
    icon: FileCheck
  }
];

const ConsultancyProjects = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  
  const handleHover = (index: number) => {
    setActiveCard(index);
  };

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className={SPACING.container}>
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4">
            <span className="text-blue-400 text-sm font-medium">Industry Partnerships</span>
          </div>
          <h2 className={`${TYPOGRAPHY.h2} text-white mb-4`}>
            Consultancy <span className="text-blue-400">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Providing expert scientific consultancy to help companies overcome technical challenges and accelerate innovation in biopharmaceuticals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {consultancyProjects.map((project, index) => (
            <Card 
              key={index}
              className={`bg-gray-900/50 backdrop-blur-sm border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 ${activeCard === index ? 'scale-[1.02] z-10' : 'scale-100 z-0'}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl flex items-center justify-center mb-4">
                  {React.createElement(project.icon, { className: "text-blue-400 h-6 w-6" })}
                </div>
                <CardTitle className="text-white">{project.title}</CardTitle>
                <CardDescription className="text-blue-300">
                  <div className="flex items-center">
                    <Building className="h-4 w-4 mr-1" />
                    <span>{project.agency}</span>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">{project.description}</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full rounded-lg bg-transparent border-blue-500/20 text-blue-400 hover:bg-blue-500/10 hover:border-blue-500/30 mt-auto">
                  <span className="flex items-center">
                    View Project Details
                    <ArrowRight className="ml-2 h-4 w-4 opacity-70" />
                  </span>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-gray-400 mb-6">For academic publications and research output, please refer to <span className="text-blue-400">Google Scholar</span>.</p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-8 py-2">
            <span className="flex items-center">
              View All Consultancy Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ConsultancyProjects;
