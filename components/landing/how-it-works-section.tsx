"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    step: "01",
    title: "Identify",
    description:
      "Spot a real, structural problem in industry, services or daily life. Validate it with market research.",
  },
  {
    step: "02",
    title: "Engineer",
    description:
      "Design the full solution in-house hardware, firmware, software, UX. No outsourcing. Full ownership.",
  },
  {
    step: "03",
    title: "Build The POC",
    description:
      "Deliver a working proof of concept.Test. Iterate. Validate with real users.",
  },
  {
    step: "04",
    title: "Spin OFF",
    description:
      "Launch the solution as an independent startup.H2A retains founding equity.A dedicated team is assembled.",
  },
  {
    step: "05",
    title: "Scale & Exit",
    description:
      "Grow the venture. Raise dedicated capital.Exit via sale or regional expansion.",
  },
];
export function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-gradient-to-b from-white to-gray-300 text-background overflow-hidden"
    >
      {/* Diagonal lines pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 40px,
            currentColor 40px,
            currentColor 41px
          )`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 lg:mb-24">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-muted-foreground" />
            How We Work
          </span>
          <h2
            className={`text-4xl text-black lg:text-6xl font-display tracking-tight transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            How we turn ideas
            <br />
            <span className="text-blue-700"> into scalable solutions.</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-12">
            A structured approach that ensures every project is delivered
            efficiently, from concept to scalable digital solution.
          </p>
        </div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Steps */}
          <div className="space-y-0">
            {steps.map((item, index) => (
              <div
                key={item.step}
                className="px-6 py-6 border-b border-foreground/5 last:border-b-0"
              >
                <div className="flex items-start gap-4">
                  <span className="text-lg font-mono text-muted-foreground">
                    {item.step}
                  </span>
                  <div>
                    <div className="font-medium text-black text-lg">
                      {item.title}
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">
                      {item.description}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Code display */}
          <div className="lg:sticky lg:top-32 self-start">
            <div className="border border-foreground/10 p-8 bg-white">
              <div className="text-sm font-mono text-muted-foreground mb-4">
                Step {steps[activeStep].step}
              </div>

              <div className="text-2xl font-semibold mb-4">
                {steps[activeStep].title}
              </div>

              <p className="text-muted-foreground leading-relaxed">
                {steps[activeStep].description}
              </p>
              <div className="mt-6 h-1 bg-foreground/10">
                <div
                  className="h-full bg-blue-700 transition-all duration-500"
                  style={{
                    width: `${((activeStep + 1) / steps.length) * 100}%`,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes progress {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }

        .code-line-reveal {
          opacity: 0;
          transform: translateX(-8px);
          animation: lineReveal 0.4s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        @keyframes lineReveal {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .code-char-reveal {
          opacity: 0;
          filter: blur(8px);
          animation: charReveal 0.3s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        @keyframes charReveal {
          to {
            opacity: 1;
            filter: blur(0);
          }
        }
      `}</style>
    </section>
  );
}
