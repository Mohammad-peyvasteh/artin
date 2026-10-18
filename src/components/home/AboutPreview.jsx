
// import Image from "next/image";
// import Link from "next/link";
// import { FiAward, FiCheckCircle, FiShield } from "react-icons/fi";
// import SectionTitle from "@/components/ui/SectionTitle";

// const certificates = [
//   { title: "استانداردهای کیفیت", icon: FiAward },
//   { title: "ضمانت محصول", icon: FiShield },
//   { title: "اجرای اصولی", icon: FiCheckCircle },
// ];

// export default function AboutPreview() {
//   return (
//     <section className="section">
//       <div className="container">
//         <SectionTitle
//           title="درباره ما"
//           description="تعهد به کیفیت، تخصص و اعتماد"
//         />

//         <div className="grid items-center gap-9 lg:grid-cols-2">
//           <div className="relative min-h-[300px] rounded-xl border-2 border-[#c8743f] p-2">
//             <div className="relative min-h-[300px] overflow-hidden rounded-lg">
//               <Image
//                 src="/images/about/factory.jpg"
//                 alt="فرایند تولید محصولات آلومینیومی"
//                 fill
//                 sizes="(max-width: 1024px) 100vw, 50vw"
//                 className="object-cover"
//               />
//             </div>
//           </div>

//           <div>
//             <h3 className="mb-4 text-2xl font-extrabold">
//               همراه شما در ساخت فضاهای ماندگار
//             </h3>

//             <p className="text-sm leading-9 text-gray-600">
//               آرمان آلومینیوم با تمرکز بر تولید و اجرای انواع درب و پنجره
//               آلومینیومی و کرکره، تلاش می‌کند راهکارهایی متناسب با نیاز هر
//               پروژه ارائه دهد. کیفیت متریال، دقت در اندازه‌گیری و اجرای اصولی
//               از مهم‌ترین اولویت‌های ما هستند.
//             </p>

//             <div className="my-6 grid grid-cols-3 gap-3">
//               {certificates.map((item) => {
//                 const Icon = item.icon;

//                 return (
//                   <div
//                     key={item.title}
//                     className="flex flex-col items-center gap-2 border-l border-gray-200 px-2 text-center last:border-l-0"
//                   >
//                     <Icon size={29} className="text-[#c8743f]" />
//                     <span className="text-xs font-bold">{item.title}</span>
//                   </div>
//                 );
//               })}
//             </div>

//             <Link href="/about" className="btn btn-primary">
//               بیشتر بخوانید
//             </Link>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import Image from "next/image";
import Link from "next/link";
import {
  FiAward,
  FiCheckCircle,
  FiShield,
} from "react-icons/fi";
import SectionTitle from "@/components/ui/SectionTitle";

const certificates = [
  { title: "۱۴ سال تجربه", icon: FiAward },
  { title: "کیفیت تولید", icon: FiShield },
  { title: "تعهد به سفارش", icon: FiCheckCircle },
];

export default function AboutPreview() {
  return (
    <section className="section">
      <div className="container">
        <SectionTitle
          title="درباره صنایع آلومینیوم آرتین"
          description="تولید با تجربه، همکاری با اعتماد"
        />

        <div className="grid items-center gap-9 lg:grid-cols-2">
          {/* تصویر مجموعه */}
          <div className="relative min-h-[300px] rounded-xl border-2 border-[#c8743f] p-2">
            <div className="relative min-h-[300px] overflow-hidden rounded-lg">
              <Image
                src="/images/about/factory.jpg"
                alt="صنایع آلومینیوم آرتین و فرایند تولید پروفیل آلومینیومی"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* معرفی مجموعه */}
          <div>
            <h3 className="mb-4 text-2xl font-extrabold">
              ۱۴ سال تجربه در صنعت آلومینیوم
            </h3>

            <p className="text-sm leading-9 text-gray-600">
              صنایع آلومینیوم آرتین از بهمن سال ۱۳۹۲ فعالیت خود را
              در زمینه تولید انواع پروفیل آلومینیومی آغاز کرده است.
              ما با تکیه بر تجربه، دانش فنی و توانمندی تولید،
              تلاش می‌کنیم محصولاتی با کیفیت مطلوب و قیمت متناسب
              با نیاز مشتریان عرضه کنیم.
            </p>

            <p className="mt-3 text-sm leading-9 text-gray-600">
              زمینه فعالیت ما شامل تولید انواع پروفیل آلومینیومی،
              مقاطع موردنیاز صنعت در و پنجره و تیغه کرکره است.
              همچنین امکان بررسی و تولید مقاطع سفارشی بر اساس
              نیاز مشتریان را فراهم کرده‌ایم.
            </p>

            {/* ویژگی‌های مجموعه */}
            <div className="my-6 grid grid-cols-3 gap-3">
              {certificates.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex flex-col items-center gap-2 border-l border-gray-200 px-2 text-center last:border-l-0"
                  >
                    <Icon
                      size={29}
                      className="text-[#c8743f]"
                    />
                    <span className="text-xs font-bold">
                      {item.title}
                    </span>
                  </div>
                );
              })}
            </div>

            <Link href="/about" className="btn btn-primary">
              آشنایی بیشتر با آرتین
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

