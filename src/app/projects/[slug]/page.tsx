import { notFound } from "next/navigation";
import { projectsData } from "../../../data/projects"; // تأكدي من المسار الصحيح للبيانات
import ProjectDetailClient from "./ProjectDetailClient"; // أو مسار مكون التفاصيل

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  
  // البحث عن المشروع المناسب
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailClient currentProject={project} />;
}