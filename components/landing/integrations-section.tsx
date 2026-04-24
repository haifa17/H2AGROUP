"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { Button } from "../ui/button";

export const integrations = [
  { name: "Embedded Systems", category: "Hardware Engineering" },
  { name: "TinyML & Edge AI", category: "Edge Intelligence" },
  { name: "IoT Architecture", category: "System Architecture" },
  { name: "IoT Solutions", category: "Connected Systems" },
  { name: "BLE & LoRa", category: "Wireless Communication" },
  { name: "STM32 & ESP32", category: "Microcontroller Platforms" },
  { name: "PCB Design", category: "Electronic Design" },
  { name: "Computer Vision", category: "AI & Perception" },
  { name: "MQTT & Cloud", category: "Cloud & Messaging" },
  { name: "Predictive AI", category: "AI & Analytics" },
  { name: "Web Platforms", category: "Digital Platforms" },
  { name: "Mobile Apps", category: "Mobile Development" },
  { name: "Real-time Data", category: "Data Engineering" },
  { name: "Matching Algorithms", category: "Algorithm Design" },
  { name: "SaaS Products", category: "Product Engineering" },
  { name: "UX Engineering", category: "User Experience" },
];

export function IntegrationsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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
      id="integrations"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden "
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 lg:mb-24 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30 " />
            WHAT WE BUILD
            <span className="w-8 h-px bg-foreground/30" />
          </span>
          <h2 className="text-4xl lg:text-6xl font-display tracking-tight mb-6">
            Two<span className="text-blue-700 "> verticals</span>
            <br />
            One <span className="text-blue-700 ">engineering </span>DNA.
          </h2>
          <p className="text-xl text-muted-foreground">
            We engineer ventures across two complementary domains — industrial
            intelligence and smart digital platforms. Every product we build is
            internally owned, technically validated, and designed for African
            markets
          </p>
        </div>
      </div>
      <div className="lg:max-w-[1400px] grid grid-cols-1 lg:grid-cols-2 w-full  gap-10  mx-auto px-6 lg:px-12 mb-16">
        <div className="border border-foreground/10 p-8  bg-white">
          <div className="text-sm font-mono text-muted-foreground mb-4">
            VERTICAL 1 —
          </div>

          <div className="text-2xl text-black font-semibold mb-4">
            INDUSTRIAL IoT & EMBEDDED AI
          </div>

          <div className="text-muted-foreground leading-relaxed">
            Connected devices and intelligent systems designed for factories,
            warehouses and industrial environments.
            <ul>
              <li>• Predictive systems and anomaly detection</li>
              <li>• Real-time asset and fleet tracking</li>
              <li>• Energy monitoring and optimization</li>
              <li>• Computer vision on embedded hardware</li>
              <li>• Edge AI and TinyML solutions</li>
            </ul>
          </div>
        </div>
        <div className="border border-foreground/10 p-8  bg-white">
          <div className="text-sm font-mono text-muted-foreground mb-4">
            VERTICAL 2 —
          </div>

          <div className="text-2xl text-black font-semibold mb-4">
            SMART DIGITAL PLATFORMS
          </div>

          <div className="text-muted-foreground leading-relaxed">
            Intelligent web and mobile platforms targeting underserved markets
            across North Africa and beyond.
            <ul>
              <li>• AI-powered matching and ranking platforms</li>
              <li>• Digital marketplace solutions</li>
              <li>• SaaS tools for service industries</li>
              <li>• Real-time data dashboards</li>
              <li>• Mobile-first user experiences</li>
            </ul>
          </div>
        </div>
        <div className="border border-foreground/10 p-8 bg-white lg:col-span-2 max-w-2xl mx-auto">
          <div className="text-2xl text-blue-700 font-semibold mb-4">
            CUSTOM TECH SERVICES
          </div>
          <div className="grid lg:grid-cols-2 gap-10 ">
            <div className="text-muted-foreground leading-relaxed  mb-4">
              <p className="mb-10">
                Beyond our internal ventures, we take on selected client
                projects in embedded systems, IoT, web and mobile development.
                We bring the same engineering rigor to your project as we do to
                our own.
              </p>
              <Link href="#contact" passHref>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-blue-700 w-52 hover:bg-blue-800 text-background hover:text-white px-8 h-14 text-sm rounded-full group cursor-pointer"
                >
                  Request a <br /> Custom Project →
                </Button>
              </Link>
            </div>

            <div className="text-muted-foreground leading-relaxed lg:border-l border-foreground/10 lg:pl-10">
              <p className="mb-10">
                Our internal ventures are currently in POC phase.
               Details remain confidential, but we are open to pilot
                collaborations with selected industrial and digital partners
              </p>
              <Link href="#contact" passHref  >
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-blue-700 hover:bg-blue-800  text-background hover:text-white px-8 h-14 text-sm rounded-full group cursor-pointer"
                >
                  Discuss a Pilot →
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Full-width marquees outside container */}
      <div className="w-full mb-6">
        <div className="flex gap-6 marquee">
          {[...Array(2)].map((_, setIndex) => (
            <div key={setIndex} className="flex gap-6 shrink-0">
              {integrations.map((integration) => (
                <div
                  key={`${integration.name}-${setIndex}`}
                  className="shrink-0 px-8 py-6 border border-foreground/10 hover:border-foreground/30 hover:bg-foreground/[0.02] transition-all duration-300 group"
                >
                  <div className="text-lg font-medium group-hover:translate-x-1 transition-transform">
                    {integration.name}
                  </div>
                  <div className="text-sm text-blue-700 ">
                    {integration.category}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      {/* Reverse marquee */}
      <div className="w-full">
        <div className="flex gap-6 marquee-reverse">
          {[...Array(2)].map((_, setIndex) => (
            <div key={setIndex} className="flex gap-6 shrink-0">
              {[...integrations].reverse().map((integration) => (
                <div
                  key={`${integration.name}-reverse-${setIndex}`}
                  className="shrink-0 px-8 py-6 border border-foreground/10 hover:border-foreground/30 hover:bg-foreground/[0.02] transition-all duration-300 group"
                >
                  <div className="text-lg font-medium group-hover:translate-x-1 transition-transform">
                    {integration.name}
                  </div>
                  <div className="text-sm text-blue-700">
                    {integration.category}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
