import React from 'react'

const Experience = () => {
  return (
    
    <div className='flex justify-center flex-col items-center pb-[10rem] relative z-10'>
        {/* Subtle background accents */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl"></div>
        </div>
        
        <h1 className='lg:text-6xl md:text-5xl text-3xl font-bold text-white mb-4 text-center' id='experience'>
            Expérience Professionnel.
        </h1>
        <div className="w-24 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6"></div>
        <p className='text-center text-gray-100 text-lg max-w-2xl mx-auto drop-shadow-md'>
            J'ai pu réaliser un stage lors de ma deuxième année chez HexaFret, anciennement connu sous FretSNCF
        </p>
        <div className='flex lg:flex-row flex-col justify-between gap-10 px-10 items-center lg:items-stretch pt-[5rem]'>
            <div className='bg-black-50 md:w-[40rem] p-10 rounded-xl'>
                <div className='flex flex-row items-center gap-5 pb-[1rem]'>
                    <div className="avatar">
                        <div className="w-12 rounded-full">
                            <img src="/images/tuteur.png" />
                        </div>
                    </div>
                    <div className='flex flex-col mr-4'>
                        <h1 className='text-xl font-bold'>Oliver Berard</h1>
                        <p className='text-thin text-gray-400'>Dirigeant Atelier Production des Palomas SUD</p>
                    </div>
                </div>
                <p className='pb-[1rem]'>"Excellent stage en entreprise. A su s'intégrer rapidement dans l'équipe. Professionnel, Ulysse a su prendre en compte rapidement les directives. 
                    <br/>Fonctionnelle et adaptée aux utilisateurs Ulysse a su prendre en compte les remarques des agents. Notices d'utilisation et de maintenance rédigées à l'issu du stage. Application déployée au sein de Technifret.
                    Stagiaire à recommander."
                </p>
                <img src='/images/fret_sncf.png' className='w-[11rem]'/>
            </div>
            <div className='lg:flex flex-col justify-between items-center relative hidden'>
                <div className='w-[0.2rem] bg-linear-to-b from-purple-500 to-yellow-500 h-full absolute left-1/2 transform -translate-x-1/2'></div>
                <div className="avatar">
                    <div className="w-16 rounded-full">
                        <img src="/images/power_apps.png" className='bg-gray-600 p-2 border-4 border-gray-500 rounded-full'/>
                    </div>
                </div>
                <div className="avatar">
                    <div className="w-16 rounded-full">
                        <img src="/images/power_automate.png" className='bg-gray-600 p-2 border-4 border-gray-500 rounded-full'/>
                    </div>
                </div>
                <div className="avatar">
                    <div className="w-16 rounded-full">
                        <img src="/images/power_bi.png" className='bg-gray-600 p-2 border-4 border-gray-500 rounded-full'/>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-4'>
                <h1 className='text-center font-bold text-2xl pb-[1rem]'>Développeur Power Platform</h1>
                <p className='text-lg'>📅 Août 2024 - Décembre 2024</p>
                <p className='font-thin italic'>Responsabilités</p>
                <ul className='list-disc [&>li]:mb-3 text-lg'>
                    <li>Conception et développement d’une application métier sur Power Apps avec interface optimisée.</li>
                    <li>Création et structuration de bases de données SharePoint liées à l’application.</li>
                    <li>Optimisation de code Power Fx déjà existant pour améliorer les performances et la maintenabilité.</li>
                    <li>Développement de flux Power Automate pour automatiser certains processus.</li>
                    <li>Conception de tableaux de bord Power BI à partir de données Excel et SharePoint.</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Experience