
import Image from "next/image";

const team = [
  {
    name: "تیم تولید",
    role: "آماده‌سازی و ساخت محصولات",
    image: "/images/about/factory.jpg",
  },
  {
    name: "تیم اجرا",
    role: "نصب و اجرای پروژه‌ها",
    image: "/images/about/profiles.jpg",
  },
];

export default function Team() {
  return (
    <section className="section bg-white">
      <div className="container">
        <div className="section-title">
          <h2>تیم اجرایی</h2>
          <p>همکاری تخصص‌های مختلف برای اجرای بهتر پروژه</p>
        </div>

        <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
          {team.map((member) => (
            <article key={member.name} className="card">
              <div className="relative h-64">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              <div className="p-5 text-center">
                <h3 className="font-extrabold">{member.name}</h3>
                <p className="mt-2 text-sm text-gray-500">{member.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
