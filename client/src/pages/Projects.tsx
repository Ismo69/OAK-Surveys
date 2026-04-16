import { PageSeo } from "@/components/PageSeo";
import { Clock, Building2, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Drone Mapping of Ostia Island",
    subtitle: "Near Freedom Way, Lekki, Lagos State",
    desc: "Full drone mapping of the entire island showing boundaries as they exist. Aerial photogrammetry and geospatial data capture to produce accurate boundary and terrain documentation.",
    client: "Promoters of Ostia Island",
    duration: "Ongoing",
    category: "Aerial Photogrammetry",
    highlight: true,
  },
  {
    title: "Cadastral Survey & Boundary Establishment of Royal Gardens Estate",
    subtitle: "Ajah, Lagos State",
    desc: "Boundary and individual plot beaconing with GPS-based control surveys to support the demarcation and documentation of the estate for land title preparation.",
    client: "Trojan Estates, Lekki, Lagos",
    duration: "Ongoing",
    category: "Cadastral Survey",
    highlight: false,
  },
  {
    title: "Topographical & Detail Survey of Ikoyi Club 1938",
    subtitle: "Ikoyi, Lagos State",
    desc: "Comprehensive large-scale mapping of the entire club area carried out to aid future planning and re-development. Delivered detailed topographic and geospatial data across the full extent of the club grounds.",
    client: "Ikoyi Club 1938",
    duration: "5 months",
    category: "Topographic Survey",
    highlight: false,
  },
  {
    title: "Establishment of Federal Capital Territory Boundary",
    subtitle: "Federal Capital Territory, Abuja",
    desc: "Boundary beaconing and GPS-based control surveys executed to support the official demarcation and documentation of the Federal Capital Territory boundary.",
    client: "Federal Capital Development Authority (FCDA)",
    duration: "12 months",
    category: "Geodetic Survey",
    highlight: true,
  },
  {
    title: "Topographic Mapping for LSDPC, Ogudu Phase II",
    subtitle: "Ogudu, Lagos State",
    desc: "Detailed topographic mapping and GIS-integrated deliverables prepared for improved planning, land-use analysis, and future development decisions.",
    client: "Lagos State Development and Property Corporation (LSDPC)",
    duration: "4 months",
    category: "Topographic Survey",
    highlight: false,
  },
];

export default function Projects() {
  return (
    <>
      <PageSeo
        title="Projects | Oak Surveys – Notable Surveying Projects Across Nigeria"
        description="Explore Oak Surveys' portfolio of notable land, engineering, and geodetic surveying projects across Nigeria, including work for government agencies, estate developers, and major institutions."
      />
      <main className="flex-1 w-full overflow-hidden">
        <section className="bg-primary text-white py-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-2/5 h-full z-0" style={{backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)', backgroundSize: '22px 22px'}}></div>
          <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-secondary z-0"></div>
          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-[2px] bg-secondary"></div>
              <span className="text-secondary font-bold uppercase tracking-wider text-sm">Our Work</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">Notable Projects</h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
              A selection of significant surveying and geospatial projects delivered across Nigeria for government agencies, private developers, and major institutions.
            </p>
          </div>
        </section>

        <section className="bg-secondary text-white py-8">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-3 divide-x divide-white/20 text-center">
              <div className="px-4">
                <div className="text-3xl md:text-4xl font-black">50+</div>
                <div className="text-sm text-white/80 mt-1 font-medium">Years of Experience</div>
              </div>
              <div className="px-4">
                <div className="text-3xl md:text-4xl font-black">1,000+</div>
                <div className="text-sm text-white/80 mt-1 font-medium">Projects Delivered</div>
              </div>
              <div className="px-4">
                <div className="text-3xl md:text-4xl font-black">30+</div>
                <div className="text-sm text-white/80 mt-1 font-medium">Government Clients</div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-6xl mx-auto space-y-8">
              {projects.map((project, idx) => {
                const dark = idx % 2 === 0;
                return (
                <div key={idx} data-testid={`project-card-${idx}`} className={`group border border-border hover:border-secondary transition-all duration-300 ${dark ? "bg-primary text-white" : "bg-muted"}`}>
                  <div className="p-8 md:p-10">
                    <div className="mb-4">
                      <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 ${dark ? "bg-secondary text-white" : "bg-secondary/10 text-secondary"}`}>
                        {project.category}
                      </span>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                      <div className="md:w-3/4">
                        <h3 className={`text-xl md:text-2xl font-bold mb-1 leading-snug ${dark ? "text-white" : "text-primary"}`}>
                          {project.title}
                        </h3>
                        <p className="text-sm font-medium mb-4 text-secondary">{project.subtitle}</p>
                        <p className={`text-base leading-relaxed ${dark ? "text-gray-300" : "text-muted-foreground"}`}>
                          {project.desc}
                        </p>
                      </div>
                      <div className={`md:w-1/4 md:text-right shrink-0 border-t md:border-t-0 md:border-l pt-4 md:pt-0 md:pl-6 space-y-4 ${dark ? "border-white/20" : "border-gray-200"}`}>
                        <div>
                          <span className={`block text-xs uppercase tracking-wider font-semibold mb-1 ${dark ? "text-gray-400" : "text-muted-foreground"}`}>Client</span>
                          <span className={`text-sm font-medium flex items-center gap-1 md:justify-end ${dark ? "text-gray-200" : "text-primary"}`}>
                            <Building2 size={13} className="shrink-0" />
                            {project.client}
                          </span>
                        </div>
                        <div>
                          <span className={`block text-xs uppercase tracking-wider font-semibold mb-1 ${dark ? "text-gray-400" : "text-muted-foreground"}`}>Duration</span>
                          <span className={`text-sm font-medium flex items-center gap-1 md:justify-end ${dark ? "text-gray-200" : "text-primary"}`}>
                            <Clock size={13} className="shrink-0" />
                            {project.duration}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted/50 border-t border-border">
          <div className="container mx-auto px-4 md:px-8 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-primary mb-4">Have a Project in Mind?</h2>
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
