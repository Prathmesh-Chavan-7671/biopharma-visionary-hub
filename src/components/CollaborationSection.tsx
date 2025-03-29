
import React from 'react';
import { ArrowRight, Briefcase, Building, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const collaborations = [
  {
    company: "BioPharmaTech Inc.",
    role: "Scientific Advisor",
    description: "Led strategic development of novel drug delivery platforms, resulting in two patented technologies now in clinical trials.",
    icon: Briefcase
  },
  {
    company: "MediGene Solutions",
    role: "Research Consultant",
    description: "Optimized nanomedicine formulations, improving drug targeting efficiency by 67% and reducing production costs by 30%.",
    icon: Building
  },
  {
    company: "CellTech Innovations",
    role: "Industry Collaborator",
    description: "Co-developed 3D bioprinting protocols for tissue engineering applications, leading to a joint research grant of $2.5M.",
    icon: Users
  }
];

const CollaborationSection = () => {
  return (
    <section className="py-16 bg-bio-light-gray" id="collaborations">
      <div className="content-container">
        <div className="text-center mb-12">
          <h2 className="section-heading">Industry Collaborations</h2>
          <p className="text-lg text-bio-gray max-w-3xl mx-auto">
            Partnering with leading biotech and pharmaceutical companies to translate academic research into commercial innovations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {collaborations.map((collab, index) => (
            <Card key={index} className="card animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
              <CardHeader>
                <div className="rounded-full bg-bio-light-blue p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <collab.icon className="text-bio-blue" />
                </div>
                <CardTitle className="text-bio-navy">{collab.company}</CardTitle>
                <CardDescription className="text-bio-teal font-medium">{collab.role}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-bio-gray">{collab.description}</p>
              </CardContent>
              <CardFooter>
                <Button variant="link" className="text-bio-blue p-0 hover:text-bio-teal">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button className="cta-button px-8 py-3">
            Explore All Collaborations
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CollaborationSection;
