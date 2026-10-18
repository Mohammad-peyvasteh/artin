
import services from "@/data/services";
import ServiceDetailCard from "./ServiceDetailCard";

export default function ServicesList() {
  return (
    <section className="section">
      <div className="container space-y-6">
        {services.map((service) => (
          <ServiceDetailCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
}
