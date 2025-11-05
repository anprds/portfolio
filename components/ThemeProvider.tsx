'use client'

import { useTheme } from '@/lib/useTheme'
import { createContext, useContext, ReactNode } from 'react'

type ThemeContextType = {
  theme: 'light' | 'dark'
}

const ThemeContext = createContext<ThemeContextType>({ theme: 'light' })

export function ThemeProvider({ children }: { children: ReactNode }) {
  const theme = useTheme()

  return (
    <ThemeContext.Provider value={{ theme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useThemeContext() {
  return useContext(ThemeContext)
}

