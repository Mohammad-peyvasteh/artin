
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: {
    default: "صنایع آلومینیوم آرتین | تولید مقاطع آلومینیومی",
    template: "%s | صنایع آلومینیوم آرتین",
  },

  description:
    "صنایع آلومینیوم آرتین، تولید و تأمین انواع مقاطع آلومینیومی، پروفیل‌های درب و پنجره، لوله‌های آلومینیومی، تیغه کرکره و مقاطع سفارشی بر اساس نقشه و ابعاد موردنیاز مشتری.",

  keywords: [
    "صنایع آلومینیوم آرتین",
    "تولید مقاطع آلومینیومی",
    "پروفیل آلومینیومی",
    "پروفیل درب و پنجره",
    "لوله آلومینیومی",
    "تیغه کرکره آلومینیومی",
    "مقاطع آلومینیومی سفارشی",
    "تأمین عمده پروفیل آلومینیوم",
  ],

  applicationName: "صنایع آلومینیوم آرتین",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    locale: "fa_IR",
    siteName: "صنایع آلومینیوم آرتین",
    title: "صنایع آلومینیوم آرتین | تولید مقاطع آلومینیومی",
    description:
      "تولید و تأمین مقاطع آلومینیومی، پروفیل‌های درب و پنجره، لوله آلومینیومی، تیغه کرکره و مقاطع سفارشی.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
