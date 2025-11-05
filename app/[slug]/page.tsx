import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import {
  getCategoryBySlug,
  getProjectsByCategory,
  getAllCategorySlugs
} from '@/lib/categories'
import CategoryClient from './CategoryClient'

type PageProps = {
  params: {
    slug: string
  }
}

// Reserved routes that should not be handled by this dynamic route
const reservedRoutes = ['portfolio', 'projects']

export default function CategoryPage({ params }: PageProps) {
  // Check if slug is a reserved route
  if (reservedRoutes.includes(params.slug)) {
    notFound()
  }

  const category = getCategoryBySlug(params.slug)

  if (!category) {
    notFound()
  }

  const projects = getProjectsByCategory(params.slug)

  return <CategoryClient category={category} projects={projects} />
}

export function generateStaticParams() {
  return getAllCategorySlugs().map((slug) => ({
    slug,
  }))
}

export function generateMetadata({ params }: PageProps): Metadata {
  const category = getCategoryBySlug(params.slug)

  if (!category) {
    return {
      title: 'Categoría no encontrada',
    }
  }

  return {
    title: `${category.name} | Portafolio`,
    description: `Trabajos relacionados con ${category.name}`,
    openGraph: {
      title: category.name,
      description: `Trabajos relacionados con ${category.name}`,
      type: 'website',
    },
  }
}

