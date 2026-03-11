import { Shield, Target, Eye, Users, ChevronRight, GraduationCap, CheckCircle2 } from "lucide-react";
import engineersImage from "@/assets/images/about-engineers.jpg";
import founderImage from "@assets/dad_pic_1773246913134.jpg";

export default function About() {
  return (
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
            <div className="relative">
              <div className="absolute inset-0 bg-primary translate-x-6 translate-y-6 -z-10 hidden md:block"></div>
              <img 
                src={engineersImage} 
                alt="Oak Surveys founding principles" 
                className="w-full aspect-[4/5] object-cover border border-border shadow-xl"
              />
              <div className="absolute bottom-10 -left-10 bg-white p-6 shadow-2xl border border-gray-100 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="text-5xl font-black text-secondary">50+</div>
                  <div className="font-bold text-primary leading-tight">Years of<br />Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Honoring the Legacy of Our Founder */}
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
                      className="w-full h-auto object-cover grayscale-[40%] contrast-125 brightness-95"
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
                    Honoring the Legacy of Our Founder
                  </h2>
                  
                  <div className="mb-8 pb-8 border-b border-gray-100">
                    <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                      Surv. (Alh.) Olatunde Al-Ghali Kasim, FNIS
                    </h3>
                    <p className="text-secondary font-medium tracking-wide">
                      16 January 1940 – 28 February 2018
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
                    We honor his memory with deep respect and gratitude.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-[#0A1128] text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            {/* Vision & Mission */}
            <div className="space-y-12">
              <div className="bg-white/5 p-10 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-14 h-14 bg-secondary flex items-center justify-center mb-6 text-white rounded-sm">
                  <Eye size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  To be the most trusted and technologically advanced geospatial consultancy in West Africa, setting the benchmark for precision in engineering and land development.
                </p>
              </div>
              <div className="bg-white/5 p-10 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-14 h-14 bg-secondary flex items-center justify-center mb-6 text-white rounded-sm">
                  <Target size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
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
              <h2 className="text-3xl md:text-4xl font-black mb-10">What Drives Us Forward</h2>
              
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
                      <div className="w-8 h-8 rounded-full bg-white/10 text-secondary flex items-center justify-center font-bold">
                        {idx + 1}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{value.title}</h4>
                      <p className="text-gray-400">{value.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
