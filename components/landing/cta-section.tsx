"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Linkedin, LinkedinIcon, Mail, Phone } from "lucide-react";
import { AnimatedTetrahedron } from "./animated-tetrahedron";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
const partnerOptions = [
  {
    key: "industrial",
    label: "INDUSTRIAL PARTNERS",
    title: "INDUSTRIAL PARTNERS",
    description:
      "Open your facility to a pilot. We bring the device, the data and the results. Zero financial risk. Real operational value.",
    cta: "Request a Pilot",
  },
  {
    key: "incubators",
    label: "INCUBATORS & ACCELERATORS",
    title: "INCUBATORS & ACCELERATORS",
    description:
      "Our technical foundation is engineering-grade. We are looking for structured mentorship, ecosystem access and business scaling support.",
    cta: "Get in Touch",
  },
  {
    key: "investors",
    label: "EARLY INVESTORS",
    title: "EARLY INVESTORS",
    description:
      "We are opening a pre-seed round to finalize our POCs and prepare our market entry. Invest in the studio. Gain exposure to every venture it creates.",
    cta: "Investor Inquiry",
  },
];

export function CtaSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [open, setOpen] = useState(false);
  const [openContact, setOpenContact] = useState(false);
  const [selected, setSelected] = useState("industrial");

  const current = partnerOptions.find((opt) => opt.key === selected);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };
  console.log(process.env.NEXT_PUBLIC_PUBLIC_KEY);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_TEMPLATE_ID || "",
        e.currentTarget,
        process.env.NEXT_PUBLIC_PUBLIC_KEY || "",
      )
      .then(
        () => {
          console.log("Email sent");
          toast.success(
            "Your message has been sent! We'll get back to you soon.",
          );
          setOpen(false);
        },
        (error) => {
          console.error("Error:", error);
          toast.error("Failed to send message.");
        },
      );
  };
  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div
          className={`relative border border-foreground transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          onMouseMove={handleMouseMove}
        >
          {/* Spotlight effect */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none transition-opacity duration-300"
            style={{
              background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(0,0,0,0.15), transparent 40%)`,
            }}
          />

          <div className="relative z-10 px-8 lg:px-16 py-16 lg:py-24">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              {/* Left content */}
              <div className="flex-1">
                <h2 className="text-4xl lg:text-7xl font-display tracking-tight mb-8 leading-[0.95]">
                  Lets <span className="text-blue-700">build </span>
                  together.
                </h2>

                <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-xl">
                  We are not here to pitch a dream. We are here to build it —
                  with the{" "}
                  <span className="bg-gradient-to-r from-blue-700 to-purple-700 text-transparent bg-clip-text">
                    right partners
                  </span>{" "}
                  .
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  {partnerOptions.map((opt) => (
                    <button
                      key={opt.key}
                      onClick={() => setSelected(opt.key)}
                      className={`px-5 h-11 rounded-full text-sm transition-all border
        ${
          selected === opt.key
            ? "bg-blue-700 text-white border-blue-700"
            : "bg-transparent text-foreground/70 border-foreground/20 hover:border-blue-500"
        }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
                <div className="max-w-xl">
                  <p className="text-black mb-6 leading-relaxed">
                    {current?.description}
                  </p>

                  <Button
                    onClick={() => setOpen(true)}
                    size="lg"
                    variant="outline"
                    className="h-14 ml-2 px-8 text-base text-blue-700 rounded-full cursor-pointer border-blue-700 hover:bg-foreground/5"
                  >
                    {current?.cta}
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>

                <p className="text-base text-muted-foreground  leading-relaxed mt-20 ">
                  You're not investing in one startup. You're{" "}
                  <span className="bg-gradient-to-r from-blue-700 to-purple-700 text-transparent bg-clip-text">
                    investing in the engine that builds many.
                  </span>
                </p>
                <p className="text-sm text-muted-foreground mt-8 font-mono">
                  We read every message. We respond within 48 hours.
                </p>
              </div>

              {/* Right animation */}
              <div className="hidden lg:flex items-center justify-center w-[500px] h-[500px] -mr-16">
                <AnimatedTetrahedron />
              </div>
            </div>
          </div>

          {/* Decorative corner */}
          <div className="absolute top-0 right-0 w-32 h-32 border-b border-l border-foreground/10" />
          <div className="absolute bottom-0 left-0 w-32 h-32 border-t border-r border-foreground/10" />
        </div>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="sm:max-w-lg">
            <DialogHeader>
              <DialogTitle className="text-2xl font-display">
                Let's build together.
              </DialogTitle>
              <DialogTitle className="text-sm text-muted-foreground mt-2">
                Fill out the form below and we'll get back to you within 48
                hours.
              </DialogTitle>
            </DialogHeader>

            <form className="space-y-4 mt-6" onSubmit={handleSubmit}>
              <input
                name="name"
                type="text"
                placeholder="Full name"
                className="w-full border border-foreground/10 px-4 py-3"
              />

              <input
                name="email"
                type="email"
                placeholder="Email address"
                className="w-full border border-foreground/10 px-4 py-3"
              />

              <input
                name="project"
                type="text"
                placeholder="Project type "
                className="w-full border border-foreground/10 px-4 py-3"
              />

              <textarea
                name="message"
                placeholder="Tell us about your project..."
                className="w-full border border-foreground/10 px-4 py-3 h-32 resize-none"
              />

              <Button type="submit" className="w-full h-12 rounded-full ">
                Send request
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
