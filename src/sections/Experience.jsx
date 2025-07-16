import React from 'react'

const Experience = () => {
  return (
    <div className='flex justify-center flex-col items-center pb-[10rem]'>
        <a className='font-thin text-2xl pb-7'>Ce que j'ai pu effectuer jusqu'a présent</a>
        <h1 className='text-6xl font-bold pb-[5rem]'>Expérience Professionnel.</h1>
        <div className='flex flex-row justify-between'>
            <div className='bg-black-50 w-[40rem] p-10 rounded-xl'>
                <div className='flex flex-row items-center gap-5 pb-[1rem]'>
                    <div className="w-12 rounded-full">
                        <img src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" />
                    </div>
                    <div className='flex flex-col mr-4'>
                        <h1 className='text-xl font-bold'>Oliver Berard</h1>
                        <p className='text-thin text-gray-400'>Dirigeant Atelier Production des Palomas SUD / TECHNIS</p>
                    </div>
                </div>
                <p className='pb-[1rem]'>"Excellent stage en entreprise. A su s'intégrer rapidement dans l'équipe. Professionnel, Ulysse a su prendre en compte rapidement les directives . 
                    Application fiabilisée et développée sous PowerApps. Fonctionnelle et adaptée aux utilisateurs Ulysse a su prendre en compte les remarques des agents. Notices d'utilisation et de maintenance rédigées à l'issu du stage. Application déployée au sein de Technifret.
                    Stagiaire à recommander."
                </p>
                <img src='./images/fret_sncf.png' className='w-[11rem]'/>
            </div>
        </div>
    </div>
  )
}

export default Experience