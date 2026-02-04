import React from 'react'
import ThreeLogoScene from '../components/ThreeLogoScene'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Technologies Frontend',
      skills: ['React', 'JavaScript', 'Three.js', 'Tailwind CSS'],
    },
    {
      title: 'Technologies Backend',
      skills: ['Python', 'Node.js / Express', 'SQL', 'API REST'],
    },
    {
      title: 'IA & Data',
      skills: ['PyTorch', 'Deep Learning', 'Segmentation', 'Numpy'],
    },
    {
      title: 'Outils & DevOps',
      skills: ['Git', 'Linux', 'Docker', 'Ansible'],
    },
  ]

  return (
    <section id="skills" className="relative min-h-screen py-24 px-4 z-10">
      {/* Background: grid + orbs (thème IA) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.4) 1px, transparent 1px)
            `,
            backgroundSize: '48px 48px',
          }}
        />
        <div className="absolute top-20 left-10 w-72 h-72 bg-violet-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Compétences
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full mx-auto mb-6" />
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Technologies et outils que je maîtrise
          </p>
        </div>

        {/* 3D Logos */}
        <div className="mb-20">
          <div className="flex flex-row items-center justify-center gap-5 sm:gap-12 flex-wrap">
            <div className="group">
              <ThreeLogoScene modelPath="/models/react_logo/scene.gltf" canvasId="reactCanvas" text="React" x={0.8} y={0.8} z={1} />
              <div className="mt-6 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm text-cyan-400">Développement front-end</p>
              </div>
            </div>
            <div className="group">
              <ThreeLogoScene modelPath="/models/python_logo/scene.gltf" canvasId="pythonCanvas" text="Python" x={0.7} y={0.7} z={0.3} />
              <div className="mt-6 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm text-cyan-400">IA & algorithmes</p>
              </div>
            </div>
            <div className="group">
              <ThreeLogoScene modelPath="/models/c_logo/scene.gltf" canvasId="C++Canvas" text="C++" x={0.06} y={0.06} z={0.1} />
              <div className="mt-6 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm text-cyan-400">Programmation système</p>
              </div>
            </div>
            <div className="group">
              <ThreeLogoScene modelPath="/models/git_logo/scene.gltf" canvasId="GitCanvas" text="Git" x={2.8} y={2.8} z={1.3} />
              <div className="mt-6 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm text-cyan-400">Gestion de versions</p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills by category – noms uniquement */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-black/30 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-cyan-500/20 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold mb-4 text-white border-b border-white/10 pb-3">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2 rounded-full text-sm font-medium text-slate-300 bg-white/5 border border-white/10 hover:border-cyan-500/30 hover:text-cyan-300 transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <h3 className="text-xl font-semibold text-center mb-8 text-white">
            En bref
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent mb-2">
                15+
              </div>
              <div className="text-slate-400 text-sm">Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-violet-400 to-violet-600 bg-clip-text text-transparent mb-2">
                30+
              </div>
              <div className="text-slate-400 text-sm">Projets</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-2">
                2+
              </div>
              <div className="text-slate-400 text-sm">Années d'exp.</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent mb-2">
                IA
              </div>
              <div className="text-slate-400 text-sm">Spécialisation</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
