
import React from 'react';
import { Quote } from 'lucide-react';

const PartnerTestimonials = () => {
  const testimonials = [
    {
      quote: "Dr. Jain's strategies helped us accelerate product development by 6 months, creating significant competitive advantage.",
      author: "Dr. Sanjay Sharma",
      position: "CTO, Mynvax",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      quote: "His knowledge of mRNA workflows is unmatched. Dr. Jain provided crucial insights that streamlined our manufacturing process.",
      author: "Dr. Adar Poonawalla",
      position: "Head of R&D, Serum Institute",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      quote: "Working with Dr. Jain transformed our approach to bioprocessing, resulting in dramatic yield improvements.",
      author: "Rajesh Kumar",
      position: "CEO, BDR Pharmaceuticals",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80"
    }
  ];
  
  const partnerLogos = [
    {
      name: "Mangalam Drug & Organics",
      logo: "https://media.licdn.com/dms/image/C560BAQFKcEqgLYnN0A/company-logo_200_200/0/1630998900412?e=2147483647&v=beta&t=b1aaSCYJSJmYC9dW1H2-U5I3Pf_uyQIaENVpmJqRyuM"
    },
    {
      name: "Advy Chemicals",
      logo: "https://static.wixstatic.com/media/f3aacb_4c2831fa22e94e0ca7b94b3b5b4aeaf5~mv2.png/v1/fill/w_179,h_122,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/advy.png"
    },
    {
      name: "Meteoric Biopharmaceuticals",
      logo: "https://www.meteoric.net/images/Meteoric.jpg"
    },
    {
      name: "Oncosimis Biotech",
      logo: "https://oncosimis.com/wp-content/uploads/2023/01/cropped-Oncosimis-Logo-PNG-165x65.png"
    },
    {
      name: "Serum Institute of India",
      logo: "https://www.seruminstitute.com/images/logo.png"
    },
    {
      name: "BDR Pharmaceuticals",
      logo: "https://www.bdrpharma.com/static/images/logo-header.png"
    }
  ];
  
  return (
    <section className="py-24 bg-gradient-to-b from-black to-bio-navy/70 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CiAgPGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMTQsIDE2NSwgMjMzLCAwLjIpIiAvPgo8L3N2Zz4=')] opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-bio-blue/10 border border-bio-blue/20 rounded-full mb-4">
            <span className="text-bio-light-blue text-sm font-medium">Industry Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Trusted by <span className="text-gradient bg-gradient-to-r from-bio-light-blue via-bio-teal to-bio-blue bg-clip-text text-transparent">Industry Leaders</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Hear from executives and scientific leaders who have collaborated with Dr. Jain.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-black/40 backdrop-blur-md border border-bio-blue/20 rounded-xl p-6 hover:border-bio-blue/40 transition-all duration-300 hover:shadow-[0_0_20px_rgba(14,165,233,0.15)] hover:-translate-y-1"
            >
              <Quote className="h-8 w-8 text-bio-light-blue mb-4" />
              <p className="text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
              
              <div className="flex items-center space-x-4">
                <img 
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-white font-medium">{testimonial.author}</h4>
                  <p className="text-bio-teal text-sm">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-black/40 backdrop-blur-md border border-bio-blue/20 rounded-xl p-8">
          <h3 className="text-2xl font-semibold text-white text-center mb-8">Industry Partners</h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
            {partnerLogos.map((partner, index) => (
              <div 
                key={index}
                className="h-20 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center p-3"
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="max-h-full max-w-full object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = "https://via.placeholder.com/150x60/1e293b/f8fafc?text=" + encodeURIComponent(partner.name);
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerTestimonials;
