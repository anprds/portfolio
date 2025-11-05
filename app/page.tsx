import { Metadata } from 'next'
import HomeClient from './HomeClient'

export const metadata: Metadata = {
  title: 'Inicio',
  description: 'Portafolio personal moderno y responsivo',
}

export default function Home() {
  return <HomeClient />
}
