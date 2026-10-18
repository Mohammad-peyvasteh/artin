
import Image from "next/image";
import { FiStar } from "react-icons/fi";

export default function TestimonialCard({ testimonial }) {
  return (
    <article className="h-full rounded-xl border border-white/15 bg-white/[0.03] p-5 text-white">
      <div className="mb-4 flex items-center gap-3">
        {/* <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border border-white/20">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            fill
            sizes="56px"
            className="object-cover"
          />
        </div> */}

        <div>
          <h3 className="font-bold">{testimonial.name}</h3>
          <p className="text-xs text-gray-400">{testimonial.role}</p>
        </div>
      </div>

      <div className="mb-3 flex gap-1 text-[#e49a68]" aria-label={`${testimonial.rating} از ۵`}>
        {Array.from({ length: testimonial.rating }, (_, index) => (
          <FiStar key={index} fill="currentColor" size={15} />
        ))}
      </div>

      <p className="text-sm leading-8 text-gray-300">{testimonial.text}</p>
    </article>
  );
}
