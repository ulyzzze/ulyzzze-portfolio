import React, { useEffect } from 'react'
// import { gsap } from 'gsap'
import { ShimmerButton } from "../components/magicui/rainbow-button";

import Spline from '@splinetool/react-spline';

// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
// import SceneInit from '../SceneInit';

const Hero = () => {
  //  useEffect(() => {
  //       // Vérifier que le canvas existe avant d'initialiser
  //       const canvas = document.getElementById('myThreeJsCanvas');
  //       if (!canvas) {
  //           console.error('Canvas non trouvé');
  //           return;
  //       }

  //       const test = new SceneInit('myThreeJsCanvas');
  //       test.initialize();
  //       test.animate();

  //       let loadedModel;
  //       const gltfLoader = new GLTFLoader();
  //       gltfLoader.load('/models/space_boi/scene.gltf', (gltfScene) => {
  //           console.log('Gltf model succesfully loaded:', gltfScene);
  //           loadedModel = gltfScene;
  //           loadedModel.scene.scale.set(0.5, 0.5, 0.5);
  //           loadedModel.scene.position.y = -1; // Essayez de le centrer verticalement
  //           loadedModel.scene.position.x = 0; // Essayez de le centrer horizontalement
  //           loadedModel.scene.position.z = -0.3; // Assurez-vous qu'il est à une bonne profondeur
  //           test.scene.add(gltfScene.scene);
  //       }, undefined, (error) => {
  //           console.error('Error when loading the gltf model:', error);
  //       });
  //       const animate = () => {
  //           if (loadedModel) {
  //               // loadedModel.scene.rotation.x += 0.01;
  //               loadedModel.scene.rotation.y -= 0.001;
  //               // loadedModel.scene.rotation.z += 0.01;
  //           }
  //           requestAnimationFrame(animate);
  //       };
  //       animate();
  //   }, []);

  return (
    <section id='hero' className='relative overflow-hidden'>
      <div className='absolute top-0 left-0 z-10'>
        <img src='/images/bg.png' alt="background" />
      </div>
        <header>
          <div className='flex flex-col md:flex-row pt-[20rem] pl-[5rem] justify-between pr-[5rem]'>
            <div className='flex flex-col'>
              <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl pb-7'>Bienvenue.</h1>
              <p className='text-sm sm:text-base md:text-lg max-w-2xl'>Mon nom est Ulysse COUCHOUD, un jeune développeur lyonnais passioné d'informatique. Étudiant à Epitech Lyon, je suis passioné par le développement
                web ainsi que l'intelligence artificiel.
              </p>
              <ShimmerButton className="shadow-4xl w-fit mt-10">
                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                  Accéder a mes projets
                </span>
              </ShimmerButton>
            </div>
          </div>
        <Spline scene="https://prod.spline.design/csSoCj50TpwjL-zE/scene.splinecode" />
        </header>
    </section>
  )
}
export default Hero
