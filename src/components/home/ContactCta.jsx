
// "use client";

// import { useState } from "react";
// import { FiCheckCircle, FiPhone } from "react-icons/fi";
// import Input from "@/components/ui/Input";
// import contactInfo from "@/data/contactInfo";

// const initialForm = {
//   name: "",
//   phone: "",
//   message: "",
// };

// export default function ContactCta() {
//   const [form, setForm] = useState(initialForm);
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState(false);

//   function handleChange(event) {
//     setForm((current) => ({
//       ...current,
//       [event.target.name]: event.target.value,
//     }));

//     setError("");
//     setSuccess(false);
//   }

//   function handleSubmit(event) {
//     event.preventDefault();

//     const normalizedPhone = form.phone.replace(/[\s-]/g, "");

//     if (form.name.trim().length < 2) {
//       setError("لطفاً نام خود را به‌درستی وارد کنید.");
//       return;
//     }

//     if (!/^(\+98|0098|0)?9\d{9}$/.test(normalizedPhone)) {
//       setError("شماره موبایل واردشده معتبر نیست.");
//       return;
//     }

//     if (form.message.trim().length < 5) {
//       setError("لطفاً پیام خود را کامل‌تر بنویسید.");
//       return;
//     }

//     setSuccess(true);
//     setForm(initialForm);
//   }

//   return (
//     <section
//       id="contact"
//       className="relative overflow-hidden bg-[#20262e] py-14 text-white"
//     >
//       <div className="container grid items-center gap-8 lg:grid-cols-2">
//         <div>
//           <span className="mb-3 inline-flex items-center gap-2 text-sm text-[#e49a68]">
//             <FiPhone />
//             مشاوره و ثبت درخواست
//           </span>

//           <h2 className="text-2xl font-extrabold md:text-3xl">
//             آماده‌اید فضای خود را متحول کنید؟
//           </h2>

//           <p className="mt-4 text-sm leading-8 text-gray-300">
//             مشخصات خود را وارد کنید تا بتوانید درخواست مشاوره خود را ثبت کنید.
//           </p>

//           <a
//             href={`tel:${contactInfo.phone}`}
//             className="btn btn-outline mt-5"
//           >
//             تماس مستقیم با مجموعه
//           </a>
//         </div>

//         <form
//           onSubmit={handleSubmit}
//           className="grid gap-4 rounded-xl border border-white/10 bg-white/[0.04] p-5 sm:grid-cols-2"
//         >
//           <Input
//             label="نام و نام خانوادگی"
//             name="name"
//             placeholder="نام شما"
//             value={form.name}
//             onChange={handleChange}
//             required
//           />

//           <Input
//             label="شماره موبایل"
//             name="phone"
//             type="tel"
//             placeholder="۰۹۱۲۱۲۳۴۵۶۷"
//             value={form.phone}
//             onChange={handleChange}
//             required
//           />

//           <div className="sm:col-span-2">
//             <Input
//               label="شرح درخواست"
//               name="message"
//               placeholder="درباره پروژه خود بنویسید..."
//               textarea
//               value={form.message}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           {error && (
//             <p role="alert" className="text-sm text-red-300 sm:col-span-2">
//               {error}
//             </p>
//           )}

//           {success && (
//             <p role="status" className="flex items-center gap-2 text-sm text-green-300 sm:col-span-2">
//               <FiCheckCircle />
//               فرم از نظر اطلاعات اولیه معتبر است؛ برای ارسال واقعی باید بک‌اند متصل شود.
//             </p>
//           )}

//           <button
//             type="submit"
//             className="btn btn-primary sm:col-span-2"
//           >
//             بررسی و ثبت درخواست
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// }



import {
  FiMapPin,
  FiPhone,
  FiClock,
  FiArrowLeft,
  FiNavigation,
} from "react-icons/fi";
import contactInfo from "@/data/contactInfo";

const contactItems = [
  {
    id: 1,
    title: "آدرس مجموعه",
    description: contactInfo.address || "آدرس کارخانه را از طریق تماس دریافت کنید.",
    icon: FiMapPin,
    action: contactInfo.mapUrl || null,
    actionText: "مسیریابی",
    actionIcon: FiNavigation,
  },
  {
    id: 2,
    title: "تماس با ما",
    description: contactInfo.phone || "شماره تماس ثبت نشده است.",
    icon: FiPhone,
    action: contactInfo.phone
      ? `tel:${contactInfo.phone}`
      : null,
    actionText: "تماس مستقیم",
    actionIcon: FiArrowLeft,
  },
  {
    id: 3,
    title: "ساعات پاسخ‌گویی",
    description: contactInfo.workingHours || "برای اطلاع از ساعات کاری تماس بگیرید.",
    icon: FiClock,
    action: null,
    actionText: null,
    actionIcon: null,
  },
];

export default function ContactCta() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#1f252d] py-16 text-white md:py-24"
    >
      {/* تزئینات پس‌زمینه */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#c8743f]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 right-0 h-72 w-72 rounded-full bg-white/[0.04] blur-3xl" />

      <div className="container relative z-10">
        <div className="mb-10 flex flex-col gap-5 md:mb-12 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#c8743f]/30 bg-[#c8743f]/10 px-4 py-2 text-xs text-[#e49a68] sm:text-sm">
              <FiMapPin size={16} />
              ارتباط با صنایع آلومینیوم آرتین
            </span>

            <h2 className="text-2xl font-black leading-relaxed sm:text-3xl md:text-4xl">
              برای شروع همکاری
              <span className="text-[#e49a68]"> در کنار شما هستیم</span>
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-8 text-gray-400 sm:text-base">
              برای دریافت اطلاعات محصولات، استعلام قیمت و هماهنگی سفارش،
              با مجموعه ما در ارتباط باشید.
            </p>
          </div>

          <div className="hidden h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-[#e49a68] md:flex">
            <FiPhone size={30} />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {contactItems.map((item) => {
            const Icon = item.icon;
            const ActionIcon = item.actionIcon;

            return (
              <div
                key={item.id}
                className="group flex min-h-[220px] flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#c8743f]/50 hover:bg-white/[0.07] sm:p-6"
              >
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#c8743f]/10 text-[#e49a68] transition group-hover:bg-[#c8743f] group-hover:text-white">
                    <Icon size={23} />
                  </div>

                  <span className="text-xs text-white/25">
                    ۰{item.id}
                  </span>
                </div>

                <h3 className="text-base font-bold">{item.title}</h3>

                <p className="mt-3 flex-1 break-words text-sm leading-7 text-gray-400">
                  {item.description}
                </p>

                {item.action && (
                  <a
                    href={item.action}
                    target={
                      item.action.startsWith("https://")
                        ? "_blank"
                        : undefined
                    }
                    rel={
                      item.action.startsWith("https://")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="mt-5 inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#e49a68] transition hover:text-white"
                  >
                    {item.actionText}
                    <ActionIcon size={16} />
                  </a>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-6 flex flex-col gap-4 rounded-2xl border border-[#c8743f]/20 bg-[#c8743f]/[0.08] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div>
            <h3 className="font-bold">تولید با تجربه، همکاری با اعتماد</h3>
            <p className="mt-2 text-sm leading-7 text-gray-400">
              برای بررسی سفارش‌های عمده و مقاطع سفارشی با ما تماس بگیرید.
            </p>
          </div>

          {contactInfo.phone && (
            <a
              href={`tel:${contactInfo.phone}`}
              className="btn btn-primary shrink-0"
            >
              تماس با مجموعه
              <FiArrowLeft />
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
