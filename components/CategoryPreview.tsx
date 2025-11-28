'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Project } from '@/lib/projects'

type CategoryPreviewProps = {
  projects: Project[]
  isVisible: boolean
  mousePosition: { x: number; y: number }
}

export default function CategoryPreview({ projects, isVisible, mousePosition }: CategoryPreviewProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const previewRef = useRef<HTMLDivElement>(null)

  // Limitar a máximo 4 proyectos
  const displayProjects = projects.slice(0, 4)

  useEffect(() => {
    if (!isVisible || !previewRef.current) return

    // Estimar dimensiones basadas en el número de proyectos
    // Cards en formato portrait de 200x300px, apiladas horizontalmente con overlap
    const cardWidth = 100
    const cardHeight = 100
    const overlap = 40 // Cuánto se superponen las cards
    const totalWidth = cardWidth + (displayProjects.length - 1) * (cardWidth - overlap)
    const totalHeight = cardHeight
    
    // Calcular posición adaptativa
    const viewportWidth = window.innerWidth
    const viewportHeight = window.innerHeight
    const offsetX = 20 // Offset desde el cursor
    const offsetY = -totalHeight / 2 // Centrar verticalmente

    let x = mousePosition.x + offsetX
    let y = mousePosition.y + offsetY

    // Ajustar si se sale por la derecha
    if (x + totalWidth > viewportWidth) {
      x = mousePosition.x - totalWidth - offsetX
    }

    // Ajustar si se sale por abajo
    if (y + totalHeight > viewportHeight) {
      y = viewportHeight - totalHeight - 10
    }

    // Ajustar si se sale por arriba
    if (y < 10) {
      y = 10
    }

    // Ajustar si se sale por la izquierda
    if (x < 10) {
      x = 10
    }

    setPosition({ x, y })
  }, [mousePosition, isVisible, displayProjects.length])

  return (
    <AnimatePresence>
      {isVisible && displayProjects.length > 0 && (
        <motion.div
          ref={previewRef}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          style={{
            position: 'fixed',
            left: `${position.x}px`,
            top: `${position.y}px`,
            zIndex: 9999,
            pointerEvents: 'none',
          }}
          className="relative"
        >
          {displayProjects.map((project, index) => {
            const cardWidth = 100
            const cardHeight = 100
            const overlap = 40
            const offsetX = index * (cardWidth - overlap)
            // Rotación ligera para efecto de abanico (más rotación en los extremos)
            const rotation = (index - (displayProjects.length - 1) / 2) * 8
            const zIndex = index + 1 // La última card (derecha) está más arriba
            
            return (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, x: -20, rotate: -10, scale: 0.9 }}
                animate={{ 
                  opacity: 1,
                  x: offsetX,
                  rotate: rotation,
                  scale: 1,
                }}
                exit={{ opacity: 0, x: -20, rotate: -10, scale: 0.9 }}
                transition={{ 
                  delay: index * 0.1,
                  duration: 0.4,
                  type: "spring",
                  stiffness: 200,
                  damping: 20
                }}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  transformOrigin: 'center center',
                  zIndex: zIndex,
                  width: `${cardWidth}px`,
                  height: `${cardHeight}px`,
                }}
                className="rounded-lg overflow-hidden shadow-2xl bg-background border border-border"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={cardWidth}
                  height={cardHeight}
                  className="block w-full h-full object-cover"
                  unoptimized
                />
              </motion.div>
            )
          })}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

