
// import stats from "@/data/stats";

// export default function StatsBar() {
//   return (
//     <section className="relative z-10 -mt-10">
//       <div className="container">
//         <div className="grid grid-cols-2 gap-4 rounded-2xl bg-[#1f252d] p-5 text-white shadow-xl md:grid-cols-4 md:p-7">
//           {stats.map((item) => {
//             const Icon = item.icon;

//             return (
//               <div
//                 key={item.id}
//                 className="flex items-center justify-center gap-3 border-white/15 py-2 md:border-l md:last:border-l-0"
//               >
//                 <Icon className="shrink-0 text-[#e49a68]" size={27} />

//                 <div>
//                   <div className="text-xl font-black text-[#e49a68]">
//                     {item.value}
//                   </div>
//                   <div className="text-xs text-gray-300">{item.label}</div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import stats from "@/data/stats";

// تکرار آیتم‌ها برای عملکرد بهتر حلقه اسلایدر
const slides = [...stats, ...stats];

function StatItem({ item }) {
  const Icon = item.icon;

  return (
    <>
      <Icon className="size-6 shrink-0 text-[#e49a68] md:size-[27px]" />

      <div className="min-w-0">
        <div className="text-lg font-black leading-tight text-[#e49a68] md:text-xl">
          {item.value}
        </div>
        <div className="text-[11px] leading-5 text-gray-300 md:text-xs">
          {item.label}
        </div>
      </div>
    </>
  );
}

const itemClass =
  "flex items-center justify-center gap-2.5 border-s border-white/15 px-2 py-1 md:gap-3 md:px-3";

export default function StatsBar() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative z-10 -mt-8 md:-mt-10">
      <div className="container px-4">
        <div className="overflow-hidden rounded-2xl bg-[#1f252d] py-4 text-white shadow-xl md:py-7">
          {mounted ? (
            <Swiper
              dir="rtl"
              modules={[Autoplay]}
              loop={slides.length > 4}
              speed={700}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              slidesPerView={2}
              spaceBetween={0}
              breakpoints={{
                640: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
              }}
              className="!w-full"
            >
              {slides.map((item, index) => (
                <SwiperSlide
                  key={`${item.id}-${index}`}
                  className={`!flex ${itemClass}`}
                >
                  <StatItem item={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            // نسخه‌ی استاتیک قبل از لود Swiper (بدون پرش چیدمان)
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
              {stats.slice(0, 4).map((item, index) => (
                <div
                  key={item.id}
                  className={`${itemClass} ${
                    index === 2 ? "hidden sm:flex" : ""
                  } ${index === 3 ? "hidden lg:flex" : ""}`}
                >
                  <StatItem item={item} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}