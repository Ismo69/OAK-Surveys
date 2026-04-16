import { PageSeo } from "@/components/PageSeo";
import { ArrowRight, CheckCircle2, Ruler, MapPin, Satellite, Waves, Layers } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: "land-surveying",
    title: "Land Surveying",
    description: "Boundary definition, subdivision surveys, acreage measurement, and title documentation to support land administration and development.",
    icon: Ruler,
  },
  {
    id: "engineering-surveys",
    title: "Engineering Surveys",
    description: "Precise control, setting-out, alignment, and as-built surveys for roads, bridges, drainage, and structural works.",
    icon: MapPin,
  },
  {
    id: "geodetic-surveys",
    title: "Geodetic Surveys",
    description: "High-accuracy coordinate control, datum transformation, and network establishment for large-scale projects and infrastructure planning.",
    icon: Satellite,
  },
  {
    id: "hydrographic-surveys",
    title: "Hydrographic Surveys",
    description: "Bathymetric and waterway mapping for ports, rivers, shoreline development, and marine engineering applications.",
    icon: Waves,
  },
  {
    id: "geo-mapping",
    title: "Geo-Information & Mapping",
    description: "GIS, spatial analysis, orthophoto production, drone mapping, and digital cartography for planning and decision-making.",
    icon: Layers,
  },
];

export default function Services() {
  return (
    <>
      <PageSeo
        title="Services | Oak Surveys – Professional Surveying Services in Lagos"
        description="Oak Surveys provides comprehensive surveying services in Lagos, Nigeria including land surveying, engineering surveys, hydrographic surveys, geodetic surveys, and geospatial mapping."
      />
    <main className="flex-1 w-full overflow-hidden">
      {/* Page Header */}
      <section className="bg-primary text-white py-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/10 -skew-x-12 translate-x-32 transform z-0"></div>
        <div className="container mx-auto px-4 md:px-8 pt-2 relative z-10">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-[2px] bg-secondary"></div>
            <span className="text-secondary font-bold uppercase tracking-wider text-sm">Our Expertise</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">Professional Services</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
            Comprehensive geospatial and surveying solutions tailored for complex engineering and development challenges.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                id={service.id}
                className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-start`}
              >
                <div className="w-20 h-20 bg-primary flex items-center justify-center text-white shrink-0">
                  <service.icon size={36} />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl md:text-4xl font-black text-primary mb-4">{service.title}</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                  <ul className="space-y-3 text-muted-foreground">
                    {["Detailed field execution", "Modern geospatial tools", "Delivered with precision"].map((item) => (
                      <li key={item} className="flex items-center gap-3"><CheckCircle2 className="text-secondary shrink-0" size={18} />{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/50 border-t border-border">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-primary mb-4">Need a Survey for Your Project?</h2>
          <p className="text-lg text-muted-foreground mb-8">Tell us what you need and we’ll recommend the right surveying approach for your site, budget, and timeline.</p>
          <Link href="/request-survey">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white font-bold rounded-none h-14 px-8 text-base" data-testid="button-request-survey-services">
              Request a Survey <ArrowRight className="ml-2" size={18} />
            </Button>
          </Link>
        </div>
      </section>
    </main>
    </>
  );
}
