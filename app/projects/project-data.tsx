export interface Project {
  title: string;
  stack: string;
  year: number;
  description: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: "Loan Calculator",
    stack: "Python",
    year: 2024,
    description:
      "This Python Application can be used to calculate loan re-payment scheduling for two different types of loans: annuity and differentiated",
    url: "https://github.com/akhan445/loan-calculator",
  },
  {
    title: "Jungle Rails",
    stack: "Ruby on Rails, PostgreSQL, Stripe API",
    year: 2022,
    description:
      "E-commerce application built with payment processing incorporating stripe API",
    url: "https://github.com/akhan445/jungle-rails",
  },
  {
    title: "Tiny App",
    stack: "Node.js, Express, EJS, Javascript",
    year: 2021,
    description:
      "Full Stack web application that is a bit.ly clone allowing users to shorten long URLs. Incorporate bcrypt, body-parser and cookie-session node packages.",
    url: "https://github.com/akhan445/tinyapp",
  },
  {
    title: "Secrets",
    stack: "Node, Express, EJS, JavaScript. MongoDB & Mongoose",
    year: 2021,
    description:
      "A full stack web application with authentication that allows autenticated users to share something personal.",
    url: "https://github.com/akhan445/Authentication-Secrets",
  },
  {
    title: "Lotide",
    stack: "Node.js, JavaScript",
    year: 2021,
    description:
      "A clone of the Lodash npm package.",
    url: "https://github.com/akhan445/lotide",
  },
  {
    title: "Interview Scheduler",
    stack: "React, Jest, PostgreSQL, Storybook, Cypress",
    year: 2021,
    description:
      "React Application which allows users to book interviews using a custom scheduler. Incorporates used test-driven development.",
    url: "https://github.com/akhan445/scheduler",
  },  
  {
    title: "Tweeter",
    stack: "HTML, CSS, JS, jQuery, AJAX",
    year: 2021,
    description:
      "Single Page Twitter clone.",
    url: "https://github.com/akhan445/tweeter",
  },
  {
    title: "Readability Score",
    stack: "Java",
    year: 2020,
    description:
      "A Java application that uses a scientific approach to determine the readability of a text document.",
    url: "https://github.com/akhan445/Readability-Score",
  },
  {
    title: "Seach Engine",
    stack: "Java",
    year: 2020,
    description:
      "A Java application using an inverted index to map data and allows users to perform search queries.",
    url: "https://github.com/akhan445/Search-Engine",
  },
];
