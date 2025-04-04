
import React from 'react';
import { Beaker, TrendingUp, Award, Clock, BarChart, Shield } from 'lucide-react';

const IndustryBenefitsSection = () => {
  const benefits = [
    {
      icon: Beaker,
      title: "Accelerated R&D Pipeline",
      description: "Reduce development time by 40% through optimized research methodologies and innovative approaches.",
      color: "from-bio-blue to-bio-teal"
    },
    {
      icon: TrendingUp,
      title: "Enhanced Product Success Rate",
      description: "Increase product market success probability by 65% with expert formulation strategies.",
      color: "from-bio-teal to-bio-light-blue"
    },
    {
      icon: Award,
      title: "Regulatory Navigation",
      description: "90% success rate in regulatory approvals with compliant-by-design development approaches.",
      color: "from-bio-light-blue to-bio-blue"
    },
    {
      icon: Clock,
      title: "Time-to-Market Advantage",
      description: "Gain competitive edge with 8-12 month reduction in product launch timelines.",
      color: "from-bio-blue to-bio-light-blue"
    },
    {
      icon: BarChart,
      title: "Cost Optimization",
      description: "Achieve 25-35% cost reduction in manufacturing through process optimization.",
      color: "from-bio-teal to-bio-blue"
    },
    {
      icon: Shield,
      title: "Intellectual Property Strategy",
      description: "Develop robust patent portfolios with 30+ successful patent applications expertise.",
      color: "from-bio-light-blue to-bio-teal"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-bio-navy/90 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIHN0cm9rZT0icmdiYSgxNCwgMTY1LCAyMzMsIDAuMSkiIHN0cm9rZS13aWR0aD0iMC41IiBkPSJNLjUuNWg2MHY2MGgtNjB6Ii8+PHBhdGggZmlsbD0icmdiYSgxNCwgMTY1LCAyMzMsIDAuMDQpIiBkPSJNMzAgMzBoMzB2MzBoLTMweiIvPjwvZz48L3N2Zz4=')] opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-bio-blue/10 border border-bio-blue/20 rounded-full mb-4">
            <span className="text-bio-light-blue text-sm font-medium">Industry Advantages</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Transforming <span className="text-gradient bg-gradient-to-r from-bio-light-blue via-bio-teal to-bio-blue bg-clip-text text-transparent">Business Outcomes</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Partner with Dr. Jain to unlock significant competitive advantages for your organization.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-black/40 backdrop-blur-md border border-bio-blue/20 rounded-xl p-6 hover:border-bio-blue/40 transition-all duration-300 hover:shadow-[0_0_20px_rgba(14,165,233,0.15)] hover:-translate-y-1"
            >
              <div className={`h-12 w-12 rounded-lg bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-4`}>
                <benefit.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
              <p className="text-gray-300">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-flex items-center justify-center px-6 py-3 border border-bio-blue/30 rounded-lg bg-bio-blue/10 text-bio-light-blue">
            <span className="text-sm font-medium">Based on results from 50+ industry partnerships</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryBenefitsSection;
