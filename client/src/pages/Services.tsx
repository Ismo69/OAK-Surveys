import { Map, Compass, Waves, Building2, BarChart, ArrowRight, Check } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import droneImage from "@/assets/images/service-drone.jpg";

export default function Services() {
  const services = [
    {
      id: "land-surveying",
      title: "Land Surveying",
      icon: <Map className="w-10 h-10" />,
      description: "Comprehensive land surveying services for property establishment, boundary disputes, and title registrations.",
      useCases: ["Boundary Demarcation", "Cadastral Mapping", "Subdivision Surveys", "Title Registrations"],
      benefits: "Secure legal boundaries and prevent costly land disputes before development begins."
    },
    {
      id: "engineering-surveys",
      title: "Engineering Surveys",
      icon: <Building2 className="w-10 h-10" />,
      description: "High-precision surveying to support civil engineering, construction, and infrastructure projects from design to completion.",
      useCases: ["Setting Out / Layout", "As-Built Surveys", "Deformation Monitoring", "Earthwork Computations"],
      benefits: "Ensure structural elements are constructed exactly to design specifications, minimizing rework."
    },
    {
      id: "geodetic-surveys",
      title: "Geodetic Surveys",
      icon: <Compass className="w-10 h-10" />,
      description: "Large-scale surveying that accounts for the curvature of the earth, establishing control networks for major projects.",
      useCases: ["Control Networks Establishment", "GPS/GNSS Surveys", "Datum Transformations"],
      benefits: "Provide a reliable, consistent coordinate framework for large-scale municipal or state infrastructure."
    },
    {
      id: "hydrographic-surveys",
      title: "Hydrographic Surveys",
      icon: <Waves className="w-10 h-10" />,
      description: "Mapping of underwater topography for marine engineering, dredging, and navigation purposes.",
      useCases: ["Bathymetric Mapping", "Dredging Support", "River Basin Mapping", "Coastal Development"],
      benefits: "Accurate underwater terrain models for safe navigation and effective marine construction."
    },
    {
      id: "geo-information",
      title: "Geo-Information & Mapping",
      icon: <BarChart className="w-10 h-10" />,
      description: "Advanced spatial data collection, analysis, and visualization using modern GIS and remote sensing tools.",
      useCases: ["Topographic Mapping", "UAV/Drone Photogrammetry", "GIS Database Creation", "Spatial Analysis"],
      benefits: "Visualize complex spatial relationships to support urban planning, agriculture, and resource management."
    }
  ];

  return (
    <main className="flex-1 w-full overflow-hidden">
      {/* Page Header */}
      <section className="bg-primary text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/10 -skew-x-12 translate-x-32 transform z-0"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
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
                {/* Service Info */}
                <div className="lg:w-1/2">
                  <div className="w-20 h-20 bg-muted flex items-center justify-center text-primary mb-8 rounded-sm">
                    {service.icon}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black text-primary mb-6">{service.title}</h2>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="bg-muted p-8 border-l-4 border-secondary mb-8">
                    <h4 className="font-bold text-primary mb-2">Client Benefit</h4>
                    <p className="text-muted-foreground italic">"{service.benefits}"</p>
                  </div>

                  <h4 className="font-bold text-primary mb-4 text-lg">Typical Use Cases:</h4>
                  <ul className="grid sm:grid-cols-2 gap-4">
                    {service.useCases.map((useCase, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <Check className="text-secondary shrink-0" size={18} />
                        <span className="text-foreground font-medium">{useCase}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Visual Placeholder for Service */}
                <div className="lg:w-1/2 w-full">
                  <div className="bg-muted aspect-video border border-border flex items-center justify-center relative overflow-hidden group">
                     {service.id === "geo-information" ? (
                       <img src={droneImage} alt="Drone Mapping" className="w-full h-full object-cover" />
                     ) : (
                       <div className="absolute inset-0 opacity-10" 
                            style={{backgroundImage: 'radial-gradient(var(--color-primary) 2px, transparent 2px)', backgroundSize: '30px 30px'}}>
                       </div>
                     )}
                     
                     {service.id !== "geo-information" && (
                       <div className="text-center relative z-10 p-8">
                         <div className="text-primary/20 mb-4 flex justify-center scale-150">
                           {service.icon}
                         </div>
                         <p className="text-muted-foreground font-medium uppercase tracking-widest text-sm">
                           {service.title} Visual
                         </p>
                       </div>
                     )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service CTA */}
      <section className="bg-primary text-white py-24">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-6">Need a Custom Surveying Solution?</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
            Every project has unique geospatial requirements. Discuss your specific needs with our principal surveyors.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white rounded-none h-14 px-10 text-lg font-bold">
              Consult With Our Team
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
