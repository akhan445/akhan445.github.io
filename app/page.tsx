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
        Hi, I'm Abdullah.
      </h1>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Hi, I’m a <b>Full Stack and Backend Engineer with <i>2+ years of experience</i></b> building robust and scalable software solutions.
        </p>
        <p>
          I specialize in crafting efficient, clean systems using a range of technologies like <mark>React</mark>, <mark>Node.js</mark>, PostgreSQL, AWS, and <mark>JavaScript</mark>.
          I am also pretty handy with <mark>Java</mark> and <mark>Python</mark>.
          No matter what I'm working on whether it's automation, applications or data analytics; I'm pushing for smarter, faster, and more scalable solutions.
        </p>
        <p>
          I hold a <i>Bachelor’s degree in Computer Science</i> and a <i>Full Stack Web Development Diploma</i>, which have provided me with a strong foundation in software engineering principles.
        </p>
        <p>
          Over the years, I’ve worked on <u>large enterprise</u> sfotware to delivering end-to-end features for <u>startups</u> and I’m all about creating impact with code.
        </p>
        <p>
          Recently, I’ve been exploring machine learning and AI, fascinated by how they can transform software development and solve real-world problems.
        </p>
        <p>
          I’m passionate about learning, collaborating with great teams, and tackling challenges head-on.
        </p>
      </div>
    </section>
  );
}
