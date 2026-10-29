// All of the site's content lives in this file. Edit it to update the page:
// add a role, change a KPI, add a project. No markup needs to change.
//
// Dates use "YYYY-MM". Experience shows them as "Nov 2025"; leave `end` out
// for a current role and it shows "Present". Project dates are never shown;
// they only sort the list newest first ("YYYY-MM-DD" orders projects within a month).
// Set `earlier: true` on a project to move it into the collapsed "Earlier work" list.
//
// Tech names (tags, stack, mainStack) pick up a logo automatically when they
// match a key in app/lib/tech-icons.ts.

export type Kpi = { value: string; label: string };

export type Role = {
  role: string;
  company: string;
  start: string;
  end?: string;
  summary?: string;
  // Sub-entries for a grouped role, e.g. several contracts: [name, description]
  items?: [string, string][];
  tags: string[];
  kpis: Kpi[];
};

export type Project = {
  title: string;
  date: string;
  description: string;
  stack: string[];
  url: string;
  // Optional screenshot in /public/projects, e.g. "/projects/scheduler.png".
  // Without one, a placeholder built from the first stack logo is shown.
  image?: string;
  earlier?: boolean;
};

export const site = {
  name: "Abdullah Khan",
  role: "Full Stack Software Engineer",
  pitch:
    "I build backend services and full stack products that ship to production, from fuel and logistics platforms to enterprise identity systems.",
  location: "Toronto",
  timeZone: "America/Toronto",
  url: "https://akhan445.github.io",
  resume: "/AbdullahKhan_SE.pdf",
  email: "abdullahshamskhan@gmail.com",
  links: {
    github: "https://github.com/akhan445",
    linkedin: "https://www.linkedin.com/in/abdullahskhan",
  },

  // The About section. `subtitle` fades in one comma-separated title at a time.
  // In `about` paragraphs, [[style: text]] draws a hand-drawn mark around the text,
  // one after another on page load. Styles: circle, highlight, underline, box.
  // Recent builds link to their project card (#project-<title in kebab case>) and
  // get a bracket around them as the last mark.
  about: {
    subtitle: "Full Stack Engineer, AI App Builder, Generalist",
    paragraphs: [
      "I'm a [[circle: software engineer]] in Toronto with experience in [[highlight: full stack]] and [[highlight: backend]] development, [[highlight: automation]] and [[highlight: AI]].",
      "I mostly work in [[underline: Python]], [[underline: Node.js]], [[underline: TypeScript]], [[underline: React]] and [[underline: PostgreSQL]], and pick up whatever else a problem needs.",
    ],
    buildsIntro: "Some recent builds:",
    builds: [
      { name: "Agent Skills", href: "#project-scope-to-ship", text: "that reduce cognitive debt through flipped interaction" },
      { name: "MCP Server", href: "#project-anchor", text: "that houses an Alexa+ productivity coach built on AWS, Bedrock and Polly" },
    ],
  },

  // The KPI strip above Experience.
  highlights: [
    { value: "8", label: "teams I've shipped production work with since 2018" },
    { value: "100+", label: "applications integrated into an enterprise IAM platform" },
    { value: "60–80%", label: "efficiency gain from my reporting automation" },
    { value: "4", label: "industries: logistics, health tech, e-commerce and enterprise security" },
  ] as Kpi[],

  experience: [
    {
      role: "Full Stack Software Engineer",
      company: "Nomad Fuel",
      start: "2025-11",
      end: "2025-12",
      summary:
        "Built full stack features for a fuel and logistics platform serving truckers, designed end to end in one-week sprints from scoping and design docs reviewed with senior engineers to production code. Turned Figma designs into responsive React and Next.js components, fixed production hotfixes mid-sprint, automated batch processing of card and payment transactions in Python, and deployed on GCP with GitHub Actions.",
      tags: ["React", "Next.js", "Nest.js", "TypeScript", "Prisma", "PostgreSQL", "Python", "GCP"],
      kpis: [
        { value: "1 week", label: "sprints from scoping to production-ready code" },
        { value: "End to end", label: "design docs, API, UI and deploy on each feature" },
      ],
    },
    {
      role: "Software Engineer, AI Evaluator",
      company: "Outlier AI",
      start: "2024-08",
      end: "2025-09",
      summary:
        "Evaluated LLM-generated Python, JavaScript and Java, identified model failure patterns and gave structured feedback to improve reasoning and code generation.",
      tags: ["Python", "JavaScript", "Java", "LLM evaluation"],
      kpis: [],
    },
    {
      role: "Software Developer, IAM",
      company: "KPMG",
      start: "2022-11",
      end: "2023-11",
      summary:
        "Built a Python tool for security report generation with data processing and visualization, cutting turnaround by 2–3 days. Integrated 100+ applications into an enterprise client's IAM infrastructure, finishing 15% ahead of schedule.",
      tags: ["Python", "IAM", "Automation", "Client delivery"],
      kpis: [
        { value: "2–3 days", label: "cut from security report turnaround" },
        { value: "60–80%", label: "efficiency gain, delivered in a 4-week sprint" },
        { value: "15%", label: "ahead of the integration schedule" },
      ],
    },
    {
      role: "Software Engineer",
      company: "Contract roles",
      start: "2022-02",
      end: "2022-09",
      items: [
        ["eWorx", "Node.js services syncing third-party commerce APIs into a core MySQL system in real time."],
        ["PeerSupport.io", "Full stack features and REST APIs for a live mental health platform, privacy-first."],
        ["Behaiviour", "Moved Redux to React Query over Firestore, cutting database calls 30–40%."],
      ],
      tags: ["React", "Node.js", "Express", "TypeScript", "PostgreSQL", "MySQL", "Firestore"],
      kpis: [{ value: "30–40%", label: "fewer database calls at Behaiviour" }],
    },
    {
      role: "Early career",
      company: "London Hydro, Romh's",
      start: "2018-05",
      end: "2019-12",
      summary:
        "Automated API data collection and built executive dashboards (Python, SQL, Tableau), then a full stack app that automated half of a tutoring business's operations.",
      tags: [],
      kpis: [{ value: "50%", label: "of tutoring business processes automated" }],
    },
  ] as Role[],

  // [tech, display name, what you use it for]
  mainStack: [
    ["Node.js", "Node.js + Express", "APIs and services"],
    ["Python", "Python", "automation and data"],
    ["React", "React", "interfaces"],
    ["PostgreSQL", "PostgreSQL", "data"],
  ] as [string, string, string][],
  alsoStack: ["TypeScript", "Next.js", "Nest.js", "Prisma", "GCP", "Docker"],

  education: [
    { school: "Western University", detail: "B.Sc. Computer Science and BMOS Business Management", year: 2019 },
    { school: "Lighthouse Labs", detail: "Full Stack Development Diploma", year: 2022 },
  ],

  projects: [
    {
      title: "Scope to Ship",
      date: "2026-10-27",
      description:
        "Agent skill pack that runs an AI coding agent through spec-driven development: scope, product spec and technical plan are approved before any code, then the build ships in small verified slices. Installs with npx and works in Claude Code, Codex and Cursor.",
      stack: ["Claude Code", "Agent skills", "Spec-driven dev"],
      url: "https://github.com/akhan445/scope-to-ship",
      image: "/projects/scope-to-ship.webp",
    },
    {
      title: "Four Seasons of Canada",
      date: "2026-10-26",
      description:
        "Interactive map of Canada that changes with each season, built end to end with the Scope to Ship agentic workflow. Every document the agent produced, from scope to build checklist, is in the repo.",
      stack: ["React", "TypeScript", "Vite", "Claude Code"],
      url: "https://github.com/akhan445/four-seasons-of-canada",
      image: "/projects/four-seasons-of-canada.webp",
    },
    {
      title: "Anchor, an Alexa+ routine coach",
      date: "2026-10-23",
      description:
        "Voice coach that plans your day around fixed anchors and adapts your routines. A self-hosted MCP server whose 10 tools answer in under 30 ms, with Amazon Bedrock rewriting routines and coaching in the background and Amazon Polly as the voice.",
      stack: ["Node.js", "MCP", "AWS", "Amazon Bedrock", "Amazon Polly"],
      url: "https://github.com/akhan445/anchor-alexa-coach",
      image: "/projects/anchor-alexa-coach.webp",
    },
    {
      title: "Loan Calculator",
      date: "2024-01",
      description: "Python app that calculates repayment schedules for annuity and differentiated loans.",
      stack: ["Python"],
      url: "https://github.com/akhan445/loan-calculator",
      earlier: true,
    },
    {
      title: "Jungle",
      date: "2022-01",
      description: "E-commerce app with payment processing through the Stripe API.",
      stack: ["Rails", "PostgreSQL", "Stripe"],
      url: "https://github.com/akhan445/jungle-rails",
      earlier: true,
    },
    {
      title: "Interview Scheduler",
      date: "2021-08",
      description:
        "React app for booking interviews with a custom scheduler, built test-first with Jest, Storybook and Cypress.",
      stack: ["React", "PostgreSQL", "Jest", "Storybook", "Cypress"],
      url: "https://github.com/akhan445/scheduler",
      earlier: true,
    },
    {
      title: "Tweeter",
      date: "2021-07",
      description: "Single-page Twitter clone that posts and loads tweets over AJAX.",
      stack: ["JavaScript", "jQuery", "HTML", "CSS"],
      url: "https://github.com/akhan445/tweeter",
      earlier: true,
    },
    {
      title: "TinyApp",
      date: "2021-06",
      description: "Full stack URL shortener in the style of bit.ly, with hashed passwords and cookie sessions.",
      stack: ["Node.js", "Express", "EJS", "JavaScript"],
      url: "https://github.com/akhan445/tinyapp",
      earlier: true,
    },
    {
      title: "Secrets",
      date: "2021-03",
      description: "Full stack app with authentication where signed-in users share something personal.",
      stack: ["Node.js", "Express", "MongoDB", "Mongoose", "EJS"],
      url: "https://github.com/akhan445/Authentication-Secrets",
      earlier: true,
    },
    {
      title: "Search Engine",
      date: "2020-06",
      description: "Java search engine that maps data with an inverted index and answers user queries.",
      stack: ["Java"],
      url: "https://github.com/akhan445/Search-Engine",
      earlier: true,
    },
  ] as Project[],
};
