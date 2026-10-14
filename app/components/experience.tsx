import { site } from "../../content/site";
import { formatRange } from "../lib/format";
import { Chip, TechIcon } from "./tech";

export function Experience() {
  return (
    <div className="split" id="experience">
      <section className="tile">
        <div className="sec-head">
          <h2>Experience</h2>
          <a className="more" href={site.resume} target="_blank" rel="noopener">
            Full résumé <span className="arrow">↗</span>
          </a>
        </div>
        <ol className="items">
          {site.experience.map((e) => (
            <li className="item" key={`${e.company}-${e.start}`}>
              <span className="when">{formatRange(e.start, e.end)}</span>
              <div>
                <h3>
                  {e.role} · <span className="co">{e.company}</span>
                </h3>
                {e.summary && <p>{e.summary}</p>}
                {e.items && (
                  <ul className="sub">
                    {e.items.map(([name, desc]) => (
                      <li key={name}>
                        <b>{name}</b> · {desc}
                      </li>
                    ))}
                  </ul>
                )}
                {e.tags.length > 0 && (
                  <div className="chips">
                    {e.tags.map((t) => (
                      <Chip key={t} name={t} />
                    ))}
                  </div>
                )}
                {e.kpis.length > 0 && (
                  <div className="kpis">
                    {e.kpis.map((k) => (
                      <div className="kpi" key={k.label}>
                        <strong>{k.value}</strong>
                        <span>{k.label}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </li>
          ))}
        </ol>
      </section>

      <aside className="side">
        <div className="tile">
          <p className="tag">Main stack</p>
          <div className="core">
            {site.mainStack.map(([tech, name, use]) => (
              <div key={name}>
                <TechIcon name={tech} className="" />
                <b>{name}</b>
                <small>{use}</small>
              </div>
            ))}
          </div>
          <p className="tag" style={{ marginTop: 4 }}>
            Also
          </p>
          <div className="chips" style={{ margin: 0 }}>
            {site.alsoStack.map((t) => (
              <Chip key={t} name={t} />
            ))}
          </div>
        </div>
        <div className="tile edu">
          <p className="tag">Education</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {site.education.map((s) => (
              <div className="school" key={s.school}>
                <b>{s.school}</b>
                <span>{s.detail}</span>
                <time>{s.year}</time>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
}
