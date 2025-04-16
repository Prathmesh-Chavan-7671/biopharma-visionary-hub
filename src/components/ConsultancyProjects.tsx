
import React, { useState } from 'react';
import { ArrowRight, Building, FileCheck, Beaker, Microscope, FlaskConical, Dna, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { TYPOGRAPHY, SPACING } from '@/constants/styles';

const consultancyProjects = [
  {
    title: "Study of Biosimilars",
    agency: "Mangalam Drug & Organics",
    description: "Comprehensive analysis and optimization of biosimilar production processes, resulting in 30% reduced development timeline.",
    icon: Beaker,
    logo: "https://media.licdn.com/dms/image/C560BAQFKcEqgLYnN0A/company-logo_200_200/0/1630998900412?e=2147483647&v=beta&t=b1aaSCYJSJmYC9dW1H2-U5I3Pf_uyQIaENVpmJqRyuM"
  },
  {
    title: "Downstream Bioprocessing",
    agency: "Advy Chemicals",
    description: "Streamlined purification workflows and enhanced yield in biopharmaceutical manufacturing processes.",
    icon: FlaskConical,
    logo: "https://static.wixstatic.com/media/f3aacb_4c2831fa22e94e0ca7b94b3b5b4aeaf5~mv2.png/v1/fill/w_179,h_122,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/advy.png"
  },
  {
    title: "Probiotics Study",
    agency: "Meteoric Biopharmaceuticals",
    description: "Optimized formulation and stability of probiotic products for enhanced shelf life and efficacy.",
    icon: Microscope,
    logo: "https://www.meteoric.net/images/Meteoric.jpg"
  },
  {
    title: "Cell Line Development",
    agency: "Oncosimis Biotech Pvt Ltd",
    description: "Engineering robust and high-yielding cell lines for biopharmaceutical production.",
    icon: Dna,
    logo: "https://oncosimis.com/wp-content/uploads/2023/01/cropped-Oncosimis-Logo-PNG-165x65.png"
  },
  {
    title: "mRNA Process Development",
    agency: "Serum Institute of India",
    description: "Developed scalable manufacturing processes for mRNA-based therapeutics with improved quality attributes.",
    icon: Beaker,
    logo: "https://www.seruminstitute.com/images/logo.png"
  },
  {
    title: "Due Diligence for New Technology",
    agency: "BDR Pharmaceuticals",
    description: "Comprehensive evaluation of novel drug delivery technologies (Tigen and Kure.ai) for potential acquisition and integration.",
    icon: FileCheck,
    logo: "https://www.bdrpharma.com/static/images/logo-header.png"
  }
];

const ConsultancyProjects = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-bio-light-blue/5 to-bio-light-teal/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-bio-blue/10 border border-bio-blue/20 rounded-full mb-4">
            <span className="text-bio-light-blue text-sm font-medium">Consultancy Projects</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-bio-navy mb-6">
            Recent <span className="text-gradient bg-gradient-to-r from-bio-light-blue via-bio-teal to-bio-blue bg-clip-text text-transparent">Consultancy Work</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dr. Jain provides expert scientific consultancy for leading pharmaceutical and biotech companies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {consultancyProjects.map((project, index) => (
            <Card key={index} className="border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start">
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-bio-light-blue to-bio-blue flex items-center justify-center">
                      <project.icon className="h-5 w-5 text-white" />
                    </div>
                    <CardTitle className="text-bio-navy">{project.title}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex items-center space-x-2 mb-4">
                  <img 
                    src={project.logo} 
                    alt={project.agency} 
                    className="h-6 object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = "https://via.placeholder.com/150x40/f8fafc/64748b?text=" + encodeURIComponent(project.agency);
                    }}
                  />
                  <p className="text-bio-teal font-medium text-sm">{project.agency}</p>
                </div>
                <p className="text-gray-600">{project.description}</p>
              </CardContent>
              <CardFooter>
                <Button variant="link" className="text-bio-blue p-0 flex items-center group">
                  <span>Learn more</span>
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConsultancyProjects;
