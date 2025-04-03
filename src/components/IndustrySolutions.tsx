
import React from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ArrowRight } from 'lucide-react';
import { TYPOGRAPHY, SPACING } from '@/constants/styles';

const IndustrySolutions = () => {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className={SPACING.container}>
        <div className="text-center mb-16">
          <h2 className={`${TYPOGRAPHY.h2} text-bio-navy mb-4`}>
            Proven <span className="text-bio-blue">Industry Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dr. Jain's expertise has delivered measurable results across key pharmaceutical and biotech challenges.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12">
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="h-48 bg-gradient-to-r from-bio-blue to-bio-navy relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1579165466949-3180a5950056?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                  alt="Advanced Drug Delivery" 
                  className="w-full h-full object-cover opacity-60"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-bio-navy/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold text-white">Advanced Drug Delivery Systems</h3>
              </div>
            </div>
            
            <div className="p-6">
              <p className="text-gray-600 mb-4">
                Novel formulation techniques that improve bioavailability, controlled release, and targeted delivery for challenging compounds.
              </p>
              
              <Collapsible className="border-t border-gray-100 pt-4 mt-4">
                <CollapsibleTrigger className="flex items-center justify-between w-full text-bio-blue font-medium">
                  <span>Industry Applications</span>
                  <ArrowRight className="h-4 w-4 transform transition-transform group-data-[state=open]:rotate-90" />
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-4 space-y-2">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="font-medium text-bio-navy">Pharmaceutical Company X</div>
                    <p className="text-sm text-gray-600">Developed a novel lipid nanoparticle system that improved bioavailability by 45% for their poorly water-soluble API.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="font-medium text-bio-navy">Biotech Startup Y</div>
                    <p className="text-sm text-gray-600">Created targeted delivery platform that reduced off-target effects by 60%, enabling resurrection of a previously failed lead compound.</p>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="h-48 bg-gradient-to-r from-bio-teal to-bio-blue relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1579165945316-d2e1615fa90f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                  alt="Bioprocess Optimization" 
                  className="w-full h-full object-cover opacity-60"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-bio-teal/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold text-white">Bioprocess Optimization</h3>
              </div>
            </div>
            
            <div className="p-6">
              <p className="text-gray-600 mb-4">
                Cutting-edge approaches to increase manufacturing yield, improve product quality, and reduce production costs for biologics and cell therapies.
              </p>
              
              <Collapsible className="border-t border-gray-100 pt-4 mt-4">
                <CollapsibleTrigger className="flex items-center justify-between w-full text-bio-teal font-medium">
                  <span>Industry Applications</span>
                  <ArrowRight className="h-4 w-4 transform transition-transform group-data-[state=open]:rotate-90" />
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-4 space-y-2">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="font-medium text-bio-navy">Global Biopharma Company</div>
                    <p className="text-sm text-gray-600">Optimized fermentation process increased yield by 40% while reducing production costs by 25%, saving $4.2M annually.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="font-medium text-bio-navy">Cell Therapy Developer</div>
                    <p className="text-sm text-gray-600">Novel cell separation technique improved viable cell recovery by 35% and reduced processing time from 12 hours to 4 hours.</p>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="h-48 bg-gradient-to-r from-bio-navy to-bio-blue relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1584305574647-0cc949a2bb9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                  alt="Stability Enhancement" 
                  className="w-full h-full object-cover opacity-60"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-bio-navy/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold text-white">Stability Enhancement</h3>
              </div>
            </div>
            
            <div className="p-6">
              <p className="text-gray-600 mb-4">
                Specialized formulation approaches that overcome stability challenges in complex biologics, vaccines, and sensitive pharmaceuticals.
              </p>
              
              <Collapsible className="border-t border-gray-100 pt-4 mt-4">
                <CollapsibleTrigger className="flex items-center justify-between w-full text-bio-blue font-medium">
                  <span>Industry Applications</span>
                  <ArrowRight className="h-4 w-4 transform transition-transform group-data-[state=open]:rotate-90" />
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-4 space-y-2">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="font-medium text-bio-navy">Vaccine Manufacturer</div>
                    <p className="text-sm text-gray-600">Novel excipient combination extended vaccine stability from 6 months to 18 months at room temperature, enabling distribution to regions without cold chain.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="font-medium text-bio-navy">Peptide Therapeutic Company</div>
                    <p className="text-sm text-gray-600">Stabilization technology prevented aggregation and extended shelf-life by 3x, saving a $200M development program from termination.</p>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="h-48 bg-gradient-to-r from-bio-blue to-bio-teal relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                  alt="Analytical Method Development" 
                  className="w-full h-full object-cover opacity-60"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-bio-teal/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold text-white">Analytical Method Development</h3>
              </div>
            </div>
            
            <div className="p-6">
              <p className="text-gray-600 mb-4">
                Advanced analytical techniques that enable better characterization, quality control, and regulatory compliance for complex pharmaceuticals.
              </p>
              
              <Collapsible className="border-t border-gray-100 pt-4 mt-4">
                <CollapsibleTrigger className="flex items-center justify-between w-full text-bio-teal font-medium">
                  <span>Industry Applications</span>
                  <ArrowRight className="h-4 w-4 transform transition-transform group-data-[state=open]:rotate-90" />
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-4 space-y-2">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="font-medium text-bio-navy">Generic Drug Manufacturer</div>
                    <p className="text-sm text-gray-600">Novel bioequivalence method reduced testing costs by 65% while improving sensitivity by 3x, accelerating approval for complex generic.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="font-medium text-bio-navy">Biosimilar Developer</div>
                    <p className="text-sm text-gray-600">Comprehensive analytical package enabled successful regulatory filing in EU and US markets with zero major deficiencies cited.</p>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustrySolutions;
