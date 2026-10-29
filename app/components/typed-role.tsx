"use client";

import { useEffect, useState } from "react";

// Types each title like a terminal prompt, pauses, erases it and moves to the next.
// With reduced motion it just shows the first title.
export function TypedRole({ titles }: { titles: string[] }) {
  const [text, setText] = useState(titles[0]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let i = 0;
    let n = 0;
    let erasing = false;
    let id: ReturnType<typeof setTimeout>;
    const step = () => {
      const t = titles[i];
      if (!erasing) {
        n++;
        setText(t.slice(0, n));
        if (n === t.length) {
          if (titles.length === 1) return;
          erasing = true;
          id = setTimeout(step, 2200);
          return;
        }
        id = setTimeout(step, 70);
      } else {
        n--;
        setText(t.slice(0, n));
        if (n === 0) {
          erasing = false;
          i = (i + 1) % titles.length;
          id = setTimeout(step, 400);
          return;
        }
        id = setTimeout(step, 35);
      }
    };
    setText("");
    id = setTimeout(step, 500);
    return () => clearTimeout(id);
  }, [titles]);

  return (
    <p className="role typed">
      <span className="sr-only">{titles.join(", ")}</span>
      <span aria-hidden="true">
        <span className="prompt">&gt;</span> {text}
        <span className="caret" />
      </span>
    </p>
  );
}
