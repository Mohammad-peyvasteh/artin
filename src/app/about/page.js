
import PageBanner from "@/components/ui/PageBanner";
import CompanyStory from "@/components/about/CompanyStory";
import Values from "@/components/about/Values";
import Certificates from "@/components/about/Certificates";
import Team from "@/components/about/Team";

export const metadata = {
  title: "درباره ما | صنایع آلومینیوم آرتین",
  description:
    "با صنایع آلومینیوم آرتین، زمینه فعالیت، رویکرد تولید، تنوع مقاطع آلومینیومی و فرایند همکاری برای سفارش‌های استاندارد و سفارشی آشنا شوید.",
};

export default function AboutPage() {
  return (
    <>
      <PageBanner
        title="درباره صنایع آلومینیوم آرتین"
        description="تولید و تأمین مقاطع آلومینیومی با تمرکز بر تنوع محصولات، بررسی نیاز مشتری و امکان سفارش‌سازی بر اساس نقشه و ابعاد موردنیاز؛ با رویکردی مبتنی بر تجربه در تولید و اعتماد در همکاری."
      />

      <CompanyStory />
      <Values />
      <Certificates />
      {/* <Team /> */}
    </>
  );
}
