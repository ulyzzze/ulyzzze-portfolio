import React, { useEffect } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import SceneInit from '../SceneInit'
import { ShimmerButton } from '../components/magicui/rainbow-button'

const Hero = () => {
  useEffect(() => {
    const canvas = document.getElementById('myThreeJsCanvas')
    if (!canvas) return

    const scene = new SceneInit('myThreeJsCanvas')
    scene.initialize()
    scene.animate()

    let loadedModel
    const gltfLoader = new GLTFLoader()
    gltfLoader.load(
      '/models/space_boi/scene.gltf',
      (gltfScene) => {
        loadedModel = gltfScene
        loadedModel.scene.scale.set(0.5, 0.5, 0.5)
        loadedModel.scene.position.set(0, -1, -0.3)
        scene.scene.add(gltfScene.scene)
      },
      undefined,
      (error) => console.error('Error loading GLTF:', error)
    )

    const animate = () => {
      if (loadedModel) loadedModel.scene.rotation.y -= 0.001
      requestAnimationFrame(animate)
    }
    animate()

    const handleResize = () => setTimeout(() => scene.onWindowResize(), 100)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden flex flex-col justify-center"
    >
      {/* AI-themed background: subtle grid + gradient orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: '64px 64px',
          }}
        />
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-violet-500/10 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Optional decorative image - kept subtle */}
      <div className="absolute top-0 left-0 z-0 sm:block hidden opacity-20">
        <img src="/images/bg.png" alt="" aria-hidden />
      </div>

      <header className="relative z-10">
        <div className="flex flex-col lg:flex-row pt-24 sm:pt-28 lg:pt-32 pb-20 sm:pb-24 px-4 sm:px-8 lg:px-16 xl:px-24 justify-between items-center lg:items-center gap-12 lg:gap-16">
          {/* Left: copy */}
          <div className="flex flex-col text-center lg:text-left max-w-2xl">
            {/* Badge: spécialisation IA */}
            <div className="inline-flex items-center gap-2 self-center lg:self-start px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-sm font-medium tracking-wide mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
              </span>
              Spécialisation IA & Machine Learning
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold text-white tracking-tight leading-[1.1]">
              <span className="text-white">Ulysse Couchoud</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-300 via-white to-violet-300 bg-clip-text text-transparent">
                Développeur & IA
              </span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-slate-400 leading-relaxed max-w-xl">
              Développeur lyonnais, étudiant à Epitech Lyon. Je conçois des applications web
              et des solutions orientées intelligence artificielle — de l’intégration de modèles
              à l’automatisation des processus.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-10">
              <a href="#projects" className="inline-block">
                <ShimmerButton className="border-cyan-500/30 hover:border-cyan-400/50 hover:bg-cyan-500/10">
                  <span className="text-sm font-medium text-white lg:text-base">
                    Voir mes projets
                  </span>
                </ShimmerButton>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-white/20 text-white/90 text-sm font-medium hover:border-white/40 hover:bg-white/5 hover:text-white transition-all duration-300"
              >
                Me contacter
              </a>
            </div>
          </div>

          {/* Right: 3D scene */}
          <div className="w-full max-w-xl lg:max-w-2xl h-[18rem] sm:h-[22rem] lg:h-[28rem] flex-shrink-0">
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 bg-black/30 backdrop-blur-sm shadow-2xl shadow-cyan-500/5">
              <canvas
                id="myThreeJsCanvas"
                className="w-full h-full block"
                aria-label="Visualisation 3D"
              />
            </div>
          </div>
        </div>
      </header>
    </section>
  )
}

export default Hero
