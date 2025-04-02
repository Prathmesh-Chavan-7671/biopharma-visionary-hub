
import React from 'react';
import { TYPOGRAPHY, SPACING } from '@/constants/styles';

const PartnerShowcase = () => {
  // Company logos - these would normally come from your media assets or a CMS
  const partners = [
    { 
      name: "Cipla", 
      logo: "https://logo.clearbit.com/cipla.com", 
      type: "Pharmaceutical"
    },
    { 
      name: "Dr. Reddy's Laboratories", 
      logo: "https://logo.clearbit.com/drreddys.com", 
      type: "Pharmaceutical"
    },
    { 
      name: "Abbott", 
      logo: "https://logo.clearbit.com/abbott.com", 
      type: "Healthcare"
    },
    { 
      name: "Biocon", 
      logo: "https://logo.clearbit.com/biocon.com", 
      type: "Biotechnology"
    },
    { 
      name: "Sun Pharma", 
      logo: "https://logo.clearbit.com/sunpharma.com", 
      type: "Pharmaceutical"
    },
    { 
      name: "Glenmark", 
      logo: "https://logo.clearbit.com/glenmarkpharma.com", 
      type: "Pharmaceutical"
    },
    { 
      name: "Lupin", 
      logo: "https://logo.clearbit.com/lupin.com", 
      type: "Pharmaceutical"
    },
    { 
      name: "GSK", 
      logo: "https://logo.clearbit.com/gsk.com", 
      type: "Pharmaceutical" 
    }
  ];
  
  const testimonials = [
    {
      quote: "Dr. Jain's expertise was instrumental in solving our formulation challenges, reducing our development timeline by over 30%.",
      author: "Dr. Sanjay Gupta",
      title: "Head of R&D, Global Pharmaceutical Company",
      company: "Cipla"
    },
    {
      quote: "The bioprocess optimization strategies developed in our collaboration resulted in a 45% improvement in manufacturing yield.",
      author: "Dr. Ananya Patel",
      title: "VP Process Development",
      company: "Biocon"
    },
    {
      quote: "Our collaboration on novel drug delivery systems has directly contributed to two of our most successful product launches.",
      author: "Dr. Vikram Shah",
      title: "Chief Scientific Officer",
      company: "Sun Pharma"
    }
  ];

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className={SPACING.container}>
        <div className="text-center mb-16">
          <h2 className={`${TYPOGRAPHY.h2} text-bio-navy mb-4`}>
            Trusted by <span className="text-bio-blue">Industry Leaders</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leading pharmaceutical and biotech companies partner with Dr. Jain to accelerate innovation and overcome complex technical challenges.
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 mb-16">
          {partners.map((partner) => (
            <div key={partner.name} className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <img 
                src={partner.logo} 
                alt={`${partner.name} logo`} 
                className="h-16 object-contain mb-4" 
                onError={(e) => {
                  // Fallback if logo fails to load
                  const target = e.target as HTMLImageElement;
                  target.src = "https://via.placeholder.com/150x60/f3f4f6/64748b?text=" + partner.name;
                }}
              />
              <div className="text-center">
                <div className="font-medium text-bio-navy">{partner.name}</div>
                <div className="text-sm text-gray-500">{partner.type}</div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-md border border-gray-100 relative">
              <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.0002 19.9998C14.0002 17.7907 15.791 15.9998 18.0002 15.9998C20.2093 15.9998 22.0002 17.7907 22.0002 19.9998C22.0002 22.209 20.2093 23.9998 18.0002 23.9998C17.5718 23.9998 17.1541 23.9295 16.7587 23.797C17.233 25.1011 18.5132 25.9998 20.0002 25.9998H20.5002C21.0525 25.9998 21.5002 26.4475 21.5002 26.9998C21.5002 27.5521 21.0525 27.9998 20.5002 27.9998H20.0002C17.9464 27.9998 16.1028 26.844 15.1313 25.0984C14.4359 23.8571 14.0002 22.1631 14.0002 19.9998Z" fill="#0EA5E9"/>
                  <path d="M26.0002 19.9998C26.0002 17.7907 27.791 15.9998 30.0002 15.9998C32.2093 15.9998 34.0002 17.7907 34.0002 19.9998C34.0002 22.209 32.2093 23.9998 30.0002 23.9998C29.5718 23.9998 29.1541 23.9295 28.7587 23.797C29.233 25.1011 30.5132 25.9998 32.0002 25.9998H32.5002C33.0525 25.9998 33.5002 26.4475 33.5002 26.9998C33.5002 27.5521 33.0525 27.9998 32.5002 27.9998H32.0002C29.9464 27.9998 28.1028 26.844 27.1313 25.0984C26.4359 23.8571 26.0002 22.1631 26.0002 19.9998Z" fill="#0EA5E9"/>
                </svg>
              </div>
              
              <blockquote className="text-gray-600 italic mb-6">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="flex items-center">
                <img 
                  src={`https://logo.clearbit.com/${testimonial.company.toLowerCase().replace(/\s/g, '')}.com`}
                  alt={testimonial.company}
                  className="h-10 w-10 rounded-full mr-4 border border-gray-200"
                  onError={(e) => {
                    // Fallback if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.src = "https://via.placeholder.com/40/f3f4f6/64748b?text=" + testimonial.company.charAt(0);
                  }}
                />
                <div>
                  <div className="font-medium text-bio-navy">{testimonial.author}</div>
                  <div className="text-sm text-gray-500">{testimonial.title}, {testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerShowcase;
