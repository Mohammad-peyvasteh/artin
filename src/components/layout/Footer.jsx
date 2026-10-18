
// import Link from "next/link";
// import {
//   FiPhone,
//   FiMail,
//   FiMapPin,
//   FiClock,
//   FiInstagram,
//   FiSend,
//   FiLinkedin,
// } from "react-icons/fi";
// import contactInfo from "@/data/contactInfo";
// import navLinks from "@/data/navLinks";

// export default function Footer() {
//   return (
//     <footer className="bg-[#171c22] text-white">
//       <div className="container grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-4">
//         <div>
//           <Link href="/" className="text-xl font-extrabold">
//             آرمان <span className="text-[#c8743f]">آلومینیوم</span>
//           </Link>

//           <p className="mt-4 text-sm leading-8 text-gray-400">
//             همراه شما در انتخاب، تولید و اجرای درب و پنجره آلومینیومی و انواع
//             کرکره.
//           </p>

//           <div className="mt-5 flex gap-3">
//             <a
//               href={contactInfo.instagram}
//               target="_blank"
//               rel="noreferrer"
//               aria-label="اینستاگرام"
//               className="rounded-lg border border-white/15 p-2 hover:text-[#c8743f]"
//             >
//               <FiInstagram size={19} />
//             </a>

//             <a
//               href={contactInfo.telegram}
//               target="_blank"
//               rel="noreferrer"
//               aria-label="تلگرام"
//               className="rounded-lg border border-white/15 p-2 hover:text-[#c8743f]"
//             >
//               <FiSend size={19} />
//             </a>

//             <a
//               href={contactInfo.linkedin}
//               target="_blank"
//               rel="noreferrer"
//               aria-label="لینکدین"
//               className="rounded-lg border border-white/15 p-2 hover:text-[#c8743f]"
//             >
//               <FiLinkedin size={19} />
//             </a>
//           </div>
//         </div>

//         <div>
//           <h3 className="mb-5 font-bold">دسترسی سریع</h3>

//           <ul className="space-y-3 text-sm text-gray-400">
//             {navLinks.map((item) => (
//               <li key={item.href}>
//                 <Link
//                   href={item.href}
//                   className="transition hover:text-[#e49a68]"
//                 >
//                   {item.title}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>

//         <div>
//           <h3 className="mb-5 font-bold">ارتباط با ما</h3>

//           <ul className="space-y-4 text-sm text-gray-400">
//             <li className="flex items-center gap-3">
//               <FiPhone className="shrink-0 text-[#c8743f]" />
//               <a href={`tel:${contactInfo.phone}`}>
//                 {contactInfo.phoneDisplay}
//               </a>
//             </li>

//             <li className="flex items-center gap-3">
//               <FiMail className="shrink-0 text-[#c8743f]" />
//               <a href={`mailto:${contactInfo.email}`}>
//                 {contactInfo.email}
//               </a>
//             </li>

//             <li className="flex items-start gap-3">
//               <FiMapPin className="mt-1 shrink-0 text-[#c8743f]" />
//               <span>{contactInfo.address}</span>
//             </li>

//             <li className="flex items-start gap-3">
//               <FiClock className="mt-1 shrink-0 text-[#c8743f]" />
//               <span>{contactInfo.workingHours}</span>
//             </li>
//           </ul>
//         </div>

//         <div>
//           <h3 className="mb-5 font-bold">موقعیت مجموعه</h3>

//           <a
//             href="https://maps.google.com/"
//             target="_blank"
//             rel="noreferrer"
//             className="flex h-36 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-sm text-gray-300 hover:border-[#c8743f]"
//           >
//             <FiMapPin className="ml-2 text-[#c8743f]" />
//             مشاهده موقعیت روی نقشه
//           </a>
//         </div>
//       </div>

//       <div className="border-t border-white/10">
//         <div className="container flex flex-col items-center justify-between gap-2 py-5 text-center text-xs text-gray-500 sm:flex-row">
//           <span>تمامی حقوق متعلق به آرمان آلومینیوم است.</span>
//           <span>طراحی و توسعه وب‌سایت</span>
//         </div>
//       </div>
//     </footer>
//   );
// }


import Link from "next/link";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiClock,
  FiInstagram,
  FiSend,
  FiLinkedin,
  FiArrowLeft,
} from "react-icons/fi";

import contactInfo from "@/data/contactInfo";
import navLinks from "@/data/navLinks";

export default function Footer() {
  return (
    <footer className="bg-[#171c22] text-white" dir="rtl">
      <div className="container grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
        {/* معرفی مجموعه */}
        <div>
          <Link
            href="/"
            className="inline-block text-xl font-extrabold"
            aria-label="صنایع آلومینیوم آرتین - صفحه اصلی"
          >
            صنایع آلومینیوم{" "}
            <span className="text-[#c8743f]">آرتین</span>
          </Link>

          <p className="mt-4 text-sm leading-8 text-gray-400">
            تولید انواع پروفیل و مقاطع آلومینیومی با تکیه بر تجربه،
            تنوع محصولات و امکان بررسی سفارش‌های سفارشی متناسب با نیاز مشتریان.
          </p>

          <p className="mt-3 text-sm font-medium text-[#e49a68]">
            تولید با تجربه، همکاری با اعتماد
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            {contactInfo.instagram && (
              <a
                href={contactInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="اینستاگرام"
                className="rounded-lg border border-white/15 p-2 transition hover:border-[#c8743f] hover:text-[#e49a68]"
              >
                <FiInstagram size={19} />
              </a>
            )}

            {contactInfo.telegram && (
              <a
                href={contactInfo.telegram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="تلگرام"
                className="rounded-lg border border-white/15 p-2 transition hover:border-[#c8743f] hover:text-[#e49a68]"
              >
                <FiSend size={19} />
              </a>
            )}

            {contactInfo.linkedin && (
              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="لینکدین"
                className="rounded-lg border border-white/15 p-2 transition hover:border-[#c8743f] hover:text-[#e49a68]"
              >
                <FiLinkedin size={19} />
              </a>
            )}
          </div>
        </div>

        {/* دسترسی سریع */}
        <div>
          <h3 className="mb-5 font-bold">دسترسی سریع</h3>

          <ul className="space-y-3 text-sm text-gray-400">
            {navLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-2 transition hover:text-[#e49a68]"
                >
                  <FiArrowLeft
                    size={13}
                    className="shrink-0 text-[#c8743f]"
                  />
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* اطلاعات تماس */}
        <div>
          <h3 className="mb-5 font-bold">ارتباط با ما</h3>

          <ul className="space-y-4 text-sm leading-7 text-gray-400">
            {contactInfo.phoneDisplay && (
              <li className="flex items-start gap-3">
                <FiPhone className="mt-1 shrink-0 text-[#c8743f]" />
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="transition hover:text-[#e49a68]"
                  dir="ltr"
                >
                  {contactInfo.phoneDisplay}
                </a>
              </li>
            )}

            {contactInfo.email && (
              <li className="flex items-start gap-3">
                <FiMail className="mt-1 shrink-0 text-[#c8743f]" />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="break-all transition hover:text-[#e49a68]"
                >
                  {contactInfo.email}
                </a>
              </li>
            )}

            {contactInfo.address && (
              <li className="flex items-start gap-3">
                <FiMapPin className="mt-1 shrink-0 text-[#c8743f]" />
                <span>{contactInfo.address}</span>
              </li>
            )}

            {contactInfo.workingHours && (
              <li className="flex items-start gap-3">
                <FiClock className="mt-1 shrink-0 text-[#c8743f]" />
                <span>{contactInfo.workingHours}</span>
              </li>
            )}
          </ul>
        </div>

        {/* موقعیت مجموعه */}
        <div>
          <h3 className="mb-5 font-bold">موقعیت مجموعه</h3>

          {contactInfo.mapUrl ? (
            <a
              href={contactInfo.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-36 flex-col items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 text-center text-sm text-gray-300 transition hover:border-[#c8743f] hover:text-white"
            >
              <FiMapPin size={26} className="text-[#c8743f]" />
              <span>مشاهده موقعیت روی نقشه</span>
            </a>
          ) : (
            <div className="flex min-h-36 flex-col items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 text-center text-sm text-gray-400">
              <FiMapPin size={26} className="text-[#c8743f]" />
              <span>اطلاعات موقعیت مجموعه هنوز ثبت نشده است.</span>
            </div>
          )}
        </div>
      </div>

      {/* پایین فوتر */}
      <div className="border-t border-white/10">
        <div className="container flex flex-col items-center justify-between gap-3 py-5 text-center text-xs leading-6 text-gray-500 sm:flex-row">
          <span>
            تمامی حقوق این وب‌سایت متعلق به صنایع آلومینیوم آرتین است.
          </span>

          <span>تولید با تجربه، همکاری با اعتماد</span>
        </div>
      </div>
    </footer>
  );
}
