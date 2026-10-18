
"use client";

import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

export default function FaqItem({ faq }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        type="button"
        className="flex w-full items-center justify-between gap-4 py-4 text-right font-bold"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span>{faq.question}</span>

        <span className="shrink-0 text-[#c8743f]">
          {open ? <FiMinus size={18} /> : <FiPlus size={18} />}
        </span>
      </button>

      {open && (
        <p className="pb-4 text-sm leading-8 text-gray-500">
          {faq.answer}
        </p>
      )}
    </div>
  );
}
