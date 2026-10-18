
import Image from "next/image";

export default function CompanyStory() {
  return (
    <section className="section">
      <div className="container grid items-center gap-9 lg:grid-cols-2">
        <div>
          <span className="text-sm font-bold text-[#c8743f]">
            داستان مجموعه
          </span>

          <h2 className="mt-3 text-3xl font-extrabold leading-relaxed">
            تولید با تجربه، همکاری با اعتماد
          </h2>

          <p className="mt-5 text-sm leading-9 text-gray-600">
            صنایع آلومینیوم آرتین در زمینه تولید و تأمین مقاطع آلومینیومی
            فعالیت می‌کند. سبد محصولات مجموعه شامل انواع پروفیل‌های
            آلومینیومی، مقاطع مورد استفاده در صنعت درب و پنجره، لوله‌های
            آلومینیومی و تیغه‌های کرکره است.
          </p>

          <p className="mt-3 text-sm leading-9 text-gray-600">
            توجه به نیاز مشتری، بررسی مشخصات فنی سفارش و امکان تولید مقاطع
            سفارشی بر اساس نقشه و ابعاد درخواستی، از محورهای همکاری با
            مشتریان است. تلاش ما این است که فرایند بررسی سفارش، اعلام شرایط
            و هماهنگی تولید با شفافیت انجام شود.
          </p>
        </div>

        <div className="relative min-h-[330px] overflow-hidden rounded-2xl">
          <Image
            src="/images/about/factory.jpg"
            alt="محیط تولید مقاطع آلومینیومی صنایع آلومینیوم آرتین"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
