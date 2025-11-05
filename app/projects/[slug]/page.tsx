import { notFound } from 'next/navigation'
import { getProjectBySlug, getAllProjectSlugs, projects } from '@/lib/projects'
import ProjectClient from './ProjectClient'

type PageProps = {
  params: {
    slug: string
  }
}

export default function ProjectPage({ params }: PageProps) {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    notFound()
  }

  return <ProjectClient project={project} currentSlug={params.slug} />
}

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({
    slug,
  }))
}

export function generateMetadata({ params }: PageProps) {
  const project = getProjectBySlug(params.slug)
  
  if (!project) {
    return {
      title: 'Proyecto no encontrado',
    }
  }

  return {
    title: `${project.title} | Portfolio`,
    description: project.shortDescription,
    openGraph: {
      title: project.title,
      description: project.shortDescription,
      type: 'website',
    },
  }
}
