
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import navLinks from "@/data/navLinks";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="hidden items-center gap-6 lg:flex">
      {navLinks.map((item) => {
        const active = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`text-sm transition hover:text-[#c8743f] ${
              active ? "font-bold text-[#c8743f]" : "text-white"
            }`}
          >
            {item.title}
          </Link>
        );
      })}
    </nav>
  );
}
