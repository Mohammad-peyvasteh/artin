
import Image from "next/image";
import whyUs from "@/data/whyUs";
import SectionTitle from "@/components/ui/SectionTitle";

export default function WhyUsSection() {
  return (
    <section className="section">
      <div className="container">
        <SectionTitle
          title="چرا صنایع آلومینیوم آرتین؟"
          description="تولید با تجربه، همکاری با اعتماد"
        />

        <div className="grid items-center gap-8 lg:grid-cols-2">
          {/* مزیت‌های مجموعه */}
          <div className="grid grid-cols-2 gap-4">
            {whyUs.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.id}
                  className="card flex min-h-40 flex-col items-center justify-center p-5 text-center"
                >
                  <Icon
                    size={32}
                    className="mb-4 text-[#c8743f]"
                  />

                  <h3 className="mb-2 font-extrabold">
                    {item.title}
                  </h3>

                  <p className="text-xs leading-7 text-gray-500">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>

          {/* تصویر محصولات */}
          <div className="relative min-h-[300px] rounded-2xl border-2 border-[#c8743f] p-2">
            <div className="relative min-h-[300px] overflow-hidden rounded-xl">
              <Image
                src="/images/about/profiles.jpg"
                alt="پروفیل‌های آلومینیومی صنایع آلومینیوم آرتین"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
