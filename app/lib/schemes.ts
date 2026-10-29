// Color schemes offered in the app bar. Their colors live in app/global.css.
// Change DEFAULT_SCHEME / DEFAULT_THEME to change what first-time visitors see.
export const SCHEMES = [
  { id: "lagoon", name: "Lagoon", note: "calm teal on navy", accent: "#5fd4c4", bg: "#0a1420" },
  { id: "amber", name: "Amber", note: "warm, confident", accent: "#f2b35a", bg: "#0b0e12" },
  { id: "cobalt", name: "Cobalt", note: "crisp, techy blue", accent: "#7fa6ff", bg: "#0a0d16" },
  { id: "coral", name: "Coral", note: "friendly, stands out", accent: "#ff8f7e", bg: "#110e0f" },
  { id: "sage", name: "Sage", note: "quiet, natural green", accent: "#9fd3a8", bg: "#0d110f" },
] as const;

export type SchemeId = (typeof SCHEMES)[number]["id"];
export const DEFAULT_SCHEME: SchemeId = "lagoon";
export const DEFAULT_THEME: "dark" | "light" = "light";
