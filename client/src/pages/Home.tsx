import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Shield, Map, Compass, Building2, BarChart, Phone } from "lucide-react";
import heroImage from "@/assets/images/hero-survey.jpg";
import engineersImage from "@/assets/images/about-engineers.jpg";
import projectImage from "@/assets/images/project-infrastructure.jpg";

export default function Home() {
  return (
    <main className="flex-1 w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Surveyor using total station" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#001E60]/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#001E60] via-[#001E60]/90 to-transparent"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 md:px-8 py-20">
          <div className="max-w-3xl">
            <div className="inline-block bg-secondary text-white font-bold tracking-wider text-sm py-1.5 px-4 mb-6 uppercase border-l-4 border-white animate-in slide-in-from-left duration-500">
              Established 1974
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6 animate-in slide-in-from-bottom-8 duration-700 delay-150">
              Trusted Surveying <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                Expertise Since 1974
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl leading-relaxed animate-in slide-in-from-bottom-8 duration-700 delay-300">
              Professional land and engineering surveying practice providing precise geospatial solutions for infrastructure, construction, and development projects across Nigeria.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-in slide-in-from-bottom-8 duration-700 delay-500">
              <Link href="/contact">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white font-bold rounded-none h-14 px-8 text-base shadow-lg shadow-secondary/20">
                  Request a Survey
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary rounded-none h-14 px-8 text-base backdrop-blur-sm">
                  View Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Credibility Banner - Positioned at bottom of hero */}
        <div className="absolute bottom-0 w-full bg-white shadow-xl translate-y-1/2 hidden lg:block z-20">
          <div className="container mx-auto px-8">
            <div className="grid grid-cols-3 divide-x divide-gray-100">
              <div className="flex items-center gap-4 py-8 px-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <Shield size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-xl">50+ Years</h4>
                  <p className="text-sm text-muted-foreground font-medium">Of Professional Experience</p>
                </div>
              </div>
              <div className="flex items-center gap-4 py-8 px-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <Compass size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-xl">Precision</h4>
                  <p className="text-sm text-muted-foreground font-medium">Accurate Geospatial Data</p>
                </div>
              </div>
              <div className="flex items-center gap-4 py-8 px-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <Building2 size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-xl">Trusted By</h4>
                  <p className="text-sm text-muted-foreground font-medium">Infrastructure & Construction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Credibility Stats */}
      <section className="bg-white py-12 border-b border-gray-100 lg:hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
             <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center text-primary mb-3">
                <Shield size={28} />
              </div>
              <h4 className="font-bold text-primary text-2xl mb-1">50+ Years</h4>
              <p className="text-sm text-muted-foreground">Of Experience</p>
            </div>
            {/* Add others similarly if needed for mobile */}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary/10 -z-10"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border-4 border-primary/10 -z-10"></div>
              <img 
                src={engineersImage} 
                alt="Engineers reviewing plans" 
                className="w-full aspect-[4/3] object-cover shadow-2xl relative z-0"
              />
              <div className="absolute bottom-6 -right-8 lg:-right-12 bg-primary text-white p-6 shadow-xl max-w-xs border-l-4 border-secondary hidden md:block z-10">
                <p className="font-bold text-2xl mb-1">Since 1974</p>
                <p className="text-sm text-white/80">Registered Professional Practice</p>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-[2px] bg-secondary"></div>
                <span className="text-secondary font-bold uppercase tracking-wider text-sm">About Oak Surveys</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black mb-6 text-primary leading-tight">
                A Legacy of Precision & Reliability
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Established on March 1, 1974, Oak Surveys is a premier surveying and geospatial consultancy based in Lagos. For over five decades, we have provided critical spatial data to power Nigeria's engineering, construction, and development sectors.
              </p>
              <p className="text-base text-muted-foreground mb-8 leading-relaxed">
                As proud members of the Nigerian Institution of Surveyors, we maintain the highest ethical standards and employ modern methodologies to deliver data you can build upon with complete confidence.
              </p>
              
              <ul className="space-y-4 mb-10">
                {["Over 50 years of field experience", "Members of Nigerian Institution of Surveyors", "Rigorous quality control and accuracy standards"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-secondary shrink-0" size={20} />
                    <span className="font-medium text-primary">{item}</span>
                  </li>
                ))}
              </ul>

              <Link href="/about">
                <Button className="bg-primary hover:bg-primary/90 text-white rounded-none px-8 h-12">
                  Read Our History
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 lg:py-32 bg-muted relative">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-border"></div>
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-[2px] bg-secondary"></div>
                <span className="text-secondary font-bold uppercase tracking-wider text-sm">Our Expertise</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-primary leading-tight">
                Professional Surveying Services
              </h2>
            </div>
            <Link href="/services">
              <Button variant="outline" className="rounded-none border-primary text-primary hover:bg-primary hover:text-white h-12 px-6">
                View All Services
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Land Surveying",
                desc: "Boundary demarcation, topographic surveys, and cadastral mapping for property development.",
                icon: <Map size={32} />
              },
              {
                title: "Engineering Surveys",
                desc: "Setting out for construction, as-built surveys, and precise monitoring of structures.",
                icon: <Building2 size={32} />
              },
              {
                title: "Geo-Information",
                desc: "GIS mapping, spatial data analysis, and drone-based photogrammetry.",
                icon: <BarChart size={32} />
              }
            ].map((service, idx) => (
              <div key={idx} className="bg-white p-8 border border-border hover:border-secondary hover:shadow-xl transition-all duration-300 group">
                <div className="w-16 h-16 bg-muted flex items-center justify-center text-primary group-hover:bg-secondary group-hover:text-white transition-colors duration-300 mb-6 rounded-sm">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6 line-clamp-3">
                  {service.desc}
                </p>
                <Link href="/services">
                  <span className="text-secondary font-semibold flex items-center gap-2 text-sm hover:gap-3 transition-all cursor-pointer">
                    Learn More <ArrowRight size={14} />
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Highlights */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-8 h-[2px] bg-secondary"></div>
              <span className="text-secondary font-bold uppercase tracking-wider text-sm">Experience</span>
              <div className="w-8 h-[2px] bg-secondary"></div>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-primary leading-tight mb-6">
              Proven Track Record
            </h2>
            <p className="text-muted-foreground text-lg">
              Over the decades, we have been trusted with some of the nation's most significant mapping and surveying mandates.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-0 overflow-hidden shadow-2xl border border-border">
            <img 
              src={projectImage} 
              alt="Infrastructure project" 
              className="w-full h-full min-h-[400px] object-cover"
            />
            <div className="bg-primary text-white p-10 md:p-16 flex flex-col justify-center">
              <h3 className="text-3xl font-bold mb-8">Notable Engagements</h3>
              <div className="space-y-8">
                <div className="border-l-2 border-secondary pl-6">
                  <h4 className="text-xl font-bold mb-2">Establishment of Federal Capital Territory Boundary</h4>
                  <p className="text-white/70">A landmark project defining the precise boundaries of the FCT, requiring extensive geodetic control and monumentation.</p>
                </div>
                <div className="border-l-2 border-secondary pl-6">
                  <h4 className="text-xl font-bold mb-2">Mapping of Kaduna–Karaduwa River Basin at Ruma</h4>
                  <p className="text-white/70">Comprehensive topographic and hydrographic surveys supporting critical water resource management and agricultural development.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-primary mb-8">Why Engineering Firms Trust Oak Surveys</h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Decades of Field Experience",
                    desc: "Our longevity means we've encountered and solved almost every surveying challenge imaginable in the Nigerian terrain."
                  },
                  {
                    title: "Accurate & Reliable Data",
                    desc: "We understand that engineering designs rely on our baseline data. We employ rigorous QA/QC processes to ensure precision."
                  },
                  {
                    title: "Modern Surveying Techniques",
                    desc: "While rooted in history, we continuously invest in the latest RTK GPS, Total Stations, and drone mapping technologies."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="mt-1">
                      <div className="w-6 h-6 rounded-full bg-secondary text-white flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 size={14} />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-primary mb-1">{item.title}</h4>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-primary p-10 shadow-xl border-t-4 border-secondary text-white">
               <h3 className="text-2xl font-bold mb-6">Need expert surveying for your next project?</h3>
               <p className="text-white/80 mb-8 mb-8">
                 Consult with our principal surveyors to discuss your technical requirements and get a detailed proposal.
               </p>
               <div className="space-y-4">
                  <div className="flex items-center gap-4 bg-white/10 p-4">
                    <Phone className="text-secondary" />
                    <div>
                      <p className="text-xs text-white/60 uppercase tracking-wider">Call Us Today</p>
                      <p className="font-bold">+234 (0) 800 000 0000</p>
                    </div>
                  </div>
                  <Link href="/contact" className="block">
                    <Button className="w-full bg-secondary hover:bg-secondary/90 h-14 rounded-none text-base font-bold">
                      Request a Quote
                    </Button>
                  </Link>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Ready to Ensure Precision on Your Project?</h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Partner with Oak Surveys for reliable, professional geospatial data that forms the foundation of successful engineering and development.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 rounded-none h-14 px-10 text-lg font-bold shadow-xl">
              Contact Our Team Today
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
