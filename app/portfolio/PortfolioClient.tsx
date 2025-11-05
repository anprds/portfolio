'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { projects } from '@/lib/projects'
import { ArrowRight } from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const cardVariants = {
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

export default function PortfolioClient() {
  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight mb-4">
            Portfolio
          </h1>
          <p className="text-xl text-secondary max-w-2xl">
            Una selección de proyectos que demuestran mi enfoque en diseño y desarrollo.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.slug}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              className="group"
            >
              <Link
                href={`/projects/${project.slug}`}
                className="block h-full p-6 sm:p-8 bg-muted/50 rounded-lg border border-border hover:border-primary/50 transition-all duration-300"
                aria-label={`Ver proyecto: ${project.title}`}
              >
                <div className="flex flex-col h-full">
                  <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-secondary mb-6 flex-grow leading-relaxed">
                    {project.shortDescription}
                  </p>
                  <div className="flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                    Ver proyecto
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

