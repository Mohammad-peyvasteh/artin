
import Image from "next/image";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

export default function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <article className="card group">
      <Link href="/services" className="block">
        <div className="card-image h-48">
          <Image
            src={service.image}
            alt={service.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        </div>

        <div className="relative px-4 pb-5 pt-8 text-center">
          <span className="absolute -top-5 right-1/2 flex h-11 w-11 translate-x-1/2 items-center justify-center rounded-full border-4 border-white bg-[#c8743f] text-white">
            <Icon size={20} />
          </span>

          <h3 className="mb-2 font-extrabold">{service.title}</h3>

          <p className="text-xs text-gray-500">{service.description}</p>

          <span className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-[#c8743f]">
            مشاهده خدمات
            <FiArrowLeft />
          </span>
        </div>
      </Link>
    </article>
  );
}
