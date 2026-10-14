// All of the site's content lives in this file. Edit it to update the page:
// add a role, change a KPI, add a project. No markup needs to change.
//
// Dates use "YYYY-MM". Experience shows them as "Nov 2025"; leave `end` out
// for a current role and it shows "Present". Project dates are never shown;
// they only sort the list newest first.
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
};

export const site = {
  name: "Abdullah Khan",
  role: "Full Stack Software Engineer",
  pitch:
    "I build backend services and full stack products that ship to production, from fuel and logistics platforms to enterprise identity systems.",
  status: "Open to new roles · Toronto",
  location: "Toronto",
  timeZone: "America/Toronto",
  url: "https://abdullahkhan.io",
  resume: "/AbdullahKhan_SE.pdf",
  email: "abdullahshamskhan@gmail.com",
  links: {
    github: "https://github.com/akhan445",
    linkedin: "https://www.linkedin.com/in/abdullahskhan",
  },

  // Paragraphs; <b>…</b> is allowed for emphasis.
  about: [
    "I'm a full stack engineer whose sweet spot is the backend: <b>Python and Node.js services, APIs and integrations</b> that other systems depend on. I'm just as comfortable shipping the React and TypeScript side.",
    "Most recently at <b>Nomad Fuel</b> I built features for a fuel and logistics platform that helps truckers buy fuel and save on it. Before that I built automation at <b>KPMG</b> that cut 2–3 days from security report turnaround, shipped production features for health tech and e-commerce teams, and evaluated AI-generated code at <b>Outlier AI</b>.",
    "I'm most interested in automation, logistics and industrial software, where good backend systems save real time and money. A dual degree in Computer Science and Management means I care about why a feature exists, not only how it's built.",
  ],

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
      title: "Loan Calculator",
      date: "2024-01",
      description: "Python app that calculates repayment schedules for annuity and differentiated loans.",
      stack: ["Python"],
      url: "https://github.com/akhan445/loan-calculator",
    },
    {
      title: "Jungle",
      date: "2022-01",
      description: "E-commerce app with payment processing through the Stripe API.",
      stack: ["Rails", "PostgreSQL", "Stripe"],
      url: "https://github.com/akhan445/jungle-rails",
    },
    {
      title: "Interview Scheduler",
      date: "2021-08",
      description:
        "React app for booking interviews with a custom scheduler, built test-first with Jest, Storybook and Cypress.",
      stack: ["React", "PostgreSQL", "Jest", "Storybook", "Cypress"],
      url: "https://github.com/akhan445/scheduler",
    },
    {
      title: "Tweeter",
      date: "2021-07",
      description: "Single-page Twitter clone that posts and loads tweets over AJAX.",
      stack: ["JavaScript", "jQuery", "HTML", "CSS"],
      url: "https://github.com/akhan445/tweeter",
    },
    {
      title: "TinyApp",
      date: "2021-06",
      description: "Full stack URL shortener in the style of bit.ly, with hashed passwords and cookie sessions.",
      stack: ["Node.js", "Express", "EJS", "JavaScript"],
      url: "https://github.com/akhan445/tinyapp",
    },
    {
      title: "Secrets",
      date: "2021-03",
      description: "Full stack app with authentication where signed-in users share something personal.",
      stack: ["Node.js", "Express", "MongoDB", "Mongoose", "EJS"],
      url: "https://github.com/akhan445/Authentication-Secrets",
    },
    {
      title: "Search Engine",
      date: "2020-06",
      description: "Java search engine that maps data with an inverted index and answers user queries.",
      stack: ["Java"],
      url: "https://github.com/akhan445/Search-Engine",
    },
  ] as Project[],
};
