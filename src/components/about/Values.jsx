
import {
  FiShield,
  FiUsers,
  FiTarget,
  FiCheckCircle,
} from "react-icons/fi";

const values = [
  {
    title: "کیفیت در تولید",
    description:
      "توجه به مشخصات فنی و کیفیت مقاطع آلومینیومی در فرایند تولید",
    icon: FiShield,
  },
  {
    title: "مشتری‌مداری",
    description:
      "بررسی نیاز مشتری و ارائه پیشنهاد متناسب با نوع سفارش",
    icon: FiUsers,
  },
  {
    title: "دقت در جزئیات",
    description:
      "توجه به نقشه‌ها، ابعاد و ویژگی‌های فنی مقاطع درخواستی",
    icon: FiTarget,
  },
  {
    title: "شفافیت در همکاری",
    description:
      "هماهنگی روشن درباره مشخصات سفارش، شرایط همکاری و مراحل تولید",
    icon: FiCheckCircle,
  },
];

export default function Values() {
  return (
    <section className="section bg-white">
      <div className="container">
        <div className="section-title">
          <h2>ارزش‌های ما</h2>
          <p>
            اصولی که در تولید مقاطع آلومینیومی و همکاری با مشتریان دنبال می‌کنیم
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((item) => {
            const Icon = item.icon;

            return (
              <article key={item.title} className="card p-6 text-center">
                <Icon
                  className="mx-auto mb-4 text-[#c8743f]"
                  size={34}
                  aria-hidden="true"
                />

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
