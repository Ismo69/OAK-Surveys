import { Link } from "wouter";
import { CheckCircle2, ArrowRight, Home, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageSeo } from "@/components/PageSeo";

export default function ThankYou() {
  return (
    <>
      <PageSeo
        title="Submission Received | Oak Surveys"
        description="Thank you for contacting Oak Surveys. We have received your enquiry and will be in touch shortly."
      />
      <main className="min-h-[80vh] bg-background flex items-center justify-center py-20 px-4">
        <div className="max-w-lg w-full text-center">

          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-green-50 flex items-center justify-center">
                <CheckCircle2 size={56} className="text-green-500" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">✓</span>
              </div>
            </div>
          </div>

          <div className="mb-2 inline-block bg-primary/5 border border-primary/10 text-primary text-xs font-semibold uppercase tracking-widest px-4 py-1 rounded-full">
            Submission Received
          </div>

          <h1 className="text-3xl md:text-4xl font-black text-primary mt-4 mb-4">
            Thank You for Reaching Out
          </h1>

          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            We've received your submission and a member of the Oak Surveys team will be in touch with you within <span className="font-semibold text-primary">24–48 business hours</span>.
          </p>

          <div className="bg-muted border border-border p-6 mb-10 text-left">
            <h3 className="font-bold text-primary mb-3 text-sm uppercase tracking-wider">What happens next</h3>
            <ul className="space-y-3">
              {[
                "Our team will review your enquiry",
                "A surveyor will contact you to discuss your project",
                "We'll provide a tailored quote and timeline",
              ].map((step, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="w-5 h-5 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/">
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white gap-2"
                data-testid="thankyou-home-button"
              >
                <Home size={16} />
                Back to Home
              </Button>
            </Link>
            <Link href="/request-survey">
              <Button
                className="bg-secondary hover:bg-secondary/90 text-white gap-2"
                data-testid="thankyou-survey-button"
              >
                Request Another Survey
                <ArrowRight size={16} />
              </Button>
            </Link>
          </div>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground mb-2">Need to speak with us urgently?</p>
            <a
              href="tel:+2348036004494"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-secondary transition-colors"
              data-testid="thankyou-phone-link"
            >
              <Phone size={16} />
              +234 803 600 4494
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
