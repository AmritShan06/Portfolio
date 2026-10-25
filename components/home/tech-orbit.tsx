type TechIconName =
  | "react"
  | "javascript"
  | "firebase"
  | "nuxt"
  | "network"
  | "typescript"
  | "aws"
  | "bolt"
  | "github"
  | "html";

const orbitNodes: Array<{
  name: string;
  icon: TechIconName;
  x: number;
  y: number;
  muted?: boolean;
}> = [
  { name: "React", icon: "react", x: 96, y: 18 },
  { name: "JavaScript", icon: "javascript", x: 342, y: 70 },
  { name: "Firebase", icon: "firebase", x: 188, y: 190 },
  { name: "Nuxt", icon: "nuxt", x: 354, y: 252 },
  { name: "Web technologies", icon: "network", x: 80, y: 300 },
  { name: "TypeScript", icon: "typescript", x: 226, y: 342, muted: true },
  { name: "AWS", icon: "aws", x: 362, y: 386, muted: true },
  { name: "Fast development", icon: "bolt", x: 112, y: 478, muted: true },
  { name: "GitHub", icon: "github", x: 252, y: 514, muted: true },
  { name: "HTML5", icon: "html", x: 16, y: 574, muted: true },
];

function TechIcon({ name }: { name: TechIconName }) {
  const common = {
    width: 42,
    height: 42,
    viewBox: "0 0 48 48",
    fill: "none",
    "aria-hidden": true as const,
  };

  switch (name) {
    case "react":
      return (
        <svg {...common}>
          <g stroke="currentColor" strokeWidth="2.4">
            <ellipse cx="24" cy="24" rx="20" ry="8.4" />
            <ellipse cx="24" cy="24" rx="20" ry="8.4" transform="rotate(60 24 24)" />
            <ellipse cx="24" cy="24" rx="20" ry="8.4" transform="rotate(120 24 24)" />
          </g>
          <circle cx="24" cy="24" r="3.5" fill="currentColor" />
        </svg>
      );
    case "javascript":
      return <span className="tech-orbit-lettermark">JS</span>;
    case "firebase":
      return (
        <svg {...common}>
          <path d="M9 35 18.4 9l5.1 9.1L9 35Z" fill="currentColor" />
          <path d="m18.4 9 5.2 9.1L37 35 9 35 18.4 9Z" fill="currentColor" opacity=".82" />
          <path d="m23.6 18.1 4.1-7.2L39 35l-30 0 14.6-16.9Z" fill="currentColor" />
        </svg>
      );
    case "nuxt":
      return (
        <svg {...common}>
          <path d="m6 36 14-25a4.5 4.5 0 0 1 7.8 0l14 25a4.5 4.5 0 0 1-3.9 6.8H9.9A4.5 4.5 0 0 1 6 36Z" fill="currentColor" opacity=".92" />
          <path d="m14 36 8-14a3.3 3.3 0 0 1 5.7 0l8 14H14Z" fill="#100a20" opacity=".75" />
        </svg>
      );
    case "network":
      return (
        <svg {...common}>
          <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2" />
          <circle cx="24" cy="24" r="12" stroke="currentColor" strokeWidth="1.7" />
          <ellipse cx="24" cy="24" rx="7" ry="18" stroke="currentColor" strokeWidth="1.7" />
          <path d="M7 19h34M7 29h34" stroke="currentColor" strokeWidth="1.7" />
        </svg>
      );
    case "typescript":
      return <span className="tech-orbit-lettermark tech-orbit-lettermark-muted">TS</span>;
    case "aws":
      return (
        <svg {...common} className="tech-orbit-aws">
          <text x="24" y="26" textAnchor="middle">aws</text>
          <path d="M8 32c8 7 22 8 32 1" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <path d="m36 30 4 3-5 2" fill="currentColor" />
        </svg>
      );
    case "bolt":
      return (
        <svg {...common}>
          <path d="m27 4-17 23h11l-2 17 19-26H27l0-14Z" fill="currentColor" />
          <path d="m27 4-5 23h8l-1 10 9-19H27V4Z" fill="currentColor" opacity=".58" />
        </svg>
      );
    case "github":
      return (
        <svg {...common} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.68-3.76-1.32-3.76-1.32-.5-1.3-1.24-1.65-1.24-1.65-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 .1 1.89-.77 2.21-1.18.1-.72.4-1.2.72-1.48-2.48-.28-5.09-1.24-5.09-5.51 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.06 1.15a10.6 10.6 0 0 1 5.57 0c2.12-1.45 3.05-1.15 3.05-1.15.61 1.53.23 2.67.12 2.95.71.78 1.14 1.78 1.14 3 0 4.28-2.61 5.22-5.1 5.5.4.35.76 1.02.76 2.06v3.05c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
        </svg>
      );
    case "html":
      return (
        <svg {...common}>
          <path d="m10 5 2.8 32 11.2 4 11.2-4L38 5H10Z" fill="currentColor" opacity=".86" />
          <path d="M24 9v28l9-3 2-25h-11Z" fill="currentColor" opacity=".5" />
          <path d="M16 14h16l-.5 4H20l.4 4h10.8l-1.1 10-6.1 1.8-6.2-1.8-.4-5h4l.2 2 2.4.7 2.4-.7.3-3H16.8L16 14Z" fill="#100a20" />
        </svg>
      );
  }
}

export function TechOrbit() {
  return (
    <div
      className="tech-orbit"
      role="img"
      aria-label="Technology orbit illustration featuring React, JavaScript, Firebase, Nuxt, TypeScript, AWS, GitHub, and HTML"
    >
      <svg className="tech-orbit-guides" viewBox="0 0 520 620" aria-hidden="true">
        <defs>
          <radialGradient id="tech-orbit-glow">
            <stop offset="0" stopColor="#8b5cf6" stopOpacity=".14" />
            <stop offset="1" stopColor="#8b5cf6" stopOpacity="0" />
          </radialGradient>
        </defs>
        <ellipse cx="260" cy="310" rx="247" ry="270" fill="url(#tech-orbit-glow)" />
        <g fill="none" stroke="rgba(210,200,255,.11)" strokeWidth="1.5">
          <circle cx="260" cy="310" r="96" />
          <circle cx="260" cy="310" r="145" />
          <circle cx="260" cy="310" r="195" />
          <circle cx="260" cy="310" r="245" />
          <path d="M0 310h520M260 0v620M40 90l440 440M480 90 40 530" />
          <path d="M0 160h520M0 460h520" strokeOpacity=".5" />
        </g>
        <circle cx="260" cy="310" r="3" fill="rgba(226,215,255,.42)" />
      </svg>

      {orbitNodes.map((node) => (
        <div
          key={node.name}
          className={`tech-orbit-tile${node.muted ? " tech-orbit-tile-muted" : ""}`}
          style={{ left: `${(node.x / 520) * 100}%`, top: `${(node.y / 620) * 100}%` }}
        >
          <TechIcon name={node.icon} />
        </div>
      ))}
    </div>
  );
}
