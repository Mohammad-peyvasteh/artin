
// "use client";

// import Link from "next/link";
// import { FiX } from "react-icons/fi";
// import navLinks from "@/data/navLinks";

// export default function MobileMenu({ open, onClose }) {
//   if (!open) return null;

//   return (
//     <div className="mobile-menu-overlay" onClick={onClose}>
//       <aside
//         className="mr-auto flex h-full w-[min(85%,340px)] flex-col bg-[#1f252d] p-6 text-white"
//         onClick={(event) => event.stopPropagation()}
//         aria-label="منوی موبایل"
//       >
//         <div className="mb-8 flex items-center justify-between">
//           <span className="text-lg font-extrabold">آرمان آلومینیوم</span>

//           <button
//             type="button"
//             onClick={onClose}
//             aria-label="بستن منو"
//             className="rounded-lg p-2 hover:bg-white/10"
//           >
//             <FiX size={23} />
//           </button>
//         </div>

//         <nav className="flex flex-col gap-2">
//           {navLinks.map((item) => (
//             <Link
//               key={item.href}
//               href={item.href}
//               onClick={onClose}
//               className="rounded-lg px-3 py-3 text-sm hover:bg-white/10 hover:text-[#e49a68]"
//             >
//               {item.title}
//             </Link>
//           ))}
//         </nav>

//         <Link
//           href="/#contact"
//           onClick={onClose}
//           className="btn btn-primary mt-6"
//         >
//           درخواست مشاوره
//         </Link>
//       </aside>
//     </div>
//   );
// }


// "use client";

// import Link from "next/link";
// import { FiX, FiArrowLeft } from "react-icons/fi";
// import navLinks from "@/data/navLinks";

// export default function MobileMenu({ open, onClose }) {
//   if (!open) return null;

//   return (
//     <div
//       className="mobile-menu-overlay fixed inset-0 z-50 flex flex-row-reverse bg-black/60 backdrop-blur-sm"
//       onClick={onClose}
//       dir="rtl"
//     >
//       <aside
//         dir="rtl"
//         className="flex h-full w-[min(85%,340px)] shrink-0 flex-col overflow-y-auto bg-[#1f252d] p-5 text-right text-white shadow-2xl sm:p-6"
//         onClick={(event) => event.stopPropagation()}
//         aria-label="منوی موبایل"
//       >
//         {/* سربرگ منو */}
//         <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-5">
//           <span className="text-base font-extrabold sm:text-lg">
//             صنایع آلومینیوم آرتین
//           </span>

//           <button
//             type="button"
//             onClick={onClose}
//             aria-label="بستن منو"
//             className="rounded-xl p-2 text-gray-300 transition hover:bg-white/10 hover:text-white"
//           >
//             <FiX size={23} />
//           </button>
//         </div>

//         {/* لینک‌های منو */}
//         <nav className="flex flex-col gap-2">
//           {navLinks.map((item) => (
//             <Link
//               key={item.href}
//               href={item.href}
//               onClick={onClose}
//               className="flex items-center justify-between rounded-xl px-4 py-3.5 text-sm text-gray-200 transition hover:bg-white/[0.07] hover:text-[#e49a68]"
//             >
//               <span>{item.title}</span>
//               <FiArrowLeft
//                 size={15}
//                 className="shrink-0 text-white/30"
//               />
//             </Link>
//           ))}
//         </nav>

//         {/* دکمه استعلام قیمت */}
//         <Link
//           href="/#contact"
//           onClick={onClose}
//           className="btn btn-primary mt-6 flex items-center justify-center gap-2"
//         >
//           استعلام قیمت و سفارش
//           <FiArrowLeft size={17} />
//         </Link>

//         {/* بخش پایینی */}
//         <div className="mt-auto border-t border-white/10 pt-5">
//           <p className="text-xs leading-7 text-gray-400">
//             تولید انواع مقاطع آلومینیومی با امکان بررسی سفارش‌های سفارشی.
//           </p>

//           <p className="mt-2 text-xs text-[#e49a68]">
//             تولید با تجربه، همکاری با اعتماد
//           </p>
//         </div>
//       </aside>
//     </div>
//   );
// }



"use client";

import Link from "next/link";
import { FiX, FiArrowLeft } from "react-icons/fi";
import navLinks from "@/data/navLinks";

export default function MobileMenu({ open, onClose }) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm"
      onClick={onClose}
      dir="rtl"
    >
      {/* پنل همیشه به لبه راست صفحه متصل است */}
      <aside
        dir="rtl"
        className="absolute right-0 top-0 flex h-full w-[min(85%,340px)] flex-col overflow-y-auto bg-[#1f252d] p-5 text-right text-white shadow-2xl sm:p-6"
        onClick={(event) => event.stopPropagation()}
        aria-label="منوی موبایل"
      >
        {/* سربرگ */}
        <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-5">
          <span className="text-base font-extrabold sm:text-lg">
            صنایع آلومینیوم آرتین
          </span>

          <button
            type="button"
            onClick={onClose}
            aria-label="بستن منو"
            className="rounded-xl p-2 text-gray-300 transition hover:bg-white/10 hover:text-white"
          >
            <FiX size={23} />
          </button>
        </div>

        {/* لینک‌های منو */}
        <nav className="flex flex-col gap-2">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="flex items-center justify-between rounded-xl px-4 py-3.5 text-sm text-gray-200 transition hover:bg-white/[0.07] hover:text-[#e49a68]"
            >
              <span>{item.title}</span>
              <FiArrowLeft size={15} className="shrink-0 text-white/30" />
            </Link>
          ))}
        </nav>

        {/* دکمه سفارش */}
        <Link
          href="/#contact"
          onClick={onClose}
          className="btn btn-primary mt-6 flex items-center justify-center gap-2"
        >
          استعلام قیمت و سفارش
          <FiArrowLeft size={17} />
        </Link>

        {/* پایین منو */}
        <div className="mt-auto border-t border-white/10 pt-5">
          <p className="text-xs leading-7 text-gray-400">
            تولید انواع مقاطع آلومینیومی با امکان بررسی سفارش‌های سفارشی.
          </p>

          <p className="mt-2 text-xs text-[#e49a68]">
            تولید با تجربه، همکاری با اعتماد
          </p>
        </div>
      </aside>
    </div>
  );
}
