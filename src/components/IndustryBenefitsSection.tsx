
import React from 'react';
import { Beaker, TrendingUp, Award, Clock, BarChart, Shield, Zap, CheckCircle, Activity, RotateCcw, Users, FileText } from 'lucide-react';

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
      description: "90% success rate for regulatory approvals with in-house designed methods for early drug development stages.",
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
      description: "Get your product analysed at lower costs. Customised quotations available as per requirements.",
      color: "from-bio-teal to-bio-blue"
    },
    {
      icon: FileText,
      title: "Quality Policy",
      description: "Well designed quality policy in place to cater to your GLP requirements.",
      color: "from-bio-light-blue to-bio-teal"
    },
    {
      icon: Users,
      title: "Skilled Team",
      description: "A team of highly skilled Subject matter experts to cater to any client queries. Quick response.",
      color: "from-bio-blue to-bio-light-blue"
    }
  ];

  const achievements = [
    { 
      metric: "40%", 
      label: "Reduced Development Time", 
      icon: Clock,
      color: "bio-blue" 
    },
    { 
      metric: "65%", 
      label: "Higher Success Rate", 
      icon: CheckCircle,
      color: "bio-teal" 
    },
    { 
      metric: "10+", 
      label: "Technology Transfers", 
      icon: RotateCcw,
      color: "bio-light-blue" 
    },
    { 
      metric: "$50M+", 
      label: "Revenue Generated", 
      icon: Zap,
      color: "bio-teal" 
    },
    { 
      metric: "20+", 
      label: "Industry Partnerships", 
      icon: TrendingUp,
      color: "bio-blue" 
    },
    { 
      metric: "30+", 
      label: "Patent Applications", 
      icon: Activity,
      color: "bio-light-blue" 
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-bio-white to-bio-very-light-blue relative">
      {/* Background pattern - more subtle */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIHN0cm9rZT0icmdiYSgxNCwgMTY1LCAyMzMsIDAuMSkiIHN0cm9rZS13aWR0aD0iMC41IiBkPSJNLjUuNWg2MHY2MGgtNjB6Ii8+PHBhdGggZmlsbD0icmdiYSgxNCwgMTY1LCAyMzMsIDAuMDQpIiBkPSJNMzAgMzBoMzB2MzBoLTMweiIvPjwvZz48L3N2Zz4=')] opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Key Metrics Section */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <div className="inline-block px-4 py-1.5 bg-bio-blue/5 border border-bio-blue/10 rounded-full mb-4">
              <span className="text-bio-blue text-sm font-medium">Proven Track Record</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-bio-navy mb-4">
              <span className="text-gradient bg-gradient-to-r from-bio-light-blue to-bio-blue bg-clip-text text-transparent">Measurable Impact</span> for Industry Partners
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {achievements.map((item, index) => (
              <div 
                key={index}
                className="bg-white/80 backdrop-blur-sm border border-bio-light-blue/10 rounded-xl p-4 flex flex-col items-center justify-center hover:border-bio-blue/20 transition-all duration-300 hover:shadow-sm"
              >
                <div className={`h-12 w-12 rounded-full bg-${item.color}/10 flex items-center justify-center mb-3`}>
                  <item.icon className={`h-6 w-6 text-${item.color}`} />
                </div>
                <div className="text-2xl font-bold text-bio-navy mb-1">{item.metric}</div>
                <div className="text-bio-gray text-sm text-center">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-bio-blue/5 border border-bio-blue/10 rounded-full mb-4">
            <span className="text-bio-blue text-sm font-medium">Industry Advantages</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-bio-navy mb-6">
            Transforming <span className="text-gradient bg-gradient-to-r from-bio-light-blue via-bio-teal to-bio-blue bg-clip-text text-transparent">Business Outcomes</span>
          </h2>
          <p className="text-xl text-bio-gray max-w-3xl mx-auto">
            Partner with Dr. Jain to unlock significant competitive advantages for your organization.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white/90 backdrop-blur-sm border border-bio-light-blue/10 rounded-xl p-6 hover:border-bio-blue/20 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
            >
              <div className={`h-12 w-12 rounded-lg bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-4`}>
                <benefit.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-bio-navy mb-3">{benefit.title}</h3>
              <p className="text-bio-gray">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-flex items-center justify-center px-6 py-3 border border-bio-blue/10 rounded-lg bg-bio-blue/5 text-bio-blue">
            <span className="text-sm font-medium">Based on results from 50+ industry partnerships</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryBenefitsSection;
