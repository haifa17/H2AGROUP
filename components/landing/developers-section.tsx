"use client";

import { useState, useEffect, useRef } from "react";
import { Copy, Check } from "lucide-react";

const team = [
  {
    name: "HAYTHEM KHIARI",
    role: "Co-Founder & CEO",
    desc: "Embedded Systems Engineer ",
    image: "/team/haythem.png",
  },
  {
    name: "AHMED KHOCHTALI",
    role: "Co-Founder & CPO ",
    desc: "IoT Systems Engineer ",
    image: "/team/ahmed.png",
  },
  {
    name: "ATID GHEZAIEL",
    role: "Co-Founder & CTO",
    desc: "Industrial Electronics Engineer ",
    image: "/team/atid.png",
  },
  {
    name: "HAIFA KHIARI",
    role: "Full Stack Developer",
    desc: "Software Engineer",
    image: "/team/haifa.png",
  },
  {
    name: "RAYEN HAMDI",
    role: "AI Engineer",
    desc: "Software Engineer",
    image: "/team/rayen.png",
  },
];

export function DevelopersSection() {
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
      id="team"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
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

            {/* Member Profiles */}
            {/* First row (3 members) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              {team.slice(0, 3).map((member, index) => (
                <div
                  key={index}
                  className="group border border-foreground/10 bg-white p-6 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-full h-80 mb-4 overflow-hidden bg-gray-100">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                  <p className="text-xs text-muted-foreground mt-2">
                    {member.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Second row (centered 2 members) */}
            <div className="flex justify-center gap-6 flex-wrap">
              {team.slice(3).map((member, index) => (
                <div
                  key={index}
                  className="w-full sm:w-[400px] group border border-foreground/10 bg-white p-6 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-full h-80 mb-4 overflow-hidden bg-gray-100">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                  <p className="text-xs text-muted-foreground mt-2">
                    {member.desc}
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
