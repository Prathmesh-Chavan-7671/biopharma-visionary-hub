
import React from 'react';
import { ArrowRight, CheckCircle2, BarChart3, LineChart } from 'lucide-react';
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
  return (
    <section className="py-16 bg-bio-light-gray" id="case-studies">
      <div className="content-container">
        <div className="text-center mb-12">
          <h2 className="section-heading">Successful Industry Projects & Case Studies</h2>
          <p className="text-lg text-bio-gray max-w-3xl mx-auto">
            Consulting projects that delivered real impact and measurable results for leading pharmaceutical and biotech companies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {caseStudies.map((study, index) => (
            <Card key={index} className="card animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
              <CardHeader>
                <CardTitle className="text-bio-navy">{study.title}</CardTitle>
                <CardDescription className="text-bio-teal font-medium">{study.client}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-bio-gray mb-4">{study.description}</p>
                <div className="flex items-center mt-4 text-bio-blue">
                  <BarChart3 className="h-5 w-5 mr-2" />
                  <span className="font-semibold">{study.results}</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="link" className="text-bio-blue p-0 hover:text-bio-teal">
                  View full case study <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-bold text-bio-navy mb-4">Proven Results for Industry Leaders</h3>
              <p className="text-bio-gray mb-4">
                Dr. Jain's expertise has helped companies save valuable time, resources, and R&D costs while accelerating innovation and market readiness.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-bio-teal mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-bio-gray">Reduced development timelines by 25-40%</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-bio-teal mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-bio-gray">Optimized processes saving millions in R&D costs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-bio-teal mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-bio-gray">Improved product quality and manufacturing efficiency</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="rounded-full bg-bio-light-teal/30 p-8">
                <LineChart className="h-24 w-24 text-bio-teal" />
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <Button className="cta-button px-8 py-3">
              Leverage Proven Expertise – Schedule a Discussion
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
