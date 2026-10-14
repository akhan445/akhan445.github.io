"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { site } from "../../content/site";
import { DEFAULT_SCHEME, SCHEMES, type SchemeId } from "../lib/schemes";

const SECTIONS = [
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

type Command = { label: string; kind: string; run: () => void };

function save(key: string, value: string) {
  try {
    localStorage.setItem(key, value);
  } catch {}
}

export function AppBar() {
  const [scheme, setSchemeState] = useState<SchemeId>(DEFAULT_SCHEME);
  const [menuOpen, setMenuOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [cursor, setCursor] = useState(0);
  const [active, setActive] = useState("");
  const menuRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const s = document.documentElement.dataset.scheme as SchemeId | undefined;
    if (s) setSchemeState(s);
  }, []);

  const setScheme = useCallback((id: SchemeId) => {
    document.documentElement.dataset.scheme = id;
    setSchemeState(id);
    save("scheme", id);
  }, []);

  const toggleTheme = useCallback(() => {
    const d = document.documentElement;
    const next = d.dataset.theme === "light" ? "dark" : "light";
    d.dataset.theme = next;
    save("theme", next);
  }, []);

  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  const open = (url: string) => window.open(url, "_blank", "noopener");

  const commands: Command[] = [
    ...SECTIONS.map((s) => ({ label: s.label, kind: "section", run: () => go(s.id) })),
    { label: "Open résumé", kind: "file", run: () => open(site.resume) },
    { label: "GitHub", kind: "link", run: () => open(site.links.github) },
    { label: "LinkedIn", kind: "link", run: () => open(site.links.linkedin) },
    { label: "Copy email", kind: "action", run: () => navigator.clipboard?.writeText(site.email).catch(() => {}) },
    { label: "Toggle light / dark", kind: "theme", run: toggleTheme },
    ...SCHEMES.map((s) => ({ label: `Color scheme: ${s.name}`, kind: "scheme", run: () => setScheme(s.id) })),
  ];
  const shown = commands.filter((c) => c.label.toLowerCase().includes(query.toLowerCase()));

  const closePalette = () => setPaletteOpen(false);
  const run = (c?: Command) => {
    closePalette();
    c?.run();
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setPaletteOpen((o) => !o);
        setQuery("");
        setCursor(0);
      } else if (e.key === "Escape") {
        setPaletteOpen(false);
        setMenuOpen(false);
      }
    };
    const onClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, []);

  useEffect(() => {
    if (paletteOpen) inputRef.current?.focus();
  }, [paletteOpen]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  const current = SCHEMES.find((s) => s.id === scheme) ?? SCHEMES[0];

  return (
    <>
      <header className="bar">
        <a href="#top" aria-label="Back to top">
          <span className="logo" role="img" aria-label="AK logo" />
        </a>
        <nav>
          {SECTIONS.map((s) => (
            <a key={s.id} href={`#${s.id}`} className={active === s.id ? "on" : undefined}>
              {s.label}
            </a>
          ))}
        </nav>
        <span className="sp" />
        <button className="btn" type="button" onClick={() => { setPaletteOpen(true); setQuery(""); setCursor(0); }}>
          Search <kbd>⌘K</kbd>
        </button>
        <div ref={menuRef} style={{ display: "contents" }}>
          <button
            className="btn"
            type="button"
            aria-haspopup="true"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span className="swatch" />
            <span>{current.name}</span>
          </button>
          <div className="palettes" hidden={!menuOpen}>
            <p>Color scheme</p>
            {SCHEMES.map((s) => (
              <button key={s.id} type="button" className={s.id === scheme ? "on" : undefined} onClick={() => setScheme(s.id)}>
                <span className="pair">
                  <i style={{ background: s.accent }} />
                  <i style={{ background: s.bg }} />
                </span>
                {s.name}
                <small>{s.note}</small>
              </button>
            ))}
          </div>
        </div>
        <button className="btn" type="button" aria-label="Toggle light and dark" onClick={toggleTheme}>
          ◐
        </button>
      </header>

      <div className="palette" hidden={!paletteOpen} onClick={(e) => e.target === e.currentTarget && closePalette()}>
        <div className="pbox" role="dialog" aria-label="Search">
          <input
            ref={inputRef}
            id="command-search"
            placeholder="Search sections, links and color schemes…"
            autoComplete="off"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setCursor(0);
            }}
            onKeyDown={(e) => {
              if (e.key === "ArrowDown") {
                e.preventDefault();
                setCursor((c) => (c + 1) % Math.max(shown.length, 1));
              } else if (e.key === "ArrowUp") {
                e.preventDefault();
                setCursor((c) => (c - 1 + shown.length) % Math.max(shown.length, 1));
              } else if (e.key === "Enter") {
                run(shown[cursor]);
              }
            }}
          />
          <ul>
            {shown.map((c, i) => (
              <li key={c.label}>
                <button type="button" className={i === cursor ? "sel" : undefined} onClick={() => run(c)}>
                  {c.label}
                  <span>{c.kind}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
