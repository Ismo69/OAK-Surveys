import { Link } from "wouter";
import { MapPin, Phone, Mail, ChevronRight } from "lucide-react";
import logo from "@assets/Oak_surveys_logo_1773160685504.png";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A1128] text-white pt-16 pb-8 border-t-[6px] border-secondary">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Col */}
          <div>
            <div className="mb-6">
              <img src={logo} alt="Oak Surveys Logo" className="h-12 w-auto mb-4" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 pr-4">
              Professional land and engineering surveying practice established in 1974. Providing precise geospatial solutions for infrastructure and development across Nigeria.
            </p>
            <div className="flex gap-4">
              {/* Social placeholders */}
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors cursor-pointer text-sm">In</div>
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors cursor-pointer text-sm">Tw</div>
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors cursor-pointer text-sm">Fb</div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-white uppercase tracking-wider relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-secondary">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Our Services", path: "/services" },
                { name: "Contact Us", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link href={link.path}>
                    <span className="text-gray-400 hover:text-secondary transition-colors flex items-center gap-2 text-sm cursor-pointer group">
                      <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-white uppercase tracking-wider relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-secondary">Our Services</h4>
            <ul className="space-y-3">
              {[
                "Land Surveying",
                "Geodetic Surveys",
                "Hydrographic Surveys",
                "Engineering Surveys",
                "Geo-Information & Mapping"
              ].map((service) => (
                <li key={service}>
                  <Link href="/services">
                    <span className="text-gray-400 hover:text-secondary transition-colors flex items-center gap-2 text-sm cursor-pointer group">
                      <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      {service}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-white uppercase tracking-wider relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-secondary">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-secondary shrink-0 mt-1" size={18} />
                <span className="text-gray-400 text-sm leading-relaxed">
                  No. 66 Eleshin Street<br />
                  Obalende<br />
                  Lagos, Nigeria
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-secondary shrink-0" size={18} />
                <span className="text-gray-400 text-sm">+234 803 600 4494</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-secondary shrink-0" size={18} />
                <span className="text-gray-400 text-sm">info@oaksurveys.com.ng</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Oak Surveys. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Registered Surveyor Practice Since 1974
          </p>
        </div>
      </div>
    </footer>
  );
}
