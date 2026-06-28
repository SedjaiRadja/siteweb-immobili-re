import { projets } from "@/data/projets";
import { notFound } from "next/navigation";
import ProjectDetails from "@/components/ProjetDetails";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const projet = projets.find((p) => p.slug === slug);

  if (!projet) {
    notFound();
  }

  return <ProjectDetails projet={projet} />;
}
