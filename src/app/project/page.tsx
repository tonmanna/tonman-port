import Image from "next/image";

export default function Project() {
  return (
    <div>
      <h1 className="text-xl md:text-2xl font-bold mb-4">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Image
            src="/locker.png"
            alt="Project 1"
            width={400}
            height={300}
            className="rounded-lg mb-2"
          />
          <h2 className="text-lg font-semibold">E-commerce Platform</h2>
          <p>A full-stack e-commerce solution with React and Node.js</p>
        </div>
      </div>
      <p className="mt-4">
        These projects showcase my skills in front-end design, back-end
        development, and mobile app creation. Each one presented unique
        challenges that helped me grow as a developer.
      </p>
    </div>
  );
}
