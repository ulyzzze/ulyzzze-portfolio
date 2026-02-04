import React, { useEffect, useState } from 'react'

const Navbar = ({ isProjectModalOpen }) => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`px-4 sm:px-8 lg:px-16 fixed top-0 left-0 right-0 z-40 transition-all duration-300 overflow-hidden ${
        scrolled ? 'py-4 border-b border-white/10 bg-black/50 backdrop-blur-md' : 'py-6'
      } ${isProjectModalOpen ? 'opacity-0 pointer-events-none -translate-y-full' : 'opacity-100 pointer-events-auto translate-y-0'}`}
    >
      <div className="max-w-7xl mx-auto flex flex-row justify-between items-center">
        <a href="#hero" className="text-lg sm:text-xl font-semibold text-white tracking-tight hover:text-cyan-400 transition-colors">
          Ulysse Couchoud
        </a>
        <div className="flex items-center gap-8">
          <a href="#experience" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm font-medium hidden md:inline">
            Expérience
          </a>
          <a href="#skills" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm font-medium hidden md:inline">
            Compétences
          </a>
          <a href="#projects" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm font-medium hidden md:inline">
            Projets
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-4 py-2 rounded-full border border-cyan-500/30 text-cyan-300 text-sm font-medium hover:bg-cyan-500/10 hover:border-cyan-400/50 transition-all duration-300"
          >
            Me contacter
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
