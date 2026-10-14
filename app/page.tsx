import { site } from "../content/site";
import { AppBar } from "./components/app-bar";
import { Spotlight } from "./components/spotlight";
import { Experience } from "./components/experience";
import { Projects } from "./components/projects";
import { Contact } from "./components/contact";
import { GitHubIcon, LinkedInIcon } from "./components/social-icons";

export default function Page() {
  const projects = [...site.projects].sort((a, b) => b.date.localeCompare(a.date));
  return (
    <>
      <Spotlight />
      <div className="page">
        <AppBar />

        <section className="tile hero" id="top">
          <div className="who">
            <span className="logo big" role="img" aria-label="AK logo" />
            <h1>{site.name}</h1>
            <p className="role">{site.role}</p>
            <p className="pitch">{site.pitch}</p>
            <span className="status">
              <span className="dot" />
              {site.status}
            </span>
            <div className="socials">
              <a className="ic" href={site.links.github} target="_blank" rel="noopener" aria-label="GitHub">
                <GitHubIcon />
              </a>
              <a className="ic" href={site.links.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn">
                <LinkedInIcon />
              </a>
              <a className="btn primary" href={site.resume} target="_blank" rel="noopener">
                View résumé ↗
              </a>
            </div>
          </div>
          <div className="about">
            <p className="tag">About</p>
            {site.about.map((p, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
            ))}
          </div>
        </section>

        <section className="kstrip" aria-label="Highlights">
          {site.highlights.map((k) => (
            <div className="tile k" key={k.label}>
              <strong>{k.value}</strong>
              <span>{k.label}</span>
            </div>
          ))}
        </section>

        <Experience />
        <Projects projects={projects} />
        <Contact />
        <p className="note">
          © {new Date().getFullYear()} {site.name}. Press ⌘K or Ctrl+K to jump anywhere.
        </p>
      </div>
    </>
  );
}
