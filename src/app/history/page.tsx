import Image from "next/image";

export default function History() {
  return (
    <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-lg">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">
        My Professional Journey
      </h1>
      <Image
        src="/solider.jpg"
        alt="Career Timeline"
        width={800}
        height={400}
        className="rounded-lg mb-6"
      />
      <p className="mb-4">
        My path in technology has been a thrilling adventure, filled with
        challenges, learning experiences, and exciting milestones. Here&apos;s a
        glimpse into my journey:
      </p>
      <h2 className="text-2xl font-semibold mb-3">Key Milestones</h2>
      <ul className="list-disc pl-6 mb-6">
        <li>
          <strong>2015: The Spark</strong> - Wrote my first line of HTML and
          fell in love with web development.
        </li>
        <li>
          <strong>2017: Academic Achievement</strong> - Graduated with honors,
          earning a degree in Computer Science from [Your University].
        </li>
        <li>
          <strong>2018: Professional Debut</strong> - Landed my first role as a
          Junior Developer at [Company Name], where I cut my teeth on real-world
          projects.
        </li>
        <li>
          <strong>2020: Leadership Leap</strong> - Led my first major project, a
          web application that [brief description of the project and its
          impact].
        </li>
        <li>
          <strong>2022: Full-Stack Transition</strong> - Expanded my expertise
          to become a full-stack developer, mastering both front-end and
          back-end technologies.
        </li>
        <li>
          <strong>Present: Continuous Growth</strong> - Actively learning and
          contributing to cutting-edge projects in [current focus areas].
        </li>
      </ul>
      <h2 className="text-2xl font-semibold mb-3">Skills Evolution</h2>
      <p className="mb-4">
        Throughout my journey, I&apos;ve continuously expanded my skill set.
        Here&apos;s how my expertise has grown over the years:
      </p>
      <ul className="list-disc pl-6 mb-6">
        <li>
          <strong>Languages:</strong> Started with HTML, CSS, and JavaScript,
          later adding Python, Java, and TypeScript to my arsenal.
        </li>
        <li>
          <strong>Frameworks & Libraries:</strong> Mastered React, Angular, and
          Vue.js for front-end, and Express.js and Django for back-end
          development.
        </li>
        <li>
          <strong>Database Technologies:</strong> Proficient in both SQL (MySQL,
          PostgreSQL) and NoSQL (MongoDB, Firebase) databases.
        </li>
        <li>
          <strong>Cloud & DevOps:</strong> Gained expertise in AWS and Azure,
          implementing CI/CD pipelines and containerization with Docker.
        </li>
        <li>
          <strong>Emerging Technologies:</strong> Currently exploring machine
          learning with TensorFlow and blockchain development.
        </li>
      </ul>
      <h2 className="text-2xl font-semibold mb-3">Lessons Learned</h2>
      <p className="mb-4">
        Each step of my journey has taught me valuable lessons:
      </p>
      <ul className="list-disc pl-6 mb-6">
        <li>
          The importance of continuous learning in the ever-evolving tech
          landscape.
        </li>
        <li>
          The power of collaboration and open communication in team projects.
        </li>
        <li>The value of user-centric design and development practices.</li>
        <li>
          The critical role of clean, maintainable code in long-term project
          success.
        </li>
        <li>The impact of mentorship, both as a mentee and a mentor.</li>
      </ul>
      <p className="mb-4">
        This journey has shaped me into the developer I am today - someone who
        is passionate about creating efficient, scalable, and user-friendly
        solutions. I&apos;m excited to continue growing, learning, and
        contributing to the world of technology.
      </p>
      <p className="font-semibold">
        The best is yet to come, and I&apos;m ready for the next challenge!
      </p>
    </div>
  );
}
