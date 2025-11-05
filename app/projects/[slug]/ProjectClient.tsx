'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { projects, Project } from '@/lib/projects'

type ProjectClientProps = {
  project: Project
  currentSlug: string
}

export default function ProjectClient({ project, currentSlug }: ProjectClientProps) {
  const currentIndex = projects.findIndex(p => p.slug === currentSlug)
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  }

  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="mb-8"
        >
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-colors"
            aria-label="Volver al portfolio"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al portfolio
          </Link>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          {/* Título Principal */}
          <motion.section variants={itemVariants}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-secondary max-w-2xl">
              {project.shortDescription}
            </p>
          </motion.section>

          {/* Contexto */}
          <motion.section variants={itemVariants} className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-semibold text-foreground">
              Contexto
            </h2>
            <div className="space-y-4 text-foreground/90 leading-relaxed">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">El Problema</h3>
                <p>{project.contexto.problema}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Objetivos</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  {project.contexto.objetivos.map((objetivo, index) => (
                    <li key={index}>{objetivo}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.section>

          {/* Proceso */}
          <motion.section variants={itemVariants} className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-semibold text-foreground">
              Proceso
            </h2>
            <div className="space-y-6 text-foreground/90 leading-relaxed">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Investigación</h3>
                <p>{project.proceso.investigacion}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Diseño</h3>
                <p>{project.proceso.diseño}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Iteraciones</h3>
                <p>{project.proceso.iteraciones}</p>
              </div>
            </div>
          </motion.section>

          {/* Solución */}
          <motion.section variants={itemVariants} className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-semibold text-foreground">
              Solución
            </h2>
            <div className="space-y-6 text-foreground/90 leading-relaxed">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Resultado Final</h3>
                <p>{project.solucion.resultado}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Tecnologías Utilizadas</h3>
                <div className="flex flex-wrap gap-2">
                  {project.solucion.tecnologias.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          {/* Impacto (opcional) */}
          {project.impacto && (
            <motion.section variants={itemVariants} className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-semibold text-foreground">
                Impacto
              </h2>
              <div className="space-y-6 text-foreground/90 leading-relaxed">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Métricas</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    {project.impacto.metricas.map((metrica, index) => (
                      <li key={index}>{metrica}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Logros</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    {project.impacto.logros.map((logro, index) => (
                      <li key={index}>{logro}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.section>
          )}

          {/* Navegación entre proyectos */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-between gap-4 pt-8 border-t border-border"
          >
            {prevProject ? (
              <Link
                href={`/projects/${prevProject.slug}`}
                className="flex items-center gap-2 text-secondary hover:text-primary transition-colors group"
                aria-label={`Proyecto anterior: ${prevProject.title}`}
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <div>
                  <div className="text-xs text-secondary mb-1">Anterior</div>
                  <div className="font-medium">{prevProject.title}</div>
                </div>
              </Link>
            ) : (
              <div></div>
            )}

            {nextProject && (
              <Link
                href={`/projects/${nextProject.slug}`}
                className="flex items-center gap-2 text-secondary hover:text-primary transition-colors group sm:ml-auto"
                aria-label={`Siguiente proyecto: ${nextProject.title}`}
              >
                <div className="text-right">
                  <div className="text-xs text-secondary mb-1">Siguiente</div>
                  <div className="font-medium">{nextProject.title}</div>
                </div>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            )}
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

