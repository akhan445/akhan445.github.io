import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.github} target="_blank">
        <Image
          src="/profile.png"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>

      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        Hi, I'm Abdullah. This website is currently a WIP ⚙️
      </h1>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Hi, I’m a Full Stack and Backend Engineer with 1+ years of experience building robust and scalable software solutions.
          I specialize in crafting efficient, clean systems using a range of technologies like React, Node.js, PostgreSQL, AWS, and JavaScript.
          Whether it’s streamlining integrations for large enterprises or delivering end-to-end features for startups.
          I’m all about creating impact with code.
        </p>
        <p>
          I hold a Bachelor’s degree in Computer Science and a Full Stack Web Development Diploma, which have provided me with a strong foundation in software engineering principles.
          Over the years, I’ve worked on everything from automating complex reports to integrating 100+ applications for a large bank—always pushing for smarter, faster, and more scalable solutions.
          Recently, I’ve been exploring machine learning and AI, fascinated by how they can transform software development and solve real-world problems.
        </p>
        <p>
          I’m passionate about learning, collaborating with great teams, and tackling challenges head-on.
        </p>
      </div>
    </section>
  );
}
