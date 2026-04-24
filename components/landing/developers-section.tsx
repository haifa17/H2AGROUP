"use client";

import { useState, useEffect, useRef } from "react";
import { Copy, Check } from "lucide-react";

const codeExamples = [
  {
    label: "Install",
    code: `npm install @optimus/sdk

# or
yarn add @optimus/sdk
pnpm add @optimus/sdk`,
  },
  {
    label: "Initialize",
    code: `import { Optimus } from '@optimus/sdk'

const optimus = new Optimus({
  apiKey: process.env.OPTIMUS_KEY
})`,
  },
  {
    label: "Deploy",
    code: `const app = await optimus.deploy({
  name: 'my-app',
  region: 'auto',
  scaling: {
    min: 1,
    max: 100
  }
})

console.log('Live at:', app.url)`,
  },
];

const features = [
  {
    title: "TypeScript native",
    description: "Full type safety with auto-generated types.",
  },
  {
    title: "Zero config",
    description: "Sensible defaults that just work.",
  },
  {
    title: "Edge-ready",
    description: "Runs anywhere: Node, Deno, Bun, browsers.",
  },
  {
    title: "12KB gzipped",
    description: "Lightweight with zero dependencies.",
  },
];

const codeAnimationStyles = `
  .dev-code-line {
    opacity: 0;
    transform: translateX(-8px);
    animation: devLineReveal 0.4s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  }
  
  @keyframes devLineReveal {
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  .dev-code-char {
    opacity: 0;
    filter: blur(8px);
    animation: devCharReveal 0.3s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  }
  
  @keyframes devCharReveal {
    to {
      opacity: 1;
      filter: blur(0);
    }
  }
`;

export function DevelopersSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeExamples[activeTab].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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

  return (
    <section
      id="developers"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      <style dangerouslySetInnerHTML={{ __html: codeAnimationStyles }} />
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className=" gap-16 lg:gap-24 items-start">
          {/* Left: Content */}
          <div
            className={`transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-8 h-px bg-foreground/30" />
              THE TEAM
            </span>
            <h2 className="text-4xl lg:text-6xl font-display tracking-tight mb-8">
              Engineers who chose to{" "}
              <span className="bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent">
                build
              </span>
              <br />
              <span className="text-muted-foreground">rather than wait.</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-2xl">
              H2A was founded by three industrial electronics engineers from
              ENISo — Tunisia's National Engineering School of Sousse. No
              investors. No external funding. Just engineering conviction and
              the belief that Africa's tech gap can be closed from within.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className={`transition-all duration-500 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${index * 50 + 200}ms` }}
                >
                  <h3 className="font-medium mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

      
        </div>
      </div>
    </section>
  );
}
