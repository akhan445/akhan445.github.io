import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.github} target="_blank">
        <Image
          src="/profile.png"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 mx-auto sm:float-right sm:ml-5 grayscale hover:grayscale-0"
          unoptimized
          width={180}
          height={180}
          priority
        />
      </a>

      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        Hi, I'm Abdullah.
      </h1>

      <div className="prose prose-neutral dark:prose-invert max-w-[768px]">
        <p>
          I'm a Software Engineer with 2.5+ years building <b>full-stack</b> applications and <b>backend</b> systems that deliver real business impact. Currently working in the AI/ML space, where I evaluate code quality and model outputs—giving me unique insights into building reliable AI-integrated features.
        </p>
        <p>
          I've developed everything from Python automation tools, developed systems across the stack using Node & React, data-rich dashboards and more. My sweet spot is backend development with Python and Node.js.
        </p>
        <p>
          Tech I work with: <mark>Python, Node.js, React, PostgreSQL, AWS/GCP, and increasingly, AI/ML integration patterns.</mark>
        </p>
        <p>I bring a strong foundation in software engineering and a solid understanding of business strategy and client needs, backed by a <i><u>Bachelor’s degree in Computer Science</u></i>, a <i><u>Bachelor’s degree in Business</u></i> and a <i><u>Full Stack Web Development Diploma.</u></i> My background combines technical depth with a solid understanding of business strategy and client needs.</p>
        <p>
          I love building practical solutions where I can integrate AI/ML into the app having a real world impact. I’m passionate about learning, collaborating with great teams, and tackling challenges head-on.
        </p>
      </div>
    </section>
  );
}
