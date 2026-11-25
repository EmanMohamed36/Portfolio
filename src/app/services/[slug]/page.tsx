import { notFound } from "next/navigation";
import { servicesData } from "../../../data/services";
import ServiceDetailClient from "./ServiceDetailClient";

// 1. تصدير المسارات المتاحة
export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

// 2. معالجة الصفحة بشكل يستوعب التحديثات
export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }> | { slug: string };
}) {
  // فك الـ Promise بأمان للتعامل مع أي إصدار Next.js
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  // البحث عن الخدمة المطابقة
  const currentService = servicesData.find((s) => s.slug === slug);

  // إذا لم يجد الخدمة، سنطبع في الـ Terminal للـ Debugging لمعرفة الـ slug القادم
  if (!currentService) {
    console.log("Current requested slug:", slug);
    console.log("Available slugs:", servicesData.map((s) => s.slug));
    notFound();
  }

  return <ServiceDetailClient currentService={currentService} />;
}