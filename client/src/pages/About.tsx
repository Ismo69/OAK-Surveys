import { Shield, Target, Eye, Users, ChevronRight, GraduationCap, CheckCircle2, Quote } from "lucide-react";
import { PageSeo } from "@/components/PageSeo";
import historyImage from "@/assets/images/about-history-generated.png";
import founderImage from "@assets/dad_pic_1773246913134.jpg";
import leadershipImage from "@assets/kolade_kasim_portrait.jpg";
import nisLogo from "@assets/nis_logo_whitebg-removebg-preview_1776247984208.png";

export default function About() {
  return (
    <>
      <PageSeo
        title="About Oak Surveys | Established Surveying Firm in Lagos Since 1974"
        description="Learn about Oak Surveys, a professional surveying company established in Lagos, Nigeria in 1974. Over 50 years of land surveying, engineering surveys, and geospatial expertise."
      />
    <main className="flex-1 w-full overflow-hidden">
      {/* Page Header */}
      <section className="bg-primary text-white py-8 relative overflow-hidden">
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
      <section className="py-8 lg:py-16">
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

              <div className="mt-10 bg-muted p-8 border-l-4 border-secondary flex items-center gap-6">
                 <a href="https://nisngr.net/" target="_blank" rel="noreferrer" data-testid="link-nis-website">
                   <img src={nisLogo} alt="Nigerian Institution of Surveyors logo" className="w-32 h-32 object-contain shrink-0" />
                 </a>
                 <div>
                   <a href="https://nisngr.net/" target="_blank" rel="noreferrer" className="inline-block text-xl font-bold text-primary mb-2" data-testid="link-nis-text">
                     Nigerian Institution of Surveyors
                   </a>
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
                    <div className="absolute inset-0 border-[0.5px] border-primary/10 m-1 pointer-events-none"></div>
                  </div>
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
                    Throughout his career, he played an influential role within the Nigerian Institution of Surveyors, serving twice as President. His leadership was strengthened by his fluency in the three major Nigerian languages — Igbo, Hausa, and Yoruba — which enabled him to connect across communities and represent the profession with exceptional reach and trust.
                  </p>

                  <p>
                    He was also deeply committed to continuous professional development, regularly attending international conferences to stay current with emerging technologies and global best practices in surveying and geospatial development. His contributions also extended to national institutions, including the National Boundary Commission and the National Space Programme, where his expertise supported important national initiatives.
                  </p>

                  <p>
                    As the founder of Oak Surveys, Surv. Kasim established the firm on the principles of professionalism, integrity, and technical excellence. His dedication to the surveying profession and commitment to high standards laid the foundation upon which the company continues to operate today.
                  </p>

                  <p>
                    His legacy continues to inspire our work and guide our values as we strive to uphold the same standards of precision, service, and professionalism that defined his career.
                  </p>
                </div>
              </div>
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
                <h3 className="text-2xl font-black text-primary mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  To remain the trusted benchmark for surveying precision and geospatial intelligence in Nigeria, continually setting new standards in accuracy, reliability, and innovation.
                </p>
              </div>
              <div className="bg-white p-10 shadow-sm border border-border hover:border-secondary transition-colors">
                <div className="w-14 h-14 bg-primary flex items-center justify-center mb-6 text-white rounded-sm">
                  <Target size={28} />
                </div>
                <h3 className="text-2xl font-black text-primary mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  To provide clients with dependable, timely, and accurate surveying services through the application of best-in-class methodology, modern equipment, and professional expertise.
                </p>
              </div>
            </div>

            {/* Core Values */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-[2px] bg-secondary"></div>
                <span className="text-secondary font-bold uppercase tracking-wider text-sm">Our Principles</span>
              </div>
              <h3 className="text-3xl font-black text-primary mb-8">Core Values</h3>
              <div className="space-y-6">
                <div className="flex gap-4 items-start p-6 bg-white border border-border hover:border-secondary transition-colors">
                  <CheckCircle2 className="text-secondary shrink-0 mt-1" size={22} />
                  <div>
                    <h4 className="text-lg font-bold text-primary mb-2">Precision</h4>
                    <p className="text-muted-foreground leading-relaxed">Every coordinate, boundary, and deliverable is handled with uncompromising accuracy.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start p-6 bg-white border border-border hover:border-secondary transition-colors">
                  <CheckCircle2 className="text-secondary shrink-0 mt-1" size={22} />
                  <div>
                    <h4 className="text-lg font-bold text-primary mb-2">Integrity</h4>
                    <p className="text-muted-foreground leading-relaxed">We work with transparency, professionalism, and a deep respect for client trust.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start p-6 bg-white border border-border hover:border-secondary transition-colors">
                  <CheckCircle2 className="text-secondary shrink-0 mt-1" size={22} />
                  <div>
                    <h4 className="text-lg font-bold text-primary mb-2">Innovation</h4>
                    <p className="text-muted-foreground leading-relaxed">We embrace modern tools and methods to improve efficiency, clarity, and outcomes.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start p-6 bg-white border border-border hover:border-secondary transition-colors">
                  <CheckCircle2 className="text-secondary shrink-0 mt-1" size={22} />
                  <div>
                    <h4 className="text-lg font-bold text-primary mb-2">Service</h4>
                    <p className="text-muted-foreground leading-relaxed">We are committed to responsive, dependable support that helps clients move forward with confidence.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-background border-t border-border">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-8 h-[2px] bg-secondary"></div>
              <span className="text-secondary font-bold uppercase tracking-wider text-sm">Leadership</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-primary mb-4">A Team of Seasoned Professionals</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              The people behind Oak Surveys combine decades of practical field experience with technical expertise and a commitment to excellence.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[{
              name: "Surv. (Engr.) Kolade Kasim",
              role: "Chief Executive Officer",
              image: leadershipImage,
              description: "A professional surveyor with deep experience in project execution, client management, and organizational leadership."
            }, {
              name: "Veteran Technical Staff",
              role: "Operations & Field Teams",
              image: historyImage,
              description: "Our multidisciplinary teams combine field knowledge, technical precision, and modern geospatial workflows to deliver dependable results."
            }].map((member, idx) => (
              <div key={idx} className="bg-white border border-border shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <img src={member.image} alt={member.name} className="w-full h-72 object-cover" />
                <div className="p-8">
                  <h3 className="text-2xl font-black text-primary mb-2">{member.name}</h3>
                  <p className="text-secondary font-bold uppercase tracking-wider text-sm mb-4">{member.role}</p>
                  <p className="text-muted-foreground leading-relaxed">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-8 h-[2px] bg-secondary"></div>
              <span className="text-secondary font-bold uppercase tracking-wider text-sm">Client Confidence</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black mb-4">What Our Clients Value</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 border border-white/10 p-8">
              <Quote className="text-secondary mb-4" size={28} />
              <p className="text-white/90 leading-relaxed text-lg mb-6">Oak Surveys consistently delivers accurate, reliable, and timely survey data that supports project decisions with confidence.</p>
              <div className="text-sm text-white/70 font-medium">Private Developer, Lagos</div>
            </div>
            <div className="bg-white/5 border border-white/10 p-8">
              <Quote className="text-secondary mb-4" size={28} />
              <p className="text-white/90 leading-relaxed text-lg mb-6">Their professionalism, field discipline, and attention to detail make them a trusted surveying partner on complex assignments.</p>
              <div className="text-sm text-white/70 font-medium">Infrastructure Client, Nigeria</div>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
