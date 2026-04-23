"use client"
import { useEffect, useRef, useState } from "react";

export const features = [
  {
    number: "01",
    title: "Custom Digital Solutions",
    description:
      "We design and build tailored web, mobile, and enterprise applications that align perfectly with your business goals.",
    visual: "deploy",
  },
  {
    number: "02",
    title: "AI & Emerging Technologies",
    description:
      "Leverage AI, IoT, and advanced technologies to create smarter systems, automate processes, and unlock new opportunities.",
    visual: "ai",
  },
   {
    number: "03",
    title: "Embedded Systems Engineering",
    description:
      "We design efficient low-level hardware and firmware solutions optimized for performance, reliability, and real-time constraints in embedded environments.",
    visual: "embedded",
  },
  {
    number: "04",
    title: "Intelligent Robotics Systems",
    description:
      "We build autonomous and semi-autonomous robotic systems integrating sensors, control algorithms, and AI for real-world interaction and decision-making.",
    visual: "robotics",
  },
  {
    number: "05",
    title: "IoT Connectivity & Platforms",
    description:
      "We develop scalable IoT ecosystems that connect devices, collect real-time data, and enable intelligent monitoring and remote control.",
    visual: "iot",
  },
  {
    number: "06",
    title: "End-to-End Product Development",
    description:
      "From concept to deployment, we handle the full lifecycle—strategy, design, development, and scaling.",
    visual: "collab",
  },
  {
    number: "07",
    title: "Scalable & Secure Architecture",
    description:
      "We build robust, high-performance systems with security and scalability at the core, ready to grow with your business.",
    visual: "security",
  },
];
export function DeployVisual() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      <defs>
        <clipPath id="deployClip">
          <rect x="30" y="20" width="140" height="120" rx="4" />
        </clipPath>
      </defs>

      {/* Container */}
      <rect
        x="30"
        y="20"
        width="140"
        height="120"
        rx="4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />

      {/* Animated bars */}
      <g clipPath="url(#deployClip)">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <rect
            key={i}
            x="40"
            y={35 + i * 16}
            width="120"
            height="10"
            rx="2"
            fill="currentColor"
            opacity="0.15"
          >
            <animate
              attributeName="opacity"
              values="0.15;0.8;0.15"
              dur="2s"
              begin={`${i * 0.15}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="width"
              values="20;120;20"
              dur="2s"
              begin={`${i * 0.15}s`}
              repeatCount="indefinite"
            />
          </rect>
        ))}
      </g>

      {/* Progress indicator */}
      <circle cx="100" cy="155" r="3" fill="currentColor" opacity="0.3">
        <animate
          attributeName="opacity"
          values="0.3;1;0.3"
          dur="1s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
}

export function AIVisual() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      {/* Central node */}
      <circle cx="100" cy="80" r="12" fill="currentColor">
        <animate
          attributeName="r"
          values="12;14;12"
          dur="2s"
          repeatCount="indefinite"
        />
      </circle>

      {/* Orbiting nodes */}
      {[0, 1, 2, 3, 4, 5].map((i) => {
        const angle = i * 60 * (Math.PI / 180);
        const radius = 50;
        return (
          <g key={i}>
            {/* Connection line */}
            <line
              x1="100"
              y1="80"
              x2={100 + Math.cos(angle) * radius}
              y2={80 + Math.sin(angle) * radius}
              stroke="currentColor"
              strokeWidth="1"
              opacity="0.3"
            >
              <animate
                attributeName="opacity"
                values="0.3;0.8;0.3"
                dur="2s"
                begin={`${i * 0.3}s`}
                repeatCount="indefinite"
              />
            </line>

            {/* Outer node */}
            <circle
              cx={100 + Math.cos(angle) * radius}
              cy={80 + Math.sin(angle) * radius}
              r="6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <animate
                attributeName="r"
                values="6;8;6"
                dur="2s"
                begin={`${i * 0.3}s`}
                repeatCount="indefinite"
              />
            </circle>
          </g>
        );
      })}

      {/* Pulse rings */}
      <circle
        cx="100"
        cy="80"
        r="30"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0"
      >
        <animate
          attributeName="r"
          values="20;60"
          dur="2s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0.5;0"
          dur="2s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
}

export function CollabVisual() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      {/* User A */}
      <g>
        <rect
          x="30"
          y="50"
          width="50"
          height="60"
          rx="4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <text
          x="55"
          y="85"
          textAnchor="middle"
          fontSize="20"
          fontFamily="monospace"
          fill="currentColor"
        >
          A
        </text>
        <circle
          cx="55"
          cy="35"
          r="12"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
      </g>

      {/* User B */}
      <g>
        <rect
          x="120"
          y="50"
          width="50"
          height="60"
          rx="4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <text
          x="145"
          y="85"
          textAnchor="middle"
          fontSize="20"
          fontFamily="monospace"
          fill="currentColor"
        >
          B
        </text>
        <circle
          cx="145"
          cy="35"
          r="12"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
      </g>

      {/* Connection */}
      <line
        x1="80"
        y1="80"
        x2="120"
        y2="80"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="4 4"
      >
        <animate
          attributeName="stroke-dashoffset"
          values="0;-8"
          dur="0.5s"
          repeatCount="indefinite"
        />
      </line>

      {/* Data packet */}
      <circle r="4" fill="currentColor">
        <animateMotion dur="1.5s" repeatCount="indefinite">
          <mpath href="#dataPath" />
        </animateMotion>
      </circle>
      <path id="dataPath" d="M 80 80 L 120 80" fill="none" />

      {/* Sync indicator */}
      <g transform="translate(100, 130)">
        <circle r="6" fill="none" stroke="currentColor" strokeWidth="2">
          <animate
            attributeName="r"
            values="6;10;6"
            dur="1s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="1;0.3;1"
            dur="1s"
            repeatCount="indefinite"
          />
        </circle>
      </g>
    </svg>
  );
}

export function SecurityVisual() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      {/* Shield */}
      <path
        d="M 100 20 L 150 40 L 150 90 Q 150 130 100 145 Q 50 130 50 90 L 50 40 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />

      {/* Inner shield */}
      <path
        d="M 100 35 L 135 50 L 135 85 Q 135 115 100 128 Q 65 115 65 85 L 65 50 Z"
        fill="currentColor"
        opacity="0.1"
      >
        <animate
          attributeName="opacity"
          values="0.1;0.2;0.1"
          dur="2s"
          repeatCount="indefinite"
        />
      </path>

      {/* Lock icon */}
      <rect x="85" y="70" width="30" height="25" rx="3" fill="currentColor" />
      <path
        d="M 90 70 L 90 60 Q 90 50 100 50 Q 110 50 110 60 L 110 70"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Keyhole */}
      <circle cx="100" cy="80" r="4" fill="white" />
      <rect x="98" y="82" width="4" height="8" fill="white" />

      {/* Scan lines */}
      <line
        x1="60"
        y1="60"
        x2="140"
        y2="60"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0"
      >
        <animate
          attributeName="y1"
          values="40;120;40"
          dur="3s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="y2"
          values="40;120;40"
          dur="3s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0;0.5;0"
          dur="3s"
          repeatCount="indefinite"
        />
      </line>
    </svg>
  );
}
export function EmbeddedSystemsVisual() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      <defs>
        <clipPath id="embeddedClip">
          <rect x="30" y="20" width="140" height="120" rx="6" />
        </clipPath>
      </defs>

      {/* Chip outline */}
      <rect
        x="60"
        y="40"
        width="80"
        height="80"
        rx="6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />

      {/* Pins */}
      {[0, 1, 2, 3].map((i) => (
        <line
          key={i}
          x1="50"
          y1={55 + i * 20}
          x2="60"
          y2={55 + i * 20}
          stroke="currentColor"
          strokeWidth="2"
          opacity="0.6"
        />
      ))}

      {[0, 1, 2, 3].map((i) => (
        <line
          key={i}
          x1="140"
          y1={55 + i * 20}
          x2="150"
          y2={55 + i * 20}
          stroke="currentColor"
          strokeWidth="2"
          opacity="0.6"
        />
      ))}

      {/* Pulsing core */}
      <circle cx="100" cy="80" r="10" fill="currentColor" opacity="0.2">
        <animate
          attributeName="r"
          values="6;14;6"
          dur="2s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0.2;0.6;0.2"
          dur="2s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
}
export function RoboticsVisual() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      {/* Head */}
      <rect
        x="70"
        y="30"
        width="60"
        height="50"
        rx="10"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />

      {/* Eyes */}
      <circle cx="85" cy="55" r="4" fill="currentColor">
        <animate
          attributeName="opacity"
          values="1;0.2;1"
          dur="1.5s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="115" cy="55" r="4" fill="currentColor">
        <animate
          attributeName="opacity"
          values="1;0.2;1"
          dur="1.5s"
          repeatCount="indefinite"
        />
      </circle>

      {/* Body */}
      <rect
        x="60"
        y="85"
        width="80"
        height="50"
        rx="8"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />

      {/* Arms */}
      <line
        x1="60"
        y1="100"
        x2="40"
        y2="120"
        stroke="currentColor"
        strokeWidth="2"
      >
        <animate
          attributeName="y2"
          values="120;110;120"
          dur="2s"
          repeatCount="indefinite"
        />
      </line>

      <line
        x1="140"
        y1="100"
        x2="160"
        y2="120"
        stroke="currentColor"
        strokeWidth="2"
      >
        <animate
          attributeName="y2"
          values="120;110;120"
          dur="2s"
          repeatCount="indefinite"
        />
      </line>

      {/* Antenna */}
      <line
        x1="100"
        y1="30"
        x2="100"
        y2="15"
        stroke="currentColor"
        strokeWidth="2"
      >
        <animate
          attributeName="y2"
          values="15;10;15"
          dur="1.2s"
          repeatCount="indefinite"
        />
      </line>
      <circle cx="100" cy="10" r="3" fill="currentColor">
        <animate
          attributeName="opacity"
          values="1;0.3;1"
          dur="1.2s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
}
export function IoTVisual() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      {/* Central hub */}
      <circle
        cx="100"
        cy="80"
        r="18"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <animate
          attributeName="r"
          values="14;20;14"
          dur="2s"
          repeatCount="indefinite"
        />
      </circle>

      {/* Devices */}
      {[0, 1, 2, 3, 4].map((i) => {
        const angle = (i * 72 * Math.PI) / 180;
        const x = 100 + 60 * Math.cos(angle);
        const y = 80 + 40 * Math.sin(angle);

        return (
          <g key={i}>
            <circle cx={x} cy={y} r="6" fill="currentColor" opacity="0.7">
              <animate
                attributeName="opacity"
                values="0.3;1;0.3"
                dur="2s"
                begin={`${i * 0.2}s`}
                repeatCount="indefinite"
              />
            </circle>

            <line
              x1="100"
              y1="80"
              x2={x}
              y2={y}
              stroke="currentColor"
              strokeWidth="1"
              opacity="0.4"
            >
              <animate
                attributeName="opacity"
                values="0.2;0.8;0.2"
                dur="2s"
                begin={`${i * 0.2}s`}
                repeatCount="indefinite"
              />
            </line>
          </g>
        );
      })}

      {/* Pulse waves */}
      <circle
        cx="100"
        cy="80"
        r="30"
        fill="none"
        stroke="currentColor"
        opacity="0.2"
      >
        <animate
          attributeName="r"
          values="25;60;25"
          dur="3s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0.3;0;0.3"
          dur="3s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
}
export function AnimatedVisual({ type }: { type: string }) {
  switch (type) {
    case "deploy":
      return <DeployVisual />;
    case "ai":
      return <AIVisual />;
    case "collab":
      return <CollabVisual />;
    case "security":
      return <SecurityVisual />;
    case "embedded":
      return <EmbeddedSystemsVisual />;
    case "robotics":
      return <RoboticsVisual />;
    case "iot":
      return <IoTVisual />;
    default:
      return <DeployVisual />;
  }
}

export function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof features)[0];
  index: number;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 },
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`group relative transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 py-12 lg:py-20 border-b border-blue-700/30">
        {/* Number */}
        <div className="shrink-0">
          <span className="font-mono text-sm text-blue-700">
            {feature.number}
          </span>
        </div>

        {/* Content */}
        <div className="flex-1 grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-3xl lg:text-4xl font-display mb-4 group-hover:translate-x-2 transition-transform duration-500">
              {feature.title}
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {feature.description}
            </p>
          </div>

          {/* Visual */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-48 h-40 text-foreground">
              <AnimatedVisual type={feature.visual} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}