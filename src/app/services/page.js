
import PageBanner from "@/components/ui/PageBanner";
import ServicesList from "@/components/services/ServicesList";
import GallerySection from "@/components/gallery/GallerySection";
import ContactCta from "@/components/home/ContactCta";

export const metadata = {
  title: "محصولات و خدمات تولیدی | صنایع آلومینیوم آرتین",
  description:
    "آشنایی با محصولات صنایع آلومینیوم آرتین؛ تولید و تأمین عمده مقاطع آلومینیومی، پروفیل‌های درب و پنجره، لوله آلومینیومی، تیغه کرکره و مقاطع سفارشی.",
};

export default function ServicesPage() {
  return (
    <>
      <PageBanner
        title="محصولات و توانمندی‌های تولیدی آرتین"
        description="تولید و تأمین انواع مقاطع آلومینیومی، پروفیل‌های درب و پنجره، لوله و تیغه کرکره، همراه با امکان بررسی سفارش‌های سفارشی بر اساس نقشه و ابعاد موردنیاز مشتری."
      />

      <ServicesList />
      <GallerySection />
      <ContactCta />
    </>
  );
}
