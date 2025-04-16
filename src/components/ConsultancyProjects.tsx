
import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ConsultancyProjects = () => {
  const projects = [
    {
      title: "Study of Biosimilars",
      agency: "Mangalam Drug and Organics",
      logo: "https://www.mangalamdrugs.com/images/mangalam-organics-logo.png",
      logoFallback: "https://ui-avatars.com/api/?name=Mangalam+Drug&background=0EA5E9&color=fff"
    },
    {
      title: "Downstream Bioprocessing Development",
      agency: "Advy Chemicals",
      logo: "https://advychemicals.com/wp-content/uploads/2022/05/Advy-Logo.png",
      logoFallback: "https://ui-avatars.com/api/?name=Advy+Chemicals&background=0D9488&color=fff"
    },
    {
      title: "Study of Probiotics",
      agency: "Meteoric Biopharmaceuticals",
      logo: "https://www.biospectrumindia.com/uploads/articles/meteoric_logo-14180.jpg",
      logoFallback: "https://ui-avatars.com/api/?name=Meteoric+Biopharmaceuticals&background=0EA5E9&color=fff"
    },
    {
      title: "Cell Line Development",
      agency: "Oncosimis Biotech Pvt Ltd",
      logo: "https://oncosimis.com/wp-content/uploads/2021/09/Oncosimis-Logo-Png-for-Website.png",
      logoFallback: "https://ui-avatars.com/api/?name=Oncosimis+Biotech&background=0D9488&color=fff"
    },
    {
      title: "Process development, scale up and production, formulation development and characterization of XXXX",
      agency: "Mynvax Pvt. Ltd.",
      logo: "https://mynvax.com/wp-content/uploads/2020/01/MynvaxLogo_350x350-300x300-1.png",
      logoFallback: "https://ui-avatars.com/api/?name=Mynvax&background=0EA5E9&color=fff"
    },
    {
      title: "mRNA process development",
      agency: "Serum Institute of India",
      logo: "https://www.seruminstitute.com/images/logo.png",
      logoFallback: "https://ui-avatars.com/api/?name=Serum+Institute&background=0D9488&color=fff"
    },
    {
      title: "Process development, scale up and production, formulation development and characterization of XXXX",
      agency: "Mynvax Pvt. Ltd.",
      logo: "https://mynvax.com/wp-content/uploads/2020/01/MynvaxLogo_350x350-300x300-1.png",
      logoFallback: "https://ui-avatars.com/api/?name=Mynvax&background=0EA5E9&color=fff"
    },
    {
      title: "Process development, scale up and production, formulation development and characterization of XXXX",
      agency: "Mynvax Pvt. Ltd.",
      logo: "https://mynvax.com/wp-content/uploads/2020/01/MynvaxLogo_350x350-300x300-1.png",
      logoFallback: "https://ui-avatars.com/api/?name=Mynvax&background=0D9488&color=fff"
    },
    {
      title: "Due diligence on two technologies: Tigen and Kure.ai",
      agency: "BDR Pharmaceuticals",
      logo: "https://bdrpharma.com/wp-content/uploads/2022/09/BDR_Logo_2x.png",
      logoFallback: "https://ui-avatars.com/api/?name=BDR+Pharmaceuticals&background=0EA5E9&color=fff"
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-bio-off-white to-bio-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIHN0cm9rZT0icmdiYSgxNCwgMTY1LCAyMzMsIDAuMSkiIHN0cm9rZS13aWR0aD0iMC41IiBkPSJNLjUuNWg2MHY2MGgtNjB6Ii8+PHBhdGggZmlsbD0icmdiYSgxNCwgMTY1LCAyMzMsIDAuMDQpIiBkPSJNMzAgMzBoMzB2MzBoLTMweiIvPjwvZz48L3N2Zz4=')] opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1.5 bg-bio-blue/5 border border-bio-blue/10 rounded-full mb-4">
            <span className="text-bio-blue text-sm font-medium">Industry Impact</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-bio-navy mb-6">
            Consultancy <span className="text-gradient bg-gradient-to-r from-bio-blue to-bio-teal bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-bio-gray max-w-3xl mx-auto">
            Transforming research into impactful industry solutions through strategic consultancy partnerships
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white/90 backdrop-blur-sm border border-bio-light-blue/10 rounded-xl p-6 hover:border-bio-blue/20 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-md overflow-hidden bg-bio-light-blue/10 flex items-center justify-center">
                  <img 
                    src={project.logo} 
                    alt={`${project.agency} logo`} 
                    className="w-full h-full object-contain p-1"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = project.logoFallback;
                    }}
                  />
                </div>
                <div className="ml-3">
                  <h4 className="text-bio-navy font-medium text-lg">{project.agency}</h4>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-bio-navy mb-3 line-clamp-2">{project.title}</h3>
              
              <div className="flex mt-4">
                <CheckCircle className="h-5 w-5 text-bio-blue mr-2" />
                <span className="text-bio-gray text-sm">Successfully Completed</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button className="bg-bio-blue hover:bg-bio-teal text-white">
            <span className="flex items-center">
              View All Consultancy Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ConsultancyProjects;
