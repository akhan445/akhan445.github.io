"use client";

import { useEffect, useRef, useState } from "react";
import { annotate, annotationGroup } from "rough-notation";
import type { RoughAnnotation, RoughAnnotationType } from "rough-notation/lib/model";
import { site } from "../../content/site";

const escape = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// "[[circle: software engineer]]" -> <span data-mark="circle">software engineer</span>
const marked = (p: string) =>
  escape(p).replace(/\[\[(\w+):\s*([^\]]+)\]\]/g, (_, type, text) => `<span data-mark="${type}">${text}</span>`);

const reduced = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Shows each comma-separated title in turn, sliding up and fading in, then calls onDone.
function Titles({ text, onDone }: { text: string; onDone: () => void }) {
  const titles = text.split(",").map((t) => t.trim());

  useEffect(() => {
    const id = setTimeout(onDone, reduced() ? 0 : 400 + titles.length * 300 + 500);
    return () => clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  return (
    <h2 className="subtitle">
      {titles.map((t, i) => (
        <span key={t} className="title-in" style={{ animationDelay: `${400 + i * 300}ms` }}>
          {i > 0 && <span className="sep" aria-hidden="true">·</span>}
          {t}
        </span>
      ))}
    </h2>
  );
}

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const root = ref.current;
    if (!ready || !root) return;
    let shown: RoughAnnotation[] = [];

    // Draws every mark in page order. Colors follow the theme, so a theme
    // switch redraws them instantly in the new colors.
    const draw = (animate: boolean) => {
      shown.forEach((a) => a.remove());
      const css = getComputedStyle(document.documentElement);
      const accent = css.getPropertyValue("--accent").trim();
      const dark = document.documentElement.dataset.theme !== "light";
      const colors: Record<string, string> = {
        circle: "#e5484d",
        highlight: dark ? "rgba(250, 204, 21, .3)" : "#fde68a",
        underline: dark ? "#ffffff" : accent,
        box: accent,
        bracket: "#e5484d",
      };
      const marks = Array.from(root.querySelectorAll<HTMLElement>("[data-mark]")).map((el) => {
        const type = el.dataset.mark as RoughAnnotationType;
        return annotate(el, {
          type,
          color: colors[type] ?? accent,
          animate,
          animationDuration: type === "highlight" ? 500 : 650,
          strokeWidth: type === "highlight" ? 1 : 2,
          padding: type === "circle" ? 6 : type === "bracket" ? [4, 8] : 2,
          brackets: type === "bracket" ? ["left", "right"] : undefined,
          multiline: true,
          iterations: type === "highlight" ? 1 : 2,
        });
      });
      shown = marks;
      annotationGroup(marks).show();
    };

    draw(!reduced());
    const mo = new MutationObserver(() => draw(false));
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme", "data-scheme"] });
    return () => {
      mo.disconnect();
      shown.forEach((a) => a.remove());
    };
  }, [ready]);

  const { subtitle, paragraphs, buildsIntro, builds } = site.about;
  return (
    <div className="about" ref={ref}>
      <p className="tag">About</p>
      <Titles text={subtitle} onDone={() => setReady(true)} />
      {paragraphs.map((p, i) => (
        <p key={i} dangerouslySetInnerHTML={{ __html: marked(p) }} />
      ))}
      <div className="builds" data-mark="bracket">
        <p>{buildsIntro}</p>
        <ul>
          {builds.map((b) => (
            <li key={b.name}>
              <a href={b.href}>{b.name}</a> {b.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
