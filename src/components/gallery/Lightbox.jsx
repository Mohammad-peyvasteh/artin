
"use client";

import { useEffect } from "react";
import Image from "next/image";
import { FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function Lightbox({
  images,
  activeIndex,
  onClose,
  onNext,
  onPrevious,
}) {
  useEffect(() => {
    if (activeIndex === null) return;

    function handleKeyDown(event) {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") onNext();
      if (event.key === "ArrowRight") onPrevious();
    }

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeIndex, onClose, onNext, onPrevious]);

  if (activeIndex === null || !images[activeIndex]) return null;

  const current = images[activeIndex];

  return (
    <div
      className="fixed inset-0 z-[120] flex items-center justify-center bg-black/95 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="نمایش تصویر"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="بستن تصویر"
        className="absolute left-4 top-4 z-10 rounded-full bg-white/10 p-3 text-white"
      >
        <FiX size={24} />
      </button>

      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          onPrevious();
        }}
        aria-label="تصویر قبلی"
        className="absolute right-3 z-10 rounded-full bg-white/10 p-3 text-white md:right-8"
      >
        <FiChevronRight size={26} />
      </button>

      <div
        className="relative h-[75vh] w-full max-w-5xl"
        onClick={(event) => event.stopPropagation()}
      >
        <Image
          src={current.image}
          alt={current.title}
          fill
          sizes="95vw"
          className="object-contain"
          priority
        />

        <p className="absolute -bottom-10 inset-x-0 text-center text-sm text-white">
          {current.title}
        </p>
      </div>

      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          onNext();
        }}
        aria-label="تصویر بعدی"
        className="absolute left-3 z-10 rounded-full bg-white/10 p-3 text-white md:left-8"
      >
        <FiChevronLeft size={26} />
      </button>
    </div>
  );
}
