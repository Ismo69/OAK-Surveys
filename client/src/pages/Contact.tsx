import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <main className="flex-1 w-full overflow-hidden">
      {/* Page Header */}
      <section className="bg-primary text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/10 -skew-x-12 translate-x-32 transform z-0"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-[2px] bg-secondary"></div>
            <span className="text-secondary font-bold uppercase tracking-wider text-sm">Get in Touch</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">Contact Oak Surveys</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
            Request a quote, schedule a consultation, or inquire about our professional surveying services.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">
            
            {/* Contact Information */}
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-3xl font-black text-primary mb-6">Our Office</h2>
                <p className="text-muted-foreground text-lg mb-8">
                  We are headquartered in Lagos, providing surveying services across Nigeria for major infrastructure and development projects.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-muted flex items-center justify-center text-secondary shrink-0 rounded-sm">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-lg mb-1">Head Office Address</h4>
                    <p className="text-muted-foreground text-lg">
                      No. 66 Eleshin Street<br />
                      Obalende<br />
                      Lagos, Nigeria
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-muted flex items-center justify-center text-secondary shrink-0 rounded-sm">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-lg mb-1">Phone Enquiries</h4>
                    <p className="text-muted-foreground text-lg">+234 (0) 800 000 0000</p>
                    <p className="text-sm text-muted-foreground mt-1">Mon-Fri from 8am to 5pm</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-muted flex items-center justify-center text-secondary shrink-0 rounded-sm">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-lg mb-1">Email Us</h4>
                    <p className="text-muted-foreground text-lg">info@oaksurveys.com.ng</p>
                    <p className="text-sm text-muted-foreground mt-1">We aim to respond within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-white border border-border p-8 md:p-12 shadow-xl relative">
                <div className="absolute top-0 left-0 w-full h-2 bg-secondary"></div>
                <h3 className="text-2xl font-bold text-primary mb-8">Send Us a Message</h3>
                
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-primary">Full Name</label>
                      <Input placeholder="John Doe" className="h-12 border-muted bg-muted/50 focus-visible:ring-secondary focus-visible:bg-white" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-primary">Company / Organization</label>
                      <Input placeholder="Engineering Co Ltd" className="h-12 border-muted bg-muted/50 focus-visible:ring-secondary focus-visible:bg-white" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-primary">Email Address</label>
                      <Input type="email" placeholder="john@example.com" className="h-12 border-muted bg-muted/50 focus-visible:ring-secondary focus-visible:bg-white" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-primary">Phone Number</label>
                      <Input placeholder="+234 XXX XXXX" className="h-12 border-muted bg-muted/50 focus-visible:ring-secondary focus-visible:bg-white" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-primary">Service Required</label>
                    <select className="flex h-12 w-full rounded-md border border-muted bg-muted/50 px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                      <option value="" disabled selected>Select a service...</option>
                      <option value="land">Land Surveying</option>
                      <option value="engineering">Engineering Surveys</option>
                      <option value="hydro">Hydrographic Surveys</option>
                      <option value="mapping">Geo-Information & Mapping</option>
                      <option value="other">Other Inquiry</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-primary">Project Details / Message</label>
                    <Textarea 
                      placeholder="Please provide details about your project location, scope, and timeline..." 
                      className="min-h-[150px] resize-y border-muted bg-muted/50 focus-visible:ring-secondary focus-visible:bg-white p-4 text-base" 
                    />
                  </div>

                  <Button className="w-full h-14 bg-primary hover:bg-primary/90 text-white rounded-none text-lg font-bold">
                    Submit Inquiry
                    <Send size={18} className="ml-2" />
                  </Button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[400px] w-full bg-muted border-t border-border relative flex items-center justify-center">
        <div className="absolute inset-0 opacity-20" 
             style={{backgroundImage: 'radial-gradient(var(--color-primary) 2px, transparent 2px)', backgroundSize: '30px 30px'}}>
        </div>
        <div className="relative z-10 text-center flex flex-col items-center bg-white p-6 shadow-lg border border-border">
           <MapPin size={48} className="text-secondary mb-4" />
           <h3 className="font-bold text-primary text-xl mb-1">Oak Surveys HQ</h3>
           <p className="text-muted-foreground">66 Eleshin Street, Obalende, Lagos</p>
           <p className="text-xs font-bold uppercase tracking-wider text-primary mt-4">[ Interactive Map Integration Ready ]</p>
        </div>
      </section>
    </main>
  );
}
