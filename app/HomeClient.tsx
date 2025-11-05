'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function HomeClient() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-2xl mx-auto px-8 py-16 lg:py-24">
        <div className="space-y-4 font-serif text-foreground">
          {/* Profile Photo */}
          <Image
            src="/profile.png"
            alt="Andrés Paredes"
            width={48}
            height={48}
            className="w-12 h-12 object-cover mb-4"
            priority
          />
          
          {/* Name */}
          <h1 className="text-3xl lg:text-2xl font-medium leading-tight">
            Andrés Paredes
          </h1>

          {/* Introduction */}
          <p className="text-base leading-relaxed">
          I’m a UX designer and a fan of “vibe coding”—creative coding just for the joy of making. I work at {' '}
            <Link href="https://mercadolibre.com.co" target="_blank" rel="noopener noreferrer" className="underline text-foreground hover:no-underline">
              Mercado Libre
            </Link>, on the Account Closure team, and previously worked at{' '}
            <Link href="https://crehana.com" target="_blank" rel="noopener noreferrer" className="underline text-foreground hover:no-underline">
              Crehana
            </Link>.
            I have 5+ years designing—<span className="italic font-medium">but a lifetime of creating.</span>
          </p>

          {/* Personal Details */}
          <p className="text-base leading-relaxed">
          I love discovering patterns and sweating the details. I’m a husband, a dog dad, and a gamer; lately i’ve been playing <span className="italic font-medium">Mobile Legends: Bang Bang.</span>
          </p>

          {/* Essays Section */}
          <div className="space-y-2">
            <p className="text-base leading-relaxed">
            Some of the things i work on include:
            </p>
            <ul className="list-none space-y-1 pl-4">
              <li className="text-base leading-relaxed">
                <span className="mr-2">▪</span>
                <Link href="/user-experience-design" className="underline text-foreground hover:no-underline">
                  User experience design
                </Link>
              </li>
              <li className="text-base leading-relaxed">
                <span className="mr-2">▪</span>
                <Link href="/logos" className="underline text-foreground hover:no-underline">
                  Logos
                </Link>
              </li>
              <li className="text-base leading-relaxed">
                <span className="mr-2">▪</span>
                <Link href="/illustrations" className="underline text-foreground hover:no-underline">
                  Illustration
                </Link>
              </li>
              <li className="text-base leading-relaxed">
                <span className="mr-2">▪</span>
                <Link href="/esports-team-branding" className="underline text-foreground hover:no-underline">
                  Esports team branding
                </Link>
              </li>
            </ul>
          </div>

          {/* Call to Action */}
          <p className="text-base leading-relaxed">
          You can check out my{' '}
            <Link href="https://github.com/anprds" target="_blank" rel="noopener noreferrer" className="underline text-foreground hover:no-underline">
              code experiments
            </Link>
            {' '}or{' '}
            <Link href="https://x.com/anprds" target="_blank" rel="noopener noreferrer" className="underline text-foreground hover:no-underline">
              follow along
            </Link>
            . If you’d like to collaborate or learn more about my work, feel free to take a look at my{' '}
            <Link href="https://drive.google.com/file/d/1l9w-yC6fNQ8nQ-BsbPEa-pwk5YIAagUX/view?usp=sharing" target="_blank" rel="noopener noreferrer"  className="underline text-foreground hover:no-underline">
            résumé
            </Link>.
          </p>
        </div>
      </div>
    </div>
  )
}
