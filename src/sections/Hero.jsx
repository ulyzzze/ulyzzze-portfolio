import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import { ShimmerButton } from "../components/magicui/rainbow-button";

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import SceneInit from '../SceneInit';

const Hero = () => {
   useEffect(() => {
        const test = new SceneInit('myThreeJsCanvas');
        test.initialize();
        test.animate();

        let loadedModel;
        const gltfLoader = new GLTFLoader();
        gltfLoader.load('/models/space_boi/scene.gltf', (gltfScene) => {
            console.log('Gltf model succesfully loaded:', gltfScene);
            loadedModel = gltfScene;
            test.scene.add(gltfScene.scene);
        }, undefined, (error) => {
            console.error('Error when loading the gltf model:', error);
        });
        const animate = () => {
            if (loadedModel) {
                // loadedModel.scene.rotation.x += 0.01;
                loadedModel.scene.rotation.y -= 0.001;
                // loadedModel.scene.rotation.z += 0.01;
            }
            requestAnimationFrame(animate);
        };
        animate();
    }, []);
  return (
    <section id='hero' className='relative overflow-hidden'>
      <div className='absolute top-0 left-0 z-10'>
        <img src='/images/bg.png' alt="background" />
      </div>

      <div className='h-[100vh] flex'>
        <header className='flex flex-col justify-center md:w-full w-screen md:px-20 px-3'>
          <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl pb-7'>Bienvenue.</h1>
          <p className='text-sm sm:text-base md:text-lg max-w-2xl'>Mon nom est Ulysse COUCHOUD, un jeune développeur lyonnais. Étudiant en informatique à Epitech Lyon, je suis passioné par le développement
            web et l'intelligence artificile.
          </p>
          <ShimmerButton className="shadow-4xl w-fit mt-10">
            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
              Accéder a mes projets
            </span>
          </ShimmerButton>
        </header>
      </div>
      <div>
          <canvas id="myThreeJsCanvas" />
        </div>
      
    </section>
  )
}

export default Hero