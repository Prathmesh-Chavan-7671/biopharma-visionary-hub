
import React from 'react';
import { ArrowRight, Building, FileCheck, Beaker, Microscope, FlaskConical, Dna, ExternalLink } from 'lucide-react';
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
    title: "Downstream Bioprocessing Development",
    agency: "Advy Chemicals",
    description: "Streamlined purification workflows and enhanced yield in biopharmaceutical manufacturing processes.",
    icon: FlaskConical
  },
  {
    title: "Study of Probiotics",
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
    title: "Process Development for Biologics",
    agency: "Mynvax Pvt. Ltd.",
    description: "Comprehensive process development, scale up, production, formulation development and characterization of biologics.",
    icon: FlaskConical
  },
  {
    title: "mRNA Process Development",
    agency: "Serum Institute of India",
    description: "Developed scalable manufacturing processes for mRNA-based therapeutics with improved quality attributes.",
    icon: Beaker
  },
  {
    title: "Formulation Development",
    agency: "Mynvax Pvt. Ltd.",
    description: "Formulation development and characterization of novel therapeutic proteins with enhanced stability profiles.",
    icon: FlaskConical
  },
  {
    title: "Production Scale-up",
    agency: "Mynvax Pvt. Ltd.",
    description: "Process scale-up and production optimization for biopharmaceutical products to ensure commercial viability.",
    icon: Building
  },
  {
    title: "Due Diligence for New Technology",
    agency: "BDR Pharmaceuticals",
    description: "Comprehensive evaluation of novel drug delivery technologies (Tigen and Kure.ai) for potential acquisition and integration.",
    icon: FileCheck
  }
];

const ConsultancyProjects = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-bio-navy to-black relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIHN0cm9rZT0icmdiYSgxNCwgMTY1LCAyMzMsIDAuMSkiIHN0cm9rZS13aWR0aD0iMC41IiBkPSJNLjUuNWg2MHY2MGgtNjB6Ii8+PHBhdGggZmlsbD0icmdiYSgxNCwgMTY1LCAyMzMsIDAuMDQpIiBkPSJNMzAgMzBoMzB2MzBoLTMweiIvPjwvZz48L3N2Zz4=')] opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-bio-blue/10 border border-bio-blue/20 rounded-full mb-4">
            <span className="text-bio-light-blue text-sm font-medium">Industry Impact</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Consultancy <span className="text-gradient bg-gradient-to-r from-bio-light-blue via-bio-teal to-bio-blue bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A proven track record of delivering innovative solutions for leading pharmaceutical and biotech companies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {consultancyProjects.map((project, index) => (
            <Card 
              key={index} 
              className="bg-black/40 backdrop-blur-md border border-bio-blue/20 hover:border-bio-blue/40 transition-all duration-300 hover:shadow-[0_0_20px_rgba(14,165,233,0.2)] group"
            >
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-bio-blue/20 to-bio-teal/20 flex items-center justify-center">
                  <project.icon className="h-6 w-6 text-bio-light-blue" />
                </div>
                <div>
                  <CardTitle className="text-white text-lg">{project.title}</CardTitle>
                  <CardDescription className="text-bio-teal">{project.agency}</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm">{project.description}</p>
              </CardContent>
              <CardFooter>
                <Button variant="link" className="text-bio-light-blue p-0 flex items-center group">
                  <span>View details</span>
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button className="bg-transparent border border-bio-blue hover:bg-bio-blue/10 text-bio-light-blue px-8 py-2.5 rounded-md flex items-center mx-auto">
            <span>View All Projects</span>
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ConsultancyProjects;
