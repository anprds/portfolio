import { Metadata } from 'next'
import PortfolioClient from './PortfolioClient'

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Una selección de proyectos que demuestran mi enfoque en diseño y desarrollo.',
}

export default function PortfolioPage() {
  return <PortfolioClient />
}
