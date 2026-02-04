import React, { useState } from 'react'

function CompanyLogo({ src, alt }) {
  const [visible, setVisible] = useState(true)
  if (!src) return null
  if (!visible) return null
  return (
    <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 overflow-hidden p-2">
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-contain"
        onError={() => setVisible(false)}
      />
    </div>
  )
}

const experiences = [
  {
    company: 'VibeCallin',
    companyLogo: '/images/logos/vibecallin.jpeg',
    role: 'Co-Founder',
    period: 'Septembre 2025 – Aujourd\'hui',
    description: 'Plateforme SaaS d\'outbound commercial piloté par l\'IA (recherche de leads, workflows automatisés, appels et emails).',
    responsibilities: [
      'Co-création du produit et de l\'architecture technique (FastAPI, Next.js, PostgreSQL).',
      'Conception et développement des fonctionnalités IA (orchestration de workflows, génération de contenu).',
      'Intégration d\'APIs externes (Apollo, Stripe) et mise en place du système de crédits et facturation.',
    ],
    tag: 'Startup · IA',
    tagColor: 'from-cyan-500/20 to-violet-500/20 border-cyan-500/30 text-cyan-300',
  },
  {
    company: 'Technis',
    companyLogo: '/images/logos/technis.jpeg',
    role: 'Stagiaire Développeur Power Platform',
    period: 'Septembre 2025 – Février 2026',
    description: 'Stage en entreprise sur la stack Microsoft Power Platform (Power Apps, Power Automate, Power BI).',
    responsibilities: [
      'Développement d\'applications métier sur Power Apps et interfaces optimisées.',
      'Création et structuration de bases SharePoint et automatisation de processus (Power Automate).',
      'Conception de tableaux de bord et rapports Power BI à partir de données métier.',
    ],
    tag: 'Stage',
    tagColor: 'from-slate-500/20 to-slate-600/20 border-slate-500/30 text-slate-300',
  },
  {
    company: 'HexaFret (ex-Fret SNCF)',
    companyLogo: '/images/logos/hexafret.jpeg',
    role: 'Développeur Power Platform',
    period: 'Août 2024 – Décembre 2024',
    description: 'Stage en deuxième année : application métier déployée au sein de Technifret.',
    responsibilities: [
      'Conception et développement d\'une application métier sur Power Apps.',
      'Création de bases de données SharePoint liées à l\'application.',
      'Optimisation de code Power Fx et développement de flux Power Automate.',
      'Conception de tableaux de bord Power BI (données Excel et SharePoint).',
    ],
    tag: 'Stage',
    tagColor: 'from-slate-500/20 to-slate-600/20 border-slate-500/30 text-slate-300',
    testimonial: {
      name: 'Oliver Berard',
      role: 'Dirigeant Atelier Production des Palomas SUD',
      avatar: '/images/tuteur.png',
      quote: '"Excellent stage en entreprise. A su s\'intégrer rapidement dans l\'équipe. Professionnel, Ulysse a su prendre en compte rapidement les directives. Fonctionnelle et adaptée aux utilisateurs, il a su intégrer les remarques des agents. Notices d\'utilisation et de maintenance rédigées à l\'issue du stage. Application déployée au sein de Technifret. Stagiaire à recommander."',
    },
  },
]

const Experience = () => {
  return (
    <section id="experience" className="relative py-24 px-4 pb-32 z-10">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-violet-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-20 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Expérience professionnelle
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full mx-auto mb-6" />
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Parcours en développement, Power Platform et création de produit (IA)
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <article
              key={exp.company}
              className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 hover:border-cyan-500/20 transition-colors duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div className="flex items-start gap-4">
                  <CompanyLogo src={exp.companyLogo} alt={`Logo ${exp.company}`} />
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="text-xl md:text-2xl font-bold text-white">{exp.company}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border bg-gradient-to-r ${exp.tagColor}`}>
                        {exp.tag}
                      </span>
                    </div>
                    <p className="text-cyan-400 font-medium">{exp.role}</p>
                    <p className="text-slate-500 text-sm mt-1">{exp.period}</p>
                  </div>
                </div>
              </div>
              <p className="text-slate-400 mb-6">{exp.description}</p>
              <p className="text-slate-500 text-sm font-medium uppercase tracking-wider mb-3">Responsabilités</p>
              <ul className="space-y-2 text-slate-300 mb-0">
                {exp.responsibilities.map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-cyan-400 mt-0.5 flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Témoignage (HexaFret uniquement) */}
              {exp.testimonial && (
                <div className="mt-8 pt-8 border-t border-white/10">
                  <div className="flex flex-row items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border-2 border-white/20">
                      <img src={exp.testimonial.avatar} alt={exp.testimonial.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">{exp.testimonial.name}</p>
                      <p className="text-sm text-slate-400">{exp.testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-slate-400 leading-relaxed italic mb-4">{exp.testimonial.quote}</p>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
