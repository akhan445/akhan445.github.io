import { techIcons } from "../lib/tech-icons";

export function TechIcon({ name, className = "i" }: { name: string; className?: string }) {
  const d = techIcons[name];
  if (!d) return null;
  return (
    <svg className={className || undefined} viewBox="0 0 24 24" aria-hidden="true">
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
