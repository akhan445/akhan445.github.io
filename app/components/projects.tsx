"use client";

import { useMemo, useState } from "react";
import type { Project } from "../../content/site";
import { TechIcon } from "./tech";

export function Projects({ projects: all }: { projects: Project[] }) {
  const projects = all.filter((p) => !p.earlier);
  // The stack filter only earns its space once there are a handful of projects.
  const showFilter = projects.length >= 5;
  const earlier = all.filter((p) => p.earlier);
  const [selected, setSelected] = useState<string[]>([]);
  const [matchAll, setMatchAll] = useState(false);

  const allTech = useMemo(() => {
    const count = (t: string) => projects.filter((p) => p.stack.includes(t)).length;
    return Array.from(new Set(projects.flatMap((p) => p.stack)))
      .map((t) => ({ t, n: count(t) }))
      .sort((a, b) => b.n - a.n || a.t.localeCompare(b.t));
  }, [projects]);

  const shown = projects.filter(
    (p) =>
      selected.length === 0 ||
      (matchAll ? selected.every((t) => p.stack.includes(t)) : p.stack.some((t) => selected.includes(t)))
  );

  const toggle = (t: string) =>
    setSelected((s) => (s.includes(t) ? s.filter((x) => x !== t) : [...s, t]));

  return (
    <section className="tile" id="projects">
      <div className="sec-head">
        <h2>Projects</h2>
        <a className="more" href="https://github.com/akhan445" target="_blank" rel="noopener">
          All on GitHub <span className="arrow">↗</span>
        </a>
      </div>

      {showFilter && (
        <div className="filter">
          <div className="frow">
            <p className="tag">Filter by stack</p>
            <div className="frow" style={{ gap: 10 }}>
              <span className="count" aria-live="polite">
                Showing {shown.length} of {projects.length}
              </span>
              <div className="mode" role="group" aria-label="Match mode">
                <button type="button" aria-pressed={!matchAll} onClick={() => setMatchAll(false)}>
                  Any
                </button>
                <button type="button" aria-pressed={matchAll} onClick={() => setMatchAll(true)}>
                  All
                </button>
              </div>
              {selected.length > 0 && (
                <button className="linkbtn" type="button" onClick={() => setSelected([])}>
                  Clear
                </button>
              )}
            </div>
          </div>
          <div className="fchips">
            {allTech.map(({ t, n }) => (
              <button key={t} type="button" className="fchip" aria-pressed={selected.includes(t)} onClick={() => toggle(t)}>
                <TechIcon name={t} />
                {t}
                <small>{n}</small>
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="cards">
        {shown.map((p) => (
          <article className="card" key={p.title}>
            <div className="thumb">
              {p.image ? (
                <img src={p.image} alt={`${p.title} screenshot`} loading="lazy" />
              ) : (
                <div aria-hidden="true">
                  <div className="chrome">
                    <i />
                    <i />
                    <i />
                  </div>
                  <div className="glyph">
                    <TechIcon name={p.stack[0]} className="" />
                  </div>
                  <div className="lines">
                    <i />
                    <i />
                  </div>
                </div>
              )}
            </div>
            <div className="cbody">
              <h3>
                {/* Stretched over the whole card, so a click anywhere opens the code */}
                <a className="stretch" href={p.url} target="_blank" rel="noopener">
                  {p.title} <span className="arrow">↗</span>
                </a>
              </h3>
              <p>{p.description}</p>
              <div className="chips">
                {p.stack.map((t) => (
                  <span key={t} className={`chip${selected.includes(t) ? " hit" : ""}`}>
                    <TechIcon name={t} />
                    {t}
                  </span>
                ))}
              </div>
              {p.demo && (
                <div className="clinks">
                  <a className="demo" href={p.demo} target="_blank" rel="noopener">
                    {p.demoLabel ?? "Live demo"} <span className="arrow">↗</span>
                  </a>
                  <a href={p.url} target="_blank" rel="noopener">
                    Code <span className="arrow">↗</span>
                  </a>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
      {shown.length === 0 && (
        <div className="empty">
          No project uses all of those together. Switch to <b>Any</b> or clear a tag.
        </div>
      )}

      {earlier.length > 0 && (
        <details className="earlier">
          <summary>
            Earlier work <small>{earlier.length} bootcamp and school projects</small>
          </summary>
          <ul>
            {earlier.map((p) => (
              <li key={p.title}>
                <a href={p.url} target="_blank" rel="noopener">
                  {p.title} <span className="arrow">↗</span>
                </a>
                <p>{p.description}</p>
                <small>{p.stack.join(" · ")}</small>
              </li>
            ))}
          </ul>
        </details>
      )}
    </section>
  );
}
