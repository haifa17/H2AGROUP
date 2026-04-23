"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

const plans = [
  {
    name: "2025 ",
    description: "Studio founded",
    features: ["First 7 ventures initiated ","POC development phasebegins."],
    cta: "Start free",
    popular: false,
  },
  {
    name: "2026",
    description: "First POCs validated",
    price: { monthly: 29, annual: 24 },
    features: [
      " First POCs validated",
      "First B2B pilot partnerships secured",
      "Pre - seed fundraising round ",
    ],
    cta: "Start trial",
    popular: true,
  },
  {
    name: "2027",
    description: "First spin-off ",
    price: { monthly: null, annual: null },
    features: [
      "First spin-off launched independently",
      "Regional expansion: Algeria ,Morocco",
      "Studio team scaled to 10+ engineers",
    ],
    cta: "Contact sales",
    popular: false,
  },
  {
    name: "2028",
    description: "3 active ventures on the market,",
    price: { monthly: null, annual: null },
    features: [
      " 3 active ventures on the market",
      "H2A recognized as Tunisia's leading deep tech venture builder",
    ],
    cta: "Contact sales",
    popular: false,
  },
];

export function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section
      id="roadmap"
      className="relative py-32 lg:py-40 border-t border-foreground/10"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <span className="font-mono text-xs tracking-widest text-muted-foreground  block mb-6">
            Vision & RoadMap
          </span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tight text-foreground mb-6">
            Our
            <br />
            <span className="text-blue-700">Mission </span> <br /> &{" "}
            <span className="text-blue-700">RoadMap </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl">
            Build the tech solutions Africa's industry needs engineered by
            African talent , for African realities, at global standards.
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
                <p className="text-sm text-muted-foreground mt-2">
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

              {/* CTA */}
              
            </div>
          ))}
        </div>

       
      </div>
    </section>
  );
}
