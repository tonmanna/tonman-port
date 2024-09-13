import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-lg">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">
        Welcome to My Digital Universe
      </h1>
      <Image
        src="/profile.jpg"
        alt="Portfolio Banner"
        width={800}
        height={400}
        className="rounded-lg mb-6"
      />
      <p className="mb-4 text-lg">
        Hello! I&apos;m [Your Name], a passionate software developer and
        creative problem-solver. This portfolio is a window into my digital
        world, showcasing my journey, projects, and the technologies that fuel
        my passion.
      </p>
      <p className="mb-4">
        With a background in [Your Background, e.g., Computer Science],
        I&apos;ve honed my skills in [Your Key Skills, e.g., full-stack
        development, cloud computing, and machine learning]. My goal is to
        create innovative solutions that make a positive impact on people&apos;s
        lives and push the boundaries of what&apos;s possible in technology.
      </p>
      <h2 className="text-2xl font-semibold mb-3">
        What You&apos;ll Find Here
      </h2>
      <ul className="list-disc pl-6 mb-4">
        <li>
          <strong>My Journey:</strong> Explore my professional history and the
          milestones that have shaped my career.
        </li>
        <li>
          <strong>Projects Showcase:</strong> Dive into the various projects
          I&apos;ve worked on, from web applications to mobile apps and more.
        </li>
        <li>
          <strong>Tech Passions:</strong> Discover the technologies and concepts
          that drive my curiosity and fuel my continuous learning.
        </li>
        <li>
          <strong>Skills & Expertise:</strong> Get an overview of my technical
          skills and areas of expertise.
        </li>
      </ul>
      <p className="mb-4">
        Whether you&apos;re a fellow developer, a potential employer, or just
        curious about technology, I hope you&apos;ll find something here that
        inspires you. Feel free to explore, and don&apos;t hesitate to reach out
        if you&apos;d like to connect or collaborate!
      </p>
      <h2 className="text-2xl font-semibold mb-3">Let&apos;s Connect</h2>
      <p>
        I&apos;m always open to new opportunities, collaborations, or just a
        good conversation about technology. You can reach me at [Your Email] or
        connect with me on [Your LinkedIn/GitHub/Twitter].
      </p>
      <p className="mt-4 font-semibold">
        Let&apos;s create something amazing together!
      </p>
    </div>
  );
}
