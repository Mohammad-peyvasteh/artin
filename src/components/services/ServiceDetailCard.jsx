
import Image from "next/image";
import Link from "next/link";
import { FiCheckCircle, FiArrowLeft } from "react-icons/fi";

export default function ServiceDetailCard({ service }) {
  const Icon = service.icon;

  return (
    <article className="card grid md:grid-cols-2">
      <div className="card-image relative min-h-64">
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      <div className="p-6 md:p-8">
        <div className="mb-4 flex items-center gap-3">
          <span className="rounded-xl bg-[#c8743f]/10 p-3 text-[#c8743f]">
            <Icon size={25} />
          </span>

          <h2 className="text-xl font-extrabold">{service.title}</h2>
        </div>

        <p className="text-sm leading-8 text-gray-500">
          {service.description}. برای انتخاب محصول مناسب، شرایط محل نصب،
          ابعاد و نیازهای پروژه باید بررسی شوند.
        </p>

        <ul className="mt-5 space-y-3">
          {service.features.map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-2 text-sm text-gray-600"
            >
              <FiCheckCircle className="shrink-0 text-[#c8743f]" />
              {feature}
            </li>
          ))}
        </ul>

        <Link href="/#contact" className="btn btn-primary mt-6">
          درخواست مشاوره
          <FiArrowLeft />
        </Link>
      </div>
    </article>
  );
}
