
import React from 'react';
import { TYPOGRAPHY, SPACING } from '@/constants/styles';

const ExpertiseAreas = () => {
  const expertiseAreas = [
    {
      title: "Pharmaceutical Formulation",
      description: "Specialized approaches for complex APIs, controlled release systems, and targeted delivery platforms with enhanced bioavailability.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 15L9 10C9 7.79086 10.7909 6 13 6V6C15.2091 6 17 7.79086 17 10V15" stroke="#0EA5E9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 15H18C19.1046 15 20 15.8954 20 17V17C20 19.2091 18.2091 21 16 21H10C7.79086 21 6 19.2091 6 17V17C6 15.8954 6.89543 15 8 15Z" stroke="#0EA5E9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 6V3" stroke="#0EA5E9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      applications: ["Poorly soluble compounds", "Long-acting injectables", "Targeted cancer therapies", "Oral peptide delivery"]
    },
    {
      title: "Bioprocess Engineering",
      description: "Optimizing manufacturing processes for biologics, cell therapies, and complex pharmaceuticals to improve yield and reduce costs.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 4V19H16M9 4V19H7" stroke="#0D9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <rect x="4" y="4" width="15" height="15" rx="2" stroke="#0D9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M4 9H19" stroke="#0D9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M4 14H19" stroke="#0D9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      applications: ["Fermentation optimization", "Downstream processing", "Cell culture systems", "Continuous manufacturing"]
    },
    {
      title: "Drug Stability Enhancement",
      description: "Innovative formulation strategies to overcome stability challenges in sensitive pharmaceuticals and biologics.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 12V21M12 12L18 18M12 12L6 18M12 12V8M12 3V8M12 8H16M12 8H7.5" stroke="#1E3A8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      applications: ["Protein stabilization", "Vaccine thermostability", "Lyophilized formulations", "Moisture-sensitive compounds"]
    },
    {
      title: "Advanced Analytical Methods",
      description: "Development of novel analytical techniques for better characterization and quality control of complex pharmaceuticals.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 3V6M16 3V6M7 21L12 17L17 21" stroke="#0EA5E9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="10" r="6" stroke="#0EA5E9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      applications: ["Biosimilar characterization", "Impurity profiling", "Structure-function analysis", "In-vitro release testing"]
    },
    {
      title: "Regulatory Science",
      description: "Strategic guidance on regulatory requirements and documentation for successful approval pathways globally.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 12H15M12 9V15M3 6V18C3 19.1046 3.89543 20 5 20H19C20.1046 20 21 19.1046 21 18V6C21 4.89543 20.1046 4 19 4H5C3.89543 4 3 4.89543 3 6Z" stroke="#0D9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      applications: ["FDA/EMA strategy", "Technical documentation", "Regulatory deficiency response", "Accelerated approval pathways"]
    },
    {
      title: "AI-Driven Drug Development",
      description: "Leveraging artificial intelligence and machine learning to accelerate discovery and optimize formulation development.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 4V5M4 12H5M12 19V20M19 12H20M6.31412 6.31412L7.02123 7.02123M17.6777 6.31412L16.9706 7.02123M6.31412 17.6777L7.02123 16.9706M17.6777 17.6777L16.9706 16.9706M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z" stroke="#1E3A8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      applications: ["Predictive formulation", "Structure-property relationships", "Process parameter optimization", "Pharmacokinetic modeling"]
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className={SPACING.container}>
        <div className="text-center mb-16">
          <h2 className={`${TYPOGRAPHY.h2} text-bio-navy mb-4`}>
            Industry-Relevant <span className="text-bio-blue">Expertise</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dr. Jain brings specialized knowledge in key areas critical to pharmaceutical and biotech innovation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseAreas.map((area, i) => (
            <div key={i} className="bg-white rounded-lg shadow-md border border-gray-100 p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-4">
                {area.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-bio-navy mb-3">{area.title}</h3>
              <p className="text-gray-600 mb-5">{area.description}</p>
              
              <div className="mt-auto">
                <div className="font-medium text-bio-blue mb-2">Industry Applications:</div>
                <div className="flex flex-wrap gap-2">
                  {area.applications.map((app, j) => (
                    <span key={j} className="inline-flex text-sm text-bio-navy bg-gray-100 px-2 py-1 rounded">
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseAreas;
