import Image from "next/image";

export default function MyPassionate() {
  return (
    <div>
      <h1 className="text-xl md:text-2xl font-bold mb-4">What Drives Me</h1>
      <Image
        src="/solider.jpg"
        alt="Coding Passion"
        width={700}
        height={400}
        className="rounded-lg mb-4"
      />
      <p className="mb-4">
        My passion for technology goes beyond just writing code. I&apos;m driven
        by the potential of technology to solve real-world problems and improve
        people&apos;s lives.
      </p>
      <ul className="list-disc pl-5 mb-4">
        <li>Exploring new programming languages and frameworks</li>
        <li>Contributing to open-source projects</li>
        <li>Mentoring aspiring developers</li>
        <li>Staying up-to-date with the latest tech trends</li>
      </ul>
      <p>
        This passion fuels my continuous learning and drives me to push the
        boundaries of what&apos;s possible in software development.
      </p>
    </div>
  );
}
