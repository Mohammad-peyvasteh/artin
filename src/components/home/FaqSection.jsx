
import faqs from "@/data/faqs";
import FaqItem from "@/components/ui/FaqItem";
import SectionTitle from "@/components/ui/SectionTitle";

export default function FaqSection() {
  return (
    <section className="section bg-[#eeece8]">
      <div className="container max-w-4xl">
        <SectionTitle
          title="سؤالات متداول"
          description="پاسخ به پرسش‌های پرتکرار شما"
        />

        <div className="rounded-xl bg-white px-5 shadow-sm md:px-8">
          {faqs.map((faq) => (
            <FaqItem key={faq.id} faq={faq} />
          ))}
        </div>
      </div>
    </section>
  );
}
