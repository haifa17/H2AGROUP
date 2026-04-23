"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Linkedin, LinkedinIcon, Mail, Phone } from "lucide-react";
import { AnimatedTetrahedron } from "./animated-tetrahedron";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";

export function CtaSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [open, setOpen] = useState(false);
  const [openContact, setOpenContact] = useState(false);

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
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: send to API / email service
    setOpen(false);
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
                  Lets <span className="text-blue-700">build</span> something
                  <br />
                  meaningful together.
                </h2>

                <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-xl">
                  Whether you are building a product, modernizing a system, or
                  exploring an idea — we help turn it into a real digital
                  solution.
                </p>

                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <Button
                    onClick={() => setOpen(true)}
                    size="lg"
                    className="bg-blue-700 hover:bg-blue-800 cursor-pointer text-background px-8 h-14 text-base rounded-full group"
                  >
                    Start a project
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>

                  <Button
                    size="lg"
                    variant="outline"
                    className="h-14 px-8 text-base text-blue-700 rounded-full cursor-pointer border-blue-700 hover:bg-foreground/5"
                    onClick={() => setOpenContact(true)}
                  >
                    Contact us <Mail className="w-4 h-4 ml-2" />
                  </Button>
                </div>

                <p className="text-sm text-muted-foreground mt-8 font-mono">
                  We usually respond within 24–48 hours{" "}
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
                Start your project
              </DialogTitle>
            </DialogHeader>

            <form className="space-y-4 mt-6" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Full name"
                className="w-full border border-foreground/10 px-4 py-3"
              />

              <input
                type="email"
                placeholder="Email address"
                className="w-full border border-foreground/10 px-4 py-3"
              />

              <input
                type="text"
                placeholder="Project type (Web, Mobile, AI, etc.)"
                className="w-full border border-foreground/10 px-4 py-3"
              />

              <textarea
                placeholder="Tell us about your project..."
                className="w-full border border-foreground/10 px-4 py-3 h-32 resize-none"
              />

              <Button className="w-full h-12 rounded-full ">
                Send request
              </Button>
            </form>
          </DialogContent>
        </Dialog>
        <Dialog open={openContact} onOpenChange={setOpenContact}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="text-2xl font-display">
                Contact Information
              </DialogTitle>
            </DialogHeader>

            <div className="mt-6 space-y-4">
              {/* Email */}
              <div className="flex items-center gap-4 p-4 border border-foreground/10 rounded-lg">
                <div className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center text-white">
                 <Mail  />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">contact@h2a-group.com</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4 p-4 border border-foreground/10 rounded-lg">
                <div className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center text-white">
                 <Phone />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium">+216 92626949</p>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex items-center gap-4 p-4 border border-foreground/10 rounded-lg">
                <div className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center text-white">
                 <LinkedinIcon />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">LinkedIn</p>
                  <p className="font-medium">H2A Group</p>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
