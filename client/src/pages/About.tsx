import { Target, Eye, Quote, ChevronLeft, ChevronRight, UserRound } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { PageSeo } from "@/components/PageSeo";
import historyImage from "@/assets/images/about-history-generated.png";
import founderImage from "@assets/dad_pic_1773246913134.jpg";
import leadershipImage from "@assets/kolade_kasim_portrait.jpg";
import nisLogo from "@assets/nis_logo_whitebg-removebg-preview_1776247984208.png";

const teamMembers = [
  {
    name: "Surv. A. Ibrahim",
    role: "Senior Land Surveyor",
    bio: "Over 18 years of experience in boundary demarcation, cadastral surveys, and title documentation across Lagos and South-West Nigeria.",
    initials: "AI",
  },
  {
    name: "Surv. C. Okonkwo",
    role: "Engineering Surveys Lead",
    bio: "Specialises in setting-out, as-built surveys, and deformation monitoring for major road and bridge infrastructure projects.",
    initials: "CO",
  },
  {
    name: "Surv. T. Bello",
    role: "Hydrographic Surveyor",
    bio: "Skilled in bathymetric surveys, dredging support, and coastal mapping for marine engineering and waterway development projects.",
    initials: "TB",
  },
  {
    name: "Surv. F. Adeyemi",
    role: "GIS & Remote Sensing Analyst",
    bio: "Experienced in UAV photogrammetry, spatial data processing, and GIS database creation for urban planning and infrastructure mapping.",
    initials: "FA",
  },
  {
    name: "Surv. M. Danladi",
    role: "Geodetic Control Specialist",
    bio: "Focuses on GPS/GNSS control network establishment and datum transformation for large-scale national and regional projects.",
    initials: "MD",
  },
  {
    name: "Intern Position Open",
    role: "Surveying Intern",
    bio: "We welcome motivated surveying students and fresh graduates seeking hands-on field and office experience. Reach out to learn more.",
    initials: "?",
    isOpen: true,
  },
];

export default function About() {
  const [activeIndex, setActiveIndex] = useState(0);
  const visibleCount = 3;
  const total = teamMembers.length;
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, 4000);
  };

  useEffect(() => {
    startTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  const prev = () => { setActiveIndex((s) => (s - 1 + total) % total); startTimer(); };
  const next = () => { setActiveIndex((s) => (s + 1) % total); startTimer(); };

  const getVisible = () => {
    return Array.from({ length: visibleCount }, (_, i) => teamMembers[(activeIndex + i) % total]);
  };

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
        <section className="pt-2 pb-8 lg:pt-4 lg:pb-16">
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

        {/* Honouring the Legacy of Our Founder */}
        <section className="py-24 bg-white border-t border-border">
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

        {/* Our Team */}
        <section className="py-20 bg-background border-t border-border">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="w-8 h-[2px] bg-secondary"></div>
                <span className="text-secondary font-bold uppercase tracking-wider text-sm">Our Team</span>
                <div className="w-8 h-[2px] bg-secondary"></div>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-primary mb-4">People Behind the Precision</h2>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
                We work with a variety of skilled surveyors and technical professionals across disciplines. We also offer opportunities for interns who want to build a career in surveying and geospatial services.
              </p>
            </div>

            {/* Cards + Controls */}
            <div className="relative">
              {/* Card Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-500">
                {getVisible().map((member, i) => (
                  <div
                    key={`${activeIndex}-${i}`}
                    className={`bg-white border border-border shadow-sm overflow-hidden flex flex-col animate-in fade-in duration-500 ${(member as any).isOpen ? "border-secondary/40" : ""}`}
                    data-testid={`team-card-${i}`}
                  >
                    {/* Photo placeholder */}
                    <div className={`w-full aspect-[4/3] flex items-center justify-center ${(member as any).isOpen ? "bg-secondary/10" : "bg-muted"}`}>
                      {(member as any).isOpen ? (
                        <div className="flex flex-col items-center gap-2 text-secondary/60">
                          <UserRound size={56} strokeWidth={1.2} />
                          <span className="text-xs font-semibold uppercase tracking-widest text-secondary">Position Open</span>
                        </div>
                      ) : (
                        <div className="flex flex-col items-center gap-2">
                          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                            <span className="text-2xl font-black text-primary">{member.initials}</span>
                          </div>
                          <UserRound size={20} className="text-muted-foreground/30" />
                          <span className="text-xs text-muted-foreground/50 uppercase tracking-wider">Photo coming soon</span>
                        </div>
                      )}
                    </div>

                    {/* Details */}
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="w-8 h-0.5 bg-secondary mb-4"></div>
                      <h3 className="text-lg font-black text-primary mb-1">{member.name}</h3>
                      <p className="text-secondary text-sm font-bold uppercase tracking-wider mb-4">{member.role}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed flex-1">{member.bio}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Prev / Next */}
              <div className="flex items-center justify-center gap-4 mt-10">
                <button
                  onClick={prev}
                  data-testid="team-carousel-prev"
                  className="w-10 h-10 border border-border bg-white hover:bg-primary hover:text-white hover:border-primary flex items-center justify-center transition-colors"
                  aria-label="Previous"
                >
                  <ChevronLeft size={20} />
                </button>

                {/* Dots */}
                <div className="flex gap-2">
                  {teamMembers.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => { setActiveIndex(idx); startTimer(); }}
                      data-testid={`team-carousel-dot-${idx}`}
                      className={`h-2 rounded-full transition-all duration-300 ${idx === activeIndex ? "bg-secondary w-6" : "bg-border w-2 hover:bg-muted-foreground"}`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={next}
                  data-testid="team-carousel-next"
                  className="w-10 h-10 border border-border bg-white hover:bg-primary hover:text-white hover:border-primary flex items-center justify-center transition-colors"
                  aria-label="Next"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
