import { Link, useLocation } from "wouter";
import { Menu, X, MapPin, Phone, Mail } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import logo from "@assets/Oak_surveys_logo_1773160685504.png";

export function Navbar() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <>
      {/* Top Bar - Contact Info */}
      <div className="bg-primary text-primary-foreground py-2 px-4 md:px-8 hidden md:flex justify-between items-center text-sm">
        <div className="flex gap-6">
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-secondary" />
            <span>66 Eleshin Street, Obalende, Lagos</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={16} className="text-secondary" />
            <span>info@oaksurveys.com.ng</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Phone size={16} className="text-secondary" />
          <span className="font-semibold">+234 (0) 800 000 0000</span>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
        <div className="container mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-3 cursor-pointer">
              <img src={logo} alt="Oak Surveys Logo" className="h-12 w-auto" />
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-6">
              {navLinks.map((link) => (
                <Link key={link.path} href={link.path}>
                  <span
                    className={`text-sm font-medium transition-colors hover:text-secondary cursor-pointer ${
                      location === link.path ? "text-secondary font-semibold" : "text-foreground"
                    }`}
                  >
                    {link.name}
                  </span>
                </Link>
              ))}
            </div>
            <Link href="/contact">
              <Button className="bg-secondary hover:bg-secondary/90 text-white font-semibold rounded-none px-6">
                Request a Survey
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background p-4 flex flex-col gap-4 shadow-lg absolute w-full">
            {navLinks.map((link) => (
              <Link key={link.path} href={link.path}>
                <span
                  className={`block py-2 text-lg font-medium ${
                    location === link.path ? "text-secondary" : "text-foreground"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </span>
              </Link>
            ))}
            <Link href="/contact">
              <Button className="w-full bg-secondary hover:bg-secondary/90 mt-4 py-6 text-lg rounded-none">
                Request a Survey
              </Button>
            </Link>
          </div>
        )}
      </nav>
    </>
  );
}
