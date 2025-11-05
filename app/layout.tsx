import type { Metadata } from 'next'
import { STIX_Two_Text } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

const stixTwoText = STIX_Two_Text({
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-stix-two-text',
})

export const metadata: Metadata = {
  title: {
    default: 'Portafolio Personal',
    template: '%s | Portafolio Personal',
  },
  description: 'Portafolio personal moderno y responsivo',
  keywords: ['portafolio', 'diseño', 'desarrollo', 'web', 'Next.js', 'React', 'TypeScript'],
  authors: [{ name: 'Tu Nombre' }],
  creator: 'Tu Nombre',
  openGraph: {
    title: 'Portafolio Personal',
    description: 'Portafolio personal moderno y responsivo',
    type: 'website',
    locale: 'es_ES',
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${stixTwoText.variable} font-serif antialiased`}>
        <ThemeProvider>
          <main>
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}

