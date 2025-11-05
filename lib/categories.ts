import { Project, projects } from './projects'

export type Category = {
  slug: string
  name: string
  projectSlugs: string[]
}

export const categories: Category[] = [
  {
    slug: 'user-experience-design',
    name: 'User experience design',
    projectSlugs: ['best-gg', 'game-master', 'paperhive', 'gamer-u', 'tasking','banco-de-bogota']
  },
  {
    slug: 'logos',
    name: 'Logos',
    projectSlugs: ['demons-esports','datagamer','cattleya-gaming', 'rexomg', 'rehelp', 'andres-paredes']
  },
  {
    slug: 'illustrations',
    name: 'Illustrations',
    projectSlugs: ['vallest', 'me', 'papa-emeritus-ii']
  },
  {
    slug: 'esports-team-branding',
    name: 'Esports team branding',
    projectSlugs: ['demons','coffee-beans-clan']
  }
]

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find(category => category.slug === slug)
}

export function getProjectsByCategory(categorySlug: string): Project[] {
  const category = getCategoryBySlug(categorySlug)
  if (!category) {
    return []
  }
  
  return projects.filter(project => 
    category.projectSlugs.includes(project.slug)
  )
}

export function getAllCategorySlugs(): string[] {
  return categories.map(category => category.slug)
}

