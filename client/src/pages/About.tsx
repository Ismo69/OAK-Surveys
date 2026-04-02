import { Shield, Target, Eye, Users, ChevronRight, GraduationCap, CheckCircle2, Quote } from "lucide-react";
import { PageSeo } from "@/components/PageSeo";
import historyImage from "@/assets/images/about-history-generated.png";
import founderImage from "@assets/dad_pic_1773246913134.jpg";
import leadershipImage from "@assets/kolade_kasim_portrait.jpg";

export default function About() {
  return (
    <>
      <PageSeo
        title="About Oak Surveys | Established Surveying Firm in Lagos Since 1974"
        description="Learn about Oak Surveys, a professional surveying company established in Lagos, Nigeria in 1974. Over 50 years of land surveying, engineering surveys, and geospatial expertise."
      />
    <main className="flex-1 w-full overflow-hidden">
      {/* Page Header */}
      <section className="bg-primary text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/10 -skew-x-12 translate-x-32 transform z-0"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-[2px] bg-secondary"></div>
            <span className="text-secondary font-bold uppercase tracking-wider text-sm">About Us</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">Our Legacy of Precision</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
            Established in 1974, Oak Surveys is a cornerstone of Nigeria's professional surveying and geospatial sector.
          </p>
        </div>
      </section>

      {/* History & Credibility */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-primary mb-6">Fifty Years of Professional Practice</h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Oak Surveys was founded on March 1, 1974, with a clear mandate: to provide the highest standard of land and engineering surveying services to support the rapid infrastructure development of Nigeria.
                </p>
                <p>
                  For over five decades, we have remained true to that mandate. We have evolved from utilizing traditional theodolites to deploying advanced RTK GNSS systems, unmanned aerial vehicles (UAVs) for photogrammetry, and sophisticated GIS platforms.
                </p>
                <p>
                  Despite the technological evolution, our core commitment to accuracy, integrity, and client success remains unchanged.
                </p>
              </div>

              <div className="mt-10 bg-muted p-8 border-l-4 border-secondary flex items-start gap-6">
                 <GraduationCap className="text-primary shrink-0 w-12 h-12" />
                 <div>
                   <h4 className="text-xl font-bold text-primary mb-2">Nigerian Institution of Surveyors</h4>
                   <p className="text-muted-foreground">
                     We are proud and active members of the NIS, adhering strictly to its code of ethics and professional conduct standards.
                   </p>
                 </div>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="absolute inset-0 bg-primary translate-x-6 translate-y-6 -z-10"></div>
              <img 
                src={historyImage} 
                alt="Oak Surveys historical office and professional surveying practice established in Lagos since 1974" 
                className="w-full aspect-[4/5] object-cover border border-border shadow-xl"
              />
              <div className="absolute bottom-10 -left-10 bg-white p-6 shadow-2xl border border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="text-5xl font-black text-secondary">50+</div>
                  <div className="font-bold text-primary leading-tight">Years of<br />Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Honouring the Legacy of Our Founder */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-start">
              
              {/* Image Column */}
              <div className="w-full md:w-5/12 lg:w-2/5 shrink-0">
                <div className="sticky top-32">
                  <div className="relative p-3 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.08)] rounded-sm border border-gray-100">
                    <img 
                      src={founderImage} 
                      alt="Surv. (Alh.) Olatunde Al-Ghali Kasim, FNIS" 
                      className="w-full h-auto object-cover grayscale contrast-125 brightness-95"
                    />
                    {/* Decorative subtle border */}
                    <div className="absolute inset-0 border-[0.5px] border-primary/10 m-1 pointer-events-none"></div>
                  </div>
                  {/* Subtle red accent line under image */}
                  <div className="w-12 h-1 bg-secondary mt-6 ml-2"></div>
                </div>
              </div>

              {/* Text Column */}
              <div className="w-full md:w-7/12 lg:w-3/5">
                <div className="mb-10">
                  <h2 className="text-3xl font-heading font-black text-primary uppercase tracking-wide mb-8">
                    Honouring the Legacy of Our Founder
                  </h2>
                  
                  <div className="mb-8 pb-8 border-b border-gray-100">
                    <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                      Surv. (Alh.) Olatunde Al-Ghali Kasim, FNIS
                    </h3>
                    <p className="text-secondary font-medium tracking-wide">
                      16 November 1940 – 28 February 2018
                    </p>
                  </div>
                </div>

                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed font-sans font-light">
                  <p>
                    Surv. (Alh.) Olatunde Al-Ghali Kasim was a distinguished surveying professional, visionary leader, and respected figure within the Nigerian surveying community. Born in Ijebu Ode, he devoted his life to advancing the surveying profession and contributing meaningfully to national development.
                  </p>
                  
                  <p>
                    Throughout his career, he played an influential role within the Nigerian Institution of Surveyors, where his leadership helped drive important initiatives for the profession. His tenure was marked by significant milestones, including key institutional developments such as the acquisition of the Surveyors Tower in Lagos. His contributions also extended to national institutions, including the National Boundary Commission and the National Space Programme, where his expertise supported important national initiatives.
                  </p>

                  <p>
                    As the founder of Oak Surveys, Surv. Kasim established the firm on the principles of professionalism, integrity, and technical excellence. His dedication to the surveying profession and commitment to high standards laid the foundation upon which the company continues to operate today.
                  </p>

                  <p>
                    His legacy continues to inspire our work and guide our values as we strive to uphold the same standards of precision, service, and professionalism that defined his career.
                  </p>

                  <p className="font-medium text-primary italic pt-4">
                    We honour his memory with deep respect and gratitude.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Our Leadership */}
      <section className="py-24 bg-muted/30 border-t border-border">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row-reverse gap-12 lg:gap-20 items-start">
              
              {/* Image Column */}
              <div className="w-full md:w-5/12 lg:w-2/5 shrink-0">
                <div className="sticky top-32">
                  <div className="relative p-3 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.08)] rounded-sm border border-gray-100">
                    <img 
                      src={leadershipImage} 
                      alt="Surv. Kolade Kasim" 
                      className="w-full aspect-[4/5] object-cover object-top grayscale-[20%] contrast-110"
                    />
                    {/* Decorative subtle border */}
                    <div className="absolute inset-0 border-[0.5px] border-primary/10 m-1 pointer-events-none"></div>
                  </div>
                  {/* Subtle red accent line under image */}
                  <div className="w-12 h-1 bg-secondary mt-6 ml-auto mr-2"></div>
                </div>
              </div>

              {/* Text Column */}
              <div className="w-full md:w-7/12 lg:w-3/5">
                <div className="mb-10">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-8 h-[2px] bg-secondary"></div>
                    <span className="text-secondary font-bold uppercase tracking-wider text-sm">Our Leadership</span>
                  </div>
                  
                  <div className="mb-8 pb-8 border-b border-gray-200">
                    <h3 className="text-3xl md:text-4xl font-black text-primary mb-3">
                      Surv. Kolade Kasim
                    </h3>
                    <p className="text-xl text-muted-foreground font-medium">
                      Managing Partner & CEO
                    </p>
                  </div>
                </div>

                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed font-sans font-light mb-10">
                  <p>
                    Kolade Kasim is a seasoned leader in the surveying and geoinformatics industry, guiding Oak Surveys with a forward-looking vision rooted in precision and responsible development.
                  </p>
                  
                  <p>
                    With extensive professional experience and an unwavering commitment to technical excellence, he leads the firm's strategic operations across major infrastructure and development projects in Nigeria.
                  </p>

                  <p>
                    Beyond Oak Surveys, he served two terms as Chairman of the Nigerian Institution of Surveyors (Lagos Chapter), reflecting his deep dedication to advancing the profession, advocating for standard practices, and elevating industry benchmarks.
                  </p>
                </div>

                {/* Highlight Quote */}
                <div className="bg-white p-8 md:p-10 border-l-4 border-secondary shadow-sm relative">
                  <Quote className="absolute top-6 right-8 text-primary/10 w-16 h-16" />
                  <p className="text-xl md:text-2xl font-heading font-medium text-primary leading-snug italic relative z-10">
                    "For any meaningful development, consulting surveyors is crucial. Just like in smart cities around the world, surveyors play a vital role in ensuring quality and responsible development."
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Notable Projects */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-[2px] bg-secondary"></div>
              <span className="text-secondary font-bold uppercase tracking-wider text-sm">Experience</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-primary mb-12">Notable Projects</h2>

            <div className="space-y-6">
              {[
                {
                  title: "Drone Mapping of Ostia Island, Near Freedom Way, Lekki, Lagos State",
                  desc: "Full drone mapping of the entire island showing boundaries as they exist. Aerial photogrammetry and geospatial data capture to produce accurate boundary and terrain documentation.",
                  client: "Promoters of Ostia Island",
                  duration: "Project specific duration"
                },
                {
                  title: "Cadastral Survey & Boundary Establishment of Royal Estate, Ajah, Lagos State",
                  desc: "Boundary and individual plot beaconing with GPS-based control surveys to support the demarcation and documentation of the estate for land title preparation.",
                  client: "Trojan Estates, Lekki, Lagos",
                  duration: "Ongoing"
                },
                {
                  title: "Topographical & Detail Survey of Ikoyi Club 1938, Ikoyi, Lagos State",
                  desc: "Comprehensive large-scale mapping of the entire club area carried out to aid future planning and re-development. Delivered detailed topographic and geospatial data across the full extent of the club grounds.",
                  client: "Ikoyi Club 1938",
                  duration: "5 months"
                },
                {
                  title: "Establishment of Federal Capital Territory Boundary",
                  desc: "Boundary beaconing and GPS-based control surveys executed to support the official demarcation and documentation of the Federal Capital Territory boundary.",
                  client: "Federal Capital Development Authority (FCDA)",
                  duration: "12 months"
                },
                {
                  title: "Topographic Mapping for LSDPC, Ogudu Phase II",
                  desc: "Detailed topographic mapping and GIS-integrated deliverables prepared for improved planning, land-use analysis, and future development decisions.",
                  client: "Lagos State Development and Property Corporation (LSDPC)",
                  duration: "4 months"
                }
              ].map((project, idx) => (
                <div key={idx} className="bg-muted p-8 md:p-10 border border-border hover:border-secondary transition-colors duration-300">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                    <div className="md:w-3/4">
                      <h3 className="text-xl md:text-2xl font-bold text-primary mb-3 leading-snug">{project.title}</h3>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        {project.desc}
                      </p>
                    </div>
                    <div className="md:w-1/4 md:text-right border-t md:border-t-0 md:border-l border-gray-200 pt-4 md:pt-0 md:pl-6">
                      <div className="mb-3">
                        <span className="block text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-1">Client</span>
                        <span className="text-sm text-primary font-medium">{project.client}</span>
                      </div>
                      <div>
                        <span className="block text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-1">Duration</span>
                        <span className="text-sm text-primary font-medium">{project.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-muted/50 border-t border-border">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            {/* Vision & Mission */}
            <div className="space-y-12">
              <div className="bg-white p-10 shadow-sm border border-border hover:border-secondary transition-colors">
                <div className="w-14 h-14 bg-secondary flex items-center justify-center mb-6 text-white rounded-sm">
                  <Eye size={28} />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To be the most trusted and technologically advanced geospatial consultancy in West Africa, setting the benchmark for precision in engineering and land development.
                </p>
              </div>
              <div className="bg-white p-10 shadow-sm border border-border hover:border-secondary transition-colors">
                <div className="w-14 h-14 bg-secondary flex items-center justify-center mb-6 text-white rounded-sm">
                  <Target size={28} />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To deliver accurate, reliable, and timely surveying and mapping solutions that empower our clients to build sustainable infrastructure and make informed spatial decisions.
                </p>
              </div>
            </div>

            {/* Core Values */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-[2px] bg-secondary"></div>
                <span className="text-secondary font-bold uppercase tracking-wider text-sm">Core Values</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-primary mb-10">What Drives Us Forward</h2>
              
              <div className="space-y-8">
                {[
                  {
                    title: "Uncompromising Precision",
                    desc: "We understand that our data is the foundation of major investments. We never guess; we measure."
                  },
                  {
                    title: "Professional Integrity",
                    desc: "Honesty and ethical conduct guide every survey, report, and client interaction we undertake."
                  },
                  {
                    title: "Technological Advancement",
                    desc: "We continuously adapt and adopt proven modern technologies to enhance accuracy and efficiency."
                  },
                  {
                    title: "Client Partnership",
                    desc: "We view ourselves as partners in our clients' success, providing proactive advice and responsive service."
                  }
                ].map((value, idx) => (
                  <div key={idx} className="flex gap-5">
                    <div className="mt-1">
                      <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                        {idx + 1}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-primary mb-2">{value.title}</h4>
                      <p className="text-muted-foreground">{value.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
