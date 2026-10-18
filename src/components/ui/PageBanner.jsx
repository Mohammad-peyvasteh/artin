
// import Link from "next/link";
// import { FiChevronLeft, FiHome } from "react-icons/fi";

// export default function PageBanner({ title, description }) {
//   return (
//     <section className="bg-[#1f252d] py-14 text-white">
//       <div className="container">
//         <div className="mb-4 flex items-center gap-2 text-sm text-gray-400">
//           <Link href="/" className="hover:text-white">
//             <FiHome />
//           </Link>
//           <FiChevronLeft />
//           <span>{title}</span>
//         </div>

//         <h1 className="mb-3 text-3xl font-extrabold md:text-4xl">
//           {title}
//         </h1>

//         {description && (
//           <p className="max-w-2xl text-sm leading-8 text-gray-300">
//             {description}
//           </p>
//         )}
//       </div>
//     </section>
//   );
// }


import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function PageBanner({ title, description }) {
  return (
    <section className="bg-[#1f252d] py-16 text-white md:py-20">
      <div className="container px-4">
        <div className="pt-4 md:pt-6">
          <Link
            href="/"
            className=" text-[12px] mb-7 inline-flex items-center gap-2   pt-6  text-gray-300 transition-all duration-300 "
          >
            <FiArrowRight className="text-base" />
            <span>بازگشت به صفحه اصلی</span>
          </Link>

          <h1 className="mb-4 text-3xl font-extrabold leading-relaxed md:text-4xl">
            {title}
          </h1>

          {description && (
            <p className="max-w-2xl text-sm leading-8 text-gray-300 md:text-base">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
