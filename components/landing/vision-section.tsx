"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

const plans = [
  {
    name: "2025 ",
    description: "STUDIO BORN",
    features: [
      "Multiple ventures initiated across IoT, AI and digital platforms",
      "POC development phasebegins.",
      " Full engineering stack assembled in-house",
    ],
    popular: false,
  },
  {
    name: "2026",
    description: "VALIDATE",
    features: [
      "First POCs tested in real environments",
      "First B2B pilot partnerships secured",
      "Pre-seed fundraising round opened",
    ],
    popular: true,
  },
  {
    name: "2027",
    description: "LAUNCH",
    features: [
      "First spin-off launched independently",
      "Regional expansion: Algeria ,Morocco",
      "Studio team scaled to 10+ engineers",
    ],
    popular: false,
  },
  {
    name: "2028",
    description: "SCALE",
    features: [
      "3+ active ventures on the market",
      "H2A recognized as Tunisia's leading deep tech venture builder",
      "New markets: Sub-Saharan Africa",
    ],
    popular: false,
  },
];

export function PricingSection() {
  return (
    <section
      id="roadmap"
      className="relative py-32 lg:py-40 border-t border-foreground/10"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <span className="font-mono text-xs tracking-widest text-muted-foreground  block mb-6">
            VISION & ROADMAP
          </span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tight text-foreground mb-6">
            From
            <span className="text-blue-700"> Sousse </span> <br /> to the
            <span className="text-blue-700"> Continent </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Our mission is to become Africa's leading deep tech venture builder
            — creating industrial and digital products that are affordable,
            engineering-grade, and built for the realities of our market. We
            don't import solutions. <br />
            We engineer them from the inside out.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-4 gap-px bg-foreground/10">
          {plans.map((plan, idx) => (
            <div
              key={plan.name}
              className={`relative p-8 lg:p-12 bg-background ${
                plan.popular
                  ? "md:-my-4 md:py-12 lg:py-16 border-2 border-blue-700 shadow-lg"
                  : ""
              }`}
            >
              {/* Plan Header */}
              <div className="mb-8">
                <span className="font-mono text-xs text-muted-foreground">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-3xl text-foreground mt-2">
                  {plan.name}
                </h3>
                <p className="text-sm bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent mt-2">
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              {/* <div className="mb-8 pb-8 border-b border-foreground/10">
                {plan.price.monthly !== null ? (
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-5xl lg:text-6xl text-foreground">
                      ${isAnnual ? plan.price.annual : plan.price.monthly}
                    </span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                ) : (
                  <span className="font-display text-4xl text-foreground">Custom</span>
                )}
              </div> */}

              {/* Features */}
              <ul className="space-y-4 mb-10">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-foreground mt-0.5 shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="text-xl text-muted-foreground text-center leading-relaxed mt-20 ">
          "Africa's <span className="text-blue-700">industrial revolution</span> won't come from abroad. It will be
          engineered  <span className="text-blue-700">from within</span>."
        </p>
      </div>
    </section>
  );
}
