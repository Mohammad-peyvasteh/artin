
"use client";

import { useCallback, useState } from "react";
import Image from "next/image";
import { FiMaximize2 } from "react-icons/fi";
import gallery from "@/data/gallery";
import Lightbox from "./Lightbox";
import SectionTitle from "@/components/ui/SectionTitle";

export default function GallerySection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const closeLightbox = useCallback(() => {
    setActiveIndex(null);
  }, []);

  const nextImage = useCallback(() => {
    setActiveIndex((index) =>
      index === null ? null : (index + 1) % gallery.length
    );
  }, []);

  const previousImage = useCallback(() => {
    setActiveIndex((index) =>
      index === null
        ? null
        : (index - 1 + gallery.length) % gallery.length
    );
  }, []);

  return (
    <section className="section">
      <div className="container">
        <SectionTitle
          title="گالری تصاویر"
          description="مشاهده تصاویر محصولات و پروژه‌ها"
        />

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {gallery.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              className="group relative overflow-hidden rounded-xl text-right"
              aria-label={`نمایش ${item.title}`}
            >
              <div className="relative h-48 md:h-64">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 flex items-end justify-between bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                  <span className="text-sm font-bold">{item.title}</span>
                  <FiMaximize2 />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <Lightbox
        images={gallery}
        activeIndex={activeIndex}
        onClose={closeLightbox}
        onNext={nextImage}
        onPrevious={previousImage}
      />
    </section>
  );
}
