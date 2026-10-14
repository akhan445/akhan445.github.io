"use client";

import { useEffect, useState } from "react";
import { site } from "../../content/site";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [time, setTime] = useState("--:--");

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-CA", { hour: "2-digit", minute: "2-digit", hour12: false, timeZone: site.timeZone });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 15000);
    return () => clearInterval(id);
  }, []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${site.email}`;
    }
  };

  return (
    <div className="row3" id="contact">
      <div className="tile">
        <p className="tag">Contact</p>
        <a className="mail" href={`mailto:${site.email}`}>
          {site.email}
        </a>
        <div className="socials" style={{ margin: 0 }}>
          <button className="btn" id="copy-email" type="button" onClick={copy}>
            {copied ? "Copied" : "Copy email"}
          </button>
          <a className="btn" href={site.links.linkedin} target="_blank" rel="noopener">
            LinkedIn
          </a>
          <a className="btn" href={site.links.github} target="_blank" rel="noopener">
            GitHub
          </a>
        </div>
      </div>
      <div className="tile clock">
        <p className="tag">Local time</p>
        <div className="t">{time}</div>
        <span>{site.location}, Eastern Time</span>
      </div>
    </div>
  );
}
