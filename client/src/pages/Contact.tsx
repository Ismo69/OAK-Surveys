import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">Contact Us</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
            For general inquiries and information about our surveying services across Nigeria.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            
            {/* Contact Information */}
            <div className="space-y-10">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-black text-primary mb-6">Our Office</h2>
                <p className="text-muted-foreground text-lg">
                  We are headquartered in Lagos, providing surveying services across Nigeria for major infrastructure and development projects.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center text-center p-8 bg-muted border border-border">
                  <div className="w-16 h-16 bg-white flex items-center justify-center text-secondary mb-6 rounded-full shadow-sm">
                    <MapPin size={28} />
                  </div>
                  <h4 className="font-bold text-primary text-lg mb-2">Head Office</h4>
                  <p className="text-muted-foreground">
                    No. 66 Eleshin Street<br />
                    Obalende<br />
                    Lagos, Nigeria
                  </p>
                </div>

                <div className="flex flex-col items-center text-center p-8 bg-muted border border-border">
                  <div className="w-16 h-16 bg-white flex items-center justify-center text-secondary mb-6 rounded-full shadow-sm">
                    <Phone size={28} />
                  </div>
                  <h4 className="font-bold text-primary text-lg mb-2">Call Us</h4>
                  <p className="text-muted-foreground">+234 (0) 800 000 0000</p>
                  <p className="text-sm text-muted-foreground mt-2">Mon-Fri: 8am - 5pm</p>
                </div>

                <div className="flex flex-col items-center text-center p-8 bg-muted border border-border">
                  <div className="w-16 h-16 bg-white flex items-center justify-center text-secondary mb-6 rounded-full shadow-sm">
                    <Mail size={28} />
                  </div>
                  <h4 className="font-bold text-primary text-lg mb-2">Email Us</h4>
                  <p className="text-muted-foreground">info@oaksurveys.com.ng</p>
                  <p className="text-sm text-muted-foreground mt-2">Expect a reply within 24hrs</p>
                </div>
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
