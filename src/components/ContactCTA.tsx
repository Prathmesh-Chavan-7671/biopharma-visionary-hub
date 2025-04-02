
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TYPOGRAPHY, SPACING } from '@/constants/styles';

const ContactCTA = () => {
  return (
    <section className="bg-bio-navy py-16 md:py-20 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRoLTJWMGgydjM0em0tNCAwSDI4VjBoNHYzNHptLTYgMEgyNFYwaDB2MzRoMnptLTUgMGgtMlYwaDB2MzRoMnptLTUgMGgtMlYwaDB2MzRoMnpNOCAzNEg2VjBoMnYzNHptLTYgMEgwVjBoMnYzNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
      </div>
      
      <div className={SPACING.container}>
        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12 bg-white">
              <div className="max-w-lg">
                <h2 className={`${TYPOGRAPHY.h2} text-bio-navy mb-6`}>
                  Ready to <span className="text-bio-blue">Accelerate</span> Your R&D Pipeline?
                </h2>
                
                <p className="text-xl text-gray-600 mb-8">
                  Schedule a consultation to discuss your specific technical challenges and explore how a collaboration with Dr. Jain can drive your innovation forward.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-bio-blue/10 rounded-full flex items-center justify-center mr-4">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 9L11 12L16 6M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12Z" stroke="#0EA5E9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-bio-navy mb-1">Custom Project Assessment</h3>
                      <p className="text-gray-600">Detailed evaluation of your specific challenge and potential solutions</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-bio-teal/10 rounded-full flex items-center justify-center mr-4">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15M9 5C9 6.10457 9.89543 7 11 7H13C14.1046 7 15 6.10457 15 5M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5M12 12H15M12 16H15M9 12H9.01M9 16H9.01" stroke="#0D9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-bio-navy mb-1">Collaboration Proposal</h3>
                      <p className="text-gray-600">Tailored partnership options with clear milestones and deliverables</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-bio-navy/10 rounded-full flex items-center justify-center mr-4">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 12H15M12 9V15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#1E3A8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-bio-navy mb-1">Fast-Track Implementation</h3>
                      <p className="text-gray-600">Expedited start with priority access to facilities and resources</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10">
                  <Button className="bg-bio-blue hover:bg-bio-navy text-white px-6 py-6 rounded-md text-base font-medium">
                    Schedule a Business Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-bio-blue">
                <img 
                  src="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="Laboratory Research" 
                  className="w-full h-full object-cover opacity-30 mix-blend-overlay"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-bio-blue via-bio-blue/70 to-bio-teal/50"></div>
              <div className="relative p-8 md:p-12 h-full flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-white mb-6">Industry Partners Include:</h3>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="bg-white/20 backdrop-blur-sm rounded-lg p-4 flex items-center justify-center h-16">
                      <div className="text-white font-medium">Partner Logo</div>
                    </div>
                  ))}
                </div>
                
                <blockquote className="text-white/90 italic mb-6">
                  "Working with Dr. Jain provided us access to cutting-edge research that significantly accelerated our product timeline."
                </blockquote>
                
                <div className="text-white font-medium">
                  - R&D Director, Global Pharmaceutical Company
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
