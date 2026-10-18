
import {
  FiLayers,
  FiGrid,
  FiHome,
  FiMaximize,
} from "react-icons/fi";

const services = [
  {
    id: 1,
    title: "تولید انواع پروفیل آلومینیوم",
    description:
      "تولید پروفیل‌های آلومینیومی برای کاربردهای مختلف صنعتی و ساختمانی.",
    image: "/images/services/electric-shutter.jpg",
    icon: FiGrid,
    features: [
      "مناسب برای کاربردهای صنعتی و ساختمانی",
      "تنوع در شکل و نوع مقطع",
      "بررسی مشخصات فنی سفارش",
      "امکان سفارش عمده",
    ],
  },
  {
    id: 2,
    title: "تولید پروفیل سفارشی",
    description:
      "بررسی و تولید مقاطع آلومینیومی بر اساس نقشه، ابعاد و نیاز مشتری.",
    image: "/images/services/manual-shutter.jpg",
    icon: FiLayers,
    features: [
      "بررسی نقشه و مشخصات فنی",
      "توجه به ابعاد درخواستی",
      "بررسی امکان‌پذیری تولید",
      "تولید بر اساس سفارش تأییدشده",
    ],
  },
  {
    id: 3,
    title: "تولید پروفیل در و پنجره",
    description:
      "تولید پروفیل‌های موردنیاز صنعت در و پنجره آلومینیومی.",
    image: "/images/services/door.jpg",
    icon: FiHome,
    features: [
      "مخصوص صنعت در و پنجره آلومینیومی",
      "تنوع در شکل مقاطع",
      "بررسی ابعاد و مشخصات سفارش",
      "مناسب برای تأمین نیاز تولیدکنندگان",
    ],
  },
  {
    id: 4,
    title: "تولید تیغه کرکره آلومینیومی",
    description:
      "تولید تیغه‌های کرکره آلومینیومی در ابعاد و رنگ‌های قابل سفارش.",
    image: "/images/services/window.jpg",
    icon: FiMaximize,
    features: [
      "تنوع در ابعاد قابل سفارش",
      "امکان انتخاب رنگ",
      "بررسی مشخصات موردنیاز مشتری",
      "هماهنگی جزئیات پیش از ثبت سفارش",
    ],
  },
];

export default services;
