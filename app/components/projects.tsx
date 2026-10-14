"use client";

import { useMemo, useState } from "react";
import type { Project } from "../../content/site";
import { TechIcon } from "./tech";

export function Projects({ projects }: { projects: Project[] }) {
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

      <div className="cards">
        {shown.map((p) => (
          <a className="card" key={p.title} href={p.url} target="_blank" rel="noopener">
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
                <span>
                  {p.title} <span className="arrow">↗</span>
                </span>
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
            </div>
          </a>
        ))}
      </div>
      {shown.length === 0 && (
        <div className="empty">
          No project uses all of those together. Switch to <b>Any</b> or clear a tag.
        </div>
      )}
    </section>
  );
}
