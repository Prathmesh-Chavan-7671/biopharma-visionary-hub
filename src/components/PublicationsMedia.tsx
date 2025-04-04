
import React from 'react';
import { ArrowRight, BookOpen, FileText, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const PublicationsMedia = () => {
  const publications = [
    {
      title: "Scalable Bioprocess Design for Next-Gen Biologics",
      journal: "Nature Biotechnology",
      year: "2023",
      url: "#"
    },
    {
      title: "mRNA Process Development: Challenges and Opportunities",
      journal: "Journal of Pharmaceutical Sciences",
      year: "2023",
      url: "#"
    },
    {
      title: "Cell Line Development for Biopharmaceutical Production",
      journal: "Biotechnology and Bioengineering",
      year: "2022",
      url: "#"
    }
  ];
  
  const mediaFeatures = [
    {
      title: "The Future of mRNA Therapeutics",
      source: "BioTech Today",
      type: "Interview",
      date: "March 2024",
      url: "#"
    },
    {
      title: "Innovation in Bioprocessing",
      source: "Pharma Insights",
      type: "Feature Article",
      date: "January 2024",
      url: "#"
    }
  ];
  
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIHN0cm9rZT0icmdiYSgxNCwgMTY1LCAyMzMsIDAuMSkiIHN0cm9rZS13aWR0aD0iMC41IiBkPSJNLjUuNWg2MHY2MGgtNjB6Ii8+PHBhdGggZmlsbD0icmdiYSgxNCwgMTY1LCAyMzMsIDAuMDQpIiBkPSJNMzAgMzBoMzB2MzBoLTMweiIvPjwvZz48L3N2Zz4=')] opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-bio-blue/10 border border-bio-blue/20 rounded-full mb-4">
            <span className="text-bio-light-blue text-sm font-medium">Publications & Media</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Thought <span className="text-gradient bg-gradient-to-r from-bio-light-blue via-bio-teal to-bio-blue bg-clip-text text-transparent">Leadership</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Dr. Jain's research and insights have been featured in leading scientific journals and media outlets.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Recent Publications */}
          <div className="bg-black/40 backdrop-blur-md border border-bio-blue/20 rounded-xl p-8">
            <div className="flex items-center space-x-4 mb-8">
              <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-bio-light-blue to-bio-blue flex items-center justify-center flex-shrink-0">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white">Recent Publications</h3>
            </div>
            
            <div className="space-y-6">
              {publications.map((pub, index) => (
                <div
                  key={index}
                  className="pb-6 border-b border-bio-blue/20 last:border-0 last:pb-0"
                >
                  <h4 className="text-lg font-semibold text-white mb-2">{pub.title}</h4>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-bio-teal">{pub.journal}</span>
                      <span className="text-gray-400 ml-2">• {pub.year}</span>
                    </div>
                    <a 
                      href={pub.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-bio-light-blue hover:text-bio-blue transition-colors group"
                    >
                      <span>Read</span>
                      <ExternalLink className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Media Features */}
          <div className="bg-black/40 backdrop-blur-md border border-bio-blue/20 rounded-xl p-8">
            <div className="flex items-center space-x-4 mb-8">
              <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-bio-teal to-bio-light-blue flex items-center justify-center flex-shrink-0">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white">Media Features</h3>
            </div>
            
            <div className="space-y-6">
              {mediaFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="pb-6 border-b border-bio-blue/20 last:border-0 last:pb-0"
                >
                  <h4 className="text-lg font-semibold text-white mb-2">{feature.title}</h4>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-bio-teal">{feature.source}</span>
                      <span className="text-gray-400 ml-2">• {feature.type}</span>
                      <span className="text-gray-400 ml-2">• {feature.date}</span>
                    </div>
                    <a 
                      href={feature.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-bio-light-blue hover:text-bio-blue transition-colors group"
                    >
                      <span>View</span>
                      <ExternalLink className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 py-6 border-t border-bio-blue/20">
              <div className="flex items-center space-x-4">
                <div className="h-10 w-10 rounded-lg bg-bio-blue/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-bio-light-blue font-bold text-xl">30+</span>
                </div>
                <div>
                  <h4 className="text-white font-medium">Peer-Reviewed Publications</h4>
                  <p className="text-gray-400 text-sm">In leading scientific journals</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <Link to="/media">
            <Button className="bg-bio-blue hover:bg-bio-navy text-white px-6 py-2.5 rounded-md text-base font-medium group">
              <span>See All Publications</span>
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PublicationsMedia;
