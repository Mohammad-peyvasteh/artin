
import Link from "next/link";
import projects from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";
import SectionTitle from "@/components/ui/SectionTitle";

export default function FeaturedProjects() {
  return (
    <section id="projects" className="section dark-section">
      <div className="container">
        <SectionTitle
          title="نمونه‌کارهای منتخب"
          description="نگاهی به برخی از پروژه‌های اجراشده"
          light
        />

        <div className="grid gap-4 md:grid-cols-4">
          {projects.slice(0, 5).map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              className={
                index === 0
                  ? "min-h-[420px] md:col-span-2 md:row-span-2"
                  : "min-h-[200px]"
              }
            />
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link href="/services" className="btn btn-outline">
            مشاهده خدمات و پروژه‌ها
          </Link>
        </div>
      </div>
    </section>
  );
}
