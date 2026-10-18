
import { FiAward, FiShield, FiCheckCircle } from "react-icons/fi";

const items = [
  {
    title: "کنترل کیفیت",
    description: "توجه به کیفیت متریال و اجرای کار",
    icon: FiAward,
  },
  {
    title: "ضمانت محصولات",
    description: "تعیین شرایط ضمانت متناسب با سفارش",
    icon: FiShield,
  },
  {
    title: "اجرای استاندارد",
    description: "رعایت اصول فنی در مراحل اجرا",
    icon: FiCheckCircle,
  },
];

export default function Certificates() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-title">
          <h2>کیفیت و تعهد</h2>
          <p>توجه به اصول فنی در تمام مراحل پروژه</p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <article key={item.title} className="card p-6 text-center">
                <Icon size={36} className="mx-auto mb-4 text-[#c8743f]" />
                <h3 className="font-extrabold">{item.title}</h3>
                <p className="mt-3 text-sm leading-8 text-gray-500">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
