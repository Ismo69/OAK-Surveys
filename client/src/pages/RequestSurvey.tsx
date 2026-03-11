import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function RequestSurvey() {
  return (
    <main className="flex-1 w-full overflow-hidden bg-muted/30">
      {/* Page Header */}
      <section className="bg-primary text-white py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/10 -skew-x-12 translate-x-32 transform z-0"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-[2px] bg-secondary"></div>
            <span className="text-secondary font-bold uppercase tracking-wider text-sm">Project Inquiry</span>
            <div className="w-8 h-[2px] bg-secondary"></div>
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">Request a Survey</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Provide details about your project to help us understand your surveying requirements and prepare a tailored proposal.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <div className="bg-white border border-border shadow-xl p-8 md:p-12 relative">
            <div className="absolute top-0 left-0 w-full h-2 bg-secondary"></div>
            
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              
              {/* Contact Information Section */}
              <div>
                <h3 className="text-xl font-bold text-primary mb-6 border-b pb-2">1. Contact Information</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-primary">Full Name *</label>
                    <Input required placeholder="Enter your full name" className="h-12 border-muted bg-muted/50 focus-visible:ring-secondary focus-visible:bg-white" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-primary">Company / Organization</label>
                    <Input placeholder="Enter your company name" className="h-12 border-muted bg-muted/50 focus-visible:ring-secondary focus-visible:bg-white" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-primary">Email Address *</label>
                    <Input required type="email" placeholder="email@example.com" className="h-12 border-muted bg-muted/50 focus-visible:ring-secondary focus-visible:bg-white" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-primary">Phone Number *</label>
                    <Input required placeholder="+234 XXX XXXX" className="h-12 border-muted bg-muted/50 focus-visible:ring-secondary focus-visible:bg-white" />
                  </div>
                </div>
              </div>

              {/* Project Details Section */}
              <div>
                <h3 className="text-xl font-bold text-primary mb-6 border-b pb-2 mt-10">2. Project Details</h3>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-primary">Project Location (Address/State) *</label>
                    <Input required placeholder="E.g., Victoria Island, Lagos" className="h-12 border-muted bg-muted/50 focus-visible:ring-secondary focus-visible:bg-white" />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-primary">Type of Survey Required *</label>
                    <select required className="flex h-12 w-full rounded-md border border-muted bg-muted/50 px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                      <option value="" disabled selected>Select a survey type...</option>
                      <option value="land">Land / Boundary Surveying</option>
                      <option value="engineering">Engineering / Construction Survey</option>
                      <option value="topographic">Topographic Mapping</option>
                      <option value="hydrographic">Hydrographic Survey</option>
                      <option value="gis">Geo-Information & GIS Mapping</option>
                      <option value="other">Not Sure / Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-primary">Project Description / Message *</label>
                    <Textarea 
                      required
                      placeholder="Please provide details about the project scope, size of land (if applicable), and any specific requirements or timelines..." 
                      className="min-h-[180px] resize-y border-muted bg-muted/50 focus-visible:ring-secondary focus-visible:bg-white p-4 text-base" 
                    />
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <Button className="w-full h-16 bg-secondary hover:bg-secondary/90 text-white rounded-none text-xl font-bold">
                  Submit Survey Request
                  <Send size={20} className="ml-2" />
                </Button>
                <p className="text-center text-sm text-muted-foreground mt-4">
                  Our team will review your request and contact you within 24-48 business hours.
                </p>
              </div>

            </form>
          </div>
        </div>
      </section>
    </main>
  );
}