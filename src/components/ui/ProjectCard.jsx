
import Image from "next/image";

export default function ProjectCard({ project, className = "" }) {
  return (
    <article
      className={`group relative overflow-hidden rounded-xl bg-[#2a313b] ${className}`}
    >
      <div className="relative h-full min-h-52 w-full">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 40vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 p-4 text-white">
          <span className="text-xs text-[#e49a68]">
            {project.category}
          </span>
          <h3 className="mt-1 font-bold">{project.title}</h3>
        </div>
      </div>
    </article>
  );
}
