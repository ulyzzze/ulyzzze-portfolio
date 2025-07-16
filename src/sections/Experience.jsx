import React from 'react'

const Experience = () => {
  return (
    <div className='flex justify-center flex-col items-center pb-[10rem]'>
        <a className='font-thin text-2xl pb-7'>Ce que j'ai pu effectuer jusqu'a présent</a>
        <h1 className='text-6xl font-bold pb-[5rem]'>Expérience Professionnel.</h1>
        <div className='flex flex-row justify-between gap-10'>
            <div className='bg-black-50 w-[40rem] p-10 rounded-xl'>
                <div className='flex flex-row items-center gap-5 pb-[1rem]'>
                    <div className="avatar">
                        <div className="w-12 rounded-full">
                            <img src="./images/tuteur.png" />
                        </div>
                    </div>
                    <div className='flex flex-col mr-4'>
                        <h1 className='text-xl font-bold'>Oliver Berard</h1>
                        <p className='text-thin text-gray-400'>Dirigeant Atelier Production des Palomas SUD</p>
                    </div>
                </div>
                <p className='pb-[1rem]'>"Excellent stage en entreprise. A su s'intégrer rapidement dans l'équipe. Professionnel, Ulysse a su prendre en compte rapidement les directives . 
                    Application fiabilisée et développée sous PowerApps.<br/> Fonctionnelle et adaptée aux utilisateurs Ulysse a su prendre en compte les remarques des agents. Notices d'utilisation et de maintenance rédigées à l'issu du stage. Application déployée au sein de Technifret.
                    Stagiaire à recommander."
                </p>
                <img src='./images/fret_sncf.png' className='w-[11rem]'/>
            </div>
            <div className='flex flex-col justify-between items-center relative'>
                <div className='w-1 bg-linear-to-b from-purple-500 to-yellow-500 h-full absolute left-1/2 transform -translate-x-1/2'></div>
                <div className="avatar">
                    <div className="w-16 rounded-full">
                        <img src="./images/power_apps.png" className='bg-gray-600 p-2 border-4 border-gray-500 rounded-full'/>
                    </div>
                </div>
                <div className="avatar">
                    <div className="w-16 rounded-full">
                        <img src="./images/power_automate.png" className='bg-gray-600 p-2 border-4 border-gray-500 rounded-full'/>
                    </div>
                </div>
                <div className="avatar">
                    <div className="w-16 rounded-full">
                        <img src="./images/power_bi.png" className='bg-gray-600 p-2 border-4 border-gray-500 rounded-full'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experience