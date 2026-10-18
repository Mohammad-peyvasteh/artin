// import Image from "next/image";
// import Link from "next/link";
// import { FiArrowLeft } from "react-icons/fi";

// export default function HeroSection() {
//   return (
//     <section className="relative flex min-h-[460px] items-center overflow-hidden bg-[#1f252d] px-0 pb-12 pt-24 text-white sm:min-h-[570px] sm:pb-20 sm:pt-32 md:min-h-[650px]">
//       <Image
//         src="/images/hero/hero-bg.jpg"
//         alt="نمای مدرن ساختمان با درب و پنجره آلومینیومی"
//         fill
//         priority
//         sizes="100vw"
//         className="object-cover"
//       />

//       <div className="absolute inset-0 bg-gradient-to-l from-[#10151c]/95 via-[#10151c]/65 to-[#10151c]/20" />

//       <div className="container relative z-10">
//         <div className="max-w-2xl">
//           <h1 className="text-[25px] font-black leading-[1.9] sm:text-4xl sm:leading-[1.8] md:text-5xl md:leading-[1.7]">
//             کرکره، درب و پنجره آلومینیومی
//             <span className="block text-[#e49a68]">
//               با کیفیت و دوام بالا
//             </span>
//           </h1>

//           <p className="mt-3 max-w-xl text-[13px] leading-7 text-gray-200 sm:mt-4 sm:text-sm sm:leading-8 md:text-base">
//             تولید و نصب انواع درب و پنجره و کرکره با تمرکز بر کیفیت ساخت،
//             طراحی مناسب و اجرای دقیق.
//           </p>

//           {/* <div className="mt-5 flex flex-wrap gap-2 sm:mt-7 sm:gap-3">
//             <Link
//               href="/#contact"
//               className="btn btn-primary text-xs sm:text-sm"
//             >
//               دریافت مشاوره رایگان
//               <FiArrowLeft className="mr-1" size={16} />
//             </Link>

//             <Link
//               href="/#projects"
//               className="btn btn-outline text-xs sm:text-sm"
//             >
//               مشاهده نمونه‌کارها
//             </Link>
//           </div> */}
//         </div>
//       </div>
//     </section>
//   );
// }

import Image from "next/image";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[430px] items-center overflow-hidden bg-[#1f252d] px-4 pb-10 pt-24 text-white sm:min-h-[570px] sm:px-0 sm:pb-20 sm:pt-32 md:min-h-[650px]">
      <Image
        src="/images/hero/hero-bg.jpg"
        alt="نمای مدرن ساختمان با درب و پنجره آلومینیومی"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* لایه تیره برای خوانایی بهتر متن */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#10151c]/75 via-[#10151c]/65 to-[#10151c]/90 sm:bg-gradient-to-l sm:from-[#10151c]/95 sm:via-[#10151c]/65 sm:to-[#10151c]/20" />

      <div className="container relative z-10">
        <div className="mx-auto max-w-2xl text-center sm:mx-0 sm:text-right">
          <h1 className="text-[21px] font-black leading-[1.9] tracking-tight sm:text-4xl sm:leading-[1.8] md:text-5xl md:leading-[1.7]">
            تولید انواع پروفیل آلومینیومی
            <span className="mt-1 block text-[#e49a68] sm:mt-0">
              با کیفیت و دوام بالا
            </span>
          </h1>

          <p className="mx-auto mt-3 max-w-lg text-[12px] leading-7 text-gray-200 sm:mx-0 sm:mt-4 sm:max-w-xl sm:text-sm sm:leading-8 md:text-base">
            تولید انواع مقاطع آلومینیومی برای کاربردهای مختلف، همراه با امکان
            بررسی سفارش‌های سفارشی بر اساس نیاز و مشخصات مشتری.
          </p>

          <div className="mt-5 flex justify-center sm:mt-7 sm:justify-start">
            <Link
              href="/services"
              className="btn btn-primary flex w-auto items-center justify-center gap-1.5 !px-4 !py-2 !text-xs sm:!px-5 sm:!py-2.5 sm:!text-sm"
            >
              مشاهده محصولات
              <FiArrowLeft size={15} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
