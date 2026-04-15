import { Switch, Route, useLocation } from "wouter";
import { useEffect } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Projects from "@/pages/Projects";
import Contact from "@/pages/Contact";
import RequestSurvey from "@/pages/RequestSurvey";
import ThankYou from "@/pages/ThankYou";

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) {
          const navbarHeight = 80;
          const top = el.getBoundingClientRect().top + window.scrollY - navbarHeight;
          window.scrollTo({ top, behavior: "smooth" });
        }
      }, 80);
    } else {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [location]);
  return null;
}

function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        <Route path="/request-survey" component={RequestSurvey} />
        <Route path="/thank-you" component={ThankYou} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen flex flex-col font-sans">
          <Navbar />
          <Router />
          <Footer />
          <WhatsAppButton />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
