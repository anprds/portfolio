'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

type HoverPreviewProps = {
  src: string
  alt: string
  isVisible: boolean
  mousePosition: { x: number; y: number }
}

export default function HoverPreview({ src, alt, isVisible, mousePosition }: HoverPreviewProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (!isVisible) return

    // Usar dimensiones estimadas basadas en max-width y max-height
    // Las imágenes se ajustarán con object-contain manteniendo aspect ratio
    const estimatedWidth = 100
    const estimatedHeight = 500
    
    // Calcular posición adaptativa
    const viewportWidth = window.innerWidth
    const viewportHeight = window.innerHeight
    const offsetX = 20 // Offset desde el cursor
    const offsetY = -estimatedHeight / 2 // Centrar verticalmente

    let x = mousePosition.x + offsetX
    let y = mousePosition.y + offsetY

    // Ajustar si se sale por la derecha
    if (x + estimatedWidth > viewportWidth) {
      x = mousePosition.x - estimatedWidth - offsetX
    }

    // Ajustar si se sale por abajo
    if (y + estimatedHeight > viewportHeight) {
      y = viewportHeight - estimatedHeight - 10
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
  }, [mousePosition, isVisible])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
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
          className="rounded-lg overflow-hidden shadow-2xl bg-background border border-border"
        >
          <Image
            src={src}
            alt={alt}
            width={200}
            height={400}
            className="w-auto h-auto max-w-[200px] max-h-[400px] object-contain"
            unoptimized
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

