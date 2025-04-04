
import React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MEDIA_ASSETS } from '@/constants/media';
import { Link } from 'react-router-dom';

const FeaturedProjects = () => {
  const projects = [
    {
      id: 1,
      title: "Novel Drug Delivery System",
      client: "Global Pharma Corp",
      description: "Developed a breakthrough nano-carrier technology that increased drug efficacy by 78% while reducing side effects in oncology treatments.",
      impact: "Reduced R&D costs by 40%",
      image: MEDIA_ASSETS.industryImages.drugDelivery
    },
    {
      id: 2,
      title: "Bioprocess Optimization",
      client: "BioManufacture Inc",
      description: "Redesigned production protocols for biologic drugs, resulting in 3x yield improvement and 65% reduction in production time.",
      impact: "Saved $4.3M annually",
      image: MEDIA_ASSETS.industryImages.bioprocess
    },
    {
      id: 3,
      title: "Formulation Stability Enhancement",
      client: "MediScience Technologies",
      description: "Created innovative excipient combinations that extended product shelf-life from 18 to 36 months without refrigeration.",
      impact: "Expanded market reach by 40%",
      image: MEDIA_ASSETS.industryImages.stability
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-bio-navy relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIHN0cm9rZT0icmdiYSgxNCwgMTY1LCAyMzMsIDAuMSkiIHN0cm9rZS13aWR0aD0iMC41IiBkPSJNLjUuNWg2MHY2MGgtNjB6Ii8+PHBhdGggZmlsbD0icmdiYSgxNCwgMTY1LCAyMzMsIDAuMDQpIiBkPSJNMzAgMzBoMzB2MzBoLTMweiIvPjwvZz48L3N2Zz4=')] opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-bio-blue/10 border border-bio-blue/20 rounded-full mb-4">
            <span className="text-bio-light-blue text-sm font-medium">Industry Impact</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="text-gradient bg-gradient-to-r from-bio-light-blue via-bio-teal to-bio-blue bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transformative consulting work that has delivered measurable results for leading pharmaceutical and biotech companies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="bg-black/40 backdrop-blur-md border border-bio-blue/20 rounded-xl overflow-hidden transition-all duration-300 hover:border-bio-blue/40 hover:shadow-[0_0_20px_rgba(14,165,233,0.2)] hover:-translate-y-1"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <span className="text-bio-teal text-xs font-medium px-2 py-1 bg-bio-teal/10 rounded-full">
                    {project.impact}
                  </span>
                </div>
                <p className="text-gray-400 text-sm mb-3">{project.client}</p>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <Button variant="link" className="text-bio-light-blue p-0 flex items-center group">
                  <span>View details</span>
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Link to="/consulting">
            <Button className="bg-transparent border border-bio-blue hover:bg-bio-blue/10 text-bio-light-blue px-8 py-2.5 rounded-md flex items-center mx-auto">
              <span>View All Projects</span>
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
