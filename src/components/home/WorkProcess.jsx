
import process from "@/data/process";
import SectionTitle from "@/components/ui/SectionTitle";

export default function WorkProcess() {
  return (
    <section className="section dark-section">
      <div className="container">
        <SectionTitle
          title="مراحل کار"
          description="از مشاوره تا تحویل پروژه در کنار شما هستیم"
          light
        />

        <div className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          <div className="absolute right-[10%] top-6 hidden h-px w-[80%] bg-[#c8743f] lg:block" />

          {process.map((item) => (
            <article
              key={item.id}
              className="relative z-10 text-center"
            >
              <span className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#c8743f] bg-[#2a313b] text-lg font-extrabold text-white">
                {item.number}
              </span>

              <h3 className="mb-2 font-bold">{item.title}</h3>

              <p className="text-xs leading-7 text-gray-400">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
