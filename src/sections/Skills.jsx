import React from 'react'
import ThreeLogoScene from '../components/ThreeLogoScene';

const Skills = () => {
  const skillCategories = [
    {
      title: "Technologies Frontend",
      skills: [
        { name: "React", level: 80, color: "from-blue-400 to-blue-600" },
        { name: "JavaScript", level: 70, color: "from-yellow-400 to-yellow-600" },
        { name: "Three.js", level: 50, color: "from-orange-400 to-red-500" },
        { name: "Tailwind CSS", level: 80, color: "from-cyan-400 to-blue-500" }
      ]
    },
    {
      title: "Technologies Backend",
      skills: [
        { name: "Python", level: 75, color: "from-green-400 to-blue-500" },
        { name: "Node.js / Express", level: 70, color: "from-green-500 to-green-700" },
        { name: "SQL", level: 50, color: "from-gray-400 to-gray-600" },
        { name: "API", level: 80, color: "from-blue-500 to-purple-600" }
      ]
    },
    {
      title: "Outils & DevOps",
      skills: [
        { name: "Git", level: 90, color: "from-orange-500 to-red-600" },
        { name: "VS Code", level: 100, color: "from-blue-500 to-indigo-600" },
        { name: "Linux", level: 85, color: "from-yellow-600 to-orange-500" },
        { name: "Docker ", level: 50, color: "from-blue-400 to-blue-700" }
      ]
    }
  ];

  return (
    <div id='skills' className='relative min-h-screen py-20 px-4 z-10'>
      {/* Subtle background accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Main content */}
      <div className='relative z-20 max-w-7xl mx-auto'>
        {/* Title */}
        <div className='text-center mb-16'>
          <h1 className='lg:text-6xl md:text-5xl text-3xl font-bold text-white mb-4'>
            Compétences
          </h1>
          <div className="w-24 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-6"></div>
          <p className='text-gray-300 text-lg mt-6 max-w-2xl mx-auto'>
            Voici un aperçu de mes compétences techniques et des technologies que je maîtrise
          </p>
        </div>

        {/* 3D Logo Section */}
        <div className='mb-20'>
          {/* <h2 className='text-2xl md:text-3xl font-semibold text-center mb-12 text-gray-200'>
            Technologies Principales
          </h2> */}
          <div className='flex flex-row items-center justify-center gap-5 sm:gap-[3rem] flex-wrap'>
            <div className="group">
              <ThreeLogoScene modelPath="/models/react_logo/scene.gltf" canvasId="reactCanvas" text="React" x={0.8} y={0.8} z={1}/>
              <div className="mt-8 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm text-blue-400">Développement front-end</p>
              </div>
            </div>
            <div className="group">
              <ThreeLogoScene modelPath="/models/python_logo/scene.gltf" canvasId="pythonCanvas" text="Python" x={0.7} y={0.7} z={0.3}/>
              <div className="mt-8 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm text-green-400">Intelligence artificiel et algorithmes</p>
              </div>
            </div>
            <div className="group">
              <ThreeLogoScene modelPath="/models/c_logo/scene.gltf" canvasId="C++Canvas" text="C++" x={0.06} y={0.06} z={0.1}/>
              <div className="mt-8 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm text-blue-300">Programmation système</p>
              </div>
            </div>
            <div className="group">
              <ThreeLogoScene modelPath="/models/git_logo/scene.gltf" canvasId="GitCanvas" text="Git" x={2.8} y={2.8} z={1.3}/>
              <div className="mt-8 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm text-orange-400">Gestion de projets</p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Categories Section */}
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mb-16'>
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-gray-800/50 hover:border-gray-700 transition-all duration-300">
              <h3 className='text-xl font-bold mb-6 text-center text-white'>
                {category.title}
              </h3>
                <div className='space-y-4'>
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className='flex justify-between items-center mb-2'>
                        <span className='text-gray-200 font-medium'>
                          {skill.name}
                        </span>
                        <span className='text-gray-400 text-sm'>
                          {skill.level}%
                        </span>
                      </div>
                      <div className='h-2 bg-gray-800 rounded-full overflow-hidden'>
                        <div 
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                          style={{ 
                            width: `${skill.level}%`,
                            transitionDelay: `${skillIndex * 0.1}s`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className='bg-gradient-to-r from-gray-900/50 to-black-100/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-800'>
          <h3 className='text-2xl font-bold text-center mb-8 text-gray-200'>
            Statistiques
          </h3>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
            <div className='text-center'>
              <div className='text-3xl md:text-4xl font-bold text-blue-400 mb-2'>
                15+
              </div>
              <div className='text-gray-300 text-sm'>
                Technologies
              </div>
            </div>
            <div className='text-center'>
              <div className='text-3xl md:text-4xl font-bold text-green-400 mb-2'>
                30+
              </div>
              <div className='text-gray-300 text-sm'>
                Projets
              </div>
            </div>
            <div className='text-center'>
              <div className='text-3xl md:text-4xl font-bold text-purple-400 mb-2'>
                2+
              </div>
              <div className='text-gray-300 text-sm'>
                Années d'exp.
              </div>
            </div>
            <div className='text-center'>
              <div className='text-3xl md:text-4xl font-bold text-orange-400 mb-2'>
                24/7
              </div>
              <div className='text-gray-300 text-sm'>
                Passion
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills