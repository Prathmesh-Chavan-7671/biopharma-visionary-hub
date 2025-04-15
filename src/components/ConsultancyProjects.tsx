
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
    icon: Beaker
  },
  {
    title: "Downstream Bioprocessing",
    agency: "Advy Chemicals",
    description: "Streamlined purification workflows and enhanced yield in biopharmaceutical manufacturing processes.",
    icon: FlaskConical
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
  return null; // This component will not be rendered
};

export default ConsultancyProjects;
