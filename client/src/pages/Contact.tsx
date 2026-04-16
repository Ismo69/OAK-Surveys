import { PageSeo } from "@/components/PageSeo";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <PageSeo
        title="Contact Oak Surveys | Lagos Surveying Company"
        description="Get in touch with Oak Surveys. Contact our team of professional surveyors in Lagos, Nigeria for land surveying, engineering surveys, and geospatial mapping enquiries."
      />
    <main className="flex-1 w-full overflow-hidden">
      {/* Page Header */}
      <section className="bg-primary text-white py-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/10 -skew-x-12 translate-x-32 transform z-0"></div>
        <div className="container mx-auto px-4 md:px-8 pt-2 relative z-10">
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
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            <div className="space-y-10">
              <div>
                <h2 className="text-3xl font-black text-primary mb-6">Our Office</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">We are headquartered in Lagos, providing surveying services across Nigeria for major infrastructure and development projects.</p>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4"><MapPin className="text-secondary shrink-0" /><span>66 Eleshin Street, Obalende, Lagos</span></div>
                <div className="flex items-start gap-4"><Phone className="text-secondary shrink-0" /><span>+234 803 600 4494</span></div>
                <div className="flex items-start gap-4"><Mail className="text-secondary shrink-0" /><span>info@oaksurveys.com</span></div>
                <div className="flex items-start gap-4"><Clock className="text-secondary shrink-0" /><span>Mon - Fri, 8:00am - 5:00pm</span></div>
              </div>
            </div>
            <form className="bg-muted p-8 border border-border space-y-5">
              <div className="grid md:grid-cols-2 gap-4">
                <Input placeholder="Your Name" />
                <Input placeholder="Your Email" />
              </div>
              <Input placeholder="Phone Number" />
              <Textarea placeholder="Tell us about your project" className="min-h-40" />
              <Button className="bg-secondary hover:bg-secondary/90 text-white font-bold rounded-none h-14 px-8 text-base w-full" disabled={loading}>
                <Send className="mr-2" size={18} /> Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
