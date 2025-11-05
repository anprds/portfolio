'use client'

import { useState, useEffect } from 'react'

export type Theme = 'light' | 'dark'

export function useTheme() {
  const [theme, setTheme] = useState<Theme>('light')

  useEffect(() => {
    // Determinar tema inicial basado en la hora actual
    const getThemeFromTime = (): Theme => {
      const hour = new Date().getHours()
      // Tema oscuro de 18:00 (6 PM) a 6:00 (6 AM)
      // Tema claro de 6:00 (6 AM) a 18:00 (6 PM)
      return hour >= 18 || hour < 6 ? 'dark' : 'light'
    }

    setTheme(getThemeFromTime())

    // Actualizar tema cada minuto
    const interval = setInterval(() => {
      setTheme(getThemeFromTime())
    }, 60000) // Cada minuto

    // Verificar cada vez que cambia la hora
    const checkHourChange = () => {
      setTheme(getThemeFromTime())
    }

    // Verificar cuando la página se vuelve visible
    document.addEventListener('visibilitychange', checkHourChange)

    return () => {
      clearInterval(interval)
      document.removeEventListener('visibilitychange', checkHourChange)
    }
  }, [])

  useEffect(() => {
    // Aplicar tema al documento
    const root = document.documentElement
    root.setAttribute('data-theme', theme)
  }, [theme])

  return theme
}

