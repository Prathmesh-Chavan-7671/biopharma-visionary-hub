
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight, Mail, Phone, Calendar, MapPin, Users, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

const contactReasons = [
  {
    title: "Industry Collaborations",
    description: "Discuss potential research partnerships or joint development projects.",
    icon: Briefcase
  },
  {
    title: "Consulting Services",
    description: "Inquire about Dr. Jain's consulting services for your company.",
    icon: Users
  },
  {
    title: "Speaking Engagements",
    description: "Invite Dr. Jain to speak at your event or conference.",
    icon: Calendar
  },
  {
    title: "Media Inquiries",
    description: "Contact for interviews, expert commentary, or press features.",
    icon: Mail
  }
];

const Contact = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // This would typically connect to a backend service
    toast({
      title: "Message sent successfully!",
      description: "Thank you for your inquiry. Dr. Jain's team will respond within 48 hours.",
      variant: "default",
    });
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-bio-light-blue to-bio-light-teal py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-bio-navy mb-6">Contact Dr. Jain</h1>
              <p className="text-lg text-bio-gray mb-8">
                Reach out to discuss collaboration opportunities, consulting services, speaking engagements, or media inquiries.
              </p>
            </div>
          </div>
        </div>
        
        {/* Main Content */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-bold text-bio-navy mb-6">Get in Touch</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="block text-sm font-medium text-bio-gray">
                        First Name *
                      </label>
                      <Input
                        id="firstName"
                        placeholder="Enter your first name"
                        required
                        className="w-full"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="block text-sm font-medium text-bio-gray">
                        Last Name *
                      </label>
                      <Input
                        id="lastName"
                        placeholder="Enter your last name"
                        required
                        className="w-full"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-bio-gray">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email address"
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="company" className="block text-sm font-medium text-bio-gray">
                      Company / Organization
                    </label>
                    <Input
                      id="company"
                      placeholder="Enter your company or organization name"
                      className="w-full"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="block text-sm font-medium text-bio-gray">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      placeholder="Enter the subject of your message"
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-medium text-bio-gray">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Please describe how Dr. Jain can assist you..."
                      required
                      className="w-full min-h-[150px]"
                    />
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="privacy"
                        type="checkbox"
                        required
                        className="focus:ring-bio-blue h-4 w-4 text-bio-blue border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="privacy" className="text-bio-gray">
                        I agree to the privacy policy and consent to being contacted regarding my inquiry.
                      </label>
                    </div>
                  </div>
                  
                  <div>
                    <Button type="submit" className="cta-button w-full">
                      Send Message
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </form>
              </div>
              
              {/* Contact Information */}
              <div>
                <div className="bg-bio-light-gray rounded-lg p-8 mb-8">
                  <h2 className="text-2xl font-bold text-bio-navy mb-6">Contact Information</h2>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Mail className="h-6 w-6 text-bio-teal mt-1 mr-4" />
                      <div>
                        <p className="font-medium text-bio-navy">Email</p>
                        <a href="mailto:contact@example.com" className="text-bio-blue hover:underline">
                          contact@example.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Phone className="h-6 w-6 text-bio-teal mt-1 mr-4" />
                      <div>
                        <p className="font-medium text-bio-navy">Phone</p>
                        <p className="text-bio-gray">+1 (123) 456-7890</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <MapPin className="h-6 w-6 text-bio-teal mt-1 mr-4" />
                      <div>
                        <p className="font-medium text-bio-navy">Location</p>
                        <p className="text-bio-gray">
                          Department of Pharmaceutical Sciences<br />
                          University Research Park<br />
                          Boston, MA 02115
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-bio-navy mb-4">How Can Dr. Jain Help You?</h3>
                <div className="space-y-4">
                  {contactReasons.map((reason, index) => (
                    <div key={index} className="flex items-start p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                      <div className="rounded-full bg-bio-light-teal p-2 mr-4 flex-shrink-0">
                        <reason.icon className="h-5 w-5 text-bio-teal" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-bio-navy">{reason.title}</h4>
                        <p className="text-bio-gray text-sm">{reason.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-bio-navy mb-4">Response Time</h3>
                  <p className="text-bio-gray">
                    Dr. Jain's team typically responds to inquiries within 48 hours. For urgent matters, please indicate this in your message subject.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Map Section */}
        <section className="py-16 bg-bio-light-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-heading text-center mb-12">Find Dr. Jain</h2>
            
            <div className="h-96 bg-white rounded-lg shadow-md overflow-hidden">
              {/* This would typically be replaced with an actual map integration */}
              <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                <p className="text-bio-gray">Interactive Map Would Be Embedded Here</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-bio-blue text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Looking for a Quick Response?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              For faster attention to your inquiry, consider scheduling a brief initial consultation call.
            </p>
            <Button className="bg-white text-bio-blue hover:bg-bio-light-blue hover:text-bio-navy transition-colors shadow-md hover:shadow-lg font-medium px-8 py-3">
              Schedule a 15-Minute Call
              <Calendar className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
