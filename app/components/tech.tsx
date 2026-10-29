import { techColors, techIcons, techLogos } from "../lib/tech-icons";

export function TechIcon({ name, className = "i" }: { name: string; className?: string }) {
  const logo = techLogos[name];
  // eslint-disable-next-line @next/next/no-img-element
  if (logo) return <img className={className || undefined} src={logo} alt="" aria-hidden="true" />;
  const d = techIcons[name];
  if (!d) return null;
  return (
    <svg className={className || undefined} viewBox="0 0 24 24" aria-hidden="true" style={{ fill: techColors[name] ?? "var(--fg)" }}>
      <path d={d} />
    </svg>
  );
}

export function Chip({ name, className = "chip" }: { name: string; className?: string }) {
  return (
    <span className={className}>
      <TechIcon name={name} />
      {name}
    </span>
  );
}
