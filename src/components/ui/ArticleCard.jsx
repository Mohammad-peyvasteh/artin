
import Image from "next/image";
import Link from "next/link";
import { FiArrowLeft, FiCalendar } from "react-icons/fi";

export default function ArticleCard({ article }) {
  return (
    <article className="card">
      <Link href="/#articles" className="block">
        <div className="card-image h-48">
          <Image
            src={article.image}
            alt={article.title}
            fill
            sizes="(max-width: 640px) 100vw, 33vw"
          />
          <span className="absolute right-3 top-3 rounded-md bg-[#c8743f] px-3 py-1 text-xs text-white">
            {article.category}
          </span>
        </div>

        <div className="p-4">
          <span className="flex items-center gap-2 text-xs text-gray-500">
            <FiCalendar />
            {article.date}
          </span>

          <h3 className="mt-3 font-extrabold">{article.title}</h3>

          <p className="mt-2 text-sm leading-7 text-gray-500">
            {article.excerpt}
          </p>

          <span className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-[#c8743f]">
            ادامه مطلب
            <FiArrowLeft />
          </span>
        </div>
      </Link>
    </article>
  );
}
