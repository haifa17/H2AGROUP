"use client";

import { ArrowUpRight, Mail, MapIcon, Phone } from "lucide-react";
import { AnimatedWave } from "./animated-wave";
import Link from "next/link";

const footerLinks = {
  Product: [
    { name: "Features", href: "#features" },
    { name: "How we work", href: "#how-it-works" },
    { name: "Impact", href: "#impact" },
    { name: "What we build", href: "#integrations" },
    { name: "Security", href: "#security" },
    { name: "Contact", href: "#contact" },
  ],

  Legal: [
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
    { name: "Security", href: "#security" },
  ],
};
const contactLinks = [
  {
    name: "Sousse Technopole, Sahloul, Sousse, Tunisia",
    icon: <MapIcon size={16} />,
  },
  { name: "contact@h2a-group.com", icon: <Mail size={16} /> },
  { name: "+216 92626949 | +216 99832138", icon: <Phone size={16} /> },
];
const socialLinks = [
  { name: "LinkedIn", href: "https://www.linkedin.com/company/h2a-group-tn/" },
  { name: "Twitter", href: "" },
  { name: "Facebook", href: "#" },
];

export function FooterSection() {
  return (
    <footer className="relative border-t border-foreground/10">
      {/* Animated wave background */}
      <div className="absolute inset-0 h-64 opacity-20 pointer-events-none overflow-hidden">
        <AnimatedWave />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Main Footer */}
        <div className="py-16 lg:py-24">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-12 lg:gap-8">
            {/* Brand Column */}
            <div className="col-span-2">
              <Link href="#" className="inline-flex items-center gap-2 mb-6">
                <span className="text-2xl font-display">H2A</span>
                <span className="text-xs text-muted-foreground font-mono">
                  Group
                </span>
              </Link>

              <p className="text-muted-foreground leading-relaxed mb-8 max-w-xs">
                Hardware to Application .<br />A Deep Tech Startup Studio
                building the next generation of African industrial ventures.
              </p>
            </div>

            {/* Link Columns */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-sm font-medium mb-6">{title}</h3>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="flex flex-col gap-6">
              <h3 className="text-sm font-medium ">Contact</h3>
              {contactLinks.map((link) => (
                <div
                  key={link.name}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 group"
                >
                  <span> {link.icon} </span>
                  {link.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="py-8 border-t border-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          2026 H2A Group. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex gap-6">
          {socialLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 group"
            >
              {link.name}
              <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
