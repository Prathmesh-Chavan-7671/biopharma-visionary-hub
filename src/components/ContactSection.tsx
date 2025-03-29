
import React from 'react';
import { ArrowRight, Phone, Mail, Linkedin, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactSection = () => {
  return (
    <section className="py-16 bg-white" id="contact">
      <div className="content-container">
        <div className="text-center mb-12">
          <h2 className="section-heading">Contact & Collaboration – Simple & Fast</h2>
          <p className="text-lg text-bio-gray max-w-3xl mx-auto">
            Ready to explore how Dr. Jain's expertise can benefit your organization? Reach out through any of these channels.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <h3 className="section-subheading">Industry-Specific Inquiry</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-bio-gray mb-2">Full Name*</label>
                  <Input id="name" placeholder="John Smith" className="w-full" required />
                </div>
                <div>
                  <label htmlFor="company" className="block text-bio-gray mb-2">Company*</label>
                  <Input id="company" placeholder="Acme Biotech Inc." className="w-full" required />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-bio-gray mb-2">Email Address*</label>
                  <Input id="email" placeholder="john@acmebiotech.com" type="email" className="w-full" required />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-bio-gray mb-2">Phone Number</label>
                  <Input id="phone" placeholder="+1 (123) 456-7890" className="w-full" />
                </div>
              </div>
              
              <div>
                <label htmlFor="interest" className="block text-bio-gray mb-2">Area of Interest*</label>
                <select id="interest" className="w-full rounded-md border border-gray-300 p-2">
                  <option value="">Select an option</option>
                  <option value="consulting">Consulting & Technical Advisory</option>
                  <option value="research">Research Collaboration</option>
                  <option value="speaking">Speaking Engagement</option>
                  <option value="startup">Startup Mentorship/Advisory</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-bio-gray mb-2">Your Message*</label>
                <Textarea id="message" placeholder="Please describe your project or inquiry..." className="w-full min-h-[120px]" required />
              </div>
              
              <Button type="submit" className="cta-button w-full">
                Submit Inquiry
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
          
          <div className="md:w-1/2 space-y-8">
            <div>
              <h3 className="section-subheading">Schedule a Call</h3>
              <div className="bg-bio-light-gray rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Calendar className="h-6 w-6 text-bio-teal mr-2" />
                  <h4 className="text-lg font-semibold text-bio-navy">Book a 30-minute consultation</h4>
                </div>
                <p className="text-bio-gray mb-4">
                  Select a convenient time slot for a direct discussion about your company's needs and how Dr. Jain can help.
                </p>
                <Button className="secondary-button w-full">
                  View Calendar & Book Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div>
              <h3 className="section-subheading">Direct Contact</h3>
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                  <Phone className="h-5 w-5 text-bio-teal mr-4" />
                  <div>
                    <p className="text-sm text-bio-gray">Phone</p>
                    <p className="text-bio-navy font-medium">+91 (123) 456-7890</p>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                  <Mail className="h-5 w-5 text-bio-teal mr-4" />
                  <div>
                    <p className="text-sm text-bio-gray">Email</p>
                    <p className="text-bio-navy font-medium">dr.jain@example.com</p>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                  <Linkedin className="h-5 w-5 text-bio-teal mr-4" />
                  <div>
                    <p className="text-sm text-bio-gray">LinkedIn</p>
                    <a href="#" className="text-bio-blue font-medium hover:text-bio-teal">linkedin.com/in/dr-ratnesh-jain</a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-bio-light-blue to-bio-light-teal rounded-lg p-6">
              <h3 className="text-xl font-semibold text-bio-navy mb-4">Response Guarantee</h3>
              <p className="text-bio-gray mb-4">
                All inquiries receive a response within 48 hours. For urgent matters, please indicate in your message.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
