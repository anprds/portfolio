'use client'

import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import { Category } from '@/lib/categories'
import { Project } from '@/lib/projects'

type CategoryClientProps = {
  category: Category
  projects: Project[]
}

export default function CategoryClient({ category, projects }: CategoryClientProps) {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-2xl mx-auto px-8 py-16 lg:py-24">
        <div className="space-y-4 font-serif text-foreground">
          {/* Breadcrumb */}
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: category.name }
            ]}
          />

          {/* Category Title */}
          <h1 className="text-3xl lg:text-2xl font-medium leading-tight">
            {category.name}
          </h1>

          {/* Projects List */}
          {projects.length > 0 ? (
            <ul className="list-none space-y-1 pl-4">
              {projects.map((project) => (
                <li key={project.slug} className="text-base leading-relaxed">
                  <span className="mr-2">▪</span>
                  {project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline text-foreground hover:no-underline"
                    >
                      {project.title}
                    </a>
                  ) : (
                    <Link
                      href={`/projects/${project.slug}`}
                      className="underline text-foreground hover:no-underline"
                    >
                      {project.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-base leading-relaxed">
              No hay proyectos disponibles en esta categoría.
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

