
import services from "@/data/services";
import ServiceCard from "@/components/ui/ServiceCard";
import SectionTitle from "@/components/ui/SectionTitle";

export default function ServicesSection() {
  return (
    <section className="section">
      <div className="container">
        <SectionTitle
          title="خدمات ما"
          description="ارائه راهکارهای متنوع برای پروژه‌های ساختمانی شما"
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
