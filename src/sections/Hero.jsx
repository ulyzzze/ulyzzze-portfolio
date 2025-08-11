import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import { ShimmerButton } from "../components/magicui/rainbow-button";

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import SceneInit from '../SceneInit';

const Hero = () => {
   useEffect(() => {
        // Vérifier que le canvas existe avant d'initialiser
        const canvas = document.getElementById('myThreeJsCanvas');
        if (!canvas) {
            console.error('Canvas non trouvé');
            return;
        }

        const test = new SceneInit('myThreeJsCanvas');
        test.initialize();
        test.animate();

        let loadedModel;
        const gltfLoader = new GLTFLoader();
        gltfLoader.load('/models/space_boi/scene.gltf', (gltfScene) => {
            console.log('Gltf model succesfully loaded:', gltfScene);
            loadedModel = gltfScene;
            loadedModel.scene.scale.set(0.5, 0.5, 0.5);
            loadedModel.scene.position.y = -1;
            loadedModel.scene.position.x = 0;
            loadedModel.scene.position.z = -0.3;
            test.scene.add(gltfScene.scene);
        }, undefined, (error) => {
            console.error('Error when loading the gltf model:', error);
        });

        const animate = () => {
            if (loadedModel) {
                loadedModel.scene.rotation.y -= 0.001;
            }
            requestAnimationFrame(animate);
        };
        animate();

        // Fonction pour redimensionner le canvas
        const handleResize = () => {
            // Délai pour permettre au DOM de se mettre à jour
            setTimeout(() => {
                test.onWindowResize();
            }, 100);
        };

        // Écouter les changements de taille de fenêtre
        window.addEventListener('resize', handleResize);

        // Nettoyage lors du démontage du composant
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

  return (
    <section id='hero' className='relative overflow-hidden content-overlay sm:pb-[5rem]'>
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 right-20 w-80 h-80 bg-gradient-to-r from-blue-500/15 to-cyan-500/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 left-10 w-72 h-72 bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      <div className='absolute top-0 left-0 z-50 sm:inline hidden'>
        <img src='/images/bg.png' alt="background" />
      </div>
        <header>
          <div className='flex flex-col lg:flex-row pt-[10rem] sm:pt-[15rem] lg:pt-[17rem] px-4 sm:px-8 lg:pl-[5rem] lg:pr-[5rem] justify-between items-center lg:items-start gap-8 lg:gap-0'>
            <div className='flex flex-col text-center lg:text-left'>
              <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl pb-7 font-bold bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent drop-shadow-lg'>Bienvenue.</h1>
              <p className='text-lg max-w-2xl text-gray-100 drop-shadow-md'>Mon nom est Ulysse COUCHOUD, un jeune développeur lyonnais passioné d'informatique. Étudiant à Epitech Lyon, je suis passioné par le développement
                web ainsi que l'intelligence artificiel.
              </p>
              <div className="flex justify-center lg:justify-start mt-10">
                <a href='#projects' className="inline-block">
                  <ShimmerButton className="shadow-4xl">
                    <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                      Accéder a mes projets
                    </span>
                  </ShimmerButton>
                </a>
              </div>
            </div>
            <div className='w-full max-w-2xl lg:w-[45rem] h-[20rem] sm:h-[25rem] lg:h-[35rem] mt-0 sm:mt-[-5rem] lg:mt-[-10rem]'>
              <canvas id="myThreeJsCanvas" className='w-full h-full' />
            </div>
          </div>
          <div className='pb-[15rem]'></div>
        </header>
      
      
    </section>
  )
}

export default Hero