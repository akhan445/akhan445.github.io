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
          I’m a <b>versatile Software Engineer</b>, <i>experienced in full stack and backend development</i> building robust, scalable and impactful software solutions.
        </p>
        <p>I bring a strong foundation in software engineering and a solid understanding of business strategy and client needs, backed by a <i>Bachelor’s degree in Computer Science</i>, a <i>Bachelor’s degree in Business</i> and a <i>Full Stack Web Development Diploma.</i> My background combines technical depth with a solid understanding of business strategy and client needs.</p>
        <p>
          I’ve developed systems across the stack, from intuitive frontends to performant backends and cloud-native infrastructure; allowing me to bridge the gap between engineering, product, and business impact strengthened through hands-on development and consulting experience..
        </p>
        <p>
          My toolkit includes technologies like <mark>React, Node.js, PostgreSQL, AWS, and JavaScript,</mark> and I’m equally comfortable working with <mark>Java and Python</mark>. Whether it’s automation, platform development, or data-driven applications, I aim to deliver clean, efficient, and forward-thinking solutions tailored to real-world needs.
        </p>
        <p>
          Lately, I’ve been diving deeper into machine learning and AI, driven by their potential to transform how we build and interact with software.
        </p>
        <p>
          <b>My current goals include:</b>
          <ul>
            <li>Building software products that solve real-world problems</li>
            <li>Joining or collaborating with mission-driven teams</li>
            <li>Deepening my expertise in AI and machine learning</li>
            <li>Contributing to projects where thoughtful engineering meets real user impact</li>
            <li>Growing as an engineer through continuous learning and mentorship</li>
          </ul>
        </p>
        <p>
          I’m passionate about learning, collaborating with great teams, and tackling challenges head-on.
        </p>
      </div>
    </section>
  );
}
