import React from 'react'
import { ShimmerButton } from '../components/magicui/rainbow-button'
import ColorBends from '../components/ColorBends'

const CV_PDF_URL = '/CV_ULYSSE_COUCHOUD.pdf'

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8"
    >
      {/* Couche fond (derrière le contenu) */}
      <div className="absolute inset-0 z-0">
        <ColorBends
          colors={["#ff5c7a", "#8a5cff", "#00ffd1"]}
          rotation={0}
          speed={0.2}
          scale={1}
          frequency={1}
          warpStrength={1}
          mouseInfluence={0}
          parallax={0.5}
          noise={0.1}
          transparent
          autoRotate={0}
          color="white"
        />
      </div>
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: '72px 72px',
          }}
        />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-white/[0.03] rounded-full blur-[100px]" />
        <div className="absolute bottom-1/3 left-0 w-[300px] h-[300px] bg-white/[0.02] rounded-full blur-[80px]" />
      </div>

      {/* Contenu au premier plan */}
      <header className="relative z-10 w-full max-w-4xl mx-auto text-center pt-24 pb-32">

        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/30 border border-white/20 text-slate-200 text-sm font-medium tracking-wide mb-10 backdrop-blur-sm"
          style={{ textShadow: '0 1px 2px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.5)' }}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white/60 opacity-70" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white/80" />
          </span>
          Spécialisation IA & Machine Learning
        </div>

        {/* Title */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white tracking-tight leading-[1.05]"
          style={{
            textShadow: '0 0 30px rgba(0,0,0,0.9), 0 0 60px rgba(0,0,0,0.7), 0 2px 4px rgba(0,0,0,0.9), 0 4px 12px rgba(0,0,0,0.6)',
          }}
        >
          Ulysse Couchoud
        </h1>
        <p
          className="mt-5 text-xl sm:text-2xl md:text-3xl text-slate-200 font-light tracking-tight"
          style={{ textShadow: '0 0 20px rgba(0,0,0,0.8), 0 1px 3px rgba(0,0,0,0.8), 0 2px 8px rgba(0,0,0,0.5)' }}
        >
          Développeur fullstack & IA
        </p>

        {/* Divider */}
        <div className="w-16 h-px bg-white/40 mx-auto mt-10 mb-10 drop-shadow-[0_0_8px_rgba(0,0,0,0.8)]" />

        {/* Description */}
        <p
          className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-light"
          style={{ textShadow: '0 0 16px rgba(0,0,0,0.7), 0 1px 2px rgba(0,0,0,0.8)' }}
        >
          Je conçois des applications web et des solutions orientées intelligence
          artificielle — de l’intégration de modèles à l’automatisation des processus.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap justify-center gap-4 mt-14">
          <a href="#projects" className="inline-block">
            <ShimmerButton className="border-white/40 hover:border-white/60 hover:bg-white/15 shadow-[0_0_20px_rgba(0,0,0,0.4)]">
              <span className="text-sm font-medium text-white lg:text-base drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                Voir mes projets
              </span>
            </ShimmerButton>
          </a>
          <a
            href={CV_PDF_URL}
            download
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-white/30 text-white text-sm font-medium hover:border-white/50 hover:bg-white/10 transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.3)] [text-shadow:0_1px_2px_rgba(0,0,0,0.8)]"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Télécharger mon CV
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-white/30 text-white text-sm font-medium hover:border-white/50 hover:bg-white/10 transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.3)] [text-shadow:0_1px_2px_rgba(0,0,0,0.8)]"
          >
            Me contacter
          </a>
        </div>

        {/* Scroll indicator */}
        <a
          href="#experience"
          className="inline-flex flex-col items-center gap-2 mt-20 text-slate-300 hover:text-white transition-colors"
          style={{ textShadow: '0 0 12px rgba(0,0,0,0.6), 0 1px 2px rgba(0,0,0,0.8)' }}
          aria-label="Défiler vers le bas"
        >
          <span className="text-xs font-medium tracking-widest uppercase">Découvrir</span>
          <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </header>
    </section>
  )
}

export default Hero
