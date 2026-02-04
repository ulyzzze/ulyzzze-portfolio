import React, { useState } from 'react'

const Projetcs = ({ onModalStateChange }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Robocar",
      description: "Développement d'une IA capable de segmenter la route à partir d'images pour générer un masque exploitable par raycasting 2D. L'objectif est de permettre à une voiture équipée d'une caméra de suivre un circuit de manière autonome.",
      fullDescription: `Ce projet consiste en la création d'une intelligence artificielle avancée capable de comprendre et de segmenter les éléments routiers à partir d'images capturées en temps réel.

        L'IA utilise des techniques de deep learning pour analyser chaque pixel de l'image grâce au modèle U-Net et créer un masque binaire précis de la route. 
        Ce masque est ensuite exploité par un système de raycasting 2D qui permet d'envoyer les données à une autre IA qui indiquera à la voiture quel action à effectuer sur un circuit en temps réel. 

        Le projet inclut également un simulateur Unity pour tester et valider les performances de l'IA dans différents environnements virtuels.`,
      technologies: ["Python", "Numpy", "PyTorch", "Unity"],
      images: [
        "/images/robocar_car.jpeg",
        "/images/robocar_raycast.png"
      ],
      githubLink: "https://github.com/ulyzzze/mask_generator",
      liveLink: "#",
      status: "Terminé",
      duration: "4 mois",
      team: "6 personnes",
      challenges: [
        "Optimisation des performances de l'IA",
        "Précision de la segmentation dans différentes conditions d'éclairage",
        "Obtenir un modèle le moins lourd possible"
      ],
      achievements: [
        "IA capable de segmenter des images réels",
        "Raycast fonctionnel et entièrement modifiable",
        "Navigation autonome réussie sur différents circuit via simulateur"
      ]
    },
    {
      id: 2,
      title: "Spotiflyx",
      description: "Service de streaming musical permettant aux utilisateurs d'écouter de la musique en ligne via l'API de Spotify. Spotiflyx offre également la possibilité aux utilisateurs de regarder des vidéos YouTube directement depuis le site. ",
      fullDescription: `Spotiflyx est un service de streaming musical permettant aux utilisateurs d'écouter de la musique en ligne via l'API de Spotify. Mais ce n'est pas tout ! Spotiflyx offre également la possibilité aux utilisateurs de regarder des vidéos YouTube directement depuis le site.
      
        Objectif du projet 🎯
    
        -Réaliser une application web complète en utilisant les technologies modernes du web
        -Mettre en pratique les connaissances acquises au cours de la formation
        -Travail en équipe
        -Découvrir les bases d'implémentation d'API externes
        -Construire un serveur robuste et sécurisé
        -Découvrir les bases de données SQL
        -Réaliser un projet complet de A à Z à partir d'une liste de users stories`,
      technologies: ["React", "PostgreSQL", "Node.js", "Docker"],
      images: [
        "/images/spotiflyx.png",
        "/images/spotiflyx_website.png"
      ],
      githubLink: "https://github.com/ulyzzze/spotiflyx",
      liveLink: "#",
      status: "Terminé",
      duration: "1 mois",
      team: "2 personne",
      challenges: [
        "Gestion des API Youtube et Spotify",
        "Utilisation de Docker",
        "Gestion de base de donnée SQL"
      ],
      achievements: [
        "Création de compte sur la platform",
        "Visionnage et publication de vidéos youtube",
        "Intéraction entre utilisateurs (likes, sauvegarde de vidéos etc.)"
      ]
    },
    {
      id: 3,
      title: "Raytracer",
      description: "Ce Raytracer est un système de rendu graphique informatique développé en C++ qui crée des images photoréalistes en simulant le comportement physique de la lumière depuis une scène de configuration.",
      fullDescription: `Ce Raytracer est un système de rendu graphique informatique développé en C++ qui crée des images photoréalistes en simulant le comportement physique de la lumière. Il utilise une technique appelée « ray tracing » (traçage de rayons), qui trace le chemin des rayons lumineux à travers une scène et calcule leurs interactions avec des objets virtuels afin de générer des images réalistes.

      Contrairement à la rastérisation (qui projette des objets 3D sur un plan 2D), le ray tracing simule la physique réelle de la lumière pour créer des ombres, des reflets et d'autres effets optiques plus précis. Cela le rend particulièrement adapté à la génération d'images de haute qualité avec un éclairage réaliste.
      
      (Voir documentation Github pour plus d'infos)`,
      technologies: ["C++"],
      images: [
        "/images/raytracer_rectangle.png",
        "/images/raytracer_cone.png"
        
      ],
      githubLink: "https://github.com/ulyzzze/raytracer",
      liveLink: "#",
      status: "Terminé",
      duration: "1 mois",
      team: "4 personnes",
      challenges: [
        "Application de formules mathématiques",
        "Parsing d'un fichier de config",
        "Projection d'ombres en fonction des placements de lumières"
      ],
      achievements: [
        "Ajout de 7 formes géométriques entièrement modifiable (couleur, taille etc.)",
        "Ajout de +10 différents matériaux (verre, plastique, etc.)",
        "Ajout de texture sur les formes (images)",
        "Ajout de lumières ambiantes et directionnels"
      ]
    },
    {
      id: 4,
      title: "My-RPG",
      description: "Un RPG complet développé en C avec CSFML, inspiré des classiques du genre, comprenant un système de combat, d'inventaire, de quêtes, de boss ainsi qu'une carte interactive.",
      fullDescription: "My-RPG est un jeu de rôle (RPG) développé en C avec la bibliothèque CSFML. Le projet consiste à recréer un RPG classique avec une carte interactive, des combats au tour par tour, un système d'inventaire, de gestion d'expérience et de quêtes. Le jeu propose également des PNJ, des dialogues, des objets à ramasser, et une interface graphique personnalisée.",
      technologies: ["C", "CSFML"],
      images: [
        "/images/my_rpg.png",
        "/images/entrainement.jpg"
      ],
      githubLink: "https://github.com/ulyzzze/my-rpg",
      liveLink: "#",
      status: "Terminé",
      duration: "1 mois",
      team: "4 personnes",
      challenges: [
        "Implémentation d'un système de combat au tour par tour",
        "Gestion de l'inventaire et des objets ramassables",
        "Système de sauvegarde et chargement de la progression",
      ],
      achievements: [
        "Réalisation d'un RPG jouable de A à Z",
        "Système de combat fonctionnel et équilibré",
        "Implémentation d'un système de quêtes et de dialogues avec PNJ",
        "Gestion de l'inventaire et des objets",
        "Animation de sprites"
      ]
    },
    {
      id: 5,
      title: "Octopus",
      description: "Déploiement automatisé d'une infrastructure distribuée (Redis, PostgreSQL, applications web) à l'aide d'Ansible. Ce projet DevOps consistait à configurer des machines virtuelles, écrire des rôles Ansible réutilisables et orchestrer le déploiement complet d'une application de vote distribuée.",
      fullDescription: `Octopus est un projet DevOps dont l'objectif principal était de mettre en place une infrastructure distribuée complète à l'aide d'Ansible. Le projet consistait à configurer plusieurs machines virtuelles (VM) pour héberger différents services : une base de données PostgreSQL, un serveur Redis, ainsi que plusieurs applications web (poll, result, worker).

Nous avons conçu et écrit des rôles Ansible modulaires pour automatiser l'installation, la configuration et la gestion de chaque composant. L'infrastructure devait être facilement redéployable et maintenable, avec une gestion centralisée de la configuration. Le projet incluait également la gestion des variables d'environnement, la sécurisation des accès, et la documentation de chaque étape du déploiement.

Ce projet a permis de mettre en pratique les concepts d'infrastructure as code (IaC), d'automatisation, et de gestion de configuration à grande échelle.`,
      technologies: ["Ansible"],
      images: [
        "/images/octopus_project.png",
        "/images/devops.png"
      ],
      githubLink: "https://github.com/ulyzzze/octopus/tree/main",
      liveLink: "#",
      status: "Terminé",
      duration: "3 semaines",
      team: "2 personnes",
      challenges: [
        "Automatisation du déploiement de services sur plusieurs machines virtuelles",
        "Gestion des dépendances et de l'ordre d'exécution des tâches",
        "Sécurisation des accès et gestion des variables sensibles",
        "Débogage et validation de l'infrastructure distribuée"
      ],
      achievements: [
        "Création de rôles Ansible personnalisés pour chaque service (PostgreSQL, Redis, applications web)",
        "Documentation détaillée du processus de déploiement",
        "Infrastructure reproductible et facilement maintenable",
      ]
    },
    {
      id: 6,
      title: "Zappy",
      description: "Le but du projet Zappy est de concevoir un serveur de jeu multijoueur ainsi que des clients automatisés (des IA) capables de jouer de manière autonome sur ce serveur. Les IA doivent collecter des ressources, évoluer de niveau, coopérer ou rivaliser avec d’autres, et surtout réaliser des rituels d'incantation pour gagner la partie.",
      fullDescription: `Le projet consiste à développer un serveur de jeu multijoueur en C, capable de gérer des clients connectés simultanément dans un environnement persistant. L’objectif principal est de créer un monde virtuel où des joueurs, incarnés par des IA autonomes, doivent évoluer en collectant des ressources, coopérer avec d’autres, et effectuer des rituels d’incantation pour monter en niveau et remporter la partie.

Le serveur doit gérer la communication réseau, la gestion de la carte et la synchronisation des actions des joueurs en temps réel. Les clients IA, quant à eux, doivent être capables de prendre des décisions de manière autonome en analysant les informations reçues du serveur.

Le projet met donc l’accent sur la programmation réseau, la gestion de la concurrence, et le développement d’intelligences artificielles stratégiques..`,
      technologies: ["Rust", "SFML", "C"],
      images: [
        "/images/rust.png",
        "/images/ia.png"
      ],
      githubLink: "https://github.com/ulyzzze/zappy",
      liveLink: "#",
      status: "Terminé",
      duration: "1 mois",
      team: "6 personnes",
      challenges: [
        "Développement d'IA autonomes en Rust capables de prendre des décisions en temps réel",
        "Gestion de la communication réseau asynchrone avec le serveur de jeu",
        "Coordination et coopération entre plusieurs IA pour réaliser des rituels complexes",
        "Gestion des états concurrents et des priorités d'action",
      ],
      achievements: [
        "Création d'une IA robuste et évolutive en Rust, capable de jouer de façon totalement autonome",
        "Implémentation d'une logique de coopération entre IA pour maximiser les chances de victoire",
        "Gestion intelligente de l'inventaire, des priorités et des déplacements sur la carte",
      ]
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Terminé":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "En cours":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  const openProjectModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
    onModalStateChange?.(true); // Notify parent that modal is open
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
    onModalStateChange?.(false); // Notify parent that modal is closed
  };

  return (
    <div id='projects' className='relative min-h-screen py-20 px-4'>
      {/* Subtle background accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 right-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className='relative z-10 max-w-7xl mx-auto'>
        {/* Title */}
        <div className='text-center mb-16'>
          <h1 className='lg:text-6xl md:text-5xl text-3xl font-bold text-white mb-4'>
            Projets
          </h1>
          <div className="w-24 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-6"></div>
          <p className='text-gray-300 text-lg mt-6 max-w-2xl mx-auto'>
            Ceci est un regroupement de projets que j'ai pu réaliser lors de mes deux premières années à Epitech
          </p>
        </div>

        {/* Projects Grid */}
        <div className='grid lg:grid-cols-2 xl:grid-cols-3 gap-8'>
          {projects.map((project, index) => (
            <div key={project.id} className="group">
              <div className="bg-black/40 backdrop-blur-sm rounded-xl border border-gray-800/50 hover:border-gray-700 transition-all duration-300 relative overflow-hidden h-full cursor-pointer" onClick={() => openProjectModal(project)}>
                <div className="relative z-10 p-6 h-full flex flex-col">
                  {/* Status Badge */}
                  <div className="flex justify-between items-start mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                    <div className="text-gray-400 text-sm">#{project.id.toString().padStart(2, '0')}</div>
                  </div>

                  {/* Images Section */}
                  <div className="mb-6">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="aspect-video bg-gray-800 rounded-xl overflow-hidden group-hover:scale-105 transition-transform duration-300">
                        <img 
                          src={project.images[0]} 
                          alt={`${project.title} - Image 1`}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEyMCIgZmlsbD0iIzM3NDE1MSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM5Q0EzQUYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5JbWFnZSAxPC90ZXh0Pjwvc3ZnPg==';
                          }}
                        />
                      </div>
                      <div className="aspect-video bg-gray-800 rounded-xl overflow-hidden group-hover:scale-105 transition-transform duration-300">
                        <img 
                          src={project.images[1]} 
                          alt={`${project.title} - Image 2`}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEyMCIgeG1zbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEyMCIgZmlsbD0iIzM3NDE1MSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM5Q0EzQUYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5JbWFnZSAyPC90ZXh0Pjwvc3ZnPg==';
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="flex-1 flex flex-col">
                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-200 transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-300 text-sm leading-relaxed mb-4 flex-1">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-2 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-xs text-blue-300 hover:scale-105 transition-transform duration-300 cursor-default"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Click indicator */}
                    <div className="text-center py-2 border-t border-gray-700/50">
                      <span className="text-xs text-gray-500 group-hover:text-blue-400 transition-colors">
                        Cliquez pour voir plus de détails →
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={closeProjectModal}>
            <div className="bg-gradient-to-br from-black-100 to-black-50 rounded-3xl border border-gray-700 max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              {/* Modal Header */}
              <div className="sticky top-0 bg-black-100/95 backdrop-blur-sm border-b border-gray-700 p-6 rounded-t-3xl">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h2>
                    <div className="flex items-center gap-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(selectedProject.status)}`}>
                        {selectedProject.status}
                      </span>
                      <span className="text-gray-400">#{selectedProject.id.toString().padStart(2, '0')}</span>
                    </div>
                  </div>
                  <button 
                    onClick={closeProjectModal}
                    className="p-2 hover:bg-gray-800 rounded-full transition-colors text-gray-400 hover:text-white cursor-pointer"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                {/* Large Images */}
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {selectedProject.images.map((image, index) => (
                    <div key={index} className="aspect-video bg-gray-800 rounded-2xl overflow-hidden">
                      <img 
                        src={image} 
                        alt={`${selectedProject.title} - Image ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          e.target.src = `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIyNSIgeG1zbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIyNSIgZmlsbD0iIzM3NDE1MSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiM5Q0EzQUYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5JbWFnZSAke2luZGV4ICsgMX08L3RleHQ+PC9zdmc+`;
                        }}
                      />
                    </div>
                  ))}
                </div>

                {/* Project Details Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  {/* Left Column */}
                  <div>
                    {/* Description */}
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-white mb-4">Description complète</h3>
                      <p className="text-gray-300 leading-relaxed whitespace-pre-line">{selectedProject.fullDescription}</p>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-white mb-4">Technologies utilisées</h3>
                      <div className="flex flex-wrap gap-3">
                        {selectedProject.technologies.map((tech, index) => (
                          <span 
                            key={index}
                            className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-blue-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div>
                    {/* Project Info */}
                    <div className="bg-gray-900/50 rounded-2xl p-6 mb-6">
                      <h3 className="text-xl font-bold text-white mb-4">Informations du projet</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-400">Durée :</span>
                          <span className="text-white">{selectedProject.duration}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Équipe :</span>
                          <span className="text-white">{selectedProject.team}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Statut :</span>
                          <span className={selectedProject.status === 'Terminé' ? 'text-green-400' : 'text-yellow-400'}>
                            {selectedProject.status}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Challenges */}
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-white mb-4">Défis relevés</h3>
                      <ul className="space-y-2">
                        {selectedProject.challenges.map((challenge, index) => (
                          <li key={index} className="flex items-start gap-3 text-gray-300">
                            <span className="text-red-400 mt-2">•</span>
                            <span>{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h3 className="text-xl font-bold text-white mb-4">Réalisations</h3>
                      <ul className="space-y-2">
                        {selectedProject.achievements.map((achievement, index) => (
                          <li key={index} className="flex items-start gap-3 text-gray-300">
                            <span className="text-green-400 mt-2">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-6 border-t border-gray-700">
                  <a 
                    href={selectedProject.githubLink}
                    target='_blank'
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-3 px-6 py-4 bg-gray-800 hover:bg-gray-700 rounded-xl text-gray-300 hover:text-white transition-all duration-300"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <span>Voir le code</span>
                  </a>
                  {/* <a 
                    href={selectedProject.liveLink}
                    target='_blank'
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl text-white transition-all duration-300"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    <span>Voir la démo</span>
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Projetcs