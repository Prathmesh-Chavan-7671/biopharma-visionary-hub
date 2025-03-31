
import React, { useState } from 'react';
import { ArrowRight, Phone, Mail, Linkedin, Calendar, Send, MessageSquare, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactSection = () => {
  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setMessageSent(true);
    }, 1000);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-black to-bio-navy/90 relative" id="contact">
      {/* Glowing UI elements background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-10 left-[10%] w-40 h-40 rounded-full bg-bio-blue/5 filter blur-[80px]"></div>
        <div className="absolute bottom-20 right-[15%] w-60 h-60 rounded-full bg-bio-teal/5 filter blur-[100px]"></div>
        
        {/* Circuit-like patterns */}
        <svg width="100%" height="100%" className="absolute inset-0 opacity-10" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,100 Q150,120 300,80 T600,120 T900,80" stroke="rgba(14, 165, 233, 0.3)" fill="none" strokeWidth="1" />
          <path d="M0,200 Q150,180 300,220 T600,180 T900,220" stroke="rgba(13, 148, 136, 0.3)" fill="none" strokeWidth="1" />
          <path d="M0,300 Q150,320 300,280 T600,320 T900,280" stroke="rgba(186, 230, 253, 0.2)" fill="none" strokeWidth="1" />
          
          {/* Connection nodes */}
          {[...Array(20)].map((_, i) => (
            <circle 
              key={i} 
              cx={Math.random() * 100 + '%'} 
              cy={Math.random() * 100 + '%'} 
              r="2" 
              fill="rgba(186, 230, 253, 0.5)" 
            />
          ))}
        </svg>
      </div>
      
      <div className="content-container relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1.5 neo-glassmorphism rounded-full mb-6 border border-bio-blue/30">
            <span className="text-bio-light-blue text-sm font-medium flex items-center">
              <MessageSquare className="h-4 w-4 mr-2" />
              <span>Get in Touch</span>
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Contact & <span className="text-gradient-neon">Collaboration</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Ready to explore how Dr. Jain's expertise can benefit your organization? Reach out through any of these channels.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold text-white mb-6">Industry-Specific Inquiry</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-bio-light-blue mb-2 text-sm">Full Name*</label>
                  <Input 
                    id="name" 
                    placeholder="John Smith" 
                    className="bg-black/30 border-bio-blue/20 focus:border-bio-blue/50 text-white placeholder:text-gray-500 h-12" 
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-bio-light-blue mb-2 text-sm">Company*</label>
                  <Input 
                    id="company" 
                    placeholder="Acme Biotech Inc." 
                    className="bg-black/30 border-bio-blue/20 focus:border-bio-blue/50 text-white placeholder:text-gray-500 h-12" 
                    required 
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-bio-light-blue mb-2 text-sm">Email Address*</label>
                  <Input 
                    id="email" 
                    placeholder="john@acmebiotech.com" 
                    type="email" 
                    className="bg-black/30 border-bio-blue/20 focus:border-bio-blue/50 text-white placeholder:text-gray-500 h-12" 
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-bio-light-blue mb-2 text-sm">Phone Number</label>
                  <Input 
                    id="phone" 
                    placeholder="+1 (123) 456-7890" 
                    className="bg-black/30 border-bio-blue/20 focus:border-bio-blue/50 text-white placeholder:text-gray-500 h-12" 
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="interest" className="block text-bio-light-blue mb-2 text-sm">Area of Interest*</label>
                <select 
                  id="interest" 
                  className="w-full rounded-md border border-bio-blue/20 bg-black/30 p-3 text-white h-12"
                  required
                >
                  <option value="" className="bg-bio-navy">Select an option</option>
                  <option value="consulting" className="bg-bio-navy">Consulting & Technical Advisory</option>
                  <option value="research" className="bg-bio-navy">Research Collaboration</option>
                  <option value="speaking" className="bg-bio-navy">Speaking Engagement</option>
                  <option value="startup" className="bg-bio-navy">Startup Mentorship/Advisory</option>
                  <option value="other" className="bg-bio-navy">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-bio-light-blue mb-2 text-sm">Your Message*</label>
                <Textarea 
                  id="message" 
                  placeholder="Please describe your project or inquiry..." 
                  className="w-full min-h-[120px] bg-black/30 border-bio-blue/20 focus:border-bio-blue/50 text-white placeholder:text-gray-500" 
                  required 
                />
              </div>
              
              <Button 
                type="submit" 
                className="neo-button primary rounded-md group relative overflow-hidden w-full"
                disabled={messageSent}
              >
                {messageSent ? (
                  <span className="flex items-center">
                    Message Sent
                    <CheckCircle className="ml-2 h-5 w-5" />
                  </span>
                ) : (
                  <>
                    <span className="relative z-10 flex items-center">
                      Submit Inquiry
                      <Send className="ml-2 h-5 w-5" />
                    </span>
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-bio-teal via-bio-blue to-bio-light-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
                  </>
                )}
              </Button>
            </form>
          </div>
          
          <div className="md:w-1/2 space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Schedule a Call</h3>
              <div className="neo-glassmorphism border border-bio-blue/20 rounded-lg p-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-bio-blue/10 to-bio-teal/5"></div>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-bio-blue to-bio-teal"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div className="rounded-full bg-bio-blue/20 border border-bio-blue/40 p-2 w-10 h-10 flex items-center justify-center mr-3">
                      <Calendar className="h-5 w-5 text-bio-light-blue" />
                    </div>
                    <h4 className="text-lg font-semibold text-white">Book a 30-minute consultation</h4>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Select a convenient time slot for a direct discussion about your company's needs and how Dr. Jain can help.
                  </p>
                  <Button className="neo-button secondary rounded-md border-bio-blue/30 text-bio-light-blue hover:bg-bio-blue/10 backdrop-blur-md transition-all w-full">
                    View Calendar & Book Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                
                {/* Futuristic corner accents */}
                <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden">
                  <div className="absolute top-0 right-0 w-3 h-12 border-r border-bio-light-blue/30"></div>
                  <div className="absolute top-0 right-0 w-12 h-3 border-t border-bio-light-blue/30"></div>
                </div>
                <div className="absolute bottom-0 left-0 w-12 h-12 overflow-hidden">
                  <div className="absolute bottom-0 left-0 w-3 h-12 border-l border-bio-light-blue/30"></div>
                  <div className="absolute bottom-0 left-0 w-12 h-3 border-b border-bio-light-blue/30"></div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Direct Contact</h3>
              <div className="space-y-4">
                <div className="neo-glassmorphism border border-bio-blue/20 rounded-lg p-4 flex items-center hover:border-bio-blue/40 transition-all duration-300">
                  <div className="rounded-full bg-bio-blue/20 border border-bio-blue/40 p-2 w-10 h-10 flex items-center justify-center mr-4">
                    <Phone className="h-5 w-5 text-bio-light-blue" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <p className="text-white font-medium">+91 (123) 456-7890</p>
                  </div>
                </div>
                
                <div className="neo-glassmorphism border border-bio-blue/20 rounded-lg p-4 flex items-center hover:border-bio-blue/40 transition-all duration-300">
                  <div className="rounded-full bg-bio-blue/20 border border-bio-blue/40 p-2 w-10 h-10 flex items-center justify-center mr-4">
                    <Mail className="h-5 w-5 text-bio-light-blue" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="text-white font-medium">dr.jain@example.com</p>
                  </div>
                </div>
                
                <div className="neo-glassmorphism border border-bio-blue/20 rounded-lg p-4 flex items-center hover:border-bio-blue/40 transition-all duration-300">
                  <div className="rounded-full bg-bio-blue/20 border border-bio-blue/40 p-2 w-10 h-10 flex items-center justify-center mr-4">
                    <Linkedin className="h-5 w-5 text-bio-light-blue" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">LinkedIn</p>
                    <a href="#" className="text-bio-blue font-medium hover:text-bio-light-blue transition-colors">linkedin.com/in/dr-ratnesh-jain</a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="neo-glassmorphism border border-bio-blue/20 rounded-lg p-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-bio-blue/10 to-bio-teal/5"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-bio-blue to-bio-teal"></div>
              
              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-white mb-4">Response Guarantee</h3>
                <p className="text-gray-300 mb-4">
                  All inquiries receive a response within 48 hours. For urgent matters, please indicate in your message.
                </p>
              </div>
              
              {/* Futuristic corner accents */}
              <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden">
                <div className="absolute top-0 right-0 w-3 h-12 border-r border-bio-light-blue/30"></div>
                <div className="absolute top-0 right-0 w-12 h-3 border-t border-bio-light-blue/30"></div>
              </div>
              <div className="absolute bottom-0 left-0 w-12 h-12 overflow-hidden">
                <div className="absolute bottom-0 left-0 w-3 h-12 border-l border-bio-light-blue/30"></div>
                <div className="absolute bottom-0 left-0 w-12 h-3 border-b border-bio-light-blue/30"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
