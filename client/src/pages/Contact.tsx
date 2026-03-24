import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useMutation } from "@tanstack/react-query";
import { PageSeo } from "@/components/PageSeo";

async function submitContactForm(data: {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
}) {
  const res = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.message || "Failed to send message");
  }
  return res.json();
}

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const mutation = useMutation({
    mutationFn: submitContactForm,
    onSuccess: () => {
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    },
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    mutation.mutate({
      name: form.name,
      email: form.email,
      phone: form.phone || undefined,
      subject: form.subject || undefined,
      message: form.message,
    });
  }

  return (
    <>
      <PageSeo
        title="Contact Oak Surveys | Professional Surveyors in Lagos, Nigeria"
        description="Get in touch with Oak Surveys. Contact our team of professional surveyors in Lagos, Nigeria for land surveying, engineering surveys, and geospatial mapping enquiries."
      />
    <main className="flex-1 w-full overflow-hidden">
      {/* Page Header */}
      <section className="bg-primary text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/10 -skew-x-12 translate-x-32 transform z-0"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-[2px] bg-secondary"></div>
            <span className="text-secondary font-bold uppercase tracking-wider text-sm">Get in Touch</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">Contact Us</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
            For general inquiries and information about our surveying services across Nigeria.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">

            {/* Left: Contact Info */}
            <div className="space-y-10">
              <div>
                <h2 className="text-3xl font-black text-primary mb-6">Our Office</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  We are headquartered in Lagos, providing surveying services across Nigeria for major infrastructure and development projects.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-5 p-6 bg-muted border border-border">
                  <div className="w-12 h-12 bg-white flex items-center justify-center text-secondary rounded-full shadow-sm shrink-0">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-base mb-1">Head Office</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      No. 66 Eleshin Street<br />
                      Obalende<br />
                      Lagos, Nigeria
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5 p-6 bg-muted border border-border">
                  <div className="w-12 h-12 bg-white flex items-center justify-center text-secondary rounded-full shadow-sm shrink-0">
                    <Phone size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-base mb-1">Call Us</h4>
                    <p className="text-muted-foreground">+234 803 600 4494</p>
                    <p className="text-sm text-muted-foreground mt-1">Mon–Fri: 8am – 5pm</p>
                  </div>
                </div>

                <div className="flex items-start gap-5 p-6 bg-muted border border-border">
                  <div className="w-12 h-12 bg-white flex items-center justify-center text-secondary rounded-full shadow-sm shrink-0">
                    <Mail size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-base mb-1">Email Us</h4>
                    <p className="text-muted-foreground">info@oaksurveys.com.ng</p>
                    <p className="text-sm text-muted-foreground mt-1">Expect a reply within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-5 p-6 bg-muted border border-border">
                  <div className="w-12 h-12 bg-white flex items-center justify-center text-secondary rounded-full shadow-sm shrink-0">
                    <Clock size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-base mb-1">Office Hours</h4>
                    <p className="text-muted-foreground">Monday – Friday: 8:00am – 5:00pm</p>
                    <p className="text-muted-foreground">Saturday: 9:00am – 1:00pm</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="bg-white border border-border shadow-xl p-8 md:p-10 relative">
              <div className="absolute top-0 left-0 w-full h-2 bg-secondary"></div>
              <h2 className="text-2xl font-black text-primary mb-2">Send Us a Message</h2>
              <p className="text-muted-foreground mb-8">We'll get back to you within 24 business hours.</p>

              {mutation.isSuccess ? (
                <div data-testid="contact-success" className="flex flex-col items-center text-center py-12 gap-4">
                  <CheckCircle2 size={56} className="text-green-500" />
                  <h3 className="text-xl font-bold text-primary">Message Sent!</h3>
                  <p className="text-muted-foreground">Thank you for reaching out. Our team will be in touch shortly.</p>
                  <Button
                    variant="outline"
                    className="mt-4 border-primary text-primary"
                    onClick={() => mutation.reset()}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form className="space-y-5" onSubmit={handleSubmit}>
                  {mutation.isError && (
                    <div data-testid="contact-error" className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 text-red-700 text-sm">
                      <AlertCircle size={18} className="shrink-0" />
                      <span>{(mutation.error as Error)?.message || "Something went wrong. Please try again."}</span>
                    </div>
                  )}

                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-primary">Full Name *</label>
                      <Input
                        data-testid="input-contact-name"
                        required
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="h-12 border-muted bg-muted/50 focus-visible:ring-secondary focus-visible:bg-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-primary">Phone Number</label>
                      <Input
                        data-testid="input-contact-phone"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+234 XXX XXXX"
                        className="h-12 border-muted bg-muted/50 focus-visible:ring-secondary focus-visible:bg-white"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-primary">Email Address *</label>
                    <Input
                      data-testid="input-contact-email"
                      required
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="email@example.com"
                      className="h-12 border-muted bg-muted/50 focus-visible:ring-secondary focus-visible:bg-white"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-primary">Subject</label>
                    <Input
                      data-testid="input-contact-subject"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="What is this regarding?"
                      className="h-12 border-muted bg-muted/50 focus-visible:ring-secondary focus-visible:bg-white"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-primary">Message *</label>
                    <Textarea
                      data-testid="input-contact-message"
                      required
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us how we can help..."
                      className="min-h-[160px] resize-y border-muted bg-muted/50 focus-visible:ring-secondary focus-visible:bg-white p-4 text-base"
                    />
                  </div>

                  <Button
                    data-testid="button-contact-submit"
                    type="submit"
                    disabled={mutation.isPending}
                    className="w-full h-14 bg-secondary hover:bg-secondary/90 text-white rounded-none text-lg font-bold"
                  >
                    {mutation.isPending ? "Sending..." : "Send Message"}
                    <Send size={18} className="ml-2" />
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full border-t border-border" style={{ height: 420 }}>
        <iframe
          title="Oak Surveys Office Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7!2d3.4286!3d6.4541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2a6f6a8b3d%3A0x0!2sObalende%2C%20Lagos%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1700000000000"
          width="100%"
          height="100%"
          style={{ border: 0, display: "block" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </main>
    </>
  );
}
