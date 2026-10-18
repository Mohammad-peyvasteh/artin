
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiMenu, FiPhone } from "react-icons/fi";
import Navbar from "./Navbar";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="absolute inset-x-0 top-3 z-50">
        <div className="container">
          <div className="flex min-h-[66px] items-center justify-between gap-4 rounded-2xl border border-white/15 bg-[#1f252d]/90 px-4 text-white shadow-lg backdrop-blur-md md:px-6">
            <Link
              href="/"
              className="flex shrink-0 items-center gap-2"
              aria-label="صفحه اصلی آرمان آلومینیوم"
            >
              <Image
                src="/logo.PNG"
                alt="لوگوی آرمان آلومینیوم"
                width={100}
                height={42}
                className="h-12 w-12 object-contain"
                priority
              />

              {/* <span className="text-sm font-extrabold leading-5">
                آرمان آلومینیوم
                <span className="block text-[10px] font-normal text-gray-300">
                  کیفیت، دوام و زیبایی
                </span>
              </span> */}
            </Link>

            <Navbar />

            <div className="hidden shrink-0 items-center gap-3 sm:flex">
              <Link href="/#contact" className="btn btn-primary  ">
                <FiPhone />
                مشاوره رایگان
              </Link>
            </div>

            <button
              type="button"
              className="rounded-lg border border-white/15 p-2 lg:hidden"
              aria-label="باز کردن منو"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(true)}
            >
              <FiMenu size={23} />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
